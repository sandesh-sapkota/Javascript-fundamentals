// Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());

//let myCreatedDate = new Date(2003, 6, 7);
//console.log(myCreatedDate.toDateString());

let myCreatedDate = new Date(2003, 6, 7, 20, 10 );
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now();

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());

let say = `${newDate.getFullYear()} is the year I am studying.`
console.log(say);


let formattedDate = newDate.toLocaleString('default', {
    weekday: "long",
    timeZone: "Asia/Kathmandu"
})

console.log(formattedDate);






