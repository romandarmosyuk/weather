import { Button } from "../Button"
import { Input } from "../Input"
import { Search } from "../UI/Search"

import  cls from './index.module.css';

export const SearchBlock = () => {
   return (
      <div className={ cls.boxSearch }>
         <Input className={ cls.inputSearch }/>
         <Button className={ cls.buttonSearch }>
            <Search/>
         </Button>
      </div>
   )
}