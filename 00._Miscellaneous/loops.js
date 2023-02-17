
const rocks = [
    { name: 'Led Zeppelin', age: 50},
    { name: 'Dwayne Johnoson', age: 47},
    { name: 'Neptune', age: 100}
]

//loops methods:
//map, filter, find, reduce, sort, forEach


console.log('original',rocks);


const rocksAgedOneYear = rocks.map(rock => ({...rock, age: rock.age+1}))

console.log('aged one year', rocksAgedOneYear);

console.log('original',rocks);

const evenAgedRocks = rocks.filter(rock => rock.age % 2 === 0)

console.log(evenAgedRocks);
