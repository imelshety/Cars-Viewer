
import PropTypes from "prop-types";
import classNames from "classnames";

const MainTitle = ({ children, className }) => {
  return (
    <h2 className={classNames("text-2xl text-center lg:text-5xl font-semibold",className)}>
           {children}
          </h2>
  )
}
MainTitle.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
  };
export default MainTitle