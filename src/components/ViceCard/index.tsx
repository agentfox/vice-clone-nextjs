import React from "react";
import { twMerge } from "tailwind-merge";

interface ICardProps {
  children: React.ReactNode;
  classes?: string;
}

function ViceCard(props: ICardProps) {
  return (
    <div className={twMerge("flex ", props.classes)}>{props.children}</div>
  );
}

export default ViceCard;
