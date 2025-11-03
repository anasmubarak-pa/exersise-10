function myMap(arr,callback)
{
    if(!typeAsserter(arr,'Array',callback,'function'))
    {
        return 'Invalid argument'
    }
    let returnArray = []
    for(let item of arr)
    {
        returnArray.push(callback(item))
    }
    return returnArray
}

function myFilter(arr,callback)
{
    // console.log(typeof arr,arr,typeof callback,callback)
    if(!typeAsserter(arr,'Array',callback,'function'))
    {
        return 'Invalid argument'
    }
    let returnArray = [] 
    for(let item of arr)
    {
        if(callback(item))
        {
          returnArray.push(item)  
        }
    }
    
    return returnArray
}

function myReduce(arr,callback,initVal=undefined)
{
    if(!typeAsserter(arr,'Array',callback,'function',initVal,'number|string|undefined'))
    {
        return 'Invalid argument'
    }
    let accumulator = initVal==undefined?arr[0]:callback(initVal,arr[0])
    for(let item of arr.slice(1))
    {
        accumulator = callback(accumulator,item)
    }
    // console.log(accumulator)
    return accumulator
}

function typeAsserter(...typelist)
{
    let i =0
    for(i=0;i<typelist.length;i+=2)
    {
        if(typelist[i+1].indexOf('|')!=-1)
        {
            let tlist = typelist[i+1].split('|')
            if(!(tlist.find((e)=>e==typeof typelist[i])))
            {
                // console.log(tlist)
                return false
            }
        }
        else if(Array.isArray(typelist[i])||typelist[i+1]=='Array')
        {
            if(!Array.isArray(typelist[i])||(typelist[i+1]!=='Array'))
            {
                return false
            }
        }
        else if(typeof typelist[i]!=typelist[i+1])
        {
            return false
        }
    }
    return true
}

function testProgram(callback,inputArray,expectedOutputArray)
{
  function checkEqual(obj1,obj2)
  {
      let i = 0
      let keys = Object.keys(obj2)
      if(obj1.length!=obj2.length)
      {
        return 'Not Equal'
      }
      for(let key in obj1)
      {
          if(typeof obj1[key]=='object'||typeof obj2[keys[i]]=='object')
          {
              if(typeof obj1[key]!='object'||typeof obj2[keys[i]]!='object')
              {
                  return 'Not Equal'
              }
              else
              {
                  if(checkEqual(obj1[key],obj2[keys[i]])!='Equal')
                  {
                      return 'Not Equal'
                  }
              }
              i++
          }
          else
          {
            if(isNaN(key)||isNaN(obj1[key]))
            {
                if(isNaN(key)&&!(isNaN(keys[i]))||isNaN(obj1[key])&&!isNaN(obj2[keys[i]]))
                {
                    // console.log('nan2')
                    return 'Not Equal'
                }
            }
            else if(key!=keys[i]||obj1[key]!=obj2[keys[i]])
            {
                return 'Not Equal'
            }
            i++
          }
      }
      return 'Equal'
  }
  for(let i = 0;i<inputArray.length;i++)
  {
    if(typeof expectedOutputArray[i]=='object')
    {
        // console.log(i,'obj')
        // console.log(callback(...inputArray[i]),expectedOutputArray[i])
      if(checkEqual(callback(...inputArray[i]),expectedOutputArray[i])==='Equal')
      {
        console.log(`%c Passed`,'color:green; font-weight:700;font-size:25px')
      }
      else
      {
          console.log(`%c Failed`,'color:red; font-weight:700;font-size:25px')
      }
    }
    else{
        if(isNaN(callback(...inputArray[i])))
        {
            if(isNaN(expectedOutputArray[i]))
            {
                console.log(`%c Passed`,'color:green; font-weight:700;font-size:25px')
            }
            else
            {
                console.log(`%c Failed`,'color:red; font-weight:700;font-size:25px')
            }
        } 
      else if(callback(...inputArray[i])===expectedOutputArray[i])
      {
        console.log(`%c Passed`,'color:green; font-weight:700;font-size:25px')
      }
      else
      {
            console.log(`%c Failed`,'color:red; font-weight:700;font-size:25px')
      }
    }   
  }
}

// console.log(myMap([1,2,3,4,5,6,7],(a)=>a+7))
// console.log(myFilter([1,2,3,4,5,6,7],(a)=>a>5))
// console.log(myReduce([1,2,3,4,5,6,7],(a,b)=>a-b,0))
// console.log(myReduce([1,2,3,4,5,6,7],(a,b)=>a-b))

