import { Logo } from '../Logo';
import { Wrapper } from '../Wrapper';
import { Button } from '../Button';

import  cls from './index.module.scss';
import { SearchBlock } from '../SearchBlock';
import { Dispatch, SetStateAction } from 'react';

export interface HeaderProps {
   search: string;
   onChange: Dispatch<SetStateAction<string>>;
   onSubmit: () => void;
}

export const Header = ({search, onChange, onSubmit}: HeaderProps) => {
   return (
      <div className={ cls.header }>
         <Wrapper>
            <div className={ cls.container }>
               <Logo/>
               <SearchBlock search={ search }  onChange={ onChange} onSubmit={onSubmit} />
               <Button className={ cls.buttonTemp }>°C / °F</Button>
            </div>
         </Wrapper>
      </div>
   )
}

