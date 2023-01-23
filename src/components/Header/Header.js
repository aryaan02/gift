import HeaderTitle from "./HeaderTitle";
import HeaderNav from "./HeaderNav";
import classes from './Header.module.css';

const Header = (props) => {
  return (
    <div className={classes.header}>
      <HeaderTitle />
      <HeaderNav onSetImages={props.onSetImages} onSetMessages={props.onSetMessages} />
    </div>
  );
};

export default Header;
