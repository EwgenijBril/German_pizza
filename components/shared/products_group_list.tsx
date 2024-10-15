import React from "react";
import { Title } from "./title";
import { cn } from "@/lib/utils";
import { ProductCard } from "./product_card";

interface Props {
	title: string;
	items: any[];
	className?: string;
	listClassName?: string;
	categoryId: number;
}

export const ProductsGroupList: React.FC<Props> = ({
	title,
	items,
	listClassName,
	categoryId,
	className,
}) => {
	return (
		<div className={className}>
			<Title
				text={title}
				size="lg"
				className="mb-5 font-extrabold"
			/>

			<div
				className={cn(
					"grid grid-cols-3 gap-12",
					listClassName,
				)}
			>
				{items.map((product, i) => (
					<ProductCard
						key={product.id}
						id={product.id}
						name={product.name}
						imageUrl={product.imageUrl}
						price={product.items[0].price}
					/>
				))}
			</div>
		</div>
	);
};
