import Image from "next/image";
import { ReactNode } from "react";
import { Button as ButtonComponent } from "../button";

type MediaProps = {
  imgUrl: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
};

type ChildrenProps = {
  children: ReactNode;
};

type TitleProps = {
  title: string;
};

type TextProps = {
  text: string;
};

export const Card = ({ children }: ChildrenProps) => {
  return (
    <div className="shadow-sm w-[300px] h-full rounded-md hover:scale-[102%] transition ease-in-out cursor-pointer">
      {children}
    </div>
  );
};

export const Media = ({
  width,
  alt,
  className,
  imgUrl,
  height,
}: MediaProps) => {
  return (
    <div>
      <Image
        src={imgUrl}
        alt={alt}
        width={width}
        height={height}
        className={`${className} rounded-md`}
      />
    </div>
  );
};

export const Body = ({ children }: ChildrenProps) => {
  return <div className="p-2 border flex flex-col gap-2">{children}</div>;
};

export const Header = ({ children }: ChildrenProps) => {
  return <div>{children}</div>;
};

export const Title = ({ title }: TitleProps) => {
  return (
    <div>
      <h2 className="text-xl font-bold">{title}</h2>
    </div>
  );
};

export const Text = ({ text }: TextProps) => {
  return (
    <div>
      <p className="text-gray-800 text-sm">{text}</p>
    </div>
  );
};

export const Button = ({ text }: TextProps) => {
  return (
    <div className="py-2">
      <ButtonComponent text={text} />
    </div>
  );
};
