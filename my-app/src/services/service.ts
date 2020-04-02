export const getSize = ():string =>{
    const width:number = window.innerWidth;
    const height:number = window.innerHeight;
    if(width > 1430 && height > 850){
        return "large"
    }else if(width > 1350 && height > 660){
        return "laptop"
    }else if(width > 760 && height > 700 ){
        return "tablet"
    }else {
        return "mobile"
    }
};
export const getArrayAndId = (data:any,fn:any,variant?:number) => {
    console.log(data);
    if(variant === 2){
        fn(data.books,data._id);
        return true
    }
    fn(data[0].books,data[0]._id);
    return true
};