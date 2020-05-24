# WebSocket

The Reactive Platform provides normalised streaming data across a growing number of cryptocurrency
markets. The API supports order books and public trade feeds with additional signals and bespoke
analytics in the pipeline. All data is distributed in an optimised binary format to improve
efficiency, reduce data volumes and maximise performance. In doing so, we can offer users frequent
order book updates every 100 milliseconds. Enterprise uses can enable more frequent updated on
request.

API access to the Platform feed gateway is available via the following URL:

[wss://api.platform.reactivemarkets.com/feed](wss://api.platform.reactivemarkets.com/feed)

## Authentication

The Reactive Platform uses the
[OAUTH 2.0 bearer tokens](https://tools.ietf.org/html/rfc6750#section-2.1)
to authorise against the API. This requires clients of the API to populate the Authorization field
in the request header to be populated in the form `Bearer <your api key>`. For example, an account
with public key `kWyGAsSRZrP72QX1` would add:

```
Authorization: Bearer kWyGAsSRZrP72QX1
```

Each request to the Platform API requires this token to be present. Example of how to do this can be
found in the language specific examples and SDKs.
