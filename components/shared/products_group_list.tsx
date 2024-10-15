"use client";

import React from "react";
import { useIntersection } from "react-use";
import { useCategoryStore } from "@/store/category";
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
	const setActiveCategoryId = useCategoryStore(
		state => state.setActiveId,
	);
	const intersectionRef = React.useRef(null);
	const intersection = useIntersection(intersectionRef, {
		threshold: 0.4,
	});

	React.useEffect(() => {
		if (intersection?.isIntersecting) {
			setActiveCategoryId(categoryId);
		}
	}, [categoryId, intersection?.isIntersecting, title]);

	return (
		<div
			className={className}
			id={title}
			ref={intersectionRef}
		>
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
