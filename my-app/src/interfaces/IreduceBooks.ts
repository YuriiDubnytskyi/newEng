export interface IreduceBooks{
    id:number,
    fullBooks:
        {
            name:string,
            version:string,
            keyUnit:number
        }[]
        |[],
    showBooking:
        {
            name:string,
            version:string,
            keyUnit:number
        }[]
        |[],
    indexEnd:number,
    indexStart:number
}