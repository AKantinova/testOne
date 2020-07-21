
document.addEventListener("DOMContentLoaded", function (event) {

var ChinaBox = {
    price: 0,
    calories: 0,
    
    
    small:{
    price: 300,
    calories: 250
    },
    average:{
    price: 350,
     calories: 400,
    },
    large: {
    price: 380,
    calories: 400
    },
    pig: {
    price: 60,
    calories: 100
    },
    meet: {
    price: 80,
    calories: 150
    },
    chicken: {
    price: 40,
    calories: 80
    },
    bread_crumbs: {
    price: 15,
    calories: 10
    },
    extra_souse: {
    price: 20,
    calories: 5
    },
    
    calculate: function(size) {
    this.price += ChinaBox[size].price;
    this.calories += ChinaBox[size].calories;
    
    var Toppung =document.querySelectorAll('input[name = add]:checked');
    
   /* for(var i = 0; i < checkBoxArray.length; i++){
    var type = checkBoxArray[i].id;*/
    
    this.price += ChinaBox[type].price;
    this.calories += ChinaBox[type].calories;

    var checkBoxAll = document.querySelectorAll('input[name="extras"]:checked');
    checkBoxAll.forEach(checkBox => {
    var extra = checkBox.value;
    this.price += ChinaBox[extr].price;
    this.calories += ChinaBox[extr].calories;
    }),
    ChinaBox.result(this.price, this.calories);
    },

    result: function(price,calories){
    
        document.getElementById('price').innerHTML = this.price.toFixed(2);
        document.getElementById('calories').innerHTML = this.calories.toFixed(0);
        this.reset_all();
        },

        reset_all: function(){
            this.price = 0;
            this.calories = 0;
            ChinaBox.result(this.price, this.calories);
            }
        
},
   
    
var form = document.querySelector("#myForm");
form.addEventListener("submit", function(event) {
event.preventDefault();
ChinaBox.calculate();
});

});