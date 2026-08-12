

const App = () => {

  // Annotations in TS
  // Syntax of creating a variable with typeScript 
  // let myVar : type = value

  // string
  let myName: string = "Hanzla" 
  // number 
  const myAge:number = 19
  // boolean
  const myVotePermission:boolean = true


  // Type interference 
  // This is basically the process where the TS already knows the dataType of a variable , for example is the let name = "Hanzla" and check there is no let name:string but still if you try to change the data in that variable its gonna provide the error tho with valid reasons but thats still working in the JS , thats the main reason why you should trust the process and follow the perfect roadmap and gain everything with advantages
  let myUsername = "hanzla7"
  // myUsername = 20 , type number is not assignable to type String

  // Any Type (Not useAble as in TS )
  // A special any type that can be used to represent any type. When a variable is annotated with the any type.TypeScript will allow it to have ANY VALUE and disable all type checking for that variable and its properties 
  let myColor:any = "Crimson";
  myColor = 20;

  // Function parameters annotations 
  // Function parameter annotations in TypeScript are used to specify the expected type of the parameters that a function takes
  const inputVal:number = 10
  function addOne(num:number){
    return num + 1;
  }


  // Arrow function annotation
  const firstVal = 2;
  const secondVal = 10;

  const doubleValue = (x:number = 10 , y:number = 10) => {
    return x * y
  }

  // Default function for example greeting someone
  function greetingSomeone(name:string = "Anonymous") {
    return `Hello , ${name}`
  }

  // Return annotatoins 
  function double1(x:number):number {
    return x * x
  }
    // ❌ WRONG: Relying on inference
  // function doubleValue(num: number) {
  //   if (num > 10) return; // Whoops! Forgot to return a number here.
  //   return num * 2;
  // }
  //  TS infers the return type as: number | undefined
  //  The bug propagates to the rest of your app.

  //  CORRECT: Explicitly annotating the intent
  // function doubleValueExplicit(num: number): number {
  //   if (num > 10) return; // ❌ TS Error: Type 'undefined' is not assignable to type 'number'
  //   return num * 2;
  // }

  // Void functions
  // Void is a type that represents the absense of any value. it is often used as the return type for functions that do not return a value
  function noReturn(message:string):void {
    console.log(message);
  }
  noReturn("hello How are you!")

  // Array types in depth 
  // 2 Type of array
  // Using the square brackets notation [] to indicate an array of a specific type

  const numbers: number[] = [1,2,3,4,5,6,7]

  // Using the generic Array<type> notation to indicate an array of a specific type
  
  // Not useAble tho
  // const ArrayNames: Array<string> = ["Alice","Bob","Charlie"]

  // Objects

  const Person : {firstName : string , lastName:string , age : number} = {
    firstName : "hanzla",
    lastName : "jamil",
    age : 20
  }

  function printUser(): {name : string , age : number , location : string} {
    return {
      name :"hanzla",
      age : 20,
      location : "NoWhere LMAO"
    }
  }
  const printUserResult = printUser()

  // Type Aliases
  type Person = {
    name : string,
    age : number
  }

  // function printPerson(person:Person) {
  //     console.log(`Name : ${person.name} , Age : ${person.age}`);
  // }

  const myPerson : Person = {name : "Hanzla",age : 20}

  // Another Example of Type aliases

  type User = {
    name : string,
    age : number,
    location : string,
    // email?:string optional keyword 
    // readonly AccountNumber : string ,  you can't change the readonly
  }

  function printOutUser(user:User) {
    return `Name : ${user.name} , Age : ${user.age} , Location : ${user.location}`
  }

  const userResult = printOutUser({name : "hanzla" , age : 19 , location : "Nothing"})


  // Intersection Types 

  type userInformation = {
    name : string,
    age : number,
    email? : string,
    location : string
  }

  type userAccountInformation = {
    accountNumber : number,
    password : string
  }

  type userIntersection = userInformation & userAccountInformation

  function userInfo(user:userIntersection) {
    return `User's Name : ${user.name} , Age : ${user.age} ,Location : ${user.location} , ${user.email ? `Email : ${user.email}` : ""} , User Account Number : ${user.accountNumber} , User Pass : ${user.password}`
  }

  const userInfoResult = userInfo({name : "hanzla" , age : 19 , location : "Nothing again lol" , accountNumber : 14210490125803 , password : "Hi how are you"})


  // Unions 
  // Unions are used to declare a type that can have one of several possible types . Unions are useful when we wnant to allow a variable or parameter to accept MULTIPLE TYPES using pipe | symbol

  // let pass : string | number = 20

  // let user: userInformation | userAccountInformation = {
  //   accountNumber : 223,
  //   password : "password123"
  // }

  // const arrayRandom: (string | number)[] = [1,2,3,"Hello"] 



  // Literal Types


  // Literal types allow you to specify a value that can only be one specific type literal value. This means that a variable with a literal type can only have one specific value and no other 


  // String literal type
  // let color = "red" | "blue" | "white"
  // color = "red" , valid
  // color = "black" , invalid

  // Literal number type
  // let number = 1 | 2 | 3 
  // number = 1 , valid 
  // number = 4, invalid

  // Boolean literal type
  // let isTrue = true;
  // isTrue = false


  // Tuples
  // Tuple is a type that represents an array with a FIXED NUMBER OF ELEMENT where each element can have a different type . The order of the types in the tuples definition corresponds to the order of the values in the actual array , tuples are similar to array , but they have a specific structure and can be used to model finite sequences with known lengths

  // let myTuple: [string,number] = ["hello",42]
  // console.log(myTuple[0]);
  // console.log(myTuple[1]);

  //          Or 
  // const [first,second] = myTuple
  // Then clg first and second


  // Enum 
  // enum is a way to define a set of named constants , Enums allow you to define a collection of related values that can be used interchangeably in your code

  // enum WeatherConditions {
  //   Sunny = "sunny",
  //   Cloudy = "cloudy",
  //   Rainy = "rainy",
  //   Snowy = "snowy"
  // }

  // use this instead 
//   const Role = {
//   ADMIN: "admin",
//   USER: "user",
// } 

// You should avoid using enums in TypeScript because they violate a core design principle: TypeScript should only be a compile-time type system that disappears entirely when compiled to JavaScript. Enums generate extra runtime code, degrade bundle optimization, and can introduce subtle type safety bugs. Even TypeScript's creator, Anders Hejlsberg, noted that if the language were rebuilt today, enums would likely be omitted.


// Interface 

// Interface is a way to define a Contact of the shape of an object . it specifies the properties and their types that an object must have. Interfaces are powerful tool for enforcing a certain structure in your code

// Interface defination

// interface PersonProperties {
//   firstName : string,
//   lastName : string,
//   age : number,
// }

// useage

// const examplePerson:PersonProperties = {
//   firstName : "hanzla",
//   lastName : "Jamil",
//   age : 20,
// }


// Interface for function

// interface MathOperation {
//   (x:number , y:number) : number
// }

// const add : MathOperation = (a,b) => a + b;
// const subtract : MathOperation = (a,b) => a - b;

// console.log(add(2,3));
// console.log(subtract(4,2));



// Generics

// In typeScript , generics allow you to create reusable components that can work with a variety of types .Generics make it possible for you to define functions , classes , and interfaces , that can work with different data types without having dublicate code.

// normal function

// const printString = (x:string) => console.log(x);
// const printNumber = (x:number) => console.log(x);
// const printBoolean = (x:boolean) => console.log(x);


// console.log(printString("hello"));
// console.log(printNumber(1));
// console.log(printBoolean(true));


// Generics

function printInfo<T>(x: T):T  {
  return x;
}

const str = printInfo<string>("Hello")
const num = printInfo<number>(20)
const bool = printInfo<boolean>(true)

console.log(`String : ${str} , Number : ${num} , Boolean : ${bool}`);






  return (
    <div>
        <h1 className="text-3xl font-medium w-full my-5 text-center">
          TypeScript Series 
        </h1>

        <div>
          <h2 className="text-xl font-medium">Annotations</h2>
          <h3>My Name : {myName}</h3>
        <h5>My Age : {myAge}</h5>
        <p>Am i able to vote? {myVotePermission? "YES":"NO"}</p>
        </div>

        <div>
          <h2 className="text-xl font-medium">Type Interference & Any Type</h2>
          <p>My UserName : {myUsername}</p>
          <p>My color : {myColor}</p>
        </div>

        <div>
          <h2 className="text-xl font-medium">Function parameters annotations</h2>
          <p>Add one ( input value : {inputVal} ) : {addOne(inputVal)}</p>
          <p>Double input values ( x = {firstVal} , y = {secondVal} ) : {doubleValue(firstVal,secondVal)}</p>
          <p>Double input values with default values as 10 ( 10x10 ) : {doubleValue()}</p>
          <p>Greeting someone with providing name as parameter : {greetingSomeone(myName)}</p>
          <p>Greeting someone with providing default as  parameter : {greetingSomeone()}</p> 
          <p>Return annotations : {double1(5)}</p>
          <h2 className="text-xl font-medium">Void Function</h2>
          <p></p>
        </div>

        <div>
          <h2 className="text-xl font-medium">Array Types</h2>
          <p>{numbers.map((number,index) => (
            <span key={index}>{number} </span>
          ))}</p>
          <h2 className="text-xl font-medium">Object</h2>
          <p>First Name : {Person.firstName} , Last Name : {Person.lastName} , Age : {Person.age}</p>
          <p>Function UseAge of objects : {printUserResult.name} , {printUserResult.age} , {printUserResult.location}</p>
          <h2 className="text-xl font-medium">Type Aliases</h2>
          <p>{myPerson.name} , {myPerson.age}</p>
          <p>{userResult}</p>
          <p>{userInfoResult }</p>
        </div>
    </div>
  )
}

export default App