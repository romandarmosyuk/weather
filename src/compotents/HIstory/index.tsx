import "./data";
import { Wrapper } from "../Wrapper";
import cls from "./index.module.scss";
import { dataHistory } from "./data";

export const History = () => {
  return (
    <Wrapper>
      <div className={cls.history}>
        {dataHistory.map((data) => (
          <div className={cls.card} key={data.id}>
            <span className={cls.name}>{data.name}</span>
            <span className={cls.value}>{data.value}</span>
          </div>
        ))}
      </div>
    </Wrapper>
  );
};
