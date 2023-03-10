class Dice {
    constructor(id, dices = ['⚀', '⚁', '⚂', '⚃', '⚄', '⚅']) {
      this.id = id;
      this.dices = dices;
  }
}

class Stats {
 constructor(rolls = [], rollAmount = []) {
    this.rolls = rolls;
    this.rollAmount = rollAmount;
  }
}

const Dice_inst = new Dice(1);
const Stats_inst = new Stats();

const roll = () => {
    num = Math.floor(Math.random() * 6 + 1);
    console.log(num);
    item.innerHTML = Dice_inst.dices[num - 1];
    Stats_inst.rolls.push(num);
    calcMid();
    addList(num);
    addNum(num);
}

const calcMid = () => {
    count = 0;
    length = Stats_inst.rolls.length;
    Stats_inst.rolls.forEach((element) => {
        count = count + element;
    })
    final = Math.round(count / length);
    document.getElementById('dobbelsteen-klein').innerHTML = Dice_inst.dices[final - 1];
}

const addList = (x) => {
    list = document.querySelector('.list');
    li = document.createElement('li');
    li.setAttribute("class", "dobbelsteen");
    li.innerHTML = Dice_inst.dices[x - 1];
    list.insertBefore(li, list.children[0]);
}

const addNum = (x) => {
    listItem = document.getElementById('a' + x);
    listItem.innerHTML = Number(listItem.innerHTML) + 1;
}

item = document.getElementById('dobbelsteen');
item.addEventListener("click", roll);
document.querySelector('body').addEventListener("keydown", roll);
roll();