'use client';

import { Mail, Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CallToAction = () => {
    return (
        <section className="py-20">
            <div className="mx-auto max-w-7xl px-4">

                <div className="grid gap-10 rounded-3xl border bg-white p-8 shadow-lg lg:grid-cols-2 lg:p-12">

                    {/* Left */}
                    <div className="flex flex-col justify-center">
                        <span className="mb-4 w-fit rounded-full bg-blue-100 px-4 py-1 text-sm font-semibold text-blue-600">
                            Contact Us
                        </span>

                        <h2 className="text-4xl font-bold leading-tight">
                            Looking for Your Dream Property?
                        </h2>

                        <p className="mt-5 text-muted-foreground leading-8">
                            Our experienced real estate specialists are ready to
                            help you buy, rent, or sell properties. Send us a
                            message and we'll contact you as soon as possible.
                        </p>

                        <div className="mt-8 space-y-4">
                            <div className="flex items-center gap-3">
                                <Phone className="h-5 w-5 text-blue-600" />
                                <span>+880 1712-345678</span>
                            </div>

                            <div className="flex items-center gap-3">
                                <Mail className="h-5 w-5 text-blue-600" />
                                <span>support@homez.com</span>
                            </div>
                        </div>
                    </div>

                    {/* Right */}
                    <form className="space-y-5">

                        <input
                            type="text"
                            placeholder="Your Name"
                            className="h-12 w-full rounded-xl border px-4 outline-none focus:border-blue-600"
                        />

                        <input
                            type="email"
                            placeholder="Email Address"
                            className="h-12 w-full rounded-xl border px-4 outline-none focus:border-blue-600"
                        />

                        <input
                            type="tel"
                            placeholder="Phone Number"
                            className="h-12 w-full rounded-xl border px-4 outline-none focus:border-blue-600"
                        />

                        <textarea
                            rows={5}
                            placeholder="Tell us about the property you're looking for..."
                            className="w-full rounded-xl border p-4 outline-none focus:border-blue-600"
                        />
                        <Button
                            type="submit"
                            className="h-12 w-full bg-blue-600 text-white hover:bg-blue-700"
                        >
                            Send Message
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default CallToAction;