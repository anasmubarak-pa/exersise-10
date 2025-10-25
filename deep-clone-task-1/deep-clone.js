let obj = {
    name: 'Name',
    age: 25,
    random_Array: [1,2,3,4,5,6,7]
}

let deepcopy1 = JSON.parse(JSON.stringify(obj))
let deepcopy2 = structuredClone(obj)

console.log(deepcopy1==obj||deepcopy1.random_Array==obj.random_Array)
console.log(deepcopy2==obj||deepcopy2.random_Array==obj.random_Array)