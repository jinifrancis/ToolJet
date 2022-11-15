import React from 'react';

const Button = ({ children, onClick, darkMode, size = 'sm', classNames = '', styles = {}, disabled = false }) => {
  const baseHeight = size === 'sm' ? 28 : 40;

  const diabledStyles = {
    backgroundColor: '#F1F3F5',
    color: '#C1C8CD',
    cursor: 'not-allowed',
  };

  return (
    <div
      type="button"
      style={{ height: baseHeight, ...styles, ...(disabled ? diabledStyles : {}) }}
      className={`btn base-button m-1 ${darkMode && 'dark'} ${classNames}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

const Content = ({ title = null, iconSrc = null, direction = 'left' }) => {
  const icon = !iconSrc ? '' : <img className="mx-1" src={iconSrc} width="12" height="12" />;
  const btnTitle = !title ? '' : typeof title === 'function' ? title() : <span className="mx-1">{title}</span>;
  const content = direction === 'left' ? [icon, btnTitle] : [btnTitle, icon];

  return content;
};

const UnstyledButton = ({ children, onClick, classNames = '', styles = {} }) => {
  return (
    <div type="button" style={styles} className={`unstyled-button ${classNames}`} onClick={onClick}>
      {children}
    </div>
  );
};

Button.Content = Content;
Button.UnstyledButton = UnstyledButton;

export default Button;