# MS-Playlist Microservice

#### Project Status
```
Done
```

#### Description
This is a api microservice application, it conect to OpenWeatherMaps API and Spotify API
and return a list of songs filter by gener according with the temperature of the location


#### Languages
- javascript, nodejs
  
#### Frameworks
- axios: "^0.19.0"
- dotenv: "^8.1.0"
- express: "^4.17.1"
- lodash: "^4.17.15"

#### System requirements
- node.js: 10.13.0
- npm: 6.4.1

## Up and running
```
$ cd ./ms-playlist
$ npm install
$ npm start
```
	
 ### Tips and Tricks	

When the application starts you have to open your browser and on url make a request with
the cityname or lat and lon coordinates:

1 JSON Viewer Awesome Extension Google Chrome
```sh	
  https://chrome.google.com/webstore/detail/json-viewer-awesome/iemadiahhbebdklepanmkjenfdebfpfe
```
2 routes
```sh	
  http://localhost:3000/loginSpotify
```	
3 get songs with cityname
```sh	
  http://localhost:3000/playlist?city=Campinas
```	
4 get songs with lat and lon coordinates
```sh	
  http://localhost:3000/playlist?lat=40.714224&lon=-73.961452
```