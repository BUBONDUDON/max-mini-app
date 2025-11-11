import style from "./button.module.css";

interface ButtonProps {
  text: string;
}

const Button = ({ text }: ButtonProps) => {
  return <button className={style.btn}>{text}</button>;
};

export default Button;
