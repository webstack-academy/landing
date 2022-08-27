import React, { Component } from 'react';
import { translate } from '../../../common/helpers/i18n/i18n.helper';
import {
  DescriptionSectionImage,
  HomeSectionImage,
} from '../../../assets/images';
import {
  CommunityIcon,
  DeveloperIcon,
  FlagIcon,
  FolderIcon,
  IndividualIcon,
  MoneyIcon,
  StreamingIcon,
} from '../../../assets/icons';
import {
  BorderedButton,
  BigColoredButton,
} from '../../../components/atoms/button.component';
import { Trans } from 'react-i18next';
import { FooterComponent } from '../../../components/organisms/footer.component';

class HomePage extends Component {
  render() {
    return (
      <div className="md:container mx-auto page-container">
        {/* Header Section */}
        <div
          className="grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12 xl:grid-cols-12 2xl:grid-cols-12"
          style={{ marginTop: 150 }}
        >
          {/* Left column */}
          <div className="col-span-5 p-5">
            <h1 className="header-title font-semibold">
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
          <a
            href="#secondSection"
            className="inline-block border-2 rounded-full text-xl font-bold"
            style={{ width: 50, height: 50, paddingTop: 10 }}
          >
            &darr;
          </a>
        </div>
        {/* Header Section */}

        <span id="secondSection">&zwnj;</span>
        {/* Brief Section */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2"
          style={{ marginTop: 100 }}
        >
          {/* Left column */}
          <div className="linear-gradient-border column-container flex items-center	">
            <div>
              <h1 className="text-4xl">
                {translate('TEXT.WE_CREATED_A_PATH_TO_BE_A_WEB_DEVELOPER')}
              </h1>
              <h1 className="text-5xl font-semibold mt-4">
                <Trans i18nKey="TEXT.FULL_STACK_WEB_DEVELOPER" />
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
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2"
          style={{ marginTop: 200 }}
        >
          {/* Left column */}
          <div>
            <img src={DescriptionSectionImage} />
          </div>
          {/* ./Left column */}

          {/* Right column */}
          <div className="flex items-left items-center p-5">
            <div className="text-left">
              <h1 className="text-4xl">
                {translate('TEXT.COURSE_DESCRIPTION_TITLE')}
              </h1>

              <h2 className="text-2xl mt-2">
                {translate('TEXT.COURSE_SUBTITLE')}
              </h2>
              <p className="text-lg mt-2">
                <Trans i18nKey="TEXT.COURSE_DESCRIPTION" />
              </p>
            </div>
          </div>
          {/* ./Right column */}
        </div>
        {/* ./Description Section */}

        {/* Access Section */}
        <div
          style={{ marginTop: 100 }}
          className="items-center text-center overflow-x-auto"
        >
          <h1 className="text-4xl">{translate('TEXT.START_NOW')}</h1>
          <p className="text-lg">{translate('TEXT.WILL_ACCESS_TO')}</p>

          <div
            className="flex flex-nowrap overflow-x-auto"
            style={{ marginTop: 50 }}
          >
            {/* Community Column */}
            <div className="column-container access-column flex-none">
              <div className="grid justify-items-center">
                <div className="access-column-icon-container">
                  <img src={CommunityIcon} className="mx-auto" />
                </div>

                <h1 className="text-2xl mt-5 font-extrabold	access-column-title">
                  {translate('TEXT.COMMUNITY')}
                </h1>

                <p className="text-md mt-5">
                  {translate('TEXT.COMMUNITY_MENTORS_STUDENTS')}
                </p>
              </div>
            </div>
            {/* ./Community Column */}

            {/* LiveStreaming Column */}
            <div className="column-container access-column flex-none">
              <div className="grid justify-items-center">
                <div className="access-column-icon-container">
                  <img src={StreamingIcon} className="mx-auto" />
                </div>

                <h1 className="text-2xl mt-5 font-extrabold	access-column-title">
                  {translate('TEXT.LIVE_STREAMING')}
                </h1>

                <p className="text-md mt-5">
                  {translate('TEXT.LIVE_STREAMING_DESCRIPTION')}
                </p>
              </div>
            </div>
            {/* ./LiveStreaming Column */}

            {/* Platform Column */}
            <div className="column-container access-column flex-none">
              <div className="grid justify-items-center">
                <div className="access-column-icon-container">
                  <img src={FlagIcon} className="mx-auto" />
                </div>

                <h1 className="text-2xl mt-5 font-extrabold	access-column-title">
                  {translate('TEXT.PLATFORM')}
                </h1>

                <p className="text-md mt-5">
                  {translate('TEXT.PLATFORM_DESCRIPTION')}
                </p>
              </div>
            </div>
            {/* ./Platform Column */}

            {/* Individual Lessons Column */}
            <div className="column-container access-column flex-none">
              <div className="grid justify-items-center">
                <div className="access-column-icon-container">
                  <img src={IndividualIcon} className="mx-auto" />
                </div>

                <h1 className="text-2xl mt-5 font-extrabold	access-column-title">
                  {translate('TEXT.INDIVIDUAL_LESSONS')}
                </h1>

                <p className="text-md mt-5">
                  {translate('TEXT.INDIVIDUAL_LESSONS_DESCRIPTION')}
                </p>
              </div>
            </div>
            {/* ./Individual Lessons Column */}
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
          className="items-center text-center overflow-x-auto"
        >
          <h1 className="text-4xl">{translate('TEXT.MARKET_REQUIREMENTS')}</h1>

          <div
            className="flex flex-nowrap overflow-x-auto"
            style={{ marginTop: 50 }}
          >
            {/* Vacancies Column */}
            <div className="column-container market-column linear-gradient-border items-center flex-none">
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
            <div className="column-container market-column linear-gradient-border items-center flex-none">
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
            <div className="column-container market-column linear-gradient-border items-center flex-none">
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
        <div
          className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-12 xl:grid-cols-12 2xl:grid-cols-12"
          style={{ marginTop: 100, marginBottom: 100 }}
        >
          {/* Left column */}
          <div
            className="grid grid-cols-2 col-span-6 justify-items-center"
            style={{ marginTop: 50 }}
          >
            <div className="column-container remaining-seats-column flex items-center justify-center">
              <p>1</p>
            </div>

            <div className="column-container remaining-seats-column flex items-center justify-center">
              <p>5</p>
            </div>
          </div>
          {/* ./Left column */}

          <div className="col-span-1"></div>

          {/* Right column */}
          <div className="flex items-left items-center col-span-5 p-5">
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

        {/* Contact Usa Section */}
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 contact-section pl-2 pr-2">
          {/* Left column */}
          <div className="grid grid-cols-2">
            <div className="flex contact-description-container items-left items-center col-span-5">
              <div>
                <h1 className="text-4xl">{translate('TEXT.NEED_MORE_INFO')}</h1>
                <h1 className="text-4xl">{translate('TEXT.CONTACT_US')}</h1>
                <p className="text-lg mt-5">
                  {translate('TEXT.COMPILE_FORM_GET_INFO')}
                </p>
              </div>
            </div>
          </div>
          {/* ./Left column */}

          {/* Right column */}
          <div className="flex contact-form-container">
            <div className="form-control w-full max-w-xs">
              {/* Name Input */}
              <input
                type="text"
                placeholder={translate('INPUTS.YOUR_NAME')}
                className="input input-bordered w-full max-w-xs contact-input input-lg"
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
              />
              {/* ./Surname Input */}

              {/* Email Input */}
              <input
                type="email"
                placeholder={translate('INPUTS.YOUR_EMAIL')}
                className="input input-bordered w-full max-w-xs contact-input input-lg"
              />
              {/* ./Email Input */}
              <BigColoredButton
                text={translate('BUTTONS.SEND_REQUEST')}
                style={{
                  marginTop: 24,
                  backgroundColor: '#fff',
                  color: '#000',
                }}
              />
            </div>
          </div>
          {/* ./Right column */}
        </div>
        {/* ./Contact Usa Section */}

        {/* Footer */}
        <FooterComponent />
        {/* ./Footer */}
      </div>
    );
  }
}

export default HomePage;
