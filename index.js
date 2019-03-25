function Food(prop) {
  this.name = prop.name;
  this.calories = prop.calories;
  this.color = prop.color;
}

Food.prototype.eat = function(place) {
    console.log(this.name + " is eaten in: " + place);
}

Food.prototype.calCals = function() {
    console.log(`Calories in ${this.name} are ${this.calories }`);
};


function Fruit(fruitprop) {
    Food.call(this, fruitprop);
    this.season = fruitprop.season;
}

Fruit.prototype = Object.create(Food.prototype);

Fruit.prototype.peel = function() {
    console.log(this.name + ' has been peeled. Enjoy!');
}

function Veggie(prop) {
    Food.call(this, prop);
    this.type = prop.type;
}

Veggie.prototype = Object.create(Food.prototype);


Veggie.prototype.cut = function() {
    console.log(this.name + ' has been cut!');
}


const berry = new Fruit({
    name: 'berry',
    calories: 80,
    color: 'red',
    season: 'summer'
});

const brocolli = new Veggie({
    name: 'brocolli',
    calories: 110,
    color: 'green',
    type: 'chewy'
})

console.log(berry);
console.log(brocolli);
brocolli.calCals();

brocolli.eat('brazil');






