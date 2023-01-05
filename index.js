import {franc} from 'franc';
import langs from 'langs';

const input = process.argv[2];
const languageCode = franc(input)
languageCode === "und"? console.log("Please use more sample text"): console.log(langs.where("3",languageCode).name)