require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const axios = require('axios');
const checkLists_controller = require("./controllers/checkLists_controller");

const port = 3001; //nodemon server port
const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get("/checkLists", checkLists_controller.getChecklists)
app.delete("/checkLists/:id", checkLists_controller.deleteChecklists)
app.put("/checkLists/:id", checkLists_controller.editChecklists)
app.post("/checkLists", checkLists_controller.addChecklists)

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});