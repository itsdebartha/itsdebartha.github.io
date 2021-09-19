let mybutton=document.querySelector('button');
let myHeading = document.querySelector('h1');
function setusername()
{
    let myName=prompt('Enter your name: ');
    if(!myName)
    {
        setusername();
    }
    localStorage.setItem('name',myName);
    myHeading.textContent='Mozilla is cool with you, '+myName;
}

if(!localStorage.getItem('name'))
{
    setusername();
}
else
{
    let storedName=localStorage.getItem('name');
    myHeading.textContent='Mozilla is cool with you, '+storedName;
}

let myImage=document.querySelector('img');
myImage.onclick=function()
{
    let mysrc=myImage.getAttribute('src');
    if(mysrc==='images/icon.png')
    {
        myImage.setAttribute('src','images/249137482.png');
    }
    else
    {
        myImage.setAttribute('src','images/icons.png');
    }
}

mybutton.onclick=function()
{
    setusername();
}