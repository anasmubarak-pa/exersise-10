let inputBox = document.querySelector('.input-box')
let logg_table = document.querySelector('.logg-table')

function customElement(type,text,parent)
{
    // console.log(type,text,parent)
    let element = document.createElement(type)
    element.innerText = text
    parent.appendChild(element)
    return parent
}

inputBox.addEventListener('keydown',(e)=>{
    if((logg_table.childNodes.length)-1>10)
    {
        logg_table.removeChild((logg_table.firstChild).nextSibling.nextSibling)
    }
    // console.log(e)
    let row = document.createElement('tr')
    row = e.key==' '?customElement('td','Space',row):customElement('td',e.key,row)
    row = customElement('td',e.code,row)
    row = customElement('td',e.timeStamp,row)
    logg_table.appendChild(row)
})