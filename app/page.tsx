import { Container, Title } from "@/components/shared";
import { TopBar } from "@/components/shared";
import { Filters } from "@/components/shared";
import { ProductsGroupList } from "@/components/shared";

export default function Home() {
	return (
		<>
			<Container className="mt-10">
				<Title
					text="Alle Pizzen"
					size="lg"
					className="font-extrabold"
				/>
			</Container>
			<TopBar />

			<Container className="mt-10 pb-14">
				<div className="flex gap-20">
					<div className="w-[250px]">
						<Filters />
					</div>

					<div className="flex-1">
						<div className="flex flex-col gap-16">
							<ProductsGroupList
								title="Pizza"
								categoryId={1}
								items={[
									{
										id: 1,
										name: "Dodo-Pizza",
										imageUrl:
											"https://media.dodostatic.com/image/r:292x292/11EF02823DBA2CB09EE4F90CBC5E227A.jpg",
										price: 14.9,
										items: [{ price: 14.9 }],
									},
									{
										id: 2,
										name: "Mexican",
										imageUrl:
											"https://media.dodostatic.com/image/r:292x292/11EF0286069492BA911C4D3B3376436C.jpg",
										price: 14.9,
										items: [{ price: 14.9 }],
									},
									{
										id: 3,
										name: "Cheeseburger-Pizza",
										imageUrl:
											"https://media.dodostatic.com/image/r:292x292/11EF0286349B277780CB97A8544A6AEC.jpg",
										price: 15.5,
										items: [{ price: 15.5 }],
									},
									{
										id: 4,
										name: "Grill Veggie",
										imageUrl:
											"https://media.dodostatic.com/image/r:292x292/11EF028659F4831082FB3FF274D0B999.jpg",
										price: 14.9,
										items: [{ price: 14.9 }],
									},
									{
										id: 5,
										name: "Cheeses",
										imageUrl:
											"https://media.dodostatic.com/image/r:292x292/11EE7D5DA07719C9B2AE7FDF4E95727B.jpg",
										price: 13.9,
										items: [{ price: 13.9 }],
									},
									{
										id: 6,
										name: "Tonno",
										imageUrl:
											"https://media.dodostatic.com/image/r:292x292/11EE7D5D9F2B5C87994E3CB04FE04B89.jpg",
										price: 13.9,
										items: [{ price: 13.9 }],
									},
								]}
							/>

							<ProductsGroupList
								categoryId={2}
								title="Combo"
								items={[
									{
										id: 1,
										name: "2 Desserts",
										imageUrl:
											"https://media.dodostatic.com/image/r:292x292/11EF2409A44145FE8CED857B24C73D7B.jpg",
										price: 8,
										items: [{ price: 8 }],
									},
									{
										id: 2,
										name: "4 Dodsters & Starters",
										imageUrl:
											"https://media.dodostatic.com/image/r:292x292/11EF249D383D2BFAB954AA0706F6095A.jpg",
										price: 22,
										items: [{ price: 22 }],
									},
								]}
							/>

							<ProductsGroupList
								categoryId={3}
								title="Snacks"
								items={[
									{
										id: 1,
										name: "Kartoffelgratin Bacon",
										imageUrl:
											"https://media.dodostatic.com/image/r:292x292/11EE796DDB9806EDBAD7B7F9E23A92DF.jpg",
										price: 9.5,
										items: [{ price: 9.5 }],
									},
									{
										id: 2,
										name: "Pasta Bolognese",
										imageUrl:
											"https://media.dodostatic.com/image/r:292x292/11EE796DEAEBF4C999CD2CBE3E5A3D3B.jpg",
										price: 10.9,
										items: [{ price: 10.9 }],
									},
									{
										id: 3,
										name: "Chicken Strips",
										imageUrl:
											"https://media.dodostatic.com/image/r:292x292/11EE796DDBD3F54BB198369F6065770B.jpg",
										price: 15.5,
										items: [{ price: 15.5 }],
									},
								]}
							/>
							<ProductsGroupList
								categoryId={4}
								title="Nachspeise"
								items={[
									{
										id: 1,
										name: "Tartufo Eis ",
										imageUrl:
											"https://media.dodostatic.com/image/r:292x292/11EF2407B54BF49E8C1B6CCC63AFEF3C.jpg",
										price: 4.5,
										items: [{ price: 4.5 }],
									},
									{
										id: 2,
										name: "Ananas-Zimt-Röllchen",
										imageUrl:
											"https://media.dodostatic.com/image/r:292x292/11EF02829F8499919E1331B852953030.jpg",
										price: 5.9,
										items: [{ price: 5.9 }],
									},
									{
										id: 3,
										name: "Tiroler Apfel-Donut",
										imageUrl:
											"https://media.dodostatic.com/image/r:292x292/11EF24079FE0E9CCB3D177F1727C4522.jpg",
										price: 5.9,
										items: [{ price: 5.9 }],
									},
								]}
							/>
							<ProductsGroupList
								categoryId={5}
								title="Saucen"
								items={[
									{
										id: 1,
										name: "Dip Sweet&Sour",
										imageUrl:
											"https://media.dodostatic.com/image/r:292x292/11EE796DDA9AA0A3B984837C436C5957.jpg",
										price: 1,
										items: [{ price: 1 }],
									},
									{
										id: 2,
										name: "Dip BBQ",
										imageUrl:
											"https://media.dodostatic.com/image/r:292x292/11EE796DD3D532C6A890DF236B86CBED.jpg",
										price: 1.40,
										items: [{ price: 1.40 }],
									},
									{
										id: 3,
										name: "Aioli Dip",
										imageUrl:
											"https://media.dodostatic.com/image/r:292x292/11EE796DE5EE8445BD823C74207A22C9.jpg",
										price: 1.40,
										items: [{ price: 1.40 }],
									},
								]}
							/>

<ProductsGroupList
								categoryId={6}
								title="Getränke"
								items={[
									{
										id: 1,
										name: "ViO Schorle Apfel ",
										imageUrl:
											"https://media.dodostatic.com/image/r:292x292/11EE796DD511B091BC602E6B830FB2D9.jpg",
										price: 1,
										items: [{ price: 1 }],
									},
									{
										id: 2,
										name: "ViO Still ",
										imageUrl:
											"https://media.dodostatic.com/image/r:292x292/11EE796DD4CE801D8C8E0FE5F8FB5E77.jpg",
										price: 3.30,
										items: [{ price: 3.30 }],
									},
									{
										id: 3,
										name: "Aperol Spritz 175 ml",
										imageUrl:
											"https://media.dodostatic.com/image/r:292x292/11EF2406E9CA20239964879E2FD9FC03.jpg",
										price: 4.90,
										items: [{ price: 4.90 }],
									},
								]}
							/>
						</div>
					</div>
				</div>
			</Container>
		</>
	);
}
