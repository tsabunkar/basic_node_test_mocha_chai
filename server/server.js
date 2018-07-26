const express = require('express');
var app = express();

app.get('/', (req, resp) => {
    // resp.send('Hello World')

    // resp.status(404).send('Hello World')//fail

    /* resp.status(200).send({
         error : 'Page not found'
     }) //fail */

    resp.status(200).send('Hello World')
});

app.get('/error', (req, resp) => {
    resp.status(404).send({
        error: 'Page not found!',
        name: 'Tejas Sabunkar'
    })

});

app.get('/user', (req, resp) => {
    let arrayOfUser = [
        { name: 'Tejas', age: 24 },
        { name: 'Lokesh', age: 22 },
        { name: 'Venkat', age: 25 },
    ]
    resp.send(arrayOfUser)
})

app.listen(3000);

module.exports = { app };