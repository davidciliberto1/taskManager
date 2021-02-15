import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title, onAdd }) => {
  const onClick= () => {
    console.log('cliquiiiiii,,.,.,.')
  }
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button color="red" text="Add" onClick={onClick} />
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker...",
};
Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
