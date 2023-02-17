const spaceships = [
    {name: "China balloon", owner: undefined, isPriceless: false, cost: 1_000_000},
    {name: undefined, type:'UFO', isPriceless: true, cost: Number.MAX_SAFE_INTEGER},
    {name: "Apollo 13", versionNo: 13, isPriceless: false, cost: 2_000_000},
]

//console log each element
//spaceships.forEach((spS, index) => {
    //console.log(spS);
    //console.log(index, spS);
//})

//make the owner china
const chineseSpaceships = spaceships.map(spaceship => {
    return {...spaceship, owner: 'China'}
})//know how to use spread operator

//console.log(makeChina);

//add a cost of 'isPriceless': true to all china spaceships 
const makeChinesePriceless = chineseSpaceships.map(spaceship => {
    //priceless.isPriceless = true
    return spaceship
})

//console.log(makeChinesePriceless);

//give me priceless and non priceless in two different lists
const pricelesss = spaceships.filter(spaceship => {
    return spaceship.isPriceless === true
    
})
console.log('Priceless', pricelesss);

const nonPriceless = spaceships.filter(spaceship => {
    return spaceship.isPriceless === false
    
})
console.log('non-priceless', nonPriceless);


//find all with coast less 2 mio.
//const lessThanTwoMillion = spaceships
const affordableSpaceship = spaceships.find(spsaceship => spsaceship.cost <= 2_000_000)
console.log(affordableSpaceship);