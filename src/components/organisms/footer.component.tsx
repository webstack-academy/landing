import { translate } from '../../common/helpers/i18n/i18n.helper';
import React from 'react';
import { ConditionsUrl } from '../../common/enum/url.enum';

export const FooterComponent = () => {
  return (
    <div
      className="grid grid-cols-12 footer-anchor"
      style={{ paddingTop: 40, paddingBottom: 40 }}
    >
      <div className="col-span-3">
        <p className="text-lg">{translate('TEXT.COPYRIGHT')}</p>
      </div>

      <div className="col-span-1">
        <p className="text-lg">
          <a target="_blank" href={ConditionsUrl.CookiesPolicy}>
            {translate('TEXT.COOKIES_POLICY')}
          </a>
        </p>
      </div>

      <div className="col-span-1">
        <a target="_blank" href={ConditionsUrl.PrivacyPolicy}>
          <p className="text-lg">{translate('TEXT.PRIVACY_POLICY')}</p>
        </a>
      </div>

      <div className="col-span-2">
        <a target="_blank" href={ConditionsUrl.TermsOfUse}>
          <p className="text-lg">{translate('TEXT.TERMS_OF_USE')}</p>
        </a>
      </div>

      <div className="col-span-5"></div>
    </div>
  );
};
