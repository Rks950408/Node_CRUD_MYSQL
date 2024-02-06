// index.js
// it is used to import the Express.js framework. Express.js is a popular web application framework for Node.js, designed to Rest APIs.
//  The require() function takes a module name or path argument, which specifies the module to import.
const express = require('express');
//import body-parser module
//body-parser module used to read the client data
const bodyParser = require('body-parser');
// it is used to import or include the router module from the routers directory. 
const routes=require('./routers/router')

const app = express();
const port = 3000;
//where "app" object used to develop the Rest API'S
app.use(bodyParser.json());
//bodyparser value convert in the json format
// urlencoded is a middleware used to parse incoming request bodies in URL-encoded format
app.use(bodyParser.urlencoded({ extended: true }));

app.use(routes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port  ${port}`);
});