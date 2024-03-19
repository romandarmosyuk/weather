import { Dispatch, SetStateAction } from "react";
import { Button } from "../Button";
// import { HeaderProps } from "../Header";
import { Input } from "../Input";
import { Search } from "../UI/Search";

import cls from "./index.module.css";

interface SearchProps {
  search: string;
  onChange: Dispatch<SetStateAction<string>>;
  onSubmit: () => void;
}

export const SearchBlock = ({ search, onChange, onSubmit }: SearchProps) => {
  return (
    <form
      className={cls.boxSearch}
      onSubmit={(evt) => {
        evt.preventDefault();
        onSubmit();
      }}
    >
      <Input
        value={search}
        onChange={(evt) => onChange(evt.target.value)}
        className={cls.inputSearch}
      />
      <Button className={cls.buttonSearch}>
        <Search />
      </Button>
    </form>
  );
};
