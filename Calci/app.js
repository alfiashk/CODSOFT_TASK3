
let  inp = document.querySelector(".inp");
let keys = document.querySelectorAll(".keys");

keys.forEach(key => {
    key.addEventListener("click" , (e)=>{

       const target = e.target;
       const keycont = target.textContent;

       if(target.classList.contains("operator")) {
        inp.value += keycont;
       }
       else if (target.classList.contains("c")) {
        inp.value = "";
       }
       else if (target.classList.contains("equal")) {
        try{
            inp.value = eval(inp.value);
        }catch(e){
            inp.value = "error";
        }
       }
       else{
        inp.value += keycont;
       }
    });
});