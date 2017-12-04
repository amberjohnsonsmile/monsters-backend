const assert = require("chai").assert;
const queries = require("../queries");

describe("Queries", function() {
    describe("#monstersPlusTranslators()", function() {
        it("should return monster id, type, image_url, and translator", function() {
            const monsters = [{
                id: 1,
                type: "scaly",
                image_url: "https://cdn.pixabay.com/photo/2016/01/10/14/14/monster-1131847_960_720.png"
            }, {
                id: 2,
                type: "slithery",
                image_url: "https://cdn.pixabay.com/photo/2016/01/10/14/11/monster-1131840_960_720.png"
            }];
            const translators = [{
                id: 2,
                translator: "remove-vowels"
            }, {
                id: 1,
                translator: "backwards"
            }];
            const monstersCombined = [{
                id: 1,
                type: "scaly",
                image_url: "https://cdn.pixabay.com/photo/2016/01/10/14/14/monster-1131847_960_720.png",
                translator: "backwards"
            }, {
                id: 2,
                type: "slithery",
                image_url: "https://cdn.pixabay.com/photo/2016/01/10/14/11/monster-1131840_960_720.png",
                translator: "remove-vowels"
            }];
            assert.deepEqual(queries.monstersPlusTranslators(monsters, translators), monstersCombined, "Must return an array of objects containing id, type, image_url, and translator");
        });
    });
});
