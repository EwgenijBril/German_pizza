import { cn } from "@/lib/utils";
import React from "react";
import { Container } from "./container";
import { Categories } from "./categories";
import { SortPopup } from "./sort_popup";

interface Props {
	className?: string;
}

export const TopBar: React.FC<Props> = ({ className }) => {
	return (
		<div
			className={cn(
				"sticky top-0 z-10 bg-white py-5 shadow-lg shadow-black/5",
				className,
			)}
		>
			<Container className="flex justify-between">
				<Categories />
				<SortPopup />
			</Container>
		</div>
	);
};
