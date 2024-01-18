import { Logo } from '../Logo';
import { Wrapper } from '../Wrapper';
import { Button } from '../Button';

import  cls from './index.module.scss';
import { SearchBlock } from '../SearchBlock';

export const Header = () => {
   return (
      <div className={ cls.header }>
         <Wrapper>
            <div className={ cls.container }>
               <Logo/>
               <SearchBlock/>
               <Button className={ cls.buttonTemp }>°C / °F</Button>
            </div>
         </Wrapper>
      </div>
   )
}

