
console.log(makeRandom(0,10));

function makeRandom(min, max) {
    return Math.floor(Math.random() * (max - min +1) - min)
}

const anonymousRandom =  function (min, max) {
    return Math.floor(Math.random() * (max - min +1) - min)
};

const arrowRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min +1) - min)
}

const compactLambda = (min, max) => Math.floor(Math.random() * (max - min +1) - min);

function genericActionPerformer(genericAction, genericName) {

    return genericAction(genericName)
}

const substractName = (name) => `${name} is substracted`


console.log(genericActionPerformer(substractName, "Tobias"));

const walk = (name) => `${name} is walking`

console.log(genericActionPerformer(walk, "Niklas"));
//do different behaviour

console.log(genericActionPerformer(("Andea") ()));
