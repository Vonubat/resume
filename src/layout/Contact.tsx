import React from 'react';
import TelegramIcon from '../assets/icons/telegram.svg';
import LinkedinIcon from '../assets/icons/linkedin.svg';
import EmailIcon from '../assets/icons/email.svg';
import MobileIcon from '../assets/icons/mobile.svg';
import SkypeIcon from '../assets/icons/skype.svg';
import GitHubIcon from '../assets/icons/github.svg';
import LocationIcon from '../assets/icons/location.svg';
import { ContactLink } from '../components/ui';
import { ContactHref } from '../constants';

export const Contact = (): JSX.Element => {
  return (
    <div className="contact-block bg-gray-200 whitespace-nowrap">
      <div className="flex flex-wrap justify-around lg:justify-between mt-10 max-w-[1024px] mx-auto py-2 gap-2">
        <section className="main flex flex-col gap-2 mx-2 w-[450px]">
          <ContactLink src={TelegramIcon} href={ContactHref.telegram}>
            @mortally_happy
          </ContactLink>
          <ContactLink src={LinkedinIcon} href={ContactHref.linkedin}>
            linkedin.com/in/egor-tabunov/
          </ContactLink>
          <ContactLink src={EmailIcon} href={ContactHref.email}>
            vonubat@gmail.com
          </ContactLink>
          <ContactLink src={MobileIcon} href={ContactHref.mobile}>
            +375-29-277-57-43
          </ContactLink>
        </section>
        <section className="additional flex flex-col gap-2 mx-2 w-[450px]">
          <ContactLink src={SkypeIcon} href={ContactHref.skype}>
            homeanagar
          </ContactLink>
          <ContactLink src={GitHubIcon} href={ContactHref.github}>
            github.com/Vonubat
          </ContactLink>
          <ContactLink src={LocationIcon} href={ContactHref.location}>
            Minsk, Belarus
          </ContactLink>
        </section>
      </div>
    </div>
  );
};
