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
	defaultItems: Item[];
	limit?: number;
	searchInputPlaceholder?: string;
	onChange?: (values: string[]) => void;
	defaultValue?: string[];
	className?: string;
}

export const CheckboxFiltersGroup: React.FC<Props> = ({
	title,
	items,
	defaultItems,
	limit = 5,
	searchInputPlaceholder = "Suche...",
	onChange,
	defaultValue,
	className,
}) => {
	const [showAll, setShowAll] = React.useState(false);
	const [searchValue, setSearchValue] = React.useState("");

	const onChangeSearchInput = (
		e: React.ChangeEvent<HTMLInputElement>,
	) => {
		setSearchValue(e.target.value);
	};

	const list = showAll
		? items.filter(item =>
				item.text
					.toLowerCase()
					.includes(searchValue.toLowerCase()),
			)
		: defaultItems.slice(0, limit);

	return (
		<div className={className}>
			<p className="mb-3 font-bold">{title}</p>
			{showAll && (
				<div className="mb-5">
					<Input
						onChange={onChangeSearchInput}
						placeholder={searchInputPlaceholder}
						className="border-none bg-gray-50"
					/>
				</div>
			)}

			<div className="scrollbar flex max-h-96 flex-col gap-4 overflow-auto pr-2">
				{list.map((item, index) => (
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
			{items.length > limit && (
				<div
					className={
						showAll
							? "mt-4 border-t border-t-neutral-100"
							: ""
					}
				>
					<button
						onClick={() => setShowAll(!showAll)}
						className="mt-3 text-primary"
					>
						{showAll ? "Weniger" : "Weiterlesen..."}
					</button>
				</div>
			)}
		</div>
	);
};
