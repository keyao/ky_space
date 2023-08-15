interface People {
    name:'',
    age:'',
    sex?:''
}


/**
 *  Partial：
 */
type People1<T> = {
    [P in keyof T]: T[P]
}
const obj1:Partial<People> = {
    name:'',
    sex:''
}