let user_input = 6;
let generate_butn = document.getElementById("generate_butn");
let pass_box = document.getElementById("boxid");
let input_length = document.getElementById("box_num11");



function combine_box(){document.getElementById("setting_con").style.display = "block";}
let color_arr = [
    "2px solid rgba(7, 82, 85, 0.849)",
    "2px solid rgba(12, 228, 66, 0.849)",
    "2px solid rgba(241, 237, 0, 0.849)",
    "2px solid rgba(234, 8, 255, 0.849)",
    "2px solid rgb(8, 255, 131)",
    "2px solid orange",
    "2px solid indigo",
    "2px solid rgb(185, 0, 0)",
    "2px solid rgb(255, 0, 64)",
    "2px solid rgb(0, 255, 64)"];

let arr1 = [
    'u','v','w','x','y','z',
     1,2,3,4,5,6,7,8,9,0,
    "!","@","#","%","$","%","^","^","&","*","|",
    'A','B','C','D','E','F','G','H','I','J','K','L',
    'a','b','c','d','e','f','g','h',
    "!","@","#","%","$",
    'M','N','O','P','Q','R','S','T','U','V','W','X',
    'i','j','k','l',
    'Y','Z','a','b','c','d','e','f','g','h','i','j',
    'm','n','o','p','q','r','s','t',
    "!","@","#","%","$",
    'k','l','m','n','o','p','q','r','s','t','u','v',
    'w','x','y','z',
    6,7,8,9,0,
];

let arr = arr1;
let final = "";  
function ran_pass(){
    pass_box.value="hello";
    generate_butn.innerHTML="Generate";
    
let int; 
final = "";           //password output 
for (let i = 0; i < user_input; i++){
    if(final=="undefined"||pass_box.value=="hello"){final="";arr = arr1}                              //fixed bugs
    int = +(Math.random() * (arr.length-1)).toFixed(0);
    final = final + arr[int];
    pass_box.value = final;
    // console.log(final);
}

console.log(arr.length,final);

navigator.clipboard.writeText(final);
document.getElementById("copieds").style.display="block";
setTimeout(() => {
    document.getElementById("copieds").style.display="none";
}, 2000);
generate_butn.setAttribute("title","copied");

let color_ran = +(Math.random()*10).toFixed(0);
pass_box.style.border =color_arr[color_ran];
}

// let box_num2 = document.getElementById("box_num2");
let b2 = document.getElementById("box_num2");
let b4 = document.getElementById("box_num4");
let b6 = document.getElementById("box_num6");
let b8 = document.getElementById("box_num8");
let b10 = document.getElementById("box_num10");



function pass_range(param) {
user_input = param;
ran_pass();
if (param<=10){
    input_length.style.border='rgba(250, 250, 250, 0.849)';
switch (param) {
    case 2:   
        b2.style.background="linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)";
        b4.style.background="rgba(250, 250, 250, 0.849)";
        b6.style.background="rgba(250, 250, 250, 0.849)";
        b8.style.background="rgba(250, 250, 250, 0.849)";
        b10.style.background="rgba(250, 250, 250, 0.849)";
        input_length.value = undefined;
        input_length.setAttribute("placeholder","enter length");
        break;
    case 4:    
        b4.style.background="linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)";
        b2.style.background="rgba(250, 250, 250, 0.849)";
        b6.style.background="rgba(250, 250, 250, 0.849)";
        b8.style.background="rgba(250, 250, 250, 0.849)";
        b10.style.background="rgba(250, 250, 250, 0.849)";
        input_length.value = undefined;
        input_length.setAttribute("placeholder","enter length");
        break;
    case 6:   
        b6.style.background="linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)";
        b2.style.background="rgba(250, 250, 250, 0.849)";
        b4.style.background="rgba(250, 250, 250, 0.849)";
        b8.style.background="rgba(250, 250, 250, 0.849)";
        b10.style.background="rgba(250, 250, 250, 0.849)";
        input_length.value = undefined;
        input_length.setAttribute("placeholder","enter length");
        break;
    case 8:      
        b8.style.background="linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)";
        b4.style.background="rgba(250, 250, 250, 0.849)";
        b6.style.background="rgba(250, 250, 250, 0.849)";
        b2.style.background="rgba(250, 250, 250, 0.849)";
        b10.style.background="rgba(250, 250, 250, 0.849)";
        input_length.value = undefined;
        input_length.setAttribute("placeholder","enter length");
        break;
    case 10:    
        b10.style.background="linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)";
        b4.style.background="rgba(250, 250, 250, 0.849)";
        b6.style.background="rgba(250, 250, 250, 0.849)";
        b8.style.background="rgba(250, 250, 250, 0.849)";
        b2.style.background="rgba(250, 250, 250, 0.849)";
        input_length.value = undefined;
        input_length.setAttribute("placeholder","enter length");
        break;
    default:
        b4.style.background="rgba(250, 250, 250, 0.849)";
        b6.style.background="rgba(250, 250, 250, 0.849)";
        b8.style.background="rgba(250, 250, 250, 0.849)";
        b10.style.background="rgba(250, 250, 250, 0.849)";
        input_length.value = undefined;
        input_length.setAttribute("placeholder","enter length");
        break;

}
}

}


