export interface Validacion{
    numDoc:{
        val: string,
        error:string,
        isValid:()=>boolean
    }
    numNeto:{
        val: string,
        error:string,
        isValid:()=>boolean
    }
}