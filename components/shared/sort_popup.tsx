import { cn } from "@/lib/utils";
import React from "react";
import { ArrowUpDown } from "lucide-react";

interface Props {
	className?: string;
}

export const SortPopup: React.FC<Props> = ({
	className,
}) => {
	return (
		<div
			className={cn(
				"inline-flex items-center gap-1 bg-gray-50 px-5 h-[52px] rounded-2xl cursor-pointer",
				className,
			)}
		>
			<ArrowUpDown size={16} />
			<b>Filter:</b>
			<b className="text-primary px-1">beliebte</b>
		</div>
	);
};
