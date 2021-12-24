// Write your solution here!
const cats = [
    "Milo",
    "Otis",
    "Garfield",
];

function destructivelyAppendCat(name) {
    return cats.push(name);
}
function destructivelyPrependCat(name){
    return cats.unshift(name);
}

function destructivelyRemoveFirstCat() {
    return cats.shift();
}
function appendCat(name) {
    return [...cats, name];
}
function prependCat(name) {
    return [name, ...cats];
}
function destructivelyRemoveLastCat(name) {
    return cats.pop ("Garfield")
}
function removeFirstCat() {
    return cats.slice(cats.length -2);
}
function removeLastCat() {
    return cats.slice(0, cats.length - 1);
}