let obj = {
    name: 'Name',
    age: 25,
    random_Array: [1,2,3,4,5,6,7]
}

let deepcopy1 = JSON.parse(JSON.stringify(obj))
let deepcopy2 = structuredClone(obj)

console.log(deepcopy1==obj||deepcopy1.random_Array==obj.random_Array)
console.log(deepcopy2==obj||deepcopy2.random_Array==obj.random_Array)

function deepClone(obj)
{
    if(!typeAsserter(obj,'object'))
    {
        return 'Invalid argument'
    }
    return structuredClone(obj)
}

// console.log(deepClone({name: 'JavaScript', country: 'US', dataTypes: ['string', 'number', 'boolean', 'object', 'null', 'undefined']}))
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
    function getcopy(element){
        return JSON.parse(JSON.stringify(element))
    }
  function checkEqual(obj1,obj2)
  {
      let i = 0
      let keys = Object.keys(obj2)
      if(Object.keys(obj1).length!=Object.keys(obj2).length)
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
            if((typeof key=='number'&&isNaN(key)||(typeof obj1[key]=='number')&&isNaN(obj1[key])))
            {
                if((typeof key=='number'||typeof obj1[key]=='number')&&(isNaN(key)&&!(isNaN(keys[i]))||isNaN(obj1[key])&&!isNaN(obj2[keys[i]])))
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
        // console.log(i,...inputArray[i])
      if(checkEqual(callback(...getcopy(inputArray[i])),expectedOutputArray[i])==='Equal')
      {
        console.log(`%c Test ${i+1} Passed`,'color:green; font-weight:700;font-size:25px')
      }
      else
      {
        console.log(`%c Test ${i+1} Failed`,'color:red; font-weight:700;font-size:25px')
      }
    }
    else{
        if((typeof callback(...getcopy(inputArray[i]))=='number')&&(isNaN(callback(...getcopy(inputArray[i])))))
        {
            if(isNaN(expectedOutputArray[i]))
            {
                console.log(`%c Test ${i+1} Passed`,'color:green; font-weight:700;font-size:25px')
            }
            else
            {
                console.log(`%c Test ${i+1} Failed`,'color:red; font-weight:700;font-size:25px')
            }
        } 
        else if((callback(...getcopy(inputArray[i])))===expectedOutputArray[i])
        {
            console.log(`%c Test ${i+1} Passed`,'color:green; font-weight:700;font-size:25px')
        }
        else
        {
            console.log(`%c Test ${i+1} Failed`,'color:red; font-weight:700;font-size:25px')
        }
    }   
  }
}

let input1 = [{'hi':1,'hello':2}]
let ouput1 = {'hi':1,'hello':2}
let input2 = [[{370:370}]]
let ouput2 = 'Invalid argument'
let input3 = [{'good':'morning','hello':'world!'}]
let ouput3 = {'good':'morning','hello':'world!'}
let input4 = [{407:407}]
let ouput4 = {407:407}
let input5 = [{}]
let ouput5 = {}
let input6 = [[0]]
let ouput6 = 'Invalid argument'
let input7 = [{'[1,2,3]':[1,2,3,{4:5,6:7}]}]
let ouput7 = {'[1,2,3]':[1,2,3,{4:5,6:7}]}
let input8 = ['level']
let ouput8 = 'Invalid argument'
let input9 = [{a:1,b:2}]
let ouput9 = {a:1,b:2}
let input10 = [[10,50,10]]
let ouput10 = 'Invalid argument'
let input11 = [["username@mailid.com","user","mailid",'com']]
let ouput11 = 'Invalid argument'
let input12 = [200]
let ouput12 = 'Invalid argument'
let input13 = []
let ouput13 = 'Invalid argument'
let input14 = [{1:[3213,{1:1233,2:[{7:'7'}]}]}]
let ouput14 = {1:[3213,{1:1233,2:[{7:'7'}]}]}
let input15 = [[[],[]]]
let ouput15 = 'Invalid argument'

testProgram(deepClone,[input1,input2,input3,input4,input5,input6,input7,input8,input9,input10,
                    input11,input12,input13,input14,input15],
                    [ouput1,ouput2,ouput3,ouput4,ouput5,ouput6,ouput7,ouput8,ouput9,ouput10,
                    ouput11,ouput12,ouput13,ouput14,ouput15])