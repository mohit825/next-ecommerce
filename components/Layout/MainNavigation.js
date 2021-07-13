import Logo from "./Logo";
import Link from "next/link";
import PageLink from "../../ui/PageLink";
import { Header } from "../../styles/PageLinkStyle";
import CartContainer from "./CartContainer";
import UserActionContainer from "./UserActionContainer";
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
