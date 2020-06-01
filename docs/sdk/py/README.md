# Python

## Introduction

The `reactive-platform` package is a Python API for connecting to the Reactive Platform. It handles
connectivity, request serialisation and deserialisation in Python.

## Installation

The package supports Python 3.7 and above.

```bash
$ pip install reactive-platform
```

## Usage

The `FeedClient` class is used to create a WebSocket connection to the feed gateway. You will need
to specify an API key for the connection. To consume data via the `FeedClient`, you should create a
client handler co-routine to send requests, and a `data_handler` to process data.

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

There are more examples along with an introduction under `reactive-platform` package.
