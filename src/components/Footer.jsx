import React from 'react';
import { footerLinks } from '../constants';

const Footer = () => {
  return (
    <footer className="py-5 sm:px-10 px-5">
      <div className="screen-max-width">
        <div>
          <p className="font-semibold text-gray text-xs">
            Need help? {' '}
            <span className="underline text-blue">
              Find a Rehabilitation Center {' '}
            </span>
            or {' '}
            <span className="underline text-red">
              other support services
            </span>{' '}
            near you.
          </p>
          <p className="font-semibold text-gray text-xs">
            Or call 1-800-123-4567 for immediate assistance
          </p>
        </div>

        <div className="bg-neutral-700 my-5 h-[1px] w-full" />

        <div className="flex md:flex-row flex-col md:items-center justify-between">
          <p className="font-semibold text-gray text-xs">
            Copyright @ 2024 Drogue. All rights reserved.
          </p>
          <div className="flex">
            {footerLinks.map((link, i) => (
              <p key={link} className="font-semibold text-gray text-xs">
                {link}{' '}
                {i !== footerLinks.length - 1 && (
                  <span className="mx-2"> | </span>
                )}
              </p>
            ))}
          </div>
        </div>

        <div className="mt-5">
          <p className="font-semibold text-gray text-xs">
            Sources: <a href="https://bnn.go.id/"><span className="text-blue">[https://bnn.go.id/]</span></a>, <a href="https://www.detik.com/"><span className="text-blue">[https://www.detik.com/]</span></a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
