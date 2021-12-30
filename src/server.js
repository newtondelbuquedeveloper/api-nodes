const express = require("express");
require("dotenv").config({
    path: process.env.NODE_ENV === "production" ? ".env.production" : ".env"
});


import * as controllers from './api/controllers';

const app = express();
/*
* public routes
*/
app.use('/', controllers.playlistController);

app.use('*', (request, response) => response.redirect('/'));

const port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log("Server started on port: " + port);
});

