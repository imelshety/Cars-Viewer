
import PropTypes from "prop-types";
import classNames from "classnames";

const InfoSpan = ({ children, className }) => {
  return (
    <span
      className={classNames(
        "bg-[#1572d31a] rounded border border-[#1572d31a] px-3 py-2 text-pramiry-400",
        className
      )}
    >
      {children}
    </span>
  );
};

InfoSpan.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default InfoSpan;
