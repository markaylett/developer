---
sidebar: auto
---
# Java

## Introduction

The Java SDK provides examples of how to connect the Platform API. It demonstrates the authorisation and connection logic, subscription to the market data and public trade feeds and how to deserialize the binary data format into java objects.

## Installation

### Linux/Mac

```bash
git clone https://github.com/reactivemarkets/platform-java
cd platform-java
./gradlew build
```

### Windows

```bash
git clone https://github.com/reactivemarkets/platform-java
cd platform-java
./gradlew.bat build
```

## Usage

A sample implementation using the Tyrus websocket client has been included in the SDK. You will need to specify an api key for the connection.

```java
String uri = "wss://api.platform.reactivemarkets.com/feed";
String apiKey = "<your key>";

TyrusWebSocketClient client = newWebSocketClient(uri, apiKey, handler);
// blocking connect to the websocket
client.connect();
// create a unique request id for this request - this will be returned on the subscription Accept/Reject
final String requestId = UUID.randomUUID().toString();
// create a new request with default settings for conflation, depth and grouping
final FeedRequestParameters request = new FeedRequestParameters(requestId, "BTCUSD-CNB");

final ByteBuffer buffer = FeedRequestMessageFactory.newSubscription(request);

client.send(buffer);
```

A full subscription example for the level 2 market data feed can be seen in  `com.reactivemarkets.platform.example.feed.FeedGatewayL2Subscription` and a public trade example in `com.reactivemarkets.platform.example.feed.FeedGatewayTradeSubscription`.
