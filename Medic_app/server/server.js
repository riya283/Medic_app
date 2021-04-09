const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

var corsOptions = {
    origin: "http://localhost:8080"
};

app.use(cors());

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: true}));

require("./app/route/users_route")(app);
require("./app/route/admin_route")(app);
require("./app/route/medic_op_route")(app);



// app.get("/", (req, res) => {
//     res.json({message: "Welcome to Riya's Hspital Management Project"})
// });



const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}.`);
});

const db = require("./app/model");
db.sequelize.sync();