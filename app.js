const express = require("express");
const cors = require("cors");
const queries = require("./queries");
const bodyParser = require("body-parser");

let monsters = [{
    id: 1,
    type: "scaly",
    image_url: "assets/scaly.png"
}, {
    id: 2,
    type: "slithery",
    image_url: "assets/slithery.png"
}, {
    id: 3,
    type: "electric",
    image_url: "assets/electric.png"
}];

let translators = [{
    id: 2,
    translator: "remove-vowels"
}, {
    id: 1,
    translator: "backwards"
}, {
    id: 3,
    translator: "hacker-speak"
}];

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get("/", function(request, response) {
    queries.resetMonsters(monsters);
    response.json({monsters, translators});
});

function appGetMonsters() {
    app.get("/monsters", function(request, response) {
        queries.resetMonsters(monsters);
        response.json({monsters});
    });
}
appGetMonsters();

app.get("/translators", function(request, response) {
    response.json({translators});
});

app.get("/combined", function(request, response) {
    response.json({combined: queries.monstersPlusTranslators(monsters, translators)});
});

app.post("/combined", function(request, response) {
    monsters.push(request.body.combined);
    appGetMonsters();
    response.send({
        message: "Monster received",
        body: request.body
    });
});

app.listen(process.env.PORT || 3000);
