export interface IaddBook{
    id:number,
    base:
        {
            name:string,
            version:string,
            keyUnit:number
        }[]
        |[],
    book:{
            name:string,
            version:string,
            keyUnit:number
        }
}