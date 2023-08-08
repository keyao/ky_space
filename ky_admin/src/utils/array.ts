//
/**
 * 数组扁平化
 */
// 递归
export function flattenOne(arr:any[]) {
    let tempArr:any[] = []
    for (let item of arr){
        if (Array.isArray(item)){
            tempArr = [...tempArr,...flattenOne(item)]
        } else {
            tempArr = [...tempArr,item]
        }
    }
    return tempArr
}
// reduce
export function flattenReduce(arr:any[]):any[]{
    return arr.reduce((pre,cur)=>{
        if (Array.isArray(cur)) {
            return [...pre,...flattenReduce(cur)]
        } else  {
            return [...pre,cur]
        }
    },[])
}
// toString
export function flattenToString(arr:any[]) {
    return arr.toString().split(',').map(item=>Number.parseFloat(item))
}
// flat()
export function flatenFlat(arr:any[]) {
    return arr.flat(Infinity)
}

/**
 * 去重
 */
// set
export function uniqueSet(arr:any[]){
    return  [...new Set(arr)]
}
// flutter
export function uniqueFlutter(arr:any[]){
    return arr.filter((item,idx)=>{
        return arr.indexOf(item) === idx
    })
}
// rudece
export function uniqueReduce(arr:any[]) {
    return arr.reduce((pre,cur)=>{
        if (pre.indexOf(cur) === -1){
            pre.push(cur)
        }
    },[])
}

/**
 * 数组排序
 */
// sort 排序
export function Sort(arr:number[]){
    return arr.sort((a,b) => a- b)
}

// 冒泡排序