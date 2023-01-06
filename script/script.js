const mainMenu = document.getElementById("Converter");
const wrapper = document.getElementById("wrapper");
subMenu1 = document.getElementById("select1");
subMenu2 = document.getElementById("select2");
feildText = document.getElementById("feildText");
result = document.getElementById("result");
Cal_btn = document.getElementById("calc");
hide = document.getElementById("hide");
let body = document.getElementById("bdy");


mainMenu.onchange = function () {
    let y;
    if(mainMenu.value==1){
        y=data_code;
    }else if(mainMenu.value == 2){
        y=length_code
    }else if(mainMenu.value == 3){
        y=mass_code
    }else if(mainMenu.value == 4){
        y=temp_code
    }
    feildText.value = 1;
    while (subMenu1.options.length > 0 && subMenu2.options.length > 0) {
        subMenu1.options.remove(0);
        subMenu2.options.remove(0);
    }

    let v1 = [];
    let v2 = [];
    for (let value of Object.entries(y)) {
        v1.push(value[0]);
        v2.push(value[1]);
    }

    
    for (let i = 0; i < v1.length; i++) {
        var option = document.createElement("option");
        var options = document.createElement("option");
        option.value = v1[i];
        option.text = v2[i];
        options.value = v1[i];
        options.text = v2[i];
        subMenu1.appendChild(option);
        subMenu2.appendChild(options);
    }

}



// function display(num) {
//     feildText.value += num;
// }

// function Del() {
//     feildText.value = feildText.value.slice(0, -1);
// }

// body.addEventListener('keyup',(e)=>{
//     let y = e.keyCode;
//     switch (y) {
//         case 8:
//             Del();
//             break;
//         case 96:
//             display(0);
//             break;
//         case 97:
//             display(1);
//             break;
//         case 98:
//             display(2);
//             break;
//         case 99:
//             display(3);
//             break;
//         case 100:
//             display(4);
//             break;
//         case 101:
//             display(5);
//             break;
//         case 102:
//             display(6);
//             break;
//         case 103:
//             display(7);
//             break;
//         case 104:
//             display(8);
//             break;
//         case 105:
//             display(9);
//             break;
//     }
// })
Cal_btn.addEventListener('click', function(){
    let x = subMenu1.value
    let y = subMenu2.value
    let ans = Number(feildText.value);
    console.log(typeof(x));
    result.innerText=`${ans} ${x} is equals to ${ans*1024} ${y}`;
})