---
sidebar: auto
---
# JavaScript

## Introduction

The JavaScript SDK makes it simple to connect the Platform using [Node.js](https://nodejs.org/) or a browser. It handles the connection logic, deserialization and convertions into JavaScript.

## Installation

```bash
npm i @reactivemarkets/platform-sdk
```

## Usage

The `FeedClient` class is used to create a WebSocket connection to the feed api. You will need to specify an api key for the connection.

```js
import { FeedClient, toJS } from "@reactivemarkets/platform-sdk";

const feedClient = new FeedClient({
    apiKey: MY_API_KEY,
});

feedClient
    .on("open", () => {
        feedClient.subscribeMarketData({
            markets: ["BTCUSD-CNB"],
        });
    })
    .on("md-snapshot-l2", (snapshot) => {
        console.log(toJS(snapshot));
    });
```
