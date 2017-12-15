function monstersPlusTranslators(monsters, translators) {
    monsters.map(monsterItem => {
        translators.map(translatorItem => {
            if (monsterItem.id === translatorItem.id) {
                monsterItem.translator = translatorItem.translator;
            }
        });
    });
    return monsters;
}

function resetMonsters(monsters) {
    monsters.forEach(item => {
        delete item.translator;
    });
}

module.exports = {
    monstersPlusTranslators,
    resetMonsters
};
