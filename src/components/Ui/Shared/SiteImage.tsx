import Image from "next/image";

interface SiteImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
}

/** Real photography used across the marketing pages, cropped to fill its
 * container — stock imagery until the firm supplies its own assets. */
const SiteImage = ({
  src,
  alt,
  className = "",
  priority = false,
  sizes = "(max-width: 1024px) 100vw, 50vw",
}: SiteImageProps) => (
  <div className={`relative overflow-hidden bg-brand-100 ${className}`}>
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      priority={priority}
      className="object-cover"
    />
  </div>
);

export default SiteImage;
