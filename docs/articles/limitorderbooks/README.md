---
sidebar: auto
---
# Limit Order Books

## Introduction

Most electronic Exchanges use Limit Order Books (LOBs) to match orders placed by buyers and sellers.
LOBs have entered the mainstream in recent years with the popularisation of Cryptocurrency
Exchanges. This article describes how a LOB works. Understanding how a LOB works is essential for
understanding the market-data published by these Exchanges.

An Exchange is a place where traders come together to exchange goods or services. Sellers offer
their goods or services to buyers that bid for them. The Exchange accepts bids and offers in the
form of orders and attempts to match them:

- bids are submitted as buy orders;
- offers are submitted as sell orders.

## Level 2 Order Books

The "liquidity" in the order book can be viewed in multiple ways. In this article, we show the
liquidity in the LOB as a stack of "price levels", where each price level comprises one or more
orders with the same price and side. This representation is known as a level 2 order book aggregated
by price.

Consider the following LOB with two price levels:

| Level | Bid Qty | Bid Price | Spread | Offer Price | Offer Qty |
|-------|---------|-----------|--------|-------------|-----------|
|     1 |       1 |      9649 |      2 |        9651 |         1 |
|     2 |       5 |      9648 |      5 |        9653 |         3 |

For each given price level:

- the quantity is the sum of all order quantities at that level;
- the "spread" is the difference between the bid and offer price.

The first level, or Top Of Book (TOB), shows the best bid and offer available in the order book:

- the bids are arranged in descending order with the best bid at the top;
- the offers are arranged in ascending order with the best offer at the top.

## Limit Orders

The LOB gets its name from a standard order type known as a "limit" order; a LOB is essentially a
book of limit orders.

Orders sent to the LOB may also specify a "limit" price. The limit price specifies the worst price
at which the trader is willing to trade.

Limit prices may be specified on order types besides limit orders, so a limit price does not
necessarily imply a limit order. To avoid any confusion, the limit price is subsequently referred to
simply as the price.

## Resting Orders

A trade happens when a buy or sell order is matched with one or more pre-existing orders in the LOB.
How an order behaves when it is not immediately filled varies between order types.

Limit orders that are not immediately filled are placed in the LOB according to their side (buy or
sell) and price. An unmatched limit order that is live or "working" in the LOB is known as a
"resting" order. Order types that cannot rest in the order book are either immediately filled or
cancelled.

The short-hand notation below will be used in proceeding examples to describe a limit order:

BUY 2@9650
: a buy order where 2 is the order quantity and 9650 is the price.

If this limit order is applied to our earlier example, then it will rest at the TOB on the bid side,
because its price is better than the current TOB:

| Level | Bid Qty | Bid Price | Spread | Offer Price | Offer Qty |
|-------|---------|-----------|--------|-------------|-----------|
|     1 |   **2** |  **9650** |      1 |        9651 |         1 |
|     2 |       1 |      9649 |      4 |        9653 |         3 |
|     3 |       5 |      9648 |        |             |           |

A limit order to "SELL 3@9653" will "join" the second level on the offer side:

| Level | Bid Qty | Bid Price | Spread | Offer Price | Offer Qty |
|-------|---------|-----------|--------|-------------|-----------|
|     1 |       2 |      9650 |      1 |        9651 | 1         |
|     2 |       1 |      9649 |      3 |        9653 | **6**     |
|     3 |       5 |      9648 |        |             |           |

Note that the number of orders at each price level cannot be derived from the quantity. The order
count is often shown as a separate "count" field.

## Order Matching

In a classic LOB, Matching happens by price/time priority. This means that orders are matched first
by price, and then by order age (time). If multiple orders exist at the same price, for example,
then the oldest order will be matched first.

Consider the effect of a limit order to "BUY 2@9652" that crosses the spread:

| Level | Bid Qty | Bid Price | Spread | Offer Price | Offer Qty |
|-------|---------|-----------|--------|-------------|-----------|
|     1 |   **1** |  **9651** |      2 |        9653 |         6 |
|     2 |       2 |      9650 |        |             |           |
|     3 |       1 |      9649 |        |             |           |
|     4 |       5 |      9648 |        |             |           |

In this example, the order to "BUY 2@9652" crossed with the first level on the offer side ("OFFER
1@9651"). The price on the order was higher than the level it crossed, so the resulting trade is
executed at a better price of 9651. This is known as a price improvement.

The limit order was not completely filled, because there was insufficient quantity on the offer
side. And because this is a limit order, any quantity remaining after the matching phase will rest
on the bid side, hence the new price level on the bid side at TOB.

Orders that cross the spread and "take" liquidity from the order book are known as an "aggressive"
orders. By contrast, orders that do not cross the spread are known as "passive" orders.

Aggressive order may also sweep through multiple price levels, as demonstrated in the following
example where an aggressive order to "SELL 4@9649" sweeps through the top three levels of the bid
side:

| Level | Bid Qty | Bid Price | Spread | Offer Price | Offer Qty |
|-------|---------|-----------|--------|-------------|-----------|
|     4 |       5 |      9648 |      5 |        9653 |         6 |

This aggressive order will result in the following trades:

1. 1@9651
2. 2@9650
3. 1@9649

## Makers and Takers

Traders that submit aggressive orders are known as "takers". Traders that submit passive orders are
known as "makers". Each trade transaction comprises two matched orders. These orders can be
classified both in terms of a buyer and a seller or a maker and a taker. To avoid confusion, trades
are often referred to from the taker's perspective as "paid" and "given":

Paid: taker buys

Given: taker sells

This terminology is particular relevant for public trade feeds, where an Exchange my publicise
anonymised trade information from the taker's perspective.

## Summary

This concludes our brief introduction to LOBs and the order matching process. In future articles, we
will take a closer at how market-data is derived from the LOB and the options for distributing this
data to users over an Application Programming Interface (API).

Check out the [Reactive Markets website](https://www.reactivemarkets.com) if you would like to know
more about us and how our [Platform](https://platform.reactivemarkets.com/) is powering a new
generation of professional traders. See you next time!
