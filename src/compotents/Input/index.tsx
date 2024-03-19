import cls from "./index.module.scss";

interface InputProps {
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  className?: string;
  autoFocus?: React.HTMLAttributes<HTMLInputElement>;
}

export const Input = ({ className, value, onChange }: InputProps) => {
  return (
    <input
      type="text"
      name="search"
      className={className ? `${cls.base} ${className}` : `${cls.base}`}
      value={value}
      onChange={onChange}
    />
  );
};
