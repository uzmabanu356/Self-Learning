/*
============================================NOTES=================================================================================================================================================

Undefined:-
      "Undefined" ek aisa data type hota hai JavaScript mein jo tab milta hai jab kisi variable ko declare toh kar diya gaya ho, lekin usse koi value assign nahi ki gayi hoti. Matlab, agar aapne koi variable banaya, lekin usme kuch value nahi dali, toh uska type "undefined" hota hai.

Null:-
     JavaScript mein, "null" ek special data type hota hai jo intentionally "koi value nahi hai" ya "khaali value" ko dikhata hai. Null ka matlab hota hai ki variable ke andar kuch nahi hai, lekin yeh deliberately(जान-बूझकर) set ki gayi value hai.
 
 Mistake of  Null data :-
                   JavaScript me jab hum null ka typeof check karte hain, to output "object" kyu aata hai, ye ek purani galti ki wajah se hota hai. JavaScript ko jab banaya gaya tha, tab values ko store karne ke liye ek tag system use kiya gaya tha. Us time pe objects ke liye tag 0 rakha gaya tha, aur galti se null ko bhi internally 0 value assign kar diya gaya.

                   Is wajah se jab aap typeof null likhte ho, to JavaScript galti se usse "object" samajhta hai, jabki technically null ek primitive value hai, object nahi. Ye bug backward compatibility (purane code ke saath compatibility) ke chakkar me kabhi fix nahi kiya gaya.

                   To yahi reason hai ki typeof null "object" return karta hai, jabki logically null ek khali ya non-existent reference ko represent karta hai.

BigInt :-
       JavaScript me BigInt ek naya primitive data type hai jo bahut bade integers ko handle karne ke liye use hota hai. 

       BigInt bahut bade integers ko bina kisi limit ke represent kar sakta hai.
      Isko define karte time number ke baad n lagaya jata hai, jaise 123n ya 9007199254740991n.


*/

// let a; //example of undefine data type
// console.log(a); // Output: undefined



// let a = null; //example of Null data
// console.log(a); // Output: null

// let value = null; 
// console.log(typeof value);  // Output: "object"




let number=B         



