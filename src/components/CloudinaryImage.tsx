import React from "react";
import { Cloudinary } from "@cloudinary/url-gen";
import { auto } from "@cloudinary/url-gen/actions/resize";
import { autoGravity } from "@cloudinary/url-gen/qualifiers/gravity";
import { AdvancedImage } from "@cloudinary/react";

interface CloudinaryImageProps {
  imagePath: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
}

const CloudinaryImage: React.FC<CloudinaryImageProps> = ({
  imagePath,
  alt,
  width = 500,
  height = 500,
  className,
}) => {
  const cld = new Cloudinary({ cloud: { cloudName: "dcyehziuo" } });

  const img = cld
    .image(imagePath)
    .format("auto")
    .quality("auto")
    .resize(auto().gravity(autoGravity()).width(width).height(height));

  return <AdvancedImage cldImg={img} alt={alt} className={className} />;
};

export default CloudinaryImage;
