'use client';

import { Mail } from "lucide-react";

const Newsletter = () => {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="overflow-hidden rounded-3xl bg-blue-600 px-6 py-16 text-white lg:px-16">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            {/* Left */}
            <div>
              <p className="font-semibold uppercase tracking-[0.25em] text-blue-100">
                Newsletter
              </p>

              <h2 className="mt-4 text-4xl font-bold leading-tight">
                Stay Updated With
                <br />
                The Latest Properties
              </h2>

              <p className="mt-5 max-w-lg text-blue-100">
                Subscribe to our newsletter and receive the latest property
                listings, market insights, investment opportunities and exclusive
                offers directly in your inbox.
              </p>
            </div>

            {/* Right */}
            <div>
              <div className="rounded-2xl bg-white p-3 shadow-xl">
                <div className="flex flex-col gap-3 sm:flex-row">
                  <div className="relative flex-1">
                    <Mail className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />

                    <input
                      type="email"
                      placeholder="Enter your email address"
                      className="h-14 w-full rounded-xl border pl-12 pr-4 text-black outline-none focus:border-blue-600"
                    />
                  </div>

                  <button className="h-14 rounded-xl bg-blue-600 px-8 font-semibold text-white transition hover:bg-blue-700">
                    Subscribe
                  </button>
                </div>

                <p className="mt-4 text-center text-sm text-gray-500">
                  No spam. Unsubscribe anytime.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;