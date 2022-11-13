import { createShortId } from '../../../../common/helpers/crypto/crypto.helper';
import { SubscribeCallbackParams } from '../../../../common/interfaces/mailchimp.interface';
import { MailchimpSubscription } from 'mailchimp-subscription-library';
import { MailchipEnum } from '../../../../common/enum/mailchip.enum';
// @ts-ignore
import jsonp from 'jsonp';
import toQueryString from 'to-querystring';

const url = `https://academy.us12.list-manage.com/subscribe/post?u=${MailchipEnum.U}&id=${MailchipEnum.Id}`;

export const generateReferralLink = (params: {
  firstName: string;
  lastName: string;
}): string => {
  return `${params.firstName}.${params.lastName}.${createShortId()}`;
};

export const mailchimpSubscribe = async (
  params: SubscribeCallbackParams
): Promise<void> => {
  const mailchimpSubscription = new MailchimpSubscription(url);
  await mailchimpSubscription.subscribe({
    EMAIL: 'b3nder@tutanota.com',
    FNAME: 'Bender',
    LNAME: 'Rodriguez',
    PHONE: '39234234222',
    SPONSORREF: 'sadf.mark.oKCpRfgWy',
  });

  // return new Promise((resolve, reject) => {
  //   const query = toQueryString({
  //     EMAIL: 'b3nder@tutanota.com',
  //     FNAME: 'Bender',
  //     LNAME: 'Rodriguez',
  //     PHONE: '39234234222',
  //     SPONSORREF: 'sadf.mark.oKCpRfgWy',
  //   });
  //   console.log('asdasd', query);
  //   jsonp(
  //     `${url}&${query}`,
  //     {
  //       param: 'c',
  //     },
  //     (err, data) => {
  //       if (err) {
  //         reject(err);
  //       } else {
  //         resolve(data);
  //       }
  //     }
  //   );
  // });
};
