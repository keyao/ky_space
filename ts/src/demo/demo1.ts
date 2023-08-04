interface Person {
    name:string,
    setName(name:string):undefined
}

class Human implements Person {
    name: string;
    constructor(name) {
        this.name = name
    }
    setName(name: string): undefined {
        this.name = name
        return undefined;
    }
}

const duyun = new Human('keyao')
duyun.setName('YaoKe')
console.log(duyun)
interface ClockConstructor {
    new (hour: number, minute: number): ClockInterface;
}
interface ClockInterface {
    tick(): void;
}


function createClock(
    ctor: ClockConstructor,
    hour: number,
    minute: number
): ClockInterface {
    return new ctor(hour, minute);
}

class DigitalClock implements ClockInterface {
    constructor(h: number, m: number) {}
    tick() {
        console.log("beep beep");
    }
}
class AnalogClock implements ClockInterface {
    constructor(h: number, m: number) {}
    tick() {
        console.log("tick tock");
    }
}

let digital = createClock(DigitalClock, 12, 17);
let analog = createClock(AnalogClock, 7, 32);
console.log(digital)
console.log(analog)

function add(x:number,y:number):number {
    return  x + y
}

let add2:(x:number,y:number) => number = function (x:number,y:number):number {
    return  x + y
}
interface Obj {
    name: string[];
    fn(this: Obj): () => any[];
}
const obj:Obj = {
    name:[],
    fn:function ()
}