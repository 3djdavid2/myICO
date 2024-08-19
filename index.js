const express = require('express');
const app = express()
const port = 3150

const icongen = require('icon-gen');

icongen('./images/wapexcell-logo.png', './icons', { report: true })
    .then((results) => {
        console.log(results)
    })
    .catch((err) => {
        console.log(err)
    })

app.get('/', (req, res) => {
    res.send('Hello from back')
})

app.listen(port, () => {
    console.log(`Serve listening on port ${port}`)
})