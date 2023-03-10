// De dice class word hier gemaakt
class Dice {
    constructor(id, dices = ['⚀', '⚁', '⚂', '⚃', '⚄', '⚅']) {
      this.id = id;
      this.dices = dices;
  }
}
// De stats class word hier gemaakt
class Stats {
 constructor(rolls = [], rollAmount = []) {
    this.rolls = rolls;
    this.rollAmount = rollAmount;
  }
}

// Hier maken we een kopie van de classes
const Dice_inst = new Dice(1);
const Stats_inst = new Stats();


// Deze functie rollt de dobbelsteen en pusht de nummer
const roll = () => {
    num = Math.floor(Math.random() * 6 + 1);
    console.log(num);
    item.innerHTML = Dice_inst.dices[num - 1];
    Stats_inst.rolls.push(num);
    // Met deze functie berekent hij het gemiddelde
    calcMid();
    // Met deze functie voegt hij het getal toe aan de lijst met getallen
    addList(num);
    // Hier voegt hij het getal bij de scoreboard
    addNum(num);
}



// deze functie berekent het gemiddelde door een wiskundige som
const calcMid = () => {
    count = 0;
    length = Stats_inst.rolls.length;
    Stats_inst.rolls.forEach((element) => {
        count = count + element;
    })
    // Berekent eerst hoeveel elements in de array en doet dan dat gedeelt door totaal
    final = Math.round(count / length);
    // Hier zet hij het getal in het vak van gemiddelde
    document.getElementById('dobbelsteen-klein').innerHTML = Dice_inst.dices[final - 1];
}

// Hier voegt hij het getal in de lijst toe
const addList = (x) => {
    // Maakt eerst de element en pusht met dan voor de rest met insertBefore
    list = document.querySelector('.list');
    li = document.createElement('li');
    li.setAttribute("class", "dobbelsteen");
    li.innerHTML = Dice_inst.dices[x - 1];
    list.insertBefore(li, list.children[0]);
}

// Voegt het nummer toe aan de scoreboard door de id op te pakken en + 1 te doen
const addNum = (x) => {
    listItem = document.getElementById('a' + x);
    listItem.innerHTML = Number(listItem.innerHTML) + 1;
}

// Dit is de event Lisener die zogt dat bij elke klik rolt hij de dobbelsteen
item = document.getElementById('dobbelsteen');
item.addEventListener("click", roll);
document.querySelector('body').addEventListener("keydown", roll);
roll();