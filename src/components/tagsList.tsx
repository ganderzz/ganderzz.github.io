import React from "react";
import { Link } from "gatsby";

interface IProps {
  tags: string[];
  style?: React.CSSProperties;
  className?: string;
}

export function TagsList({ tags = [], style = {}, ...rest }: IProps) {
  return (
    <span style={style} {...rest}>
      {tags.map((tag) => (
        <Link
          key={tag}
          to={`/tags/${tag}`}
          className={`inline-block hover:bg-gray-400 hover:text-gray-800 bg-gray-300 text-gray-800 border-0 scale-100 transform hover:scale-105 rounded-full px-3 py-1 text-sm font-semibold m-2 leading-5 transition ease-out duration-200`}
        >
          {tag}
        </Link>
      ))}
    </span>
  );
}
