"use client";

import React from "react";
import {
	FilterChecboxProps,
	FilterCheckbox,
} from "./filter_checkbox";
import { Input } from "../ui";

type Item = FilterChecboxProps;

interface Props {
	title: string;
	items: Item[];
	defaultItems?: Item[];
	limit?: number;
	searchInputPlaceholder?: string;
	onChange?: (values: string[]) => void;
	defaultValue?: string[];
	className?: string;
}

export const CheckboxFiltersGroup: React.FC<Props> = ({
	title,
	items,
	// defaultItems,
	// limit = 5,
	searchInputPlaceholder = "Suche...",
	// onChange,
	// defaultValue,
	className,
}) => {
	return (
		<div className={className}>
			<p className="mb-3 font-bold">{title}</p>
			<div className="mb-5">
				<Input
					placeholder={searchInputPlaceholder}
					className="border-none bg-gray-50"
				/>
			</div>

			<div className="scrollbar flex max-h-96 flex-col gap-4 overflow-auto pr-2">
				{items.map((item, index) => (
					<FilterCheckbox
						key={index}
						text={item.text}
						value={item.value}
						endAdornment={item.endAdornment}
						checked={false}
						onCheckedChange={ids => console.log(ids)}
					/>
				))}
			</div>
		</div>
	);
};
