import { Icon } from '../UI/Icon/index';

import cls from './index.module.scss';

export const Logo = () => {
   return (
      <div className={ cls.logo }>
         <Icon/>
         <span className={ cls.title }>WeatherApp</span>
      </div>
   )
}