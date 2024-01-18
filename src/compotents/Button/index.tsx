import cls from './index.module.scss';

interface ButtonProps {
   children: React.ReactNode;
   className?: string;
   onClick?: () => void;
}

export const Button = ({children, className, onClick}: ButtonProps) => {
   return (
      <button 
         className={ className ? `${ cls.base } ${ className }` : `${ cls.base }`} 
         onClick={ onClick }>
         { children }
      </button>
   )
}