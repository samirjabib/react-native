
interface Person {
    name:string,
    age:number,
    direction: Direccion
}

interface Direccion{
    country:string,
    house:number
}









export const ObjectLiteral = () => {

    const person : Person = {
        name:"samir",
        age:26,
        direction:{
            country:"colombia",
            house:615,
        }
    }


  return (
    <div>
        <h3 className="text-4xl font-bold">Object Literal</h3>
        <code>
            <pre>
                {JSON.stringify( person, null, 2)}
            </pre>
        </code>
    </div>
  )
}
