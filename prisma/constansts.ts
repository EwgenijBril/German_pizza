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

export const products = [
	{
		name: "Omelett mit Schinken und Pilzen",
		imageUrl:
			"https://media.dodostatic.net/image/r:292x292/11EE7970321044479C1D1085457A36EB.webp",
		categoryId: 2,
	},
	{
		name: "Peperoni-Omelett",
		imageUrl:
			"https://media.dodostatic.net/image/r:292x292/11EE94ECF33B0C46BA410DEC1B1DD6F8.webp",
		categoryId: 2,
	},
	{
		name: "Latte Macchiato",
		imageUrl:
			"https://media.dodostatic.net/image/r:292x292/11EE7D61B0C26A3F85D97A78FEEE00AD.webp",
		categoryId: 2,
	},
	{
		name: "Schinken mit Käse",
		imageUrl:
			"https://media.dodostatic.net/image/r:292x292/11EE796FF0059B799A17F57A9E64C725.webp",
		categoryId: 3,
	},
	{
		name: "Hühnernuggets",
		imageUrl:
			"https://media.dodostatic.net/image/r:292x292/11EE7D618B5C7EC29350069AE9532C6E.webp",
		categoryId: 3,
	},
	{
		name: "Leberkartoffeln mit Soße 🌱",
		imageUrl:
			"https://media.dodostatic.net/image/r:292x292/11EED646A9CD324C962C6BEA78124F19.webp",
		categoryId: 3,
	},
	{
		name: "Dodster",
		imageUrl:
			"https://media.dodostatic.net/image/r:292x292/11EE796F96D11392A2F6DD73599921B9.webp",
		categoryId: 3,
	},
	{
		name: "Scharfsinniger Dodster 🌶️🌶️",
		imageUrl:
			"https://media.dodostatic.net/image/r:292x292/11EE796FD3B594068F7A752DF8161D04.webp",
		categoryId: 3,
	},
	{
		name: "Bananenmilchshake",
		imageUrl:
			"https://media.dodostatic.net/image/r:292x292/11EEE20B8772A72A9B60CFB20012C185.webp",
		categoryId: 4,
	},
	{
		name: "Karamellapfelmilchshake",
		imageUrl:
			"https://media.dodostatic.net/image/r:292x292/11EE79702E2A22E693D96133906FB1B8.webp",
		categoryId: 4,
	},
	{
		name: "Milchshake 👶",
		imageUrl:
			"https://media.dodostatic.net/image/r:292x292/11EE796F93FB126693F96CB1D3E403FB.webp",
		categoryId: 4,
	},
	{
		name: "Irischer Cappuccino",
		imageUrl:
			"https://media.dodostatic.net/image/r:292x292/11EE7D61999EBDA59C10E216430A6093.webp",
		categoryId: 5,
	},
	{
		name: "Kokos Latte",
		imageUrl:
			"https://media.dodostatic.net/image/r:292x292/11EE7D61B19FA07090EE88B0ED347F42.webp",
		categoryId: 5,
	},
	{
		name: "Americano",
		imageUrl:
			"https://media.dodostatic.net/image/r:292x292/11EE7D61B044583596548A59078BBD33.webp",
		categoryId: 5,
	},
];
