import { translate } from '../../common/helpers/i18n/i18n.helper';
import React, { CSSProperties } from 'react';

export const BorderedButton = (props: {
  text: string;
  style?: CSSProperties;
}) => {
  return (
    <button className="btn btn-black contact-btn" style={props.style}>
      {translate(props.text)}
    </button>
  );
};

export const BigColoredButton = (props: {
  text: string;
  style?: CSSProperties;
}) => {
  return (
    <button className="btn btn-lg" style={{ borderRadius: 8, ...props.style }}>
      {translate(props.text)}
    </button>
  );
};
