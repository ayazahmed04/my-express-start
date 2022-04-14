// Installing Express 
/* 
1. mkdir  my-express-server
2. cd  my-express-server
3. entry Point index.js
4. npm install express --save  __ Now we don't need to install express


require express 
&& app = express()


app.listen(3000 , () => { localhost: 3000})
*/
// const { response, request } = require('express');
const yazi_express = require('express')
const app = yazi_express()
// getting the req and res practice
// app.get('/', (response, request) => {
//     request.send('Hello This is request')
// })

//  tar cfv a.tar /etc
app.get('/', (req, res) => {
    console.log(req)
    res.send('<h1>Response is sent</h1>')
})
app.get('/contact', (req, res) => {
    res.send('You are on contact pages')
})
app.get('/about', (req, res) => {
    res.send('About me My naming is Ayaz Ahmad')
})
app.get('/help', (req, res) => {
    res.send('<h1> FOR HELP email me at : forgithub44@gmail.com')
})
app.listen('3000', () => {
    console.log('Listen on the port 3000')
})