

export interface Person{
    name: string
}
export interface Gan{
    name: string,
    age: number
}
export interface Inge {
    fullna: Object
}
let MyApp =( props: Person) => {
    let anted = (person: string)=>{
        return props.name + person
    }
    let varitir: number = 22;
    let gan: Gan = {
        name: 'feaf',
        age: 232
    }
    let obj: Inge ={
        fullna: {
            ff: '333'
        }
    }
    console.log(gan.name)
    console.log(obj.fullna)
    //奇数按位与1得到1，偶数得到0
    let func = (num: number)=>{
        if(num & 1){
            return false
        } else {
            return true
        }
    }
    let nums = func(44)
    console.log(nums)

    let j: any;
    let t: any = 'abc'
    for(j in t){
        console.log(t[j])
    }
    return anted('antd' + varitir)
}


export default MyApp