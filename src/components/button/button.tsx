import { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  text: string;
};

const Button = (props: ButtonProps) => {
  const { text, ...rest } = props;

  return (
    <button
      className="bg-blue-500 text-white rounded active:scale-105 transition duration-300 py-2 px-5"
      {...rest}
    >
      {text}
    </button>
  );
};

export default Button;
