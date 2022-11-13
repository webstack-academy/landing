import { Ref } from './ref.interface';

export interface MailchipFormProps extends Ref {
  EMAIL: string;
  FNAME: string;
  LNAME: string;
  PHONE: string;
  STUDENTREF?: string;
  SPONSORREF?: string;
}

export interface SubscribeCallbackParams extends MailchipFormProps {}
