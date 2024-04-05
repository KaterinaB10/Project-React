import "@radix-ui/themes/styles.css";
import { TextField } from "@radix-ui/themes";

export function SearchInput() {
  return (
    <TextField.Root placeholder="Search the docs…">
      <TextField.Slot></TextField.Slot>
    </TextField.Root>
  );
}
