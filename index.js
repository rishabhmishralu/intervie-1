// const a=[2,3,4,4,"ram"]
// const b=[1,5,6,8]
// const c=[...a,...b]
// console.log(c);

// const b=[x,...rest]
// console.log(a);


// const student={
//     name:"rishbah",
//     lastname:"mishra",
//     std:10
// }


// const student2={
//     name:"aryan",
//     lastname:"pal",
//     std:11
// }

// function getname(n){
//     console.log(this.name+" "+n);
// }
// getname.call(student,["delhi,lucknow"])



// function x(){
//     var a=7;
//     function y(){
//         console.log(a);
//     }
// //    y()
// return y
   
// }
// var z=x();
// console.log(z);
// x()
// z()
// closure

// function x(){
//     var a=10;
//     function y(b){
//        console.log( a+b); 

//     }
//     y(5)
// }
// x()

// let  printfullname=function(){
//     console.log(this.name);
//    }
    
// const student={
//     name:"rishbah",
//     lastname:"mishra",
//     std:10
// }
// printfullname.call(student)


// const student2={
//     name:"aryan",
//     lastname:"pal",

// }
// printfullname.call(student2)



// bind methid

function student(e){
    console.log(this.name,e);
}

let student1={
    name:"rishabh",
    age:12
}

let copy=student.bind(student1,"rishabh mishra")
copy()