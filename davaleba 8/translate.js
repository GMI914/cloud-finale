const projectId = 'iconic-flare-329716';
const prompt = require("prompt-sync")();

const { Translate } = require('@google-cloud/translate').v2;

const translate = new Translate({projectId})

async function franslateThis(text, target = 'ka') {
    const [translation] = await translate.translate(text, target)
    console.log(translation);
}

franslateThis(prompt('input text: \n'), prompt('input target language (example : ka): \n'));