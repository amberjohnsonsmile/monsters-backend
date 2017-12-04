function monstersPlusTranslators(monsters, translators) {
    for (i = 0; i < monsters.length; i++) {
        for (j = 0; j < translators.length; j++) {
            if (monsters[i].id === translators[j].id) {
                monsters[i].translator = translators[j].translator;
            }
        }
    }
    return monsters;
}

module.exports = {
    monstersPlusTranslators
};
