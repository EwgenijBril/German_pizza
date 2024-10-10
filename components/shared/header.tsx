import React from "react";
import Image from "next/image";
import { Container } from "./container";
import { Button } from "../ui";
import { cn } from "@/lib/utils";
import {
	User,
	ShoppingCart,
	ArrowRight,
} from "lucide-react";

interface Props {
	className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
	return (
		<header
			className={cn("border-b border-gray-100", className)}
		>
			<Container className="flex items-center justify-between py-8">
				<div className="flex items-center gap-4">
					<Image
						src="/logo.png"
						width={36}
						height={36}
						alt="Logo"
					/>
					<div>
						<h1 className="text-2xl font-black uppercase">
							Deutsche Pizza
						</h1>
						<p className="text-sm leading-3 text-gray-400">
							besser gehts nicht
						</p>
					</div>
				</div>

				<div className="flex items-center gap-3">
					<Button
						variant="outline"
						className="flex items-center gap-1"
					>
						<User size={16} />
						Anmelden
					</Button>

					<div>
						<Button className="group relative">
							<b>5.20 €</b>
							<span className="mx-3 h-full w-[1px] bg-white/30"></span>
							<div className="flex items-center gap-1 transition duration-300 group-hover:opacity-0">
								<ShoppingCart
									size={16}
									className="relative"
									strokeWidth={2}
								/>
								<b>3</b>
							</div>
							<ArrowRight
								size={20}
								className="absolute right-5 -translate-x-2 opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100"
							/>
						</Button>
					</div>
				</div>
			</Container>
		</header>
	);
};
