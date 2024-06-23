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
import SpotVideo from '../../../../assets/videos/webstack-spot.mp4';

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
          <div className="modal-box" style={{ backgroundColor: '#EAECF0' }}>
            <a
              href="#"
              className="btn btn-sm btn-circle absolute right-2 top-2 bg-accent-content text-accent"
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
              <div className="available-places-container mx-auto mt-5">
                <span className="closed-number-span">Numero chiuso!</span>
                <span>iscrizioni chiuse</span>
              </div>

              <h1 className="text-4xl lg:text-6xl font-semibold mt-5">
                {translate('TEXT.HOME_SECTION_TITLE')}
              </h1>
              <p
                className="text-lg mt-5 header-subtitle"
                style={{marginLeft: '20%', marginRight: '20%'}}
              >
                {translate('TEXT.ACADEMY_SUBSCRIBE')}
              </p>

              {/* Header Video */}
              <div className="flex justify-center items-center mt-10 mb-2">

                <div className="mockup-phone border-primary" style={{
                  borderColor: '#9CC84B'
                }}>
                  <div className="camera"></div>
                  <div className="display">
                    
                    <div className="artboard artboard-demo phone-1">
                      {/* Video Player Section */}
                      <video width="320" height="240" controls className="mx-auto">
                        <source src={SpotVideo} type="video/mp4"/>
                        Your browser does not support the video tag.
                      </video>
                      {/* ./Video Player Section */}
                    </div>

                  </div>
                </div>
              </div>
              {/* ./Header Video */}

              <a href="#my-modal-2">
                <BorderedButton
                  text={translate('BUTTONS.START_NOW')}
                  style={{marginTop: 40}}
                  onClick={() => console.log('opened accept challenge modal')}
                />
              </a>
            </div>
            {/* ./Header Description */}
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
                  {translate('TEXT.FULL_STACK_DEV_COURSE')}
                </h2>
                <p className="text-xl mt-4">
                  <Trans i18nKey="TEXT.OUR_ACADEMY_DESCRIPTION" />
                </p>

                <a href="#my-modal-2">
                  <BorderedButton
                    text={translate('BUTTONS.START_NOW')}
                    style={{ marginTop: 40 }}
                    onClick={() => console.log('opened accept challenge modal')}
                  />
                </a>
              </div>
            </div>
          </div>
          {/* ./Brief Section */}

          {/* Description Section */}
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2"
            style={{ paddingTop: 100 }}
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
              <img src={DescriptionSectionImage} className="m-auto rounded-[10px]" />
            </div>
            {/* ./Right column */}
          </div>
          {/* ./Description Section */}

          {/* instructors Section */}

          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2"
            style={{ marginTop: 100 }}
          >
            {/* Left column */}
            <div className="flex p-5">
              <div className="text-left">
                <h1 className="text-lg text-base-content">
                  Webstack Academy Team
                </h1>
                <h1 className="text-4xl">{translate('TEXT.INSTRUCTORS')}</h1>
                <p className="text-xl mt-2 py-5 pr-5">
                  Professionisti del settore con anni di esperienza che ti
                  guideranno durante tutto il percorso.
                </p>
                <a href="#my-modal-2">
                  <BorderedButton
                    text={translate('BUTTONS.START_NOW')}
                    style={{ marginTop: 40 }}
                    onClick={() => console.log('opened accept challenge modal')}
                  />
                </a>
              </div>
            </div>
            {/* ./Left column */}

            {/* Right column */}
            <div className="gird items-center p-5 ">
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
          {/* ./instructors Section */}

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

          {/* Remaining Seats Section */}
          <div className="grid grid-cols-1" style={{ marginTop: 100 }}>
            <div className="items-center text-center p-5">
              <div className="md:mx-[100px] lg:mx-[200px] xl:mx-[200px] 2xl:mx-[200px]">
                <div
                  className="rounded-full linear-gradient-border flex justify-center items-center grey-background"
                  style={{
                    width: 280,
                    height: 64,
                    marginLeft: 'auto',
                    marginRight: 'auto',
                  }}
                >
                  <h2 className="text-xl font-semibold">iscrizioni chiuse</h2>
                </div>

                <h1 className="text-4xl font-semibold mt-10">
                  {translate('TEXT.BECOME_PRO')}
                </h1>
                <p className="text-lg mt-7" style={{ color: '#D0D5DD' }}>
                  <Trans i18nKey="TEXT.BECOME_PRO_TEXT" />
                </p>
              </div>
            </div>
          </div>
          {/* ./Remaining Seats Section */}

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
                    + 500.000
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
                    35.000 €
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
                    70 %
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

          {/* Investment of your Live Section */}
          <div className="grid grid-cols-1" style={{ marginTop: 100 }}>
            <div className="items-center text-center p-5">
              <div className="md:mx-[100px] lg:mx-[200px] xl:mx-[200px] 2xl:mx-[200px]">
                <p className="text-xl mt-7">Webstack Academy</p>
                <h1 className="text-4xl font-semibold mt-5">
                  Il miglior investimento della tua vita
                </h1>
                <p className="text-2xl mt-5" style={{ color: '#D0D5DD' }}>
                  Mano a mano fino alla realizzazione della tua web app.
                </p>
              </div>

              <div className="available-places-container mx-auto mt-5">
                <span className="closed-number-span">Numero chiuso</span>
                <span>iscrizioni chiuse</span>
              </div>
            </div>
          </div>
          {/* ./Investment of your Live Section */}

          {/* Prices Section */}
          <div
            style={{ paddingTop: 50, paddingBottom: 150 }}
            ref={this.pricingSectionRef}
          >
            <PriceColumnsComponent />
          </div>
          {/* ./Prices Section */}
        </div>

        {/* White Section */}
        <div style={{ width: '100%', backgroundColor: '#EAECF0' }}>
          <div className="md:container mx-auto page-container">
            {/* Contact Usa Section */}

            <div
              className="md:mx-[100px] lg:mx-[200px] xl:mx-[200px] 2xl:mx-[200px] contact-section pl-2 pr-2"
              ref={this.contactSectionRef}
            >
              <div className="">
                <div className="contact-description-container">
                  <div
                    className="text-center mx-auto"
                    style={{ maxWidth: 800 }}
                  >
                    <h1 className="text-4xl" style={{ color: '#111322' }}>
                      {translate('TEXT.NEED_MORE_INFO')}
                    </h1>
                    <h1 className="text-4xl" style={{ color: '#111322' }}>
                      {translate('TEXT.CONTACT_US')}
                    </h1>
                    <p className="text-lg mt-5" style={{ color: '#5D6B98' }}>
                      <Trans i18nKey="TEXT.COMPILE_FORM_GET_INFO" />{' '}
                    </p>
                  </div>

                  <div
                    className="contact-form-container mx-auto"
                    style={{ maxWidth: 400 }}
                  >
                    {/** Mailchip Signup Form */}
                    <MailchimpForm />
                    {/** ./Mailchip Signup Form */}
                  </div>
                </div>
              </div>
            </div>

            {/* ./Contact Usa Section */}

            {/* Footer */}
            <FooterComponent />
            {/* ./Footer */}
          </div>
        </div>
        {/* ./White Section */}
      </div>
    );
  }
}

export default HomePage;
