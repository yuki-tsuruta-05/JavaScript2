function numClickBtn(target){
    let result = document.getElementById("result");
    let btn = target;
    
    if(result.value == "0" && btn == "0" ){
        result.value = "0";
        
    }else if (result.value == "0" && btn == "."){
        result.value = "0.";
    }else if (result.value == "0"){
        result.value = btn;
    }else{    
        result.value += btn;
        }
    }
    
    
function pointClickBtn(target){
    let result = document.getElementById("result");
    let btn = target;
    
    if (includePoint()){
        result.value =result.value.slice(0,-1) + btn;
    }else{    
        result.value += btn;
        }    
    }    
    
function includePoint(){
    let result = document.getElementById("result");
    return (".").includes(result.value.toString().slice(-1));
    }

function clickACBtn(target){
    let result = document.getElementById("result");
    let btn = target;
    
    btn == "AC"
    result.value = "0"}

function equalClickBtn(target){
    let result = document.getElementById("result");
    let btn = target;
    
    result.value = eval(result.value);    
  }
    
    
function opeClickBtn(target){
    let result = document.getElementById("result");
    let btn = target;

    if (opeLast()){
        result.value = result.value.slice(0,-1) + btn
    }else{    
　　    result.value += btn;
　　}
　　
function opeLast(){
  return ["+","-","*","/"].includes(result.value.toString().slice(-1));
}
    
}