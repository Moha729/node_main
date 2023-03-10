//Static file = images, files, css, js
console.log('hello world');

let timeoutID

function timer() {
    timeoutID = setTimeout(redirectFunction, 3000)
}

function redirectFunction(){
    location = '/tanks'
}

timer()