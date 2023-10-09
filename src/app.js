const path = require('path');
const express = require('express');

const app = express();

app.set('view engine', 'hbs')
app.set('views',  path.join(__dirname, '/views'));
const publicDirectoryPath = path.join(__dirname, '../public');
app.use(express.static(publicDirectoryPath));

app.get('', (req,res)=>{
  res.render('index');
})

app.get('/about', (req, res)=>{   
  res.send('About')

})

app.get('/weather', async(req,res)=>{
  res.send('Done')
})

app.listen(3000, ()=>{
    console.log('Server is up on port 3000');
});







