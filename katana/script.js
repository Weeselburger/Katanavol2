document.querySelector("#codeButton").addEventListener('click',findOutlier);
let integers = document.querySelector("#numbersEntry");
//ZEITMANGEL :(
function findOutlier(integers) {
    
    let arrToCheck = integers;
    let odd = [];
    let even = [];
   
    for (i = 0; i < arrToCheck.length; i++) {
        if (arrToCheck[i] % 2 != 0) {
            odd.push(arrToCheck[i]);
        }
        else {
            even.push(arrToCheck[i]);
        }
    }
    if (odd.length > even.length) {
        return even[0];
    }
    else {
        return odd[0];
    }
};