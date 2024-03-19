import { Wrapper } from '../Wrapper'
import cls from './index.module.scss'
import { Rain } from '../UI/Rain'
import { WeatherProps } from '../../interface'

interface InfoBlockProps {
  weatherData: WeatherProps
}

export const InfoBlock = ({ weatherData }: InfoBlockProps) => {
  return (
    <Wrapper>
      <div className={cls.infoBlock}>
        <div className={cls.info}>
          <span className={cls.title}>London</span>
          <span className={cls.date}>Sunday 07:09</span>
          <span className={cls.degrees}>12°C</span>
        </div>
        <div className={cls.weather}>
          {weatherData?.weather &&
            weatherData.weather.map((w) => (
              <div className={cls.card} key={w.id}>
                <span className={cls.value}>{w.main}</span>
                <Rain />
                <span className={cls.value}>{w.description}</span>
              </div>
            ))}
        </div>
      </div>
    </Wrapper>
  )
}
