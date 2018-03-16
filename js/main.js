const vm = new Vue({
    // define the element we are using
	el : "#app" ,

	data : {
		welcomeMessage : "Welcome to your first vue app!",

		fruitList : [
			{ name : "apple", flavour: "tart", color: "green" },
			{ name : "orange", flavour: "sweet", color: "orange" },
			{ name : "pineapple", flavour: "tangy", color: "yellow" }
		],

		hasVue : false,

		vuemessage : "Can you see me now?"
	},

	methods : {
		logClicked(e) {
			console.log(e.currentTarget, this);
		}
	}
});