//tests
// console.log((myReduce([1,2,3,4],(a,b)=>a+b))== [1,2,3,4].reduce((a,b)=>a+b))
// console.log((myReduce([1,2,3,4],(a,b)=>a-b))== [1,2,3,4].reduce((a,b)=>a-b))
// console.log((myReduce([1,2,3,4],(a,b)=>b-a))== [1,2,3,4].reduce((a,b)=>b-a))
// console.log((myReduce([1,2,3,4],(a,b)=>b-a,0))== [1,2,3,4].reduce((a,b)=>b-a,0))

let array1 = [1,2,3,4,5,6,7]
let function1 = (e)=>e+5
let test1 = [6,7,8,9,10,11,12]

let array2 = ['1',2,3,'4',5,6,7]
let test2 = ['15',7,8,'45',10,11,12]

let array3 = ['15','7','8','45','10','11','12']
let test3 = ['155','75','85','455','105','115','125']

let array4 = ['H','E','L','L','O',' ','W','O','R','L','D','!']
let test4 = ['H5','E5','L5','L5','O5',' 5','W5','O5','R5','L5','D5','!5']

let function2 = (e)=>e-5
let test5 = [-4,-3,-2,-1,0,1,2]
let test6 = [-4,-3,-2,-1,0,1,2]
let test7 = [10,2,3,40,5,6,7]
let test8 = [NaN,NaN,NaN,NaN,NaN,-5,NaN,NaN,NaN,NaN,NaN,NaN]

let function3 = (e)=>e*5
let test9 = [5,10,15,20,25,30,35]
let test10 = [5,10,15,20,25,30,35]
let test11 = [75, 35, 40, 225, 50, 55, 60]
let test12 = [NaN, NaN, NaN, NaN, NaN, 0, NaN, NaN, NaN, NaN, NaN, NaN]

let function4 = (e)=>e/5
let test13 = [0.2, 0.4, 0.6, 0.8, 1, 1.2, 1.4]
let test14 = [0.2, 0.4, 0.6, 0.8, 1, 1.2, 1.4]
let test15 = [3, 1.4, 1.6, 9, 2, 2.2, 2.4]
let test16 = [NaN, NaN, NaN, NaN, NaN, 0, NaN, NaN, NaN, NaN, NaN, NaN]

testProgram(myMap,[[array1,function1],[array2,function1],[array3,function1],[array4,function1],
                    [array1,function2],[array2,function2],[array3,function2],[array4,function2],
                    [array1,function3],[array2,function3],[array3,function3],[array4,function3],
                    [array1,function4],[array2,function4],[array3,function4],[array4,function4]],
                    [test1,test2,test3,test4,test5,test6,test7,test8,test9,test10,
                        test11,test12,test13,test14,test15,test16])

console.log('-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*')

let function5= (e)=>e>5
let test17 = [6, 7]
// console.log(myFilter(array1,function5))
let test18 = [6, 7]
let test19 = ['15', '7', '8', '45', '10', '11', '12']
let test20 = []

let function6 = (e)=>typeof(e)=='number'
let test21 = [...array1]
let test22 = [2,3,5,6,7]
let test23 = []
let test24 = []

let function7 = (e)=>typeof(e)=='string'
let test25 = []
let test26 = ['1','4']
let test27 = [...array3]
let test28 = [...array4]

let function8 = (e)=>typeof(e)=='object'
let test29 = []
let test30 = []
let test31 = []
let test32 = []

testProgram(myFilter,[[array1,function5],[array2,function5],[array3,function5],[array4,function5],
                    [array1,function6],[array2,function6],[array3,function6],[array4,function6],
                    [array1,function7],[array2,function7],[array3,function7],[array4,function7],
                    [array1,function8],[array2,function8],[array3,function8],[array4,function8]],
                    [test17,test18,test19,test20,test21,test22,test23,test24,test25,test26,
                        test27,test28,test29,test30,test31,test32])

console.log('-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*')

let function9 = (a,b)=>a+b
let test33 = 28
let test34 = '1234567'
let test35 = '157845101112'
let test36 = 'HELLO WORLD!'

let function10 = (a,b)=>a-b
let test37 = -26
let test38 = -26
let test39 = -78
let test40 = NaN

let function11 = (a,b)=>a*b
let test41 = 5040
let test42 = 5040
let test43 = 49896000
let test44 = NaN

let function12 = (a,b)=>a/b
let test45 = 0.0001984126984126984
let test46 = 0.0001984126984126984
let test47 = 0.0000045093795093795085
let test48 = NaN

testProgram(myReduce,[[array1,function9],[array2,function9],[array3,function9],[array4,function9],
                    [array1,function10],[array2,function10],[array3,function10],[array4,function10],
                    [array1,function11],[array2,function11],[array3,function11],[array4,function11],
                    [array1,function12],[array2,function12],[array3,function12],[array4,function12]],
                    [test33,test34,test35,test36,test37,test38,test39,test40,test41,test42,
                        test43,test44,test45,test46,test47,test48])