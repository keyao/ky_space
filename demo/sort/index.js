let numArr = []
for (let i=0;i< 10;i++){
    numArr.push(Math.floor(Math.random()*100))
    //numArr.push(10 - i)
}
 //console.log('数据源:',numArr)

// 冒泡排序
function bubbleSort(arr) {
    // 获取数组长度
    const len = arr.length
    // 循环遍历数组元素，每次比较相邻两个元素
    for (let i = 0; i < len -1 ;i++ ) {
        // 每轮循环把最大的数放在最后面，因此内层循环次数逐步减少
        for (let j =0 ; j<len - i -1;j++) {
            // 如果前一个元素比后一个元素大，则交换两个元素位置
            if (arr[j] > arr[j+1]) {
                // let temp = arr[j]// 用临时变量保存当前元素
                // arr[j] = arr[j+1] // 把后一个元素赋值给前一个元素
                // arr[j+1] = temp // 把当前元素赋值给后一个元素
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
            }
        }
    }
    return arr
}
// 定义选择排序函数
function selectSort(arr) {
    // 获取数组长度
    const len = arr.length;
    let minIndex; // 定义最小值的索引
    // 循环遍历数组元素，从第一个元素开始比较
    for (let i = 0; i < len - 1; i++) {
        minIndex = i; // 假设当前元素为最小值
        // 从下一个元素开始比较
        for (let j = i + 1; j < len; j++) {
            // 如果该元素比当前最小值还要小，则将其视为新的最小值
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        // 如果最小值的位置不是当前位置，则交换两个元素位置
        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        }

    }
    return arr;// 返回已排序的数组
}


// 插入排序
function  insertSort(arr) {
    // 外层循环控制趟数，外层循环表示无序区第一个值
    for (let i = 1; i < arr.length; i++) {
        console.log( '外层',arr)
        // 声明变量，保存无序区第一个值
        let current = arr[i];
        // 内层循环控制无序区第一个值在有序区合适位置的查找
        // 从后往前扫描有序区，前提：无序区第一个值小于有序区的值,当无序区第一个值大于有序区的值，停止扫描
        for (var j = i - 1; j >= 0 && current < arr[j]; j--) {
            // 插入到合适的位置
            // 有序区的值往后移动一位，无序的第一个值插入到最后移动元素的位置
            arr[j + 1] = arr[j];
        }
        // 将当前无序区第一个值插入到有序区合适位置
        arr[j + 1] = current;
    }
    // 返回排序后的数组
    return arr;
}
function bucketSort(arr, bucketSize = 5) {
    if (arr.length === 0) {  // 如果数组为空，则直接返回
        return arr;
    }

    // 找到最大值和最小值
    let minValue = arr[0];
    let maxValue = arr[0];
    for (let i = 1; i < arr.length; ++i) {
        if (arr[i] < minValue) {
            minValue = arr[i];
        } else if (arr[i] > maxValue) {
            maxValue = arr[i];
        }
    }
    // 计算桶的数量
    const bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1;
    const buckets = new Array(bucketCount);

    // 将元素放入桶中
    for (let i = 0; i < arr.length; ++i) {
        const bucketIndex = Math.floor((arr[i] - minValue) / bucketSize);
        if (!buckets[bucketIndex]) {
            buckets[bucketIndex] = [];
        }
        buckets[bucketIndex].push(arr[i]);
    }
    console.log(buckets)
    // 对每个桶内部进行排序
    arr.length = 0;  // 清空原数组
    for (let i = 0; i < buckets.length; ++i) {

        insertionSort(buckets[i]); // 这里使用插入排序对桶内部进行排序
        for (let j = 0; j < buckets[i].length; ++j) {
            arr.push(buckets[i][j]);  // 将排好序的元素放回数组中
        }
    }

    return arr;  // 返回排序后的数组
}

// 插入排序，用于对每个桶内部进行排序
function insertionSort(arr) {
    const len = arr.length;
    for (let i = 1; i < len; ++i) {
        let j = i - 1;
        const temp = arr[i];
        while (j >= 0 && arr[j] > temp) {
            arr[j + 1] = arr[j];  // 将元素向右移动
            --j;
        }
        arr[j + 1] = temp;  // 将当前元素插入到正确的位置
    }
}

 //console.log(bubbleSort(numArr))
console.log(selectSort(numArr))
// console.log(insertSort(numArr))
//bubbleSort(numArr)
//console.log('--------------------')
//selectSort(numArr)
 //insertSort(numArr)
//console.log(bucketSort(numArr))
function Foo() {
    getName = function () { alert (1); };
    return this;
}
Foo.getName = function () { alert (2);};
Foo.prototype.getName = function () { alert (3);};
var getName = function () { alert (4);};
function getName() { alert (5);}

//请写出以下输出结果：
// Foo.getName();
// getName();
// Foo().getName();
// getName();
// new Foo.getName();
// new Foo().getName();
// new new Foo().getName();

let promise = new Promise((resolve, reject)=>{
    resolve()
})
// promise.then(result => {
//     // 处理成功状态的回调函数
//     throw new Error('error')
// }, error => {
//     // 处理失败状态的回调函数
//     console.log(error)
// });
console.clear()
const P = new Promise((resolve, reject)=>{
    console.log(2)
    resolve(111)
    console.log(4)
    throw  new Error('3')
})

P.then(re=>{
}).catch((e)=>{
    console.log()
})
console.clear()
let arr = [1,2,[3,4,[{name:'柯尧'},20+30,[7,8]]],[9,10,[11,12]]]
function oneArray(arr) {
    let tempArr = []
    for (let item of arr){
        if (Array.isArray(item)){
            tempArr = [...tempArr,...oneArray(item)]
        } else {
            tempArr = [...tempArr,item]
        }
    }
    return tempArr
}

console.log(oneArray(arr))
let k = 0
for (let i = 0,j=0;j<10,i<20;j++,i++){
    k = i+j
}
console.log(k)

console.clear()


async function fn1() {
    return Promise.resolve('1')
}

async function fn2() {
    return Promise.resolve('2')
}

async function fn3() {
    return Promise.resolve('3')
}

let arr1 = [fn1(),fn2(),fn3()]

async function demoTest() {
    console.log('开始')
    for (const item of arr1) {
        let data = await item
    }
    // for (let item of arr1) {
    //     let data = await item
    //     console.log('for of',data)
    // }
}

demoTest()







console.clear()

function Person(param) {
    var name = param.name; // 私有属性
    this.age = 18; // 共有属性

    this.sayName = function () {
        console.log(name);
    }
}

const tom = new Person({name: 'tom'});
tom.age += 1; // 共有属性，外部可以更改
tom.sayName(); // tom
tom.name = 'jerry';// 共有属性，外部不可更改
tom.sayName(); // tom

console.clear()


function fun(n,o) {
    console.log(o)
    return {
        fun:function (m) {
            return fun(m,n)
        }
    }
}




/**
 * 1)  fun(1), 因为外层函数的返回值是一个对象，这里通过对象调用方法，并传入一个实参1，
 * 此时m=1,然后返回值继续调用外层函数fun,并将m、n的值1，0作为形参传入即fun(1,0),
 * 此时n=1,o=0,打印o的值，所以打印0
 * 2)  a.fun(2), 因为外层函数的返回值是一个对象，
 * 这里通过对象调用方法，并传入一个实参2，此时m=2,
 * 然后返回值继续调用外层函数fun,并将m、n的值2，0作为形参传入即fun(2,0),此时n=2,o=0,打印o的值，所以打印0
 * 3)  a.fun(3), 因为外层函数的返回值是一个对象，
 * 这里通过对象调用方法，并传入一个实参2，此时m=2,然后返回值继续调用外层函数fun,
 * 并将m、n的值2，0作为形参传入即fun(2,0),此时n=2,o=0,打印o的值，所以打印0
 *
 *
 *
 *
 * 1)  fun(0), 调用最外层函数，并且传入一个参数0，进入函数代码块，首先用var 声明两个形参，此时第一个参数n=0,第二个参数o没有赋值，所以打印unfined
 * 2)  .fun(1), 因为fun(0)的返回值是一个对象，这里通过对象调用方法，并传入一个实参1，此时m=1,然后返回值继续调用外层函数fun,并将m、n的值1，0作为形参传入即fun(1,0),此时n=1,o=0,打印o的值，所以打印0
 * 3)  .fun(2), 因为fun(1)的返回值是一个对象，这里通过对象调用方法，并传入一个实参2，此时m=2,然后返回值继续调用外层函数fun,并将m、n的值2，1作为形参传入即fun(2,1),此时n=2,o=1,打印o的值，所以打印1
 * 4)  .fun(3), 因为fun(2)的返回值是一个对象，这里通过对象调用方法，并传入一个实参3，此时m=3,然后返回值继续调用外层函数fun,并将m、n的值3，2作为形参传入即fun(3,2),此时n=3,o=2,打印o的值，所以打印2
 */






(function immediateA(a) {
    return (function immediateB(b) {
        console.log(a); // 打印出什么
    })(1);
})(0);


console.clear()


function fn(i){
    return function(n){
        console.log(n+ (i++))
    }
}

var f = fn(10)
f(20)   // 30
fn(20)(40)  // 60
fn(30)(40)  // 70
f(30)   // 41

let a = 1

const sum = a + (++a) + (a++) + + (++a) + (a++) + (++a) + (a++) + (++a) + (a++)
// 1 + 2 + 2 + 4 + 4 + 6 + 6 + 8 + 8

{
    let name = 'three'
    const obj1 = {
        name:'one',
        fun1:() => {
            console.log(this.name)
        },
        fun2(){
            console.log(this.name)
        },
        obj2:{
            name:'two',
            fn1:()=>{
                console.log(this.name)
            },
            fn2(){
                console.log(this.name)
            }
        }
    }
    console.log(this)
    obj1.fun1()
    obj1.fun2()
    obj1.obj2.fn1()
    obj1.obj2.fn2()
}



