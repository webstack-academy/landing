import React, { useState } from 'react';
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
  position,
}: ContractFormProps) => {
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    email: '',
    phone: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = () => {
    const { name, lastName, email, phone } = formData;
    
    // Construct mailto URL with pre-filled data
    const subject = encodeURIComponent('Richiesta informazioni - Webstack Academy');
    const body = encodeURIComponent(
      `Salve,\n\nSono interessato/a al corso di Webstack Academy.\n\nEcco i miei dati di contatto:\n\nNome: ${name}\nCognome: ${lastName}\nEmail: ${email}\nTelefono: ${phone}\n\nGrazie per l'attenzione.\n\nCordiali saluti,\n${name} ${lastName}`
    );
    
    const mailtoUrl = `mailto:info@webstackacademy.com?subject=${subject}&body=${body}`;
    
    // Open email client
    window.location.href = mailtoUrl;
  };

  const isFormValid = formData.name && formData.lastName && formData.email && formData.phone;

  return (
    <div
      className={`${position === 'center' ? 'text-center' : 'text-end'} mt-9`}
    >
      {/* Name Input */}
      <input
        type="text"
        placeholder={translate('INPUTS.YOUR_NAME')}
        className="input input-bordered w-full max-w-xs contact-input input-lg"
        style={{ backgroundColor: '#F5F5F5' }}
        value={formData.name}
        onChange={(e) => handleInputChange('name', e.target.value)}
      />
      {/* ./Name Input */}

      {/* Surname Input */}
      <input
        type="text"
        style={{
          marginTop: 24,
          marginBottom: 24,
          backgroundColor: '#F5F5F5',
        }}
        placeholder={translate('INPUTS.YOUR_SURNAME')}
        className="input input-bordered w-full max-w-xs contact-input input-lg"
        value={formData.lastName}
        onChange={(e) => handleInputChange('lastName', e.target.value)}
      />
      {/* ./Surname Input */}

      {/* Email Input */}
      <input
        type="email"
        style={{ backgroundColor: '#F5F5F5' }}
        placeholder={translate('INPUTS.YOUR_EMAIL')}
        className="input input-bordered w-full max-w-xs contact-input input-lg"
        value={formData.email}
        onChange={(e) => handleInputChange('email', e.target.value)}
      />
      {/* ./Email Input */}

      {/* Phone Number Input */}
      <PhoneInput
        style={{ marginTop: 24, backgroundColor: '#F5F5F5', color: '#000' }}
        className={`input input-bordered w-full max-w-xs contact-input input-lg ${
          position === 'center' ? 'mx-auto' : 'ml-auto'
        }`}
        placeholder={translate('INPUTS.YOUR_PHONE')}
        value={formData.phone}
        onChange={(value) => handleInputChange('phone', value || '')}
        defaultCountry="IT"
      />
      {/* ./Phone Number Input */}

      <BigColoredButton
        text={translate('BUTTONS.SUBMIT')}
        style={{
          marginTop: 24,
          backgroundColor: '#265946',
          color: '#fafafa',
          width: '100%',
          opacity: isFormValid ? 1 : 0.6
        }}
        onClick={handleSubmit}
        className={!isFormValid ? 'btn-disabled' : ''}
      />
    </div>
  );
};
