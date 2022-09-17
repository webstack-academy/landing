import React from 'react';
import MailchimpSubscribe from 'react-mailchimp-subscribe';
import { MailchipEnum } from '../../common/enum/mailchip.enum';

import 'react-phone-number-input/style.css';
import {
  ContactForm,
  FormPosition,
} from '../molecules/contact-form.components';

const url = `https://academy.us12.list-manage.com/subscribe/post?u=${MailchipEnum.U}&id=${MailchipEnum.Id}`;

export const MailchimpForm = (props: { formPosition?: FormPosition }) => (
  <MailchimpSubscribe
    url={url}
    render={({ subscribe, status, message }) => (
      <ContactForm
        status={status}
        message={message}
        position={props?.formPosition}
        onValidated={subscribe}
      />
    )}
  />
);
