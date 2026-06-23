import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaXTwitter,
  FaLocationDot,
} from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="border-t border-slate-200 bg-white transition-colors duration-300 dark:border-slate-800 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Link href="/" className="inline-flex items-center gap-3">
              <div>
                <h2 className="text-2xl font-black tracking-tight text-blue-600 dark:text-blue-500">
                  DriveFleet
                </h2>

                <p className="text-xs uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400">
                  Premium Car Rental
                </p>
              </div>
            </Link>

            <p className="mt-6 max-w-md leading-7 text-slate-600 dark:text-slate-400">
              Discover premium rental cars for every journey. Whether it&apos;s
              business, family travel, or weekend adventures, DriveFleet
              delivers comfort, reliability, and a seamless booking experience.
            </p>

            <div className="mt-8 flex items-center gap-4">
              <Link
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-600 text-white transition duration-300 hover:-translate-y-1"
              >
                <FaFacebook />
              </Link>

              <Link
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-600 text-white transition duration-300 hover:-translate-y-1"
              >
                <FaInstagram />
              </Link>

              <Link
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-600 text-white transition duration-300 hover:-translate-y-1"
              >
                <FaXTwitter />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              Quick Links
            </h3>

            <div className="mt-6 flex flex-col gap-4">
              <Link
                href="/"
                className="text-slate-600 transition hover:translate-x-1 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-500"
              >
                Home
              </Link>

              <Link
                href="/cars"
                className="text-slate-600 transition hover:translate-x-1 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-500"
              >
                Explore Cars
              </Link>

              <Link
                href="/add-car"
                className="text-slate-600 transition hover:translate-x-1 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-500"
              >
                Add Car
              </Link>

              <Link
                href="/my-bookings"
                className="text-slate-600 transition hover:translate-x-1 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-500"
              >
                My Bookings
              </Link>

              <Link
                href="#"
                className="text-slate-600 transition hover:translate-x-1 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-500"
              >
                Privacy Policy
              </Link>

              <Link
                href="#"
                className="text-slate-600 transition hover:translate-x-1 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-500"
              >
                Terms of Service
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              Contact
            </h3>

            <div className="mt-6 space-y-5">
              <div className="flex items-start gap-3">
                <FaLocationDot className="mt-1 text-blue-600" />

                <p className="leading-7 text-slate-600 dark:text-slate-400">
                  Dhaka, Bangladesh
                </p>
              </div>

              <div className="flex items-center gap-3">
                <MdOutlineEmail className="text-xl text-blue-600" />

                <p className="text-slate-600 dark:text-slate-400">
                  support@drivefleet.com
                </p>
              </div>

              <div className="flex items-center gap-3">
                <FiPhoneCall className="text-blue-600" />

                <p className="text-slate-600 dark:text-slate-400">
                  +880 1700-000000
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-900">
                <h4 className="font-semibold text-slate-900 dark:text-white">
                  Working Hours
                </h4>

                <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
                  Saturday - Thursday
                  <br />
                  9:00 AM - 9:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-slate-200 pt-8 dark:border-slate-800">
          <div className="flex flex-col items-center justify-between gap-5 md:flex-row">
            <p className="text-center text-sm text-slate-500 dark:text-slate-400">
              © {new Date().getFullYear()} DriveFleet. All rights reserved.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-6">
              <Link
                href="/"
                className="text-sm text-slate-500 transition hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-500"
              >
                Home
              </Link>

              <Link
                href="/explore-cars"
                className="text-sm text-slate-500 transition hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-500"
              >
                Explore Cars
              </Link>

              <Link
                href="#"
                className="text-sm text-slate-500 transition hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-500"
              >
                Privacy Policy
              </Link>

              <Link
                href="#"
                className="text-sm text-slate-500 transition hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-500"
              >
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
