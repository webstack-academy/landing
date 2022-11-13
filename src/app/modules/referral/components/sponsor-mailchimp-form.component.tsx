import React, { Component } from 'react';
import MailchimpSubscribe from 'react-mailchimp-subscribe';
import { MailchipEnum } from '../../../common/enum/mailchip.enum';

import 'react-phone-number-input/style.css';
import {
  ContactForm,
  FormPosition,
} from '../../../components/molecules/contact-form.components';
import { Ref } from '../../../common/interfaces/ref.interface';
import {
  generateReferralLink,
  mailchimpSubscribe,
} from '../services/referral/referral.service';
import { SubscribeCallbackParams } from '../../../common/interfaces/mailchimp.interface';

class SponsorMailchimpForm extends Component<
  { formPosition?: FormPosition } & Ref,
  { status: string }
> {
  private readonly subscribeCallback = async (
    params: SubscribeCallbackParams
  ): Promise<void> => {
    try {
      const ref = generateReferralLink({
        firstName: params.FNAME,
        lastName: params.LNAME,
      });

      this.setState({ status: 'sending' });

      await mailchimpSubscribe({ ...params, SPONSORREF: ref });

      this.setState({ status: null });
    } catch (e) {
      console.error(e);
      this.setState({ status: 'error' });
    }
  };

  constructor(public props: { formPosition?: FormPosition } & Ref) {
    super(props);
  }

  render() {
    return (
      <ContactForm
        status={this.state?.status}
        position={this.props?.formPosition}
        callback={this.subscribeCallback}
      />
    );
  }
}

export default SponsorMailchimpForm;
