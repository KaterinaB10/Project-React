import "@radix-ui/themes/styles.css";
import { TextField } from "@radix-ui/themes";
import searchIcon from "../../assets/images/icon-search.svg";
import { useState } from "react";
import articles from "../../articlesData.json";
import { Article } from "../arlicles/Article";
import "./searchInput.css";

export function SearchInput() {
  const [input, setInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const fetchArticle = (value) => {
    if (value.trim() === "") {
      setSearchResults([]);
    } else {
      const results = articles.articles.filter((article) =>
        article.title.toLowerCase().includes(value.toLowerCase())
      );
      setSearchResults(results);
    }
  };

  const handleChange = (value) => {
    setInput(value), fetchArticle(value);
  };

  return (
    <div>
      <TextField.Root
        placeholder="Write down which information you are looking for"
        className="search-field"
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      >
        <TextField.Slot side="right" className="search-icon-container">
          <img src={searchIcon} alt="" />
        </TextField.Slot>
      </TextField.Root>

      <ul className="search-results">
        {searchResults.map((result) => (
          <li key={result.id}>
            <Article
              title={result.title}
              shortDescription={result.description}
              date={result.createdAt}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
