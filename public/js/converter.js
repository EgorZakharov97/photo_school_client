const fs = require('fs');

let rawdata = fs.readFileSync('events.json');
let events = JSON.parse(rawdata);

function traverse(object, convertFunction) {
    if (typeof convertFunction != "function")
        throw "convertFunction must be a function(key,valye) that returns a value for all keys"

    if (object !== null && typeof object == "object") {
        Object.entries(object).forEach(([key, value]) => {
            object[key] = convertFunction(key, value)
            traverse(value, convertFunction);
        });
    }
}

traverse(events, (key, value) => (key == "selector") ? value.split('.').join('.af-class-') : value)

fs.writeFileSync('appfairy-events.json', JSON.stringify(events))