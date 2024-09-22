/* ========================================NOTES===================================================
String Indexing:-
             • JavaScript mein string indexing ka matlab hota hai kisi string ke har character ko uski position ke zariye access karna.

            • Har character ka ek number hota hai jo 0 se shuru hota hai.

String-length:-
            • string length ka matlab hota hai string mein total kitne characters hain.

            • Spaces aur special characters bhi count hote hain string length mein.
              
            • Last string index pta krne ke liye "string.length-1" krte he, isse last character print hota he . or second last character print krne ke liye "string.length-2" ka use krte he. esi trah se aage bhi print krwa skte he 

*/

 let myName="Uzma&Faizan";
 console.log(myName[5]);
console.log(myName[0]);

let lng = "Hello, world!"; //example of string-length
console.log(lng.length);  // Output: 13

var lastStr = "Hello, JavaScript"; //last string pta krne ke liye
console.log(lastStr[lastStr.length-1]);  // Output: t

var lastStr = "Hello, JavaScript"; //last string pta krne ke liye
console.log(lastStr[lastStr.length-2]);  // Output: p
 