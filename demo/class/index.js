import {s} from "../../k_admin/dist/static/js/index-edb01af5";

const str = 'playSound'

class Animal {
    color = 'blue';
    #sound = '11';
    sound = '333';
    _sound = '22';
    // 属性名变量表达式
    [str] (sound){
        console.log('say',sound)
    }
    static notLikePlant() {
        return 'Animal not like Plant'
    };
    play() {
        console.log('111')
        return this.#sound
    }
}

class Cat extends Animal {
    constructor() {
        super();
    }
    sound = '喵'
    #sound = '喵~'
    fn(){

    }
}

const smallCat = new Cat()
console.log(smallCat.fn())