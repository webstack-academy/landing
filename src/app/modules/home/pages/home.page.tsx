import React, { Component } from 'react';
import { translate } from '../../../common/helpers/i18n/i18n.helper';
import {
  AldoImage,
  DescriptionSectionImage,
  HomeSectionImage,
  OstapImage,
} from '../../../../assets/images';
import {
  ArrowCircleIcon,
  CommunityIcon,
  DeveloperIcon,
  FlagIcon,
  FolderIcon,
  IndividualIcon,
  LinkedinIcon,
  MoneyIcon,
  SmallLogo,
  StreamingIcon,
} from '../../../../assets/icons';
import { BorderedButton } from '../../../components/atoms/button.component';
import { Trans } from 'react-i18next';
import { FooterComponent } from '../../../components/organisms/footer.component';
import Navbar from '../../../components/molecules/navbar.component';
import { MailchimpForm } from '../../../components/organisms/mailchip-form.component';
import { PriceColumnsComponent } from '../../../components/molecules/price-columns.component';

class HomePage extends Component {
  private briefSectionRef = React.createRef();
  private marketRequirementsSectionRef = React.createRef();
  private contactSectionRef = React.createRef();
  private accessSectionRef = React.createRef();
  private pricingSectionRef = React.createRef();

  private scroll(ref) {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  }

  private showHide;

