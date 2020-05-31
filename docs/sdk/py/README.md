# Python

## Introduction

The reactive-platform package is python API to connect Platform. It handles connection,
request serialization and deserialization in python.

## Installation

The package supports python3.7+, but not for lower versions.

```bash
$ pip install reactive-platform
```

## Usage

The `FeedClient` class is used to create a WebSocket connection to the feed api. You will need to
specify an api key for the connection. To consume data via `FeedClient`, you should create an
client handler coroutine to send requests, and a data_handler to process data.

```python
import asyncio

from reactive.platform.feed.client import FeedClient
from reactive.platform.websocket.handler import print_data_handler


async def feed_client_handler(c: FeedClient):
    await c.subscribe(["BTCUSD-CNB"], depth=0, grouping=0)


api_key = 'xxx'
addr = "wss://api.platform.reactivemarkets.com/feed"

feed_client = FeedClient(addr=addr, key=api_key)

client = FeedClient(addr=ADDR, key=TOKEN, close_timeout=1.0)
run = asyncio.ensure_future(client.run(client_handler=feed_client_handler,
                                       data_handler=print_data_handler))
asyncio.get_event_loop().run_until_complete(run)
```

There are more examples and introductions under reactive-platform package.
