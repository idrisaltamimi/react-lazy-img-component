import React, { useState } from "react"
import "./ImageComponent.css"

type ImageProps = {
  src: string
  placeholderSrc: string
  className?: string
  imageClass?: string
  loader?: string
} & React.DetailedHTMLProps<
  React.ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
>

export default function ImageComponent({
  src,
  placeholderSrc,
  className = "",
  imageClass = "",
  loader = "",
  ...props
}: ImageProps) {
  const [imageLoaded, setImageLoaded] = useState(false)

  const handleLoadingImage = () => {
    setImageLoaded(true)
  }
  return (
    <div
      className={`image-loader-wrapper-class ${className} ${
        loader === "pulse" ? "pulse-loader-class" : "spinner-loader-class"
      }`}
      data-image-loaded={imageLoaded}
    >
      <img
        src={placeholderSrc}
        {...props}
        className={`image-small-element-class ${imageClass}`}
        data-image-loaded={imageLoaded}
        loading="eager"
      />
      <img
        className={`image-element-class ${imageClass}`}
        src={src}
        {...props}
        data-image-loaded={imageLoaded}
        loading="lazy"
        onLoad={handleLoadingImage}
      />
      <div className="image-loader-element-class1" />
    </div>
  )
}