  render() {
    return (
      <div>
        {/** Accept Challenge Modal */}
        <div className="modal" id="my-modal-2">
          <div className="modal-box">
            <a
              href="#"
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </a>

            {/** Mailchip Signup Form */}
            <MailchimpForm formPosition="center" />
            {/** ./Mailchip Signup Form */}
          </div>
        </div>
        {/** ./Accept Challenge Modal */}

        <Navbar
          contactsCallback={() => this.scroll(this.contactSectionRef)}
          whyCallback={() => this.scroll(this.marketRequirementsSectionRef)}
          courseCallback={() => this.scroll(this.accessSectionRef)}
          academyCallback={() => this.scroll(this.briefSectionRef)}
          pricingCallback={() => this.scroll(this.pricingSectionRef)}
        />
        <div className="md:container mx-auto page-container">
          {/* Header Section */}
          <div
            style={{ minHeight: '100vh' }}
            className="grid grid-cols-1 content-center justify-content-center text-center"
          >
            {/* Header Description */}
            <div className="grid grid-cols-1">
              <h1 className="header-title font-semibold">
                {translate('TEXT.HOME_SECTION_TITLE')}
              </h1>
              <p
                className="text-lg mt-2 header-subtitle"
                style={{ marginLeft: '20%', marginRight: '20%' }}
              >
                {translate('TEXT.ACADEMY_SUBSCRIBE')}
              </p>

              <a href="#my-modal-2">
                <BorderedButton
                  text={translate('BUTTONS.START_NOW')}
                  style={{ marginTop: 40 }}
                  onClick={() => console.log('opened accept challenge modal')}
                />
              </a>
            </div>
            {/* ./Header Description */}

            {/* Header Picture */}
            <div className="grid grid-cols-1 content-center">
              <img src={HomeSectionImage} className="mx-auto" />
            </div>
            {/* ./Header Picture */}
          </div>
          {/* Header Section */}

          {/* Brief Section */}
          <div
            className="grid grid-cols-1 "
            style={{ paddingTop: 100 }}
            ref={this.briefSectionRef}
          >
            <div className="linear-gradient-border column-container flex items-left p-12">
              <div className="text-left">
                <h1 className="text-2xl">{translate('TEXT.OUR_ACADEMY')}</h1>
                <h2 className="text-3xl mt-4">
                  {translate('TEXT.FULL_STACK_DEV_4_MONTHS')}
                </h2>
                <p className="text-xl mt-4">
                  <Trans i18nKey="TEXT.OUR_ACADEMY_DESCRIPTION" />
                </p>

                <BorderedButton
                  text={translate('BUTTONS.START_NOW')}
                  style={{ marginTop: 40 }}
                  onClick={() => console.log('opened accept challenge modal')}
                />
              </div>
            </div>
          </div>
          {/* ./Brief Section */}

          {/* Description Section */}
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2"
            style={{ paddingTop: 200 }}
            ref={this.accessSectionRef}
          >
            {/* Left column */}

            <div className="flex items-left items-center p-5">
              <div className="text-left">
                <img src={SmallLogo} />
                <h2 className="text-2xl mt-2">
                  {translate('TEXT.WEBSTACK_ACADEMY_FUTURE_HERE')}
                </h2>

                <h1 className="text-4xl">
                  {translate('TEXT.COURSE_DESCRIPTION_TITLE')}
                </h1>

                <p className="text-lg mt-2">
                  <Trans i18nKey="TEXT.COURSE_DESCRIPTION" />
                </p>
              </div>
            </div>
            {/* ./Left column */}

            {/* Right column */}

            <div>
              <img src={DescriptionSectionImage} />
            </div>
            {/* ./Right column */}
          </div>
          {/* ./Description Section */}

          {/* Mentors Section */}

          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2"
            style={{ marginBottom: 100 }}
          >
            {/* Left column */}
            <div className="flex p-5">
              <div className="text-left">
                <h1 className="text-lg text-base-content">
                  Webstack Academy Team
                </h1>
                <h1 className="text-4xl">{translate('TEXT.MENTORS')}</h1>

                <BorderedButton
                  text={translate('BUTTONS.START_NOW')}
                  style={{ marginTop: 40 }}
                  onClick={() => console.log('opened accept challenge modal')}
                />
              </div>
            </div>
            {/* ./Left column */}

            {/* Right column */}
            <div className="gird items-center p-5">
              <div className="card card-side linear-gradient-border green-background rounded-xl">
                <figure>
                  <img src={OstapImage} alt="Ostap" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">Ostap Markin</h2>
                  <p>
                    <Trans i18nKey="TEXT.OSTAP_DESCRIPTION" />
                  </p>
                  <a
                    href="https://www.linkedin.com/in/ostap-markin-505441173/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={LinkedinIcon} />
                  </a>
                </div>
              </div>

              <div
                className="card card-side linear-gradient-border green-background rounded-xl"
                style={{ marginTop: 50 }}
              >
                <figure>
                  <img src={AldoImage} alt="Aldo" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">Aldo Vincenti</h2>
                  <p>
                    <Trans i18nKey="TEXT.ALDO_DESCRIPTION" />
                  </p>
                  <a
                    href="https://www.linkedin.com/in/aldo-vincenti-08142b19a/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={LinkedinIcon} />
                  </a>
                </div>
              </div>
            </div>
            {/* ./Right column */}
          </div>
          {/* ./Mentors Section */}

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
            className="grid grid-cols-1 items-center picture-separator-container"
          >
            <div className="mx-auto picture-separator-section" />
          </div>
          {/* ./Picture Separator Section */}

          {/* Market Requirements Section */}
          <div
            style={{ marginTop: 100, marginBottom: 100 }}
            className="items-center text-center overflow-x-auto"
            ref={this.marketRequirementsSectionRef}
          >
            <h1 className="text-4xl">
              {translate('TEXT.MARKET_REQUIREMENTS')}
            </h1>

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
                  <p className="text-lg">
                    {translate('TEXT.PERCENTAGE_DEVS_USING_JS')}
                  </p>
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

            <div className="col-span-1" />

            {/* Right column */}
            <div className="flex items-left items-center col-span-5 p-5">
              <div>
                <h1 className="text-4xl font-semibold">
                  {translate('TEXT.BECOME_PRO')}
                </h1>
                <p className="text-lg mt-5">
                  <Trans i18nKey="TEXT.BECOME_PRO_TEXT" />
                </p>

                <a href="#my-modal-2">
                  <BorderedButton
                    text={translate('BUTTONS.ACCEPT_CHALLENGE')}
                    style={{ marginTop: 40 }}
                    onClick={() => console.log('opened accept challenge modal')}
                  />
                </a>
              </div>
            </div>
            {/* ./Right column */}
          </div>
          {/* ./Remaining Seats Section */}

          {/* Prices Section */}
          <div
            style={{ paddingTop: 150, paddingBottom: 150 }}
            ref={this.pricingSectionRef}
          >
            <PriceColumnsComponent />
          </div>
          {/* ./Prices Section */}

          {/* Contact Usa Section */}
          <div
            className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 contact-section pl-2 pr-2"
            ref={this.contactSectionRef}
          >
            {/* Left column */}
            <div className="grid grid-cols-2">
              <div className="flex contact-description-container items-left items-center col-span-5">
                <div>
                  <h1 className="text-4xl">
                    {translate('TEXT.NEED_MORE_INFO')}
                  </h1>
                  <h1 className="text-4xl">{translate('TEXT.CONTACT_US')}</h1>
                  <p className="text-lg mt-5">
                    <Trans i18nKey="TEXT.COMPILE_FORM_GET_INFO" />{' '}
                    <a
                      className="underline"
                      target="_blank"
                      rel="noreferrer"
                      href="https://wa.me/message/7NRXN4H546I5M1"
                    >
                      WhatsApp
                    </a>
                    .
                  </p>
                </div>
              </div>
            </div>
            {/* ./Left column */}

            {/* Right column */}
            <div className="flex contact-form-container">
              {/** Mailchip Signup Form */}
              <MailchimpForm />
              {/** ./Mailchip Signup Form */}
            </div>
            {/* ./Right column */}
          </div>
          {/* ./Contact Usa Section */}

          {/* Footer */}
          <FooterComponent />
          {/* ./Footer */}
        </div>
      </div>
    );
  }
}

export default HomePage;
