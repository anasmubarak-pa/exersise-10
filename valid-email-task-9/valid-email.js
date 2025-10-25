function isValidEmail(email)
{
    let invalidCharCheck = email.split('').find((el)=>el=='&'||el=='!'||el=='#'||el=='$'||el=='%'||el=='^'||el=='*')
    if(invalidCharCheck)
    {
        return false
    }
    let mailHeaderFooter = email.split('@')
    let [userName,footer] = mailHeaderFooter
    let footerLengthCheck = mailHeaderFooter.length!=2
    if(footerLengthCheck)
    {
        return false
    }
    let footerNumbercheck = footer.split('').find((el)=>Number(el))
    footer = footer.split('.')
    let [foot1,foot2] = footer
    if(footer.length!=2||!(foot2.length==2||foot2.length==3)||footerNumbercheck)
    {
        return false
    } 
    return true
}

//does not allow &,@,!,#,$,%,^,* in username allow in,com and any 2-3 letter extension
console.log(isValidEmail('email'))
console.log(isValidEmail('em&ail@email'))
console.log(isValidEmail('email@email'))
console.log(isValidEmail('username@gmail.comi'))
console.log(isValidEmail('username@gmai4l.com'))
console.log(isValidEmail('username@gmail.co3m'))
console.log(isValidEmail('username@gmail.com'))
console.log(isValidEmail('email@email.com'))