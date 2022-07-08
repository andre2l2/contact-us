import React from "react";

interface LinkToProps {
  text: string;
}

export const LinkTo: React.FC<LinkToProps> = ({ text }) => {
  return <a href="#">{text}</a>;
};
