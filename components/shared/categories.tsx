import React from "react";
import { cn } from "@/lib/utils";

interface Props {
	className?: string;
}

const cats = [
	"Pizzen",
	"Kombos",
	"Snacks",
	"Cocktails",
	"Kaffee",
	"Getränke",
	"Desserts",
];
const activeIndex = 0;

export const Categories: React.FC<Props> = ({
	className,
}) => {
	return (
		<div
			className={cn(
				"inline-flex gap-1 rounded-2xl bg-gray-50 p-1",
				className,
			)}
		>
			{cats.map((cat, index) => (
				<a
					className={cn(
						"flex h-11 items-center rounded-2xl px-5 font-bold",
						activeIndex === index &&
							"bg-white text-primary shadow-md shadow-gray-200",
					)}
					key={index}
				>
					<button>{cat}</button>
				</a>
			))}
		</div>
	);
};
