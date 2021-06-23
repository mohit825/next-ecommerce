import PageLink from "../../ui/PageLink";

const UserActionContainer = () => {
  return (
    <nav>
      <ul className="nav-link action">
        <PageLink>SignIn</PageLink>
        <PageLink>Register</PageLink>
      </ul>
    </nav>
  );
};

export default UserActionContainer;
