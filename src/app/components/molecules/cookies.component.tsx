import React, { Component } from 'react';
import { CookiesImage } from '../../../assets/images';
import { ConditionsUrl } from '../../common/enum/url.enum';
import {
  getString,
  setString,
} from '../../common/helpers/storage/storage.helper';
import { StorageKey, StorageValue } from '../../common/enum/storage.enum';

interface CookiesComponentState {
  showCookieAlert: boolean;
}

class CookiesComponent extends Component<any, CookiesComponentState> {
  private setAcceptedCookie(): void {
    setString(StorageKey.Cookies, StorageValue.CookiesAccepted);
    this.setState({ showCookieAlert: true });
  }

  componentDidMount(): void {
    this.setState({ showCookieAlert: !!getString(StorageKey.Cookies) });
  }

  render() {
    return !this.state?.showCookieAlert ? (
      <div
        className="cookies-container"
        style={{
          maxWidth: 600,
          position: 'fixed',
          bottom: 10,
          backgroundColor: 'white',
          padding: 10,
          borderRadius: 20,
          zIndex: 99,
        }}
      >
        <div className="grid grid-cols-4">
          {/* Cookies Text Details */}
          <div className="col-span-3">
            <p style={{ color: '#4f4f4f' }}>
              Utilizziamo codice e librerie di terze parti che utilizzano
              cookies per per raccogliere informazioni e migliorare il nostro
              servizio. <br />
              Proseguendo, acconsenti l'utilizzo di cookies di terze parti.
            </p>
          </div>
          {/* ./Cookies Text Details */}

          {/* Confetti Section */}
          <div className="flex justify-center">
            <img
              className="mx-auto my-auto"
              src={CookiesImage}
              style={{ width: 70, height: 70 }}
            />
          </div>
          {/* ./Confetti Section */}
        </div>
        <div className="mt-4">
          <p>
            <b style={{ cursor: 'pointer' }}>
              <a
                style={{ color: '#4f4f4f', textDecoration: 'none' }}
                onClick={() => this.setAcceptedCookie()}
              >
                Chiudi
              </a>
            </b>

            <b style={{ cursor: 'pointer', float: 'right' }}>
              <a
                target="_blank"
                rel="noreferrer"
                href={ConditionsUrl.TermsOfUse}
                style={{ color: '#4f4f4f', textDecoration: 'none' }}
                onClick={() => this.setAcceptedCookie()}
              >
                Voglio saperne di più
              </a>
            </b>
          </p>
        </div>
      </div>
    ) : null;
  }
}

export default CookiesComponent;
