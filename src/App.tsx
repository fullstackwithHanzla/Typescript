

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
          <h2 className="text-xl font-medium">Type Interference</h2>
          <p>My UserName : {myUsername}</p>
          <p>My color : {myColor}</p>
        </div>
    </div>
  )
}

export default App