function monstersPlusTranslators(monsters, translators) {
    let combined = monsters;
    for (i = 0; i < combined.length; i++) {
        for (j = 0; j < translators.length; j++) {
            if (combined[i].id === translators[j].id) {
                combined[i].translator = translators[j].translator;
            }
        }
    }
    return combined;
}

function resetMonsters(monsters) {
    monsters.map(function(item) {
        delete item.translator;
    })
}

module.exports = {
    monstersPlusTranslators,
    resetMonsters
};
