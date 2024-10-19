export const categories = [
	{ name: "Pizza" },
	{ name: "Combo" },
	{ name: "Snacks" },
	{ name: "Nachspeise" },
	{ name: "Saucen" },
	{ name: "Getränke" },
];

export const ingredients = [
	{
		name: "BBQ Souce",
		price: 2.4,
		imageUrl:
			"https://cdn.dodostatic.net/static/Img/Ingredients/e5e0fe7dad9b4371b6dd31315d7386d9.png",
	},
	{
		name: "Currysouce",
		price: 2.4,
		imageUrl:
			"https://cdn.dodostatic.net/static/Img/Ingredients/11ef240ac9d47e98b4d2d56c93b4b934.png",
	},
	{
		name: "Champignons",
		price: 2.4,
		imageUrl:
			"https://cdn.dodostatic.net/static/Img/Ingredients/0803736605994d31875bdae7db84284c.png",
	},
	{
		name: "Cheddar",
		price: 2.7,
		imageUrl:
			"https://cdn.dodostatic.net/static/Img/Ingredients/b3e45d7dee404c12b0b6492bfdaca228.png",
	},
	{
		name: "Cherrytomaten",
		price: 2.4,
		imageUrl:
			"https://cdn.dodostatic.net/static/Img/Ingredients/11ef240b09a4a5b59c8ac51901b76b32.png",
	},
	{
		name: "Bacon",
		price: 2.7,
		imageUrl:
			"https://cdn.dodostatic.net/static/Img/Ingredients/481586dc7a6e4b6e8ae543c2ae0f74b9.png",
	},
	{
		name: "Gorgonzola",
		price: 2.7,
		imageUrl:
			"https://cdn.dodostatic.net/static/Img/Ingredients/0ef1108c4c8d45fbb47edda9c23849f0.png",
	},
	{
		name: "Grillgemüse",
		price: 2.4,
		imageUrl:
			"https://cdn.dodostatic.net/static/Img/Ingredients/11ef2719feaf45d9bb81e824663193e3.png",
	},
	{
		name: "Hackfleisch",
		price: 2.4,
		imageUrl:
			"https://cdn.dodostatic.net/static/Img/Ingredients/890fe9ed28f24e20b08bfdf70c70a5bb.png",
	},
	{
		name: "Knoblauch",
		price: 0.7,
		imageUrl:
			"https://cdn.dodostatic.net/static/Img/Ingredients/94cdd8ec01b54f1eac929a32a8723083.png",
	},
	{
		name: "Oliven",
		price: 2.4,
		imageUrl:
			"https://cdn.dodostatic.net/static/Img/Ingredients/636e0e4ba1134b8ab676ea4f426df2c5.png",
	},
	{
		name: "Thunfisch",
		price: 2.7,
		imageUrl:
			"https://cdn.dodostatic.net/static/Img/Ingredients/11ef240b2e324ad4a7eee26b0d13b76a.png",
	},
	{
		name: "Ananas",
		price: 2.4,
		imageUrl:
			"https://cdn.dodostatic.net/static/Img/Ingredients/11ef240b56271d68a2e864d6a5c9b215.png",
	},
	{
		name: "grüne Paprika",
		price: 2.4,
		imageUrl:
			"https://cdn.dodostatic.net/static/Img/Ingredients/94a919b8d9f8468db4db511fdae0bd8e.png",
	},
	{
		name: "Chili Flocken",
		price: 0.7,
		imageUrl:
			"https://cdn.dodostatic.net/static/Img/Ingredients/095821240e724b8d9103a5b1c0950de1.png",
	},
	{
		name: "Parmesan ",
		price: 2.7,
		imageUrl:
			"https://cdn.dodostatic.net/static/Img/Ingredients/504371722e764fa9944b11708f079d1c.png",
	},
].map((obj, index) => ({ id: index + 1, ...obj }));
