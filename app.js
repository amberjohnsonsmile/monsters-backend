const express = require("express");
const cors = require("cors");
const queries = require("./queries");

let monsters = [{
    id: 1,
    type: "scaly",
    image_url: "https://cdn.pixabay.com/photo/2016/01/10/14/14/monster-1131847_960_720.png"
}, {
    id: 2,
    type: "slithery",
    image_url: "https://cdn.pixabay.com/photo/2016/01/10/14/11/monster-1131840_960_720.png"
}, {
    id: 3,
    type: "electric",
    image_url: "https://cdn.pixabay.com/photo/2016/01/10/14/14/monster-1131843_960_720.png"
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

app.get("/", function(request, response) {
    response.json({monsters, translators});
});

app.get("/monsters", function(request, response) {
    response.json({monsters});
});

app.get("/translators", function(request, response) {
    response.json({translators});
});

app.get("/combined", function(request, response) {
    response.json({combined: queries.monstersPlusTranslators(monsters, translators)});
});

app.listen(process.env.PORT || 3000);
