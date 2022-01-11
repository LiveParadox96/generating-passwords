let inp= document.querySelector(".input_lenght");//Ввод
let ret= document.querySelector(".input_return");//Вывод
let password=document.getElementById("password");
let button =document.querySelector(".generation");

function num(length) {
    let res= '';
    let meanings= 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let meaningLength = meanings.length;
    for (let i = 0; i < length; i++) {
       res += meanings.charAt(Math.floor(Math.random() * meaningLength));
    }
    return res;
}


num.length= document.getElementById("inp");
inp_pass= num(inp.value)
ret=button.addEventListener("click", function ev(){
    password.value= num(inp.value)
});