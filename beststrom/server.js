const express = require('express');
const path = require('path');
const port = process.env.PORT || 8080;
const app = express();
// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));

app.post("/api/send_email", function(req, res) {
  res.set("Content-Type", "application/json");
  res.send('{"message" : "Thank you for your contact"}')
})

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.listen(port);