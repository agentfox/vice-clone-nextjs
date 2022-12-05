import Link from "next/link";
import React from "react";
import { twMerge } from "tailwind-merge";

interface ISocialLinkProps {
  name: string;
  href: string;
  iconSrc: string;
  height: number;
  width: number;
  alt?: string;
  classes?: string;
}

function SocialLink({
  href,
  iconSrc,
  height,
  alt,
  width,
  name,
  classes,
}: ISocialLinkProps) {
  return (
    <li key={name} className={twMerge("flex h-full ", classes)}>
      <Link href={href}>
        <a>
          <img alt={alt} src={iconSrc} height={height} width={width} />
        </a>
      </Link>
    </li>
  );
}

export default SocialLink;
