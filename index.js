/*----header--nav-list----*/
var myDiv = document.querySelector("header")
console.log(myDiv.childElementCount)
var sex = document.querySelector("h1")
sex.closest("header").style.border = '5px solid grey'

document.querySelector("h1").style.textAlign = 'center'

var nav = document.querySelector("nav").style.color = 'white'
var nav = document.querySelector("nav").style.backgroundColor = 'blue'

var ul = document.getElementsByClassName("nav-list")[0]
ul.style.display = 'flex'
ul.style.justifyContent = 'space-around'
ul.style.padding = '1em'
ul.style.marginTop = '-1.5em'
ul.style.listStyleType = 'none'

/*-------info--img----*/
document.querySelector("h2").style.textAlign = 'center'

var mySection = document.querySelector("section")
console.log(mySection.firstElementChild)

var img = document.getElementsByClassName("info")[0]
img.style.display = 'flex'
img.style.flexWrap = 'wrap'
img.style.justifyContent = 'space-around'


var info = document.querySelectorAll("img")
for(var i=0; i<info.length; i++){
    info[i].style.width = '265px'
    info[i].style.height = '190px'
}

var packAge = document.getElementsByClassName("info-package")
for( var j = 0; j<packAge.length; j++){
    packAge[j].style.borderBottom = '1px solid'
    packAge[j].style.padding = '1em'
}

var p = document.querySelectorAll(".info-package p")
for(var y = 0; y<p.length; y++){
    p[y].style.fontSize = '1.5em'
}
/*-------price-----*/
var prices = document.getElementsByClassName("prices")[0]
prices.style.display = 'flex'
prices.style.justifyContent = 'space-around'

var price = document.getElementsByClassName("price")
for(var i = 0; i <price.length; i++){
    price[i].style.border = '5px solid blue'
    price[i].style.borderRadius = '50%'
    price[i].style.width = '90px'
    price[i].style.height = '70px'
    price[i].style.padding = '10px'
    price[i].style.paddingTop = '30px'
    price[i].style.textAlign = 'center'
    price[i].style.margin = '10px'
}
/*--------footer-----*/
var links = document.getElementsByClassName("links")[0]
links.style.display = "flex"
links.style.justifyContent = "space-around "
links.style.listStyleType = 'none'
links.style.backgroundColor = 'blue'
links.style.padding = '1.5em'

var link = document.querySelectorAll("footer .links li")
for( var y = 0; y<link.length; y++){
    link[y].querySelector("a").style.color = 'white'
}

/*
var copy = document.querySelectorAll("nav .nav-list li")
var ul = document.createElement("ul")
for(i=0;i<copy.length;i++){
ul.appendChild(copy[i])
}

var footer =document.getElementsByTagName("footer")
footer[0].appendChild(ul)
*/
