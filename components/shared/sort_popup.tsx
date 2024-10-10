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
				"inline-flex h-[52px] cursor-pointer items-center gap-1 rounded-2xl bg-gray-50 px-5",
				className,
			)}
		>
			<ArrowUpDown size={16} />
			<b>Filter:</b>
			<b className="px-1 text-primary">beliebte</b>
		</div>
	);
};
