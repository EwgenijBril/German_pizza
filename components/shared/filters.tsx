import React from "react";
import { Title } from "./title";
import { FilterCheckbox } from "./filter_checkbox";
import { Input } from "@/components/ui";
import { RangeSlider } from "./range_slider";
import { CheckboxFiltersGroup } from "./checkbox_filters_group";

interface Props {
	className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
	return (
		<div className={className}>
			<Title
				text="Filter"
				size="sm"
				className="mb-5 font-bold"
			/>

			<div className="flex flex-col gap-4">
				<FilterCheckbox text="Man kann sammeln" value="1" />
				<FilterCheckbox text="Neuheiten" value="2" />
			</div>

			<div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
				<p className="mb-3 font-bold">Preis von und bis:</p>
				<div className="mb-5 flex gap-3">
					<Input
						type="number"
						placeholder="0"
						min={0}
						max={100}
						defaultValue={0}
					/>
					<Input
						type="number"
						placeholder="100"
						min={8}
						max={100}
					/>
				</div>
				<RangeSlider
					min={0}
					max={100}
					step={1}
					value={[0, 100]}
				/>
			</div>
			<CheckboxFiltersGroup
				title="Zutaten"
				className="mt-5"
				limit={6}
				defaultItems={[
					{
						text: "Käse-Sauce",
						value: "1",
					},
					{
						text: "Mozzarella",
						value: "2",
					},
					{
						text: "Knoblauch",
						value: "3",
					},
					{
						text: "Essiggurken",
						value: "4",
					},
					{
						text: "Rote Zwiebel",
						value: "5",
					},
					{
						text: "Tomaten",
						value: "6",
					},
				]}
				items={[
					{
						text: "Käse-Sauce",
						value: "1",
					},
					{
						text: "Mozzarella",
						value: "2",
					},
					{
						text: "Knoblauch",
						value: "3",
					},
					{
						text: "Essiggurken",
						value: "4",
					},
					{
						text: "Rote Zwiebel",
						value: "5",
					},
					{
						text: "Tomaten",
						value: "6",
					},
					{
						text: "Papierroni",
						value: "7",
					},
					{
						text: "Olive",
						value: "8",
					},
					{
						text: "Meeresfrüchte",
						value: "9",
					},
					{
						text: "Ananas",
						value: "10",
					},
					{
						text: "Zwiebel",
						value: "11",
					},
					{
						text: "Wurst",
						value: "12",
					},
				]}
			/>
		</div>
	);
};
