//get input
function getvalue(num){
    let input=document.getElementById("input");
    input.value += num; 
}

//clear input field

function clearInput(){
    let input=document.getElementById('input').value="";
}

// calculate 

function calculate(){
    let input=document.getElementById('input');
    try{
        
        let result=eval(input.value);
        input.value=result;
    }
    catch(error){
        input.value="error";
    }
}

function del(){
    input.value=input.value.slice(0,-1);
}