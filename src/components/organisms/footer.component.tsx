import { translate } from '../../common/helpers/i18n/i18n.helper';
import React from 'react';
import { ConditionsUrl } from '../../common/enum/url.enum';

export const FooterComponent = () => {
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-12 xl:grid-cols-12 2xl:grid-cols-12 footer-anchor footer-container"
      style={{ paddingTop: 40, paddingBottom: 40 }}
    >
      <div className="col-span-3">
        <p className="text-lg">{translate('TEXT.COPYRIGHT')}</p>
      </div>

      <div className="col-span-2">
        <p className="text-lg">
          <a
            target="_blank"
            href={ConditionsUrl.CookiesPolicy}
            rel="noreferrer"
          >
            {translate('TEXT.COOKIES_POLICY')}
          </a>
        </p>
      </div>

      <div className="col-span-2">
        <a target="_blank" href={ConditionsUrl.PrivacyPolicy} rel="noreferrer">
          <p className="text-lg">{translate('TEXT.PRIVACY_POLICY')}</p>
        </a>
      </div>

      <div className="col-span-2">
        <a target="_blank" href={ConditionsUrl.TermsOfUse}>
          <p className="text-lg">{translate('TEXT.TERMS_OF_USE')}</p>
        </a>
      </div>

      <div className="col-span-3"></div>
    </div>
  );
};
