function myMap(arr,callback)
{
    let returnArray = []
    for(let item of arr)
    {
        returnArray.push(callback(item))
    }
    
    return returnArray
}

function myFilter(arr,callback)
{
    let returnArray = [] 
    for(let item of arr)
    {
        if(callback(item))
        {
            
        }returnArray.push(item)
    }
    
    return returnArray
}

function myReduce(arr,callback,initVal=undefined)
{
    let accumulator = initVal==undefined?arr[0]:callback(initVal,arr[0])
    for(let item of arr.slice(1))
    {
        accumulator = callback(accumulator,item)
    }
    return accumulator
}

console.log(myMap([1,2,3,4,5,6,7],(a)=>a+7))
console.log(myFilter([1,2,3,4,5,6,7],(a)=>a>5))
console.log(myReduce([1,2,3,4,5,6,7],(a,b)=>a-b,0))
console.log(myReduce([1,2,3,4,5,6,7],(a,b)=>a-b))

//tests
console.log((myReduce([1,2,3,4],(a,b)=>a+b))== [1,2,3,4].reduce((a,b)=>a+b))
console.log((myReduce([1,2,3,4],(a,b)=>a-b))== [1,2,3,4].reduce((a,b)=>a-b))
console.log((myReduce([1,2,3,4],(a,b)=>b-a))== [1,2,3,4].reduce((a,b)=>b-a))
console.log((myReduce([1,2,3,4],(a,b)=>b-a,0))== [1,2,3,4].reduce((a,b)=>b-a,0))