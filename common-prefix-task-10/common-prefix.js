function longestCommonPrefix(strings)
{
    if(!(typeAsserter(strings,'Array')&&typeof strings[0]=='string'))
    {
        return 'Invalid argument'
    }
    let commonString = ''
    for(let i=0;i<strings[0].length;i++)
    {
        let indexString = strings[0]
        for(let word of strings)
        {
            if(!(typeof word=='string'))
            {
                return 'Invalid argument'
            }
            // console.log(indexString[i],word[i])
            if(!(indexString[i]==word[i]))
            {
                return commonString
            }
        }
        commonString+=indexString[i]
    }
    return commonString
}

// console.log(longestCommonPrefix(["flower", "flow", "flight"]))
// console.log(longestCommonPrefix(["dog", "racecar", "car"]))
// console.log(longestCommonPrefix(["flexing", "flex", "flexible"]))
// console.log(longestCommonPrefix(["flower", "flower", "flower"]))

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
      if(checkEqual(callback(...inputArray[i]),expectedOutputArray[i])==='Equal')
      {
        console.log(`%c Test ${i+1} Passed`,'color:green; font-weight:700;font-size:25px')
      }
      else
      {
          console.log(`%c Test ${i+1} Failed`,'color:red; font-weight:700;font-size:25px')
      }
    }
    else{
        if((typeof callback(...inputArray[i])=='number')&&(isNaN(callback(...inputArray[i]))))
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
      else if(callback(...inputArray[i])===expectedOutputArray[i])
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

let input1 = [["flower", "flow", "flight"]]
let ouput1 = 'fl'
let input2 = [["dog", "racecar", "car"]]
let ouput2 = ''
let input3 = [21]
let ouput3 = 'Invalid argument'
let input4 = [['1','2','3','4']]
let ouput4 = ''
let input5 = [['hello','hi','how are you?']]
let ouput5 = 'h'
let input6 = [['']]
let ouput6 = ''
let input7 = [['hi']]
let ouput7 = 'hi'
let input8 = [["name","name"]]
let ouput8 = "name"
let input9 = [{a:1,b:2}]
let ouput9 = 'Invalid argument'
let input10 = [[10,11,12,13,14,15,17]]
let ouput10 = "Invalid argument"
let input11 = ["username@mailid.com"]
let ouput11 = 'Invalid argument'
let input12 = [["AAAAAAA","AAAA","AAAA","AAAAAAA"]]
let ouput12 = "AAAA"
let input13 = [[]]
let ouput13 = 'Invalid argument'
let input14 = [['12223',21223]]
let ouput14 = 'Invalid argument'
let input15 = [[[],[]]]
let ouput15 = 'Invalid argument'

testProgram(longestCommonPrefix,[input1,input2,input3,input4,input5,input6,input7,input8,input9,input10,
                    input11,input12,input13,input14,input15],
                    [ouput1,ouput2,ouput3,ouput4,ouput5,ouput6,ouput7,ouput8,ouput9,ouput10,
                    ouput11,ouput12,ouput13,ouput14,ouput15])