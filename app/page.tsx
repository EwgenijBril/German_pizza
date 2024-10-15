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
				<div className="flex gap-[60px]">
					<div className="w-[250px]">
						<Filters />
					</div>

					<div className="flex-1">
						<div className="flex flex-col gap-16">
							<ProductsGroupList
								title="Pizza"
								items={[
									{
										id: 1,
										name: "Cheeseburger-Pizza",
										imageUrl:
											"https://media.dodostatic.com/image/r:292x292/11EF0286349B277780CB97A8544A6AEC.jpg",
										price: 15.5,
										items: [{ price: 15.5 }],
									},
								]}
								categoryId={1}
							/>
						</div>
					</div>
				</div>
			</Container>
		</>
	);
}
