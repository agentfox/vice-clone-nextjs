import type { ImageProps } from "next/image";
import Image from "next/image";
import React from "react";

interface IViceCardImageProps extends ImageProps {
  containerClasses?: string;
}

class ViceCardImage extends React.Component<IViceCardImageProps> {
  render() {
    const { containerClasses, alt, ...props } = this.props;
    return (
      <div className={`min-w-pix150 ${containerClasses || ""}`}>
        <Image alt={alt} {...props} />
      </div>
    );
  }
}

export default ViceCardImage;
