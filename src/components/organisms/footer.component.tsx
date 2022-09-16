import { translate } from '../../common/helpers/i18n/i18n.helper';
import React from 'react';
import { ConditionsUrl } from '../../common/enum/url.enum';

export const FooterComponent = () => {
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-12 xl:grid-cols-12 2xl:grid-cols-12 footer-anchor footer-container"
      style={{ paddingTop: 40, paddingBottom: 40, paddingLeft: 20, paddingRight: 20  }}
    >
      <div className="col-span-3">
        <p className="text-lg">{translate('TEXT.COPYRIGHT')}</p>
      </div>

      <div className="col-span-2">
        <a target="_blank" rel="noreferrer" href={ConditionsUrl.TermsOfUse}>
          <p className="text-lg">{translate('TEXT.TERMS')}</p>
        </a>
      </div>
    </div>
  );
};
