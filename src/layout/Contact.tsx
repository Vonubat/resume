import React from 'react';
import TelegramIcon from '../assets/icons/telegram.svg';
import LinkedinIcon from '../assets/icons/linkedin.svg';
import EmailIcon from '../assets/icons/email.svg';
import MobileIcon from '../assets/icons/mobile.svg';
import SkypeIcon from '../assets/icons/skype.svg';
import GitHubIcon from '../assets/icons/github.svg';
import LocationIcon from '../assets/icons/location.svg';
import { Link } from '../components/ui';
import { ContactHref } from '../constants';

export const Contact = (): JSX.Element => {
  return (
    <address className="contact-block bg-gray-200 whitespace-nowrap not-italic">
      <div className="flex flex-wrap justify-around lg:justify-between mt-10 max-w-[1024px] mx-auto py-2 gap-2">
        <section className="main flex flex-col gap-2 mx-2 w-[450px]">
          <Link src={TelegramIcon} href={ContactHref.telegram}>
            @mortally_happy
          </Link>
          <Link src={LinkedinIcon} href={ContactHref.linkedin}>
            linkedin.com/in/egor-tabunov/
          </Link>
          <Link src={EmailIcon} href={ContactHref.email}>
            vonubat@gmail.com
          </Link>
          <Link src={MobileIcon} href={ContactHref.mobile}>
            +375-29-277-57-43
          </Link>
        </section>
        <section className="additional flex flex-col gap-2 mx-2 w-[450px]">
          <Link src={SkypeIcon} href={ContactHref.skype}>
            homeanagar
          </Link>
          <Link src={GitHubIcon} href={ContactHref.github}>
            github.com/Vonubat
          </Link>
          <Link src={LocationIcon} href={ContactHref.location}>
            Minsk, Belarus
          </Link>
        </section>
      </div>
    </address>
  );
};
