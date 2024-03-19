import { Wrapper } from '../Wrapper'
import { measure } from './data'
import cls from './index.module.scss'

export const Measurements = () => {
  return (
    <div className={cls.measurements}>
      <Wrapper>
        <div className={cls.container}>
          {measure.map((data) => (
            <div className={cls.card} key={data.id}>
              <span className={cls.name}>{data.name}</span>
              <span className={cls.value}>{data.value}</span>
            </div>
          ))}
        </div>
      </Wrapper>
    </div>
  )
}