function uinput(check){
// input_length.value;
console.log(input_length.value,"hello");
 // user_input = user_length;
pass_range(input_length.value);
if (check && input_length.value == true && typeof(param) == "number"){ 
    b2.style.background="rgba(250, 250, 250, 0.849)";
    b4.style.background="rgba(250, 250, 250, 0.849)";
    b6.style.background="rgba(250, 250, 250, 0.849)";
    b8.style.background="rgba(250, 250, 250, 0.849)";
    b10.style.background="rgba(250, 250, 250, 0.849)";
}
}

function remove_box() {
    document.querySelector("textarea").innerText="password";
    document.getElementById("setting_con").style.display="none";
    input_length.style.border='2px solid red';
    user_input = undefined;
    b2.style.background="rgba(250, 250, 250, 0.849)";
    b4.style.background="rgba(250, 250, 250, 0.849)";
    b6.style.background="rgba(250, 250, 250, 0.849)";
    b8.style.background="rgba(250, 250, 250, 0.849)";
    b10.style.background="rgba(250, 250, 250, 0.849)";
    
    
}



function combinecolor(){
    let ss = document.getElementById("check_box1").check;
    document.getElementById("combine").style.boxShadow = "0 0 5px #999999";
  console.log(ss);
}
// -----------------------------------------------------------------combination array
const ar =[
        ['u','v','w','x','y','z'],
        [1,2,3,4,5,6,7,8,9,0],
        ["_","!","@","#","%","$","%","^","^","&","*","|"],
        ['A','B','C','D','E','F','G','H','I','J','K','L'],
        ['a','b','c','d','e','f','g','h'],
        ["!","@","#","%","$",],
        ['M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'],
        ['i','j','k','l'],
        ['a','b','c','d','e','f','g','h','i','j'],
        ['m','n','o','p','q','r','s','t'],
        ["!","@","#","%","$"],
        ['k','l','m','n','o','p','q','r','s','t','u','v',],
        ['u','v','w','x','y','z'],
        [6,7,8,9,0]
        ];

let c = [0,0,0,0];          //checked box (0 or 1)
let c_a = [0,0,0,0];      //store the checked array
let final_a=[];
let c_arr=[];
let es = false;
function checker(d){
    switch (d) {
        case 0:
            if(c[d]==1){c_a[d] = c_arr.concat(ar[4],ar[7],ar[9],ar[12]);}
            if(c[d]==0){c_a[d]=0}
            break;
        case 1:
            if(c[d]==1){ c_a[d] = c_arr.concat(ar[3],ar[6])}
            if(c[d]==0){c_a[d]=0}
            break;
        case 2:
            if(c[d]==1){c_a[d] = c_arr.concat(ar[1])}
            if(c[d]==0){c_a[d]=0}
            break;
        case 3:
            if(c[d]==1){ c_a[d] = c_arr.concat(ar[2])}
            if(c[d]==0){c_a[d]=0}
            break;
        default:
            break;
    }

}
let truer = 0;
// checkbox checked value
function checkeds(e) {
  c[e] = (c[e]==0)?1:0;
//   console.log(c);
  checker(e);
//   console.log(c_a);



for(let i in c_a){
    
    if(c[i]==1){
        truer = 0;
        final_a = final_a.concat(c_a[i]);   
    }else{
        truer += 1;
        continue;
    }
    // console.log(final_a);
}
final="";
arr=final_a;
// console.log(arr,e);

final_a = [];
  
}


