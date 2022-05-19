// // ) Ededlerden ibaret bir array verilir.
//  Hemin arrayi boyukden ededden kiciye
// dogru sort elemek.
// task 1


let arr= [4,23,44,6,7,2]


let newarr =arr.sort(function(a, b){return a - b});


console.log(newarr);

// ["Yanvar","Fevral","Mart","Aprel"]  -
// bu arrayi parametr kimi qebul eden bir 
// function yazirsiz.Hemin function geriye
// yeni bir array qaytarir. Yeni yaranan
// arrayda hemin aylarin necenci ay oldugu 
// yazilmalidir. Cavab bele olmlalidir:
// ["Yanvar -1","Fevral-2","Mart-3","Aprel-4"]. 

let arrM = ["January", "February", "March", "April" ,
        "May","June", "July", "August", "Septeber",
             "October", "November", "December"]

             function numeric(value, index)
             {
                 return value+ "-" + (index+1);
             }
             const newArr = arrM.map(numeric)
             console.log(newArr);


// String qebul eden bir function yaziriq.
// Hemin function yeni bir array qaytaracaq,
// hemin arrayin elementleri functiona gelen 
// stringin sozlerinin herflerinin cemine beraber
// olmalidir. Meselen: Functiona gelen string - 
// "Salam olsun hamiya", hemin functionun qaytardiqi
// array ise - [5,5,6] olacaq.


function  letters(str) 
{ 
    let arrWord = str.split(" ");
   console.log(arrWord); 

   let arrSpace = [];
for (let index = 0; index < arrWord.length; index++) 
{
    const element = arrWord[index];
    console.log(element);
    arrSpace.push(element.split("").length);
}
console.log(arrSpace);
    
}

console.log(letters("Bahar geldi"));
