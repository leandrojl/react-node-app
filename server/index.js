const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

//app.use(express.static(path.resolve(__dirname, '../client/build')));

/*If our React app makes a GET request to that route, 
we respond (using res, which stands for response) with our JSON data*/
app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
  });

  // All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
  });

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});