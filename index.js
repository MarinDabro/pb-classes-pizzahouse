class Pizza{
	constructor() {
		this.priceObj = [
            { id: 1, product: "margherita", ingredients: ["tomato", "mozzarella", "basilicum"], price: 7.50 },
            { id: 2, product: "marinara", ingredients: ["tomato", "oregano", "garlic"], price: 5.75 },
            { id: 3, product: "veggy", ingredients: ["eggplants", "peppers", "zucchini", "basilicum"], price: 9.99 }
        ];
		
		// this.pizzaID = pizzaID;
	}

	getItem(pizzaID) {
		console.log(this.priceObj[pizzaID -1]);
	}

	print(pizzaID) {
		let pizza = this.priceObj[pizzaID -1];
		console.log(`You have selected pizza ${pizza.product} it contains ${pizza.ingredients} and costs ${pizza.price}$`);
	}

	balance(pizzaID) {
		let pizza = this.priceObj[pizzaID -1];
		let amount = Math.ceil(pizza.price);
		console.log(`You paid ${amount}$, your change is ${amount - pizza.price}$`);
	}
}

let menu = new Pizza();


	menu.getItem(2);

console.log("");

	menu.print(2);

console.log("");

	menu.balance(2);

console.log("");

