import React, { Component } from 'react';
import { translate } from '../../../common/helpers/i18n/i18n.helper';
import {
  DescriptionSectionImage,
  HomeSectionImage,
  ProgrammingImage,
} from '../../../assets/images';
import { DeveloperIcon, FolderIcon, MoneyIcon } from '../../../assets/icons';
import { BorderedButton } from '../../../components/atoms/button.component';
import { Trans } from 'react-i18next';

class HomePage extends Component {
  render() {
    return (
      <div className="md:container mx-auto">
        {/* Header Section */}
        <div className="grid grid-cols-12" style={{ marginTop: 150 }}>
          {/* Left column */}
          <div className="col-span-5">
            <h1 className="text-7xl font-semibold">
              {translate('TEXT.HOME_SECTION_TITLE')}
            </h1>
            <p className="text-lg">{translate('TEXT.ACADEMY_SUBSCRIBE')}</p>

            <BorderedButton
              text={translate('BUTTONS.ACCEPT_CHALLENGE')}
              style={{ marginTop: 40 }}
            />
          </div>
          {/* ./Left column */}

          {/* Right column */}
          <div className="col-span-7">
            <img src={HomeSectionImage} />
          </div>
          {/* ./Right column */}
        </div>
        <div className="text-center mt-12">
          <a href="#secondSection" className="inline-block border-2 rounded-full text-xl font-bold" style={{ width: 50, height: 50, paddingTop: 10 }}>
            &darr;
          </a>
        </div>
        {/* Header Section */}

        <span id="secondSection">&zwnj;</span>
        {/* Brief Section */}
        <div className="grid grid-cols-2" style={{ marginTop: 200 }}>
          {/* Left column */}
          <div className="linear-gradient-border column-container flex items-center	">
            <div>
              <h1 className="text-4xl">
                {translate('TEXT.WE_CREATED_A_PATH_TO_BE_A_WEB_DEVELOPER')}
              </h1>
              <h1 className="text-5xl font-semibold mt-4">
                {translate('TEXT.FULL_STACK_WEB_DEVELOPER')}
              </h1>
              <h1 className="text-4xl mt-4">{translate('TEXT.FOUR_MONTHS')}</h1>
            </div>
          </div>
          {/* ./Left column */}

          {/* Right column */}
          <div className="column-container flex items-left">
            <div className="text-left">
              <h1 className="text-4xl">{translate('TEXT.OUR_ACADEMY')}</h1>
              <p className="text-lg">
                <Trans i18nKey="TEXT.OUR_ACADEMY_DESCRIPTION" />
              </p>
            </div>
          </div>
          {/* ./Right column */}
        </div>
        {/* ./Brief Section */}

        {/* Description Section */}
        <div className="grid grid-cols-2" style={{ marginTop: 200 }}>
          {/* Left column */}
          <div>
            <img src={DescriptionSectionImage} />
          </div>
          {/* ./Left column */}

          {/* Right column */}
          <div className="flex items-left items-center">
            <div className="text-left">
              <h1 className="text-4xl">
                {translate('TEXT.COURSE_DESCRIPTION_TITLE')}
              </h1>

              <h2 className="text-2xl">{translate('TEXT.COURSE_SUBTITLE')}</h2>
              <p className="text-lg">
                <Trans i18nKey="TEXT.COURSE_DESCRIPTION" />
              </p>
            </div>
          </div>
          {/* ./Right column */}
        </div>
        {/* ./Description Section */}

        {/* Access Section */}
        <div style={{ marginTop: 200 }} className="items-center text-center overflow-x-auto">
          <h1 className="text-4xl">{translate('TEXT.START_NOW')}</h1>
          <p className="text-lg">{translate('TEXT.WILL_ACCESS_TO')}</p>

          <div className="grid grid-cols-4 " style={{ marginTop: 50 }}>
            <div className="column-container access-column"></div>

            <div className="column-container access-column"></div>

            <div className="column-container access-column"></div>

            <div className="column-container access-column"></div>
          </div>
        </div>
        {/* ./Access Section */}

        {/* Picture Separator Section */}
        <div
          style={{ marginTop: 100, marginBottom: 100 }}
          className="grid grid-cols-1 items-center"
        >
          <div className="mx-auto picture-separator-section"></div>
        </div>
        {/* ./Picture Separator Section */}

        {/* Market Requirements Section */}
        <div
          style={{ marginTop: 100, marginBottom: 100 }}
          className="grid grid-cols-1 items-center text-center"
        >
          <h1 className="text-4xl">{translate('TEXT.MARKET_REQUIREMENTS')}</h1>

          <div className="grid grid-cols-3" style={{ marginTop: 50 }}>
            {/* Vacancies Column */}
            <div className="column-container market-column linear-gradient-border flex items-center">
              <div className="text-center">
                <img src={FolderIcon} className="mx-auto" />
                <h2
                  className="text-4xl font-semibold"
                  style={{ marginTop: 30, marginBottom: 30 }}
                >
                  +500.000
                </h2>
                <p className="text-lg">{translate('TEXT.VACANCIES')}</p>
              </div>
            </div>
            {/* ./Vacancies Column */}

            {/* Vacancies Column */}
            <div className="column-container market-column linear-gradient-border flex items-center">
              <div className="text-center">
                <img src={MoneyIcon} className="mx-auto" />
                <h2
                  className="text-4xl font-semibold"
                  style={{ marginTop: 30, marginBottom: 30 }}
                >
                  35.000
                </h2>
                <p className="text-lg">{translate('TEXT.AVERAGE_SALARY')}</p>
              </div>
            </div>
            {/* ./Vacancies Column */}

            {/* Vacancies Column */}
            <div className="column-container market-column linear-gradient-border flex items-center">
              <div className="text-center">
                <img src={DeveloperIcon} className="mx-auto" />
                <h2
                  className="text-4xl font-semibold"
                  style={{ marginTop: 30, marginBottom: 30 }}
                >
                  70%
                </h2>
                <p className="text-lg">{translate('TEXT.VACANCIES')}</p>
              </div>
            </div>
            {/* ./Vacancies Column */}
          </div>
        </div>
        {/* ./Market Requirements Section */}

        {/* Remaining Seats Section */}
        <div className="grid grid-cols-12" style={{ marginTop: 200 }}>
          {/* Left column */}
          <div
            className="grid grid-cols-2 col-span-6"
            style={{ marginTop: 50 }}
          >
            <div className="column-container access-column"></div>

            <div className="column-container access-column"></div>
          </div>
          {/* ./Left column */}

          <div className="col-span-1"></div>

          {/* Right column */}
          <div className="flex items-left items-center col-span-5">
            <div>
              <h1 className="text-4xl font-semibold">
                {translate('TEXT.BECOME_PRO')}
              </h1>
              <p className="text-lg mt-5">
                <Trans i18nKey="TEXT.BECOME_PRO_TEXT" />
              </p>

              <BorderedButton
                text={translate('BUTTONS.ACCEPT_CHALLENGE')}
                style={{ marginTop: 40 }}
              />
            </div>
          </div>
          {/* ./Right column */}
        </div>
        {/* ./Remaining Seats Section */}
      </div>
    );
  }
}

export default HomePage;
