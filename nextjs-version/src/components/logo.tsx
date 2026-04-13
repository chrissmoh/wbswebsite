import * as React from "react"

interface LogoProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  size?: number
}

export function Logo({ size = 24, className, ...props }: LogoProps) {
  const assetBase = process.env.NEXT_PUBLIC_LARAVEL_ASSET_URL ?? "http://127.0.0.1:8000"
  return (
    <img
      src={`${assetBase}/images/wbs-logo.svg`}
      alt="WBS Logo"
      width={size}
      height={size}
      className={className}
      {...props}
    />
  )
}
