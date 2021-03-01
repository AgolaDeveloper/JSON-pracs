var employees= {
    name: "Owino", 
    gender: "Male", 
    status: "Married", 
    salary: "KES 250000",
    children: 3,
    childrenNames: [
        {firstName: "Leo", lastName: "Gueth", age: 11, grade: 4, gender: "female"},
        {firstName: "Riziki", lastName: "Hawii", age: 14, grade: 9, gender: female},
        {firstName: "Sibuor", lastName: "Otis", age: 7, grade: 3, gender: "male"},
        {firstName: "Geno", lastName: "Apiyo", age: 12, grade: 5, "female"}
        ]    
}

//displaying our object
document.getElementById("b1").addEventListener("click",func);

var emp= "<ol> <ol>";

function func(){
    for(prop in employees)
        emp+= "<li>"+ prop +": "+ employees[prop] +"</li><br>";
        //employees[prop];

    document.getElementById("p1").innerHTML= emp;
}