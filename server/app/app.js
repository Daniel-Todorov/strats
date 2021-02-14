const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const constants = require('./constants');
// const utilities = require('../modules/utilities');
// const authorization = require('../modules/authorization');
// const database = require('../modules/database');
// const routes = require('../routing');
const app = express();

// database.init();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, constants.app.staticContentDir)));

// app.use(utilities.setCors);
//
// app.use(authorization.addCurrentUser);
// app.use(`${constants.app.apiRoute}/user`, routes.user);
// app.use(`${constants.app.apiRoute}/author`, authorization.isAuthorized, routes.author);
// app.use(`${constants.app.apiRoute}/set`, authorization.isAuthorized, routes.set);
// app.use(`${constants.app.apiRoute}/book`, routes.book);
// app.use(`${constants.app.apiRoute}/run`, authorization.isAuthorized, routes.run);

app.get(['*'], function (req, res) {
    res.sendFile(path.join(__dirname, constants.app.staticContentDir + '/index.html'));
});


// error handler
app.use(function(err, req, res) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.json('Method not found.');
});

module.exports = app;
