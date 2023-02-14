
export const Functions = () => {

    const sum = (a:number, b:number):number => {
        return a + b
    }


  return (
    <div>
    <h3 className="text-4xl font-bold">Functions</h3>
    <span>The result is { sum(2,3)} </span>
    </div>
  )
}
