const assert = require("chai").assert;
const queries = require("../queries");

describe("Queries", function() {
    describe("#monstersPlusTranslators()", function() {
        it("should return monster id, type, image_url, and translator", function() {
            const monstersSeparate = {
                monsters: [{
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
                }],
                translators: [{
                    id: 1,
                    translator: "backwards"
                }, {
                    id: 2,
                    translator: "remove-vowels"
                }, {
                    id: 3,
                    translator: "hacker-speak"
                }]
            }
            const monstersTogether = [{
                id: 1,
                type: "scaly",
                image_url: "https://cdn.pixabay.com/photo/2016/01/10/14/14/monster-1131847_960_720.png",
                translator: "backwards"
            }, {
                id: 2,
                type: "slithery",
                image_url: "https://cdn.pixabay.com/photo/2016/01/10/14/11/monster-1131840_960_720.png",
                translator: "remove-vowels"
            }, {
                id: 3,
                type: "electric",
                image_url: "https://cdn.pixabay.com/photo/2016/01/10/14/14/monster-1131843_960_720.png",
                translator: "hacker-speak"
            }];
            assert.deepEqual(monstersPlusTranslators(monstersSeparate), monstersTogether, "Must return an array of objects containing id, type, image_url, and translator");
        });
    });
});
