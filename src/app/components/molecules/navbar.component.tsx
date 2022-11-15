import React, { Component } from 'react';
import { translate } from '../../common/helpers/i18n/i18n.helper';
import { BorderedButton } from '../atoms/button.component';
import { IndividualIcon, Logo } from '../../../assets/icons';

interface NavbarProps {
  contactsCallback: () => void;
  academyCallback: () => void;
  courseCallback: () => void;
  whyCallback: () => void;
  pricingCallback: () => void;
}

class Navbar extends Component<NavbarProps, any> {
  state = {
    scrolled: this.isWindowScrolled(),
  };

  listenScrollEvent = () => {
    this.setState({ scrolled: this.isWindowScrolled() });
  };

  componentDidMount() {
    window.addEventListener('scroll', this.listenScrollEvent);
  }

  isWindowScrolled() {
    return window.scrollY > 0;
  }

  render() {
    return (
      <div
        className={`navbar bg-base-100 text-white sticky top-0 ${
          this.state.scrolled ? 'border-b' : ''
        }`}
        style={{ zIndex: 99 }}
      >
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>

            <ul
              tabIndex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {/**
               * Academy Button
               */}
              <li>
                <a onClick={() => this.props.academyCallback()}>
                  {translate('BUTTONS.ACADEMY')}
                </a>
              </li>

              {/**
               * Course Button
               */}
              <li>
                <a onClick={() => this.props.courseCallback()}>
                  {translate('BUTTONS.COURSE')}
                </a>
              </li>

              {/**
               * Why Button
               */}
              <li>
                <a onClick={() => this.props.whyCallback()}>
                  {translate('BUTTONS.WHY')}?
                </a>
              </li>

              {/**
               * Pricing Button
               */}
              <li>
                <a onClick={() => this.props.pricingCallback()}>
                  {translate('BUTTONS.PRICING')}
                </a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">
            <img src={Logo} className="mx-auto" />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            {/**
             * Academy Button
             */}
            <li>
              <a onClick={() => this.props.academyCallback()}>
                {translate('BUTTONS.ACADEMY')}
              </a>
            </li>

            {/**
             * Course Button
             */}
            <li>
              <a onClick={() => this.props.courseCallback()}>
                {translate('BUTTONS.COURSE')}
              </a>
            </li>

            {/**
             * Why Button
             */}
            <li>
              <a onClick={() => this.props.whyCallback()}>
                {translate('BUTTONS.WHY')}?
              </a>
            </li>

            {/**
             * Pricing Button
             */}
            <li>
              <a onClick={() => this.props.pricingCallback()}>
                {translate('BUTTONS.PRICING')}
              </a>
            </li>
            <li>
              <a onClick={() => this.props.contactsCallback()}>
                {translate('BUTTONS.CONTACT_US')}
              </a>
            </li>
          </ul>
        </div>
        {/** ./Contact Us Button */}
      </div>
    );
  }
}

export default Navbar;
