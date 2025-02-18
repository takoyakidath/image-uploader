import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
	CommandSeparator,
} from "@/components/ui/command";

export default function Search() {
	return (
		<>
			<Command>
				<CommandInput placeholder="Type a command or search..." />
				<CommandList>
					<CommandEmpty>No results found.</CommandEmpty>
					<CommandGroup heading="Suggestions">
						<CommandItem>from:</CommandItem>
					</CommandGroup>
					<CommandSeparator />
					<CommandGroup heading="name">
						<CommandItem>id</CommandItem>
						<CommandItem>name</CommandItem>
					</CommandGroup>
				</CommandList>
			</Command>
		</>
	);
}
