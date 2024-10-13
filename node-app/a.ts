let x:number =1001;

console.log(x);

function greeting(Name:string, Lastname:string, age:number) {
    console.log("Hello"+ Name + Lastname );
}
greeting("shubham","Pawar",18);

function sum(a:number,b:number) :number {
    return a+b;
}

//type inference
const value=sum(1,4);
console.log(value);


function runafter1s(fn) {
    setTimeout(fn,1000);
}

runafter1s(function() {
    console.log("HI there");
})