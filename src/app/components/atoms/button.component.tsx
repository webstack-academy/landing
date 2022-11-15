import { translate } from '../../common/helpers/i18n/i18n.helper';
import React, { CSSProperties } from 'react';

export const BorderedButton = (props: {
  text: string;
  style?: CSSProperties;
  onClick?: () => void;
}) => {
  return (
    <button
      onClick={() => props?.onClick()}
      className="btn btn-lg contact-btn"
      style={props.style}
    >
      {translate(props.text)}
    </button>
  );
};

export const BigColoredButton = (props: {
  text: string;
  style?: CSSProperties;
  className?: string;
  onClick?: () => void;
}) => {
  return (
    <button
      onClick={() => props?.onClick()}
      className={`btn btn-lg ${props?.className}`}
      style={{ borderRadius: 8, ...props.style }}
    >
      {translate(props.text)}
    </button>
  );
};
