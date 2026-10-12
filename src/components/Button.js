import Link from "next/link";

export default function Button({ href, children, variant = "primary", external = false, ...rest }) {
  const className = `btn btn-${variant}`;
  if (external) {
    return (
      <a href={href} className={className} target="_blank" rel="noopener noreferrer" {...rest}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={className} {...rest}>
      {children}
    </Link>
  );
}
