export const BasicTypes = () => {

    let name : string = "samir";
    const edad : number = 35;
    const isActive : boolean = true

    const powers: string[] = ["speed, fly, breath underwater"]


    return(
        <div className="flex flex-col">
            <p>{name}</p>
            <p>{edad}</p>
            <p>{(isActive) ? 'active' : 'OFF'}</p>
            <p>{powers.join(',')}</p>
        </div>
    )
}