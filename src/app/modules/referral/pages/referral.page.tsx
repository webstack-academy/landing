import React, { Component } from 'react';
import Navbar from '../../../components/molecules/navbar.component';
import SponsorMailchimpForm from '../components/sponsor-mailchimp-form.component';
import { createShortId } from '../../../common/helpers/crypto/crypto.helper';

interface ReferralPageState {
  sponsorRef: string;
}

class ReferralPage extends Component<any, ReferralPageState> {
  private briefSectionRef = React.createRef();
  private marketRequirementsSectionRef = React.createRef();
  private contactSectionRef = React.createRef();
  private accessSectionRef = React.createRef();
  private pricingSectionRef = React.createRef();

  componentDidMount() {
    // const sponsorRef = new URLSearchParams(this.props.location.search).get('sponsorRef');
    // this.setState({ sponsorRef });
    this.setState({ sponsorRef: createShortId() });
  }

  private scroll(ref) {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  }

  render() {
    // @ts-ignore
    return (
      <div>
        <Navbar
          contactsCallback={() => this.scroll(this.contactSectionRef)}
          whyCallback={() => this.scroll(this.marketRequirementsSectionRef)}
          courseCallback={() => this.scroll(this.accessSectionRef)}
          academyCallback={() => this.scroll(this.briefSectionRef)}
          pricingCallback={() => this.scroll(this.pricingSectionRef)}
        />

        <div className="md:container mx-auto page-container p-4">
          <p className="text-lg text-center mt-5">
            Vuoi guadagnare con noi? 🤑 <br />
          </p>
          <div
            style={{
              maxWidth: 400,
            }}
            className="mx-auto"
          >
            <SponsorMailchimpForm />

            <section>
              <details className="mb-4 py-24">
                <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                  How Long is this site live?
                </summary>

                <span>
                  Laboris qui labore cillum culpa in sunt quis sint veniam.
                  Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                  minim velit nostrud pariatur culpa magna in aute.
                </span>
              </details>
            </section>
          </div>
        </div>
      </div>
    );
  }
}

export default ReferralPage;
