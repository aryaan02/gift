import HeaderTitle from "./HeaderTitle";
import HeaderNav from "./HeaderNav";
import classes from './Header.module.css';

const Header = () => {
  return (
    <div className={classes.header}>
      <HeaderTitle />
      <HeaderNav />
    </div>
  );
};

export default Header;
