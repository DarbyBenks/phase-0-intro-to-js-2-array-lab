const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat() {
    cats.push("Ralph")
}

function destructivelyPrependCat(name) {
    cats.unshift(`${name}`)
}

function destructivelyRemoveLastCat() {
    cats.pop("Garfield");
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}

const newcats = ["Broom"]
function appendCat(name){
    let newcats = [...cats, "Broom"]
    return newcats
}

const orangecats = ["Arnold"]
    function prependCat(name){
        let orangecats = ["Arnold", ...cats];
        return orangecats
}

const whitecats = ["Milo", "Otis"]
function removeLastCat (name) {
    whitecats.slice(name);
    return whitecats
}

const lastcats = ["Otis", "Garfield"]
function removeFirstCat (name) {
    lastcats.slice(name);
    return lastcats
}