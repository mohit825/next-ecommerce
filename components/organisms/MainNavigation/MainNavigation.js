import Logo from "../../atoms/Logo/Logo";
import Link from "next/link";
import PageLink from "../../atoms/PageLink/PageLink";
import { Header } from "./PageLinkStyle";
import CartContainer from "../../molecules/CartContainer/CartContainer";
import UserActionContainer from "../../molecules/UserActionContainer/UserActionContainer";
const MainNavigation = () => {
  return (
    <Header>
      <Link href="/">
        <a className="logo">
          <Logo />
        </a>
      </Link>
      <nav className="navbar">
        <ul className="nav-link">
          <PageLink>Home</PageLink>
          <PageLink>Products</PageLink>
        </ul>
      </nav>
      <div>
        <UserActionContainer />
        <CartContainer />
      </div>
    </Header>
  );
};

export default MainNavigation;
