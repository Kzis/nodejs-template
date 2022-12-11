const express = require('express');
const bodyParser = require('body-parser');
const audit = require('express-requests-logger')
const port = process.env.EXTERNAL_PORT || 3000

//INITIALIZE APP WITH EXPRESS
const app = express();

//BODYPARSER
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Log Middleware
app.use(audit());

//Set proper Headers on Backend
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

//ROUTES
app.use('/config', require('./routes/config'));

app.get('/', (req, res) => {
  res.send('Hello World')
});

(async () => {
try {
    
    //TODO : Connec Database check

    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`)
      })

} catch (error) {
    console.log(error);
}
})();