const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
  try {
    const r = await axios.put(
      // PUT : Get or Create User
      "https://api.chatengine.io/users/", // Read the Docs: https://rest.chatengine.io/
      { username: username, secret: username, first_name: username },
      { headers: { "private-key": "4da9b0da-dc88-4f8a-914f-43cd0f234cac" } }
    );
    return res.status(r.status).json(r.data);
  } catch (e) {   
    return res.status(500).json({ error: e.message });
  }
});

app.listen(3001);
