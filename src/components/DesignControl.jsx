import React from 'react';

const btnClasses = 'btn-floating btn-xlarge waves-effect waves-light';

const DesignControl = ({isActive, onControlClick, spotType}) => {
  const handleClick = e => {
    e.preventDefault();
    onControlClick(spotType);
  };

  let classes = 'design-control';
  if (isActive) {
    classes += ' is-active';
  }

  return (
    <li className={classes}>
      <a className={btnClasses} onClick={handleClick}>
        <i className="material-icons">{spotType.icon}</i>
      </a>
      <span>{spotType.desc}</span>
    </li>
  );
};

DesignControl.propTypes = {

};

export default DesignControl;
