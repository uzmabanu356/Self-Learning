/* 
========================================NOTES===================================================

String Method:-   string methods aise built-in functions hote hain jo hume strings (text data) ke saath kaam karne me madad karte hain. 

1) trim():-
           Yeh string ke aage aur peeche ke white spaces ko hata deta hai.

2)  toUpperCase():-
             Yeh string ke sabhi characters ko UPPERCASE (capital letters) me badal deta hai.            

3)toLowerCase():-
               Yeh string ke sabhi characters ko lowercase me badal deta hai.

4)slice():-
          Yeh string ke ek hisse ko start se lekar end tak (end included nahi hota) print karta hai.

5)charAt():-
           Yeh string me di gayi position (index) par jo character hai, usko return karta hai. Index 0 se start hota hai.    
           
6)includes(substring):-
            Yeh check karta hai ki string ke andar jo substring diya gaya hai, wo hai ya nahi. Agar hai to true, nahi hai to false return karta hai.

7)indexOf(substring):-
                Yeh string ke andar substring ki pehle number ki position (index) batata hai. Agar substring nahi mila to -1 return karta hai.

8)lastIndexOf(substring):-
                Yeh string ke andar substring ki last number ki position batata hai. Agar substring nahi mila to -1 return karta hai.

9)replace(oldValue, newValue):-
                        String me jo oldValue diya gaya hai, usko newValue se replace kar deta hai 

10)split(","):-
                String ko separator ke basis par todkar ek array me convert karta hai.

11)startsWith(substring):-
                    Check karta hai ki string ka start di gayi substring se hota hai ya nahi. true ya false return karta hai.

12)endsWith(substring):-
                    Check karta hai ki string ka end di gayi substring se hota hai ya nahi. true ya false return karta hai.       
                    
13)repeat(count):-
            String ko count number of times repeat karta hai.                    
                                        
*/
 
//  let strTrm="        uzma        ";  //trim() method example
 
//  console.log(strTrm); //print string

//  console.log(strTrm.length); // print string length

//  strTrm=strTrm.trim(); //remove white space using trim method

//  console.log(strTrm); // print string

//  console.log(strTrm.length); // print string length




// let strUpCase="faizan"; // toUpperCase() method example

// console.log(strUpCase); //print normal string

// strUpCase=strUpCase.toUpperCase(); // use toUpperCase() method

// console.log(strUpCase); // print  upperCase string 




// let strlowCase="UZMA"; // toLowerCase() method example

// console.log(strlowCase); //print normal string

// strlowCase=strlowCase.toLowerCase(); //use toLowerCase() method

// console.log(strlowCase); // print lowerCase string 





// let strSlc="faizan is my brother"; // slice method() example

// console.log(strSlc); //print normal string

// strSlc=strSlc.slice(0,6); //use slice() method

// console.log(strSlc); // output:-faizan




// let strCAt="Faizan"; //example of charAt() method

// console.log(strCAt); //print normal string

// strCAt=(strCAt.charAt(4)); //use charAt() method

// console.log(strCAt); // output:-a




// let text = "Hello World"; //example of indexOf() method

// console.log(text);// print normal string

// text=(text.indexOf("World")); //use method

// console.log(text); // Output:- true




// let text = "Hello World Java"; //example of lastIndexOf() method

// console.log(text);// print normal string

// text=(text.lastIndexOf("Java")); //use method

// console.log(text); // Output:- 12




// let text = "Hello World"; //example of replace()

// text=(text.replace("Hello","good")); //use method change first subString

// console.log(text); // Output:- good World

// text=(text.replace("World","JavaScript")); //use method change last subString

// console.log(text); // Output:- Hello JavaScript




// let text = "apple,banana,orange,mango"; // example of split()

// text=(text.split(",")); //use method

// console.log(text);//output:- (4) ['apple', 'banana', 'orange', 'mango']



// let text = "Hello World"; //example of startsWith()

// text=(text.startsWith("Hello")); //use method 

// console.log(text); // Output:- true



//  let text = "Hello World"; //example of endsWith()

// text=(text.endsWith("World")); //use method 

// console.log(text); // Output:- true




// let text = "HelloWorld  "; //example of repeat()

// text=(text.repeat("5")); //use method 

// console.log(text); // Output:- HelloWorld  HelloWorld  HelloWorld  HelloWorld  HelloWorld  








