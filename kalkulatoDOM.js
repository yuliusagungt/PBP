var inputLabel = document.getElementById("inputan");
     
function pushBtn(obj) {
     
    var pushed = obj.innerHTML;
     
    if (pushed == '=') {
        inputLabel.innerHTML = eval(inputLabel.innerHTML);
         
    } else if (pushed == 'c') {
        inputLabel.innerHTML = '0';
         
    } else {
        if (inputLabel.innerHTML == '0') {
            inputLabel.innerHTML = pushed;
             
        } else {
            inputLabel.innerHTML += pushed;   
        }
    }
}