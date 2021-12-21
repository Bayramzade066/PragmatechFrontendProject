let arr = [
 document.querySelector(".home"),
 document.querySelector(".about"),
 document.querySelector(".portfolio"),
document.querySelector(".blogs"),
 document.querySelector(".contact")];


 let nav__menu = document.querySelectorAll(".menu-li")
 

for(let i =0;i<nav__menu.length;i++){
        nav__menu[i].addEventListener("click",()=>{
        arr[i].style.display="flex";
        arr[i].classList.add("section__anima")
        console.log(arr[i].style.display)
        for(let x = 0; x<arr.length;x++){
            if(x==i)
                continue
            
         
             arr[x].style.display = "none";
            arr[x].classList.remove("section__anima")
            }
           
            
        });
        
        
}

