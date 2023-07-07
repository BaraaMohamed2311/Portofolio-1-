/*******dark*****************************************/
let darkbtn = document.querySelector("#dark-button");
let shape = document.querySelector(".shape");
let darkbtnatrr = darkbtn.getAttribute("name");
let dark_theme ="dark-theme";

/****************responsive navbar***************************/

/************collapse navbar**************************/
let nav = document.querySelector(".nav-el");
let burger = document.querySelector(".burger");
let nav_ul = document.querySelector(".nav-ul");
let close_nav = document.querySelector(".close");

/************active navbar**************************/
let links = Array.from(document.querySelectorAll("ul li a"));
let sections = Array.from(document.querySelectorAll(".section"));


window.onscroll = ()=>{
    let scrollpos = document.documentElement.scrollTop;
    console.log(scrollpos);
    

    sections.forEach(section =>{
        if(scrollpos>= section.offsetTop - section.offsetHeight * 0.25 && scrollpos < section.offsetTop + section.offsetHeight - section.offsetHeight * 0.25){
            
            links.forEach( link =>{
                if("#" + section.getAttribute("id") === link.getAttribute("href")){
                    links.forEach(remove =>{
                    remove.classList.remove("active");
            })

                    link.classList.toggle("active");
                }
            })
            

        }
    })
}





/********************************************************/

/***main buttons */
let portobtn = document.querySelector("#portobtn");
let aboutbtn = document.querySelector("#aboutbtn");
let projects = document.querySelector("#projects");
let footer = document.querySelector("#contact");


/****dark mode**********************************************************************/


let selectedtheme = localStorage.getItem("selected-theme");
let themeicon= localStorage.getItem("theme-icon");



let getcurrenttheme= ()=> document.body.classList.contains("dark-theme") ? "dark" : "light";
let getcurrenticon= ()=> darkbtn.getAttribute("name") === "moon" ? "moon" : "sunny";

if(selectedtheme){
    document.body.classList[selectedtheme === 'dark' ? 'add':'remove'](dark_theme);


}

darkbtn.onclick = ()=>{

document.body.classList.toggle(dark_theme);
darkbtn.setAttribute("name",getcurrenticon());
localStorage.setItem("selected-theme",getcurrenttheme());
localStorage.setItem("theme-icon",getcurrenticon());

 if(document.body.classList.contains(dark_theme) ){
    darkbtn.setAttribute("name","sunny")
    }
    else{
        darkbtn.setAttribute("name","moon")
    }

}


/****burger********************************************************************* */


burger.onclick = ()=>{
    nav_ul.style = `right:0;`
    close_nav.style = `display:block;`
}

close_nav.onclick = ()=>{
    nav_ul.style = `right:-3000px;`
    close_nav.style = `display:none;`
}



/********************main buttons****************************************************************/

portobtn.onclick = ()=>{
    window.scroll({
        top:projects.offsetTop,
        behavior:"smooth",
    })
}

aboutbtn.onclick = ()=>{
    window.scroll({
        top:footer.offsetTop,
        behavior:"smooth",
    })
}
    





    
