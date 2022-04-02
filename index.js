name = (Aki);
function introduction(name) {
    return (`Hi, my name is ${name}.`);
}

language = (Ember.js)
function introductionWithLanguage(name, language) {
    return (`Hi, my name is ${name} and I am learning to program in ${language}.`)
}

let name = (Gracie)
function introductionWithLanguageOptional(name, language = "JavaScript") {
    return (`Hi, my name is ${name} and I am learning to program in ${language}.`)
}