//const jokes = require("./jokes.json")
import jokes from './jokes.json' assert {type: 'json'}

console.log(jokes);

export default jokes
