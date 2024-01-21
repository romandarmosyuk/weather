import { Wrapper } from '../Wrapper';
import cls from './index.module.scss';
import { Weather } from './data';
import { Rain } from '../UI/Rain';

interface InfoBlockProps {
   infoWeather: Weather[];
}

export const InfoBlock = ({ infoWeather }: InfoBlockProps) => {
   return (
      <Wrapper>
         <div className={ cls.infoBlock }>
            <div className={ cls.info }>
               <span className={ cls.title }>London</span>
               <span className={ cls.date }>Sunday 07:09</span>
               <span className={ cls.degrees }>12°C</span>
            </div>
            <div className={ cls.weather }>
               {infoWeather.map((dataWeather) => (
                  <div className={ cls.card } key={ dataWeather.id }>
                     <span className={ cls.value }>{ dataWeather.time }</span>
                     <Rain/>
                     <span className={ cls.value }>{ dataWeather.degrees }</span>
                  </div>
               ))}
            </div>
         </div>
      </Wrapper>
   )
}