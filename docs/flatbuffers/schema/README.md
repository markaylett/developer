# FlatBuffers Schema

## Basic Types

### String Identifiers

String identifiers cannot be more than 48 characters in length.
The server will silently discard any characters beyond this limit.

### Symbols

Symbols are short, string identifiers of no more than 16 characters.
They are typically used to identify reference-data records such as assets, instruments, venues and
markets.
The `BTCUSD-BFN` market symbol, for example, identifies the `BTC/USD` instrument on the `BFN`
(Bitfinex) venue.

### Timestamps

Timestamps are encoded as 64-bit integers, which represent the number of nanoseconds since Unix
epoch.

## Enumerations

### FeedType

The `FeedType` enum specifies the feed type, which may include different aggregation styles,
liquidity views, public trade feeds, trading signals, and other analytics.

| Value   | Comments                  |
|---------|---------------------------|
| Default | Default market-data view. |
| Trade   | Public trade feed.        |

### Side

The `Side` enum specifies the buy or sell side of the market.

| Value | Comments     |
|-------|--------------|
| None  | Unspecified. |
| Sell  | Sell side.   |
| Buy   | Buy side.    |

### SubReqType

The `SubReqType` enum specifies the subscription request type.

| Value       | Comments                                   |
|-------------|--------------------------------------------|
| Subscribe   | Subscribe to one or more market feeds.     |
| Unsubscribe | Unsubscribe from one or more market feeds. |

## Structs

### MDLevel2

MDLevel2 struct represents an entry in the level 2 order-book. A level 2 order-book comprises one or
more levels, where each level is aggregated either by price or quantity, depending on feed-type.

| Field Name | Type    | Comments  |
|------------|---------|-----------|
| qty        | float64 | Quantity. |
| price      | float64 | Price.    |

## Messages

### Header

The `Message` union type adds with the following header fields, which are present on all messages
sent from the server.

| Field Name | Type  | Comments                                   |
|------------|-------|--------------------------------------------|
| tts        | int64 | Transmission timestamp set by the gateway. |

### FeedRequest

The `FeedRequest` message represents a client request to either subscribe to or unsubscribe from one
or more market feeds.

| Field Name     | Type       | Comments                                              |
|----------------|------------|-------------------------------------------------------|
| req\_id        | string     | Request identifier assigned by the client.            |
| sub\_req\_type | SubReqType | Subscription request type.                            |
| feed\_type     | FeedType   | Feed type.                                            |
| grouping       | uint16     | The aggregation grouping granularity.                 |
| depth          | int16      | The desired number of levels in the market-data book. |
| frequency      | int16      | The desired update frequency.                         |
| markets        | [string]   | The set of markets to which the request applies.      |

The `grouping` field is commonly used to describe the tick grouping at each level in the order book,
but it may also be used for other purposes. This feature is only available on supported feeds.

The `depth` field is the maximum number of levels in the market-data book. Currently supported
values are: 1, 5, 10 and 20. This feature is only available on supported feeds.

The `frequency` is the feed update frequency or conflation period. The frequency need not be
specified when unsubscribing. *This feature is not currently implemented.*

### FeedRequestAccept

The `FeedRequestAccept` message is sent by the server to acknowledge a successful `FeedRequest`.

| Field Name | Type   | Comments                                   |
|------------|--------|--------------------------------------------|
| req\_id    | string | Request identifier assigned by the client. |
| feed\_id   | int32  | Feed identifier.                           |

### FeedRequestReject

The `FeedRequestReject` message is sent by the server when a `FeedRequest` cannot be satisfied for
business, operational, or technical reasons.

| Field Name     | Type   | Comments                                    |
|----------------|--------|---------------------------------------------|
| req\_id        | string | Request identifier assigned by the client.  |
| error\_code    | int32  | Error code indicating the reject reason.    |
| error\_message | string | Error message describing the reject reason. |

### MDSnapshotL2

The `MDSnapshotL2` messages is sent by the server when there is a market-data update.

| Field Name  | Type       | Comments                                                           |
|-------------|------------|--------------------------------------------------------------------|
| source\_ts  | int64      | Source system timestamp.                                           |
| source      | string     | Source system identifier.                                          |
| market      | string     | Market symbol.                                                     |
| feed\_id    | int32      | Feed identifier.                                                   |
| id          | int64      | A marker-specific identifier that uniquely identifies this update. |
| depth       | int16      | The indicates the maximum number of levels in this book.           |
| flags       | uint16     | Bitset describing the attributes of the market or update.          |
| bid\_side   | [MDLevel2] | Level-2 bid data.                                                  |
| offer\_side | [MDLevel2] | Level-2 offer data.                                                |

The `source_ts` timestamp may be zero when the book is cleared due to a disconnect from the source
system.

The `id` field is not guaranteed to be monotonically increasing; it may be periodically reset by the
source system. Clients should treat this as an opaque identifier and should not attempt to infer
meaning from its content. Zero is reserved as a special case for clearing or resetting the book.
This feature is only available on supported feed-types.

### PublicTrade

The `PublicTrade` message is sent by the server a public trade is received from an source system.

| Field Name  | Type    | Comments                                                      |
|-------------|---------|---------------------------------------------------------------|
| source\_ts  | int64   | Source system timestamp.                                      |
| source      | string  | Source system identifier.                                     |
| market      | string  | Market symbol.                                                |
| feed\_id    | int32   | Feed identifier.                                              |
| trade\_id   | string  | Optional identifier or sequence number assigned by the venue. |
| flags       | uint16  | Bitset describing the attributes of the market or update.     |
| side        | Side    | Trade direction.                                              |
| qty         | float64 | Trade quantity.                                               |
| price       | float64 | Trade price.                                                  |
| exec\_venue | string  | Underyling execution venue.                                   |

This `side` field is always from the taker's perspective:
- Buy: aggressor/taker bought;
- Sell: aggressor/taker sold.

The `qty` field may be zero if the underlying venue does not publish this information.

### SessionStatus

The `SessionStatus` message is sent by the server to indicate a change in the session status for an
upstream system. This is a system wide status that applies to all feeds and markets provided by the
source system.

| Field Name | Type   | Comments                  |
|------------|--------|---------------------------|
| source\_ts | int64  | Source system timestamp.  |
| source     | string | Source system identifier. |
| code       | int    | Status code.              |
| message    | string | Detailed status message.  |
