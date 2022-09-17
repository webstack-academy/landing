import React, { useEffect } from 'react';
import { ContactsUrl } from '../../common/enum/url.enum';
import { translate } from '../../common/helpers/i18n/i18n.helper';
import PhoneInput from 'react-phone-number-input';
import { BigColoredButton } from '../atoms/button.component';

export type FormPosition = 'center' | 'right';

interface ContractFormProps {
  status?: string;
  message?: string;
  onValidated?: (data: any) => void;
  position?: FormPosition;
}

export const ContactForm = ({
  status,
  message,
  onValidated,
  position,
}: ContractFormProps) => {
  let email;
  let name;
  let lastName;
  let phone;

  const submit = () => {
    if (status !== 'sending') {
      return onValidated({
        EMAIL: email.value,
        FNAME: name.value,
        LNAME: lastName.value,
        PHONE: phone,
      });
    }
  };

  useEffect(() => {
    if (status === 'success') {
      window.location.href = ContactsUrl.Calendly;
    }
  });

  return (
    <div
      className={`${position === 'center' ? 'text-center' : 'text-end'} mt-9`}
    >
      {/* Name Input */}
      <input
        type="text"
        placeholder={translate('INPUTS.YOUR_NAME')}
        className="input input-bordered w-full max-w-xs contact-input input-lg"
        ref={(node) => (name = node)}
      />
      {/* ./Name Input */}

      {/* Surname Input */}
      <input
        type="text"
        style={{
          marginTop: 24,
          marginBottom: 24,
        }}
        placeholder={translate('INPUTS.YOUR_SURNAME')}
        className="input input-bordered w-full max-w-xs contact-input input-lg"
        ref={(node) => (lastName = node)}
      />
      {/* ./Surname Input */}

      {/* Email Input */}
      <input
        type="email"
        placeholder={translate('INPUTS.YOUR_EMAIL')}
        className="input input-bordered w-full max-w-xs contact-input input-lg"
        ref={(node) => (email = node)}
      />
      {/* ./Email Input */}

      {/* Phone Number Input */}
      <PhoneInput
        style={{ marginTop: 24 }}
        className={`input input-bordered w-full max-w-xs contact-input input-lg ${
          position === 'center' ? 'mx-auto' : 'ml-auto'
        }`}
        placeholder={translate('INPUTS.YOUR_PHONE')}
        value={phone}
        onChange={(data) => {
          console.log(data);
          phone = data;
        }}
        defaultCountry="IT"
      />
      {/* ./Phone Number Input */}

      {status === 'error' && (
        <p className="text-md mt-4 text-red-700">
          😭 {translate('TEXT.SIGN_FORM_ERROR')}
        </p>
      )}

      <BigColoredButton
        text={translate('BUTTONS.SUBMIT')}
        style={{
          marginTop: 24,
          backgroundColor: '#fff',
          color: '#000',
        }}
        onClick={submit}
        className={status === 'sending' ? 'loading btn-disabled' : null}
      />
    </div>
  );
};
