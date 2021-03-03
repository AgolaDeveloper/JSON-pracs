var employees= {
    name: "Owino", 
    gender: "Male", 
    status: "Married", 
    salary: "USD 2500",
    children: 4,
    childrenNames: [
        {firstName: "Tene", lastName: "Gueth", age: 11, grade: 4, gender: "female"},
        {firstName: "Riziki", lastName: "Hawii", age: 14, grade: 9, gender: "female"},
        {firstName: "Sibuor", lastName: "Otis", age: 8, grade: 3, gender: "male"},
        {firstName: "Geno", lastName: "Apiyo", age: 12, grade: 5, gender: "female"}
        ]    
}

//displaying our object
document.getElementById("b1").addEventListener("click",func);

var emp= "<ol> <ol>";

function func(){
    for(prop in employees)
        //for(props in employees.childrenNames)

        emp+= "<li>"+ prop +": "+ employees[prop] +"</li><br>";
        //employees[prop];

    document.getElementById("p1").innerHTML= emp;
}