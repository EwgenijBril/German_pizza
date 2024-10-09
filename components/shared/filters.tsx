import React from "react";
import { Title } from "./title";
import { FilterCheckbox } from "./filter_checkbox";
import { Input } from "@/components/ui";

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
				<p className="font-bold mb-3">Preis von und bis:</p>
				<div className="flex gap-3 mb-5">
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
			</div>
		</div>
	);
};
