function makeThis (){
    console.log("yes");
    if(menuSideBar.style.left !== "0px"){
        menuSideBar.style.left = "0px";
    } else{
    menuSideBar.style.left = "-450px";
    }
}
const menuSideBar = document.querySelector(".menu-sidebar");

document.getElementById("botonid").addEventListener("click", makeThis);

const itemLink1 = document.querySelector(".item-link1");
const itemLink2 = document.querySelector(".item-link2");
const itemLink3 = document.querySelector(".item-link3");

function makeAnotherThis (){
    menuSideBar.style.left = "-450px";
    console.log("joyaaa");
}

itemLink1.addEventListener("click", makeAnotherThis);
itemLink2.addEventListener("click", makeAnotherThis);
itemLink3.addEventListener("click", makeAnotherThis);