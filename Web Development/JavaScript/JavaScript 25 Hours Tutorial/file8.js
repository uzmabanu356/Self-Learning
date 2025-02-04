//   -----------------CONDITIONAL STATEMENT---------------------

// let num=+prompt("Enter a number");
// if(num%2==0){
//      console.log("This is a Even number");
// }else{
//     console.log("This is a Odd number");
// }

// let num=+prompt("Enter a number");
// if(num>=1){
//     document.write("This number is Positive");
// }else{
//     if(num<0){
//         document.write("This number is  Negative");
//     }else{
//         document.write("This is  Zero");
//     }
// }


// const element = document.getElementById("myelement");
// console.log(element.tagName);
// console.log(element.innerHTML);
// console.log(element.innerText);
// console.log(element.textContent);

//   -----------------Switch STATEMENT---------------------

let day= +prompt("Enter a number");
switch (day) {
    case 0:
        console.log("sunday");
        break;
    case 1:
        console.log("monday");
        break;
    case 2:
        console.log("tuestad");
        break;
    case 3:
        console.log("wednesday");
        break;
    case 4:
        console.log("thrusday");
        break;
    case 5:
        console.log("friday");
        break;
    case 6:
        console.log("saturday");
        break;
    default:
        console.log("Invalid day");
        break;
}        