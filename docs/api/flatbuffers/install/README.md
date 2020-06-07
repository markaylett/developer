# FlatBuffers Install

The Reactive Platform API uses [Google FlatBuffers](https://google.github.io/flatbuffers/) to
binary-encode application messages transmitted over WebSockets. FlatBuffers provides an efficient
serialisation/deserialisaton mechanism in terms of both processing and space requirements.

The FlatBuffers schema files are located in the
[flatbuffers](https://github.com/reactivemarkets/platform-api/tree/master/flatbuffers) directory.

## Code Generation

Generated code for the following languages is available on the
[latest](https://github.com/reactivemarkets/platform-api/tree/latest) branch and
[releases](https://github.com/reactivemarkets/platform-api/releases):

- C++
- C#
- Go
- Java
- Python
- TypeScript

Code can be generated for additional languages supported by FlatBuffers using the `flatc` compiler:

```bash
$ flatc --rust *.fbs
```

## Packages

Build artefacts are available for several languages:

- Go: `go get github.com/reactivemarkets/platform-api@latest`
- Java: [Maven Package](https://search.maven.org/artifact/com.reactivemarkets/papi)
- Python: [PyPi Package](https://pypi.org/project/reactive-papi)
- JavaScript: [NPM Package](https://www.npmjs.com/package/@reactivemarkets/platform-api)
