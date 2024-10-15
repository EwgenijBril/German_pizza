import Link from "next/link";
import React from "react";
import { Title } from "./title";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

interface Props {
	id: number;
	name: string;
	price: number;
	imageUrl: string;
	className?: string;
}

export const ProductCard: React.FC<Props> = ({
	id,
	name,
	price,
	imageUrl,
	className,
}) => {
	return (
		<div className={className}>
			<Link href={`/product/${id}`}>
				<div className="flex h-[260px] justify-center rounded-lg bg-secondary p-6">
					<img
						className="h-[216px] w-[216px] rounded-full"
						src={imageUrl}
						alt="Logo"
					/>
				</div>
				<Title
					text={name}
					size="sm"
					className="mb-1 mt-3 font-bold"
				/>

				<p className="text-sm text-gray-400">
					Cherrytomaten, Hackfleisch, Burger-Sauce,
					Mozzarella, Zwiebel frisch, rot, Gurken Burger.
				</p>

				<div className="mt-4 flex items-center justify-between">
					<span className="text-[20px]">
						ab <b>{price} €</b>
					</span>

					<Button
						variant="secondary"
						className="text-base font-bold"
					>
						<Plus size={20} className="mr-1 h-5 w-5" />
						Hinzufügen
					</Button>
				</div>
			</Link>
		</div>
	);
};
