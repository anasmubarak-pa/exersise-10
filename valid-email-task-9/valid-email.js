function isValidEmail(email)
{
    let mailHeaderFooter = email.split('@')
    if(mailHeaderFooter.length!=2)
    {
        return false
    }
    let [userName,footer] = mailHeaderFooter
    if(userName.split('').find((el)=>el=='&'||el=='!'||el=='#'||el=='$'||el=='%'||el=='^'||el=='*'))
    {
        return false
    }
    footer = footer.split('.')
    let [foot1,foot2] = footer
    if(footer.length!=2||foot2.length>3)
    {
        return false
    }
    return true
}


//does not allow &,@,!,#,$,%,^,* in username
console.log(isValidEmail('email'))
console.log(isValidEmail('em&ail@email'))
console.log(isValidEmail('email@email'))
console.log(isValidEmail('username@gmail.comi'))
console.log(isValidEmail('username@gmail.com'))
console.log(isValidEmail('email@email.com'))