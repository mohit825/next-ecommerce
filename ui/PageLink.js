import Link from "next/link";
const PageLink = ({ children }) => {
  const childrenLink = children.toLowerCase();
  return (
    <li>
      {children === "Home" ? (
        <Link href="/">{children}</Link>
      ) : (
        <Link href={`/${childrenLink}`}>{children}</Link>
      )}
    </li>
  );
};

export default PageLink;
