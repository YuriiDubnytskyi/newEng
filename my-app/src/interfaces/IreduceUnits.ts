export interface IreduceUnits{
    keyUnit:number,
    fullUnits:
        {
            name:string,
            version:string,
            keyWords:number
        }[]
        |[],
    showUniting:
        {
            name:string,
            version:string,
            keyWords:number
        }[]
        |[],
    indexEnd:number,
    indexStart:number
}