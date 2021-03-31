const express = require('express');

// Initialize app
const app = express();
const port = 8000;


//  Create endpoints and routes
app.get('/', (req, res) =>{
    res.send('Hello from express application')
} )

//  Listen and Serve on localhost:8000
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})