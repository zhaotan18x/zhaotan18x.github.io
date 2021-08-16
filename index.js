const express = require('express');
const app = express();
const PORT = 8080;

app.use(express.static('public'));
app.use('/css', express.static((__dirname + 'public/css'))); //stylecheet css
app.use('/js', express.static((__dirname + 'public/js'))); //javascript
app.use('/img', express.static((__dirname + 'public/img'))); //images

// index page / default home page
app.get('/', (req, res) => {
  res.send("asdfsadf")
  //console.log("Homepage")
});


app.listen(PORT, () => console.info(`Serveri käynnistyy... ${PORT}`));
