import "@radix-ui/themes/styles.css";
import { TextField } from "@radix-ui/themes";
import searchIcon from "../../assets/images/icon-search.svg";
import "./searchInput.css";

export function SearchInput() {
  return (
    <TextField.Root
      placeholder="Write down which information you are looking for"
      className="search-field"
    >
      <TextField.Slot side="right" className="search-icon-container">
        <img src={searchIcon} alt="" />
      </TextField.Slot>
    </TextField.Root>
  );
}
