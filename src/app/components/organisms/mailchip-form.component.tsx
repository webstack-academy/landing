import React from 'react';

import 'react-phone-number-input/style.css';
import {
  ContactForm,
  FormPosition,
} from '../molecules/contact-form.components';

export const MailchimpForm = (props: { formPosition?: FormPosition }) => (
  <ContactForm
    position={props?.formPosition}
  />
);
