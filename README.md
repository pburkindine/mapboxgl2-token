This repro illustrates that the CMS Mapbox instance cannot be used with the MapboxGL 2.x client because an access token is now required by the client.

To demonstrate this, verify that the map for the IMPL environment shows when the app is run, then set the mapbox-gl version to `2.2.0`, run `npm i` and re-run the app; the IMPL map will not load, and an error will be thrown to the console about the missing/null access key.

```
Uncaught Error: An API access token is required to use Mapbox GL.
```
