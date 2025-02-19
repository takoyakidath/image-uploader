"use client";
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
	CommandSeparator,
} from "@/components/ui/command";
import { useState } from "react";

export default function Search() {
	const [isFocused, setIsFocused] = useState(false);

	return (
		<Command>
			<CommandInput
				placeholder="Type a command or search..."
				onFocus={() => setIsFocused(true)}
				onBlur={() => setIsFocused(false)}
			/>
			<CommandList>
				{isFocused && (
					<>
						<CommandEmpty>No results found.</CommandEmpty>
						<CommandGroup heading="Suggestions">
							<CommandItem>from:</CommandItem>
						</CommandGroup>
						<CommandSeparator />
						<CommandGroup heading="name">
							<CommandItem>id</CommandItem>
							<CommandItem>name</CommandItem>
						</CommandGroup>
					</>
				)}
			</CommandList>
		</Command>
	);
}
