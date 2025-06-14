function add(){
    let num1=Number (document.getElementById("input1").value);
    if(num1==""){
        alert("please entered two number")
    }
    let num2=Number (document.getElementById("input2").value);
    if(num2==""){
        alert("please entered two number")
    }
    let sum=num1+num2;
    let result = document.getElementById("result").value="sum is:-" +" "+sum ; 
}

