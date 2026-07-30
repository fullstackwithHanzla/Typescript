

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
          <p>Retunr annotations : {double1(5)}</p>
        </div>
    </div>
  )
}

export default App