"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { useCategoryStore } from "@/store/category";

interface Props {
	className?: string;
}

const cats = [
	{ id: 1, name: "Pizza" },
	{ id: 2, name: "Combo" },
	{ id: 3, name: "Snacks" },
	{ id: 4, name: "Nachspeise" },
	{ id: 5, name: "Saucen" },
	{ id: 6, name: "Getränke" },
];

export const Categories: React.FC<Props> = ({
	className,
}) => {
	const categoryActiveId = useCategoryStore(
		state => state.activeId,
	);
	return (
		<div
			className={cn(
				"inline-flex gap-1 rounded-2xl bg-gray-50 p-1",
				className,
			)}
		>
			{cats.map(({ name, id }, index) => (
				<a
					className={cn(
						"flex h-11 items-center rounded-2xl px-5 font-bold",
						categoryActiveId === id &&
							"bg-white text-primary shadow-md shadow-gray-200",
					)}
					href={`/#${name}`}
					key={index}
				>
					<button>{name}</button>
				</a>
			))}
		</div>
	);
};
