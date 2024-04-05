import Link from "next/link";
import React from "react";
import { BiArrowBack } from "react-icons/bi";

interface TitleProps {
  back?: boolean;
  children: React.ReactNode;
}

const Title = ({ back, children }: TitleProps) => {
  return (
    <div className="flex items-center gap-4">
      {back && (
        <Link className="flex items-center" href={"/"}>
          <BiArrowBack className="h-6 w-6" />
        </Link>
      )}
      <h1 className="mb-4 text-xl font-extrabold leading-none tracking-tight flex-1 text-gray-900 md:text-5xl  dark:text-white">
        <span className="flex items-center h-full">{children}</span>
      </h1>
    </div>
  );
};

export default Title;
