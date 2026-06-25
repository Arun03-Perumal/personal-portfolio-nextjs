import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { profile } from "@/data/profile";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-white py-16 md:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-6">

        {/* Heading */}

        <div className="mb-12 text-center md:mb-16">

          <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl">
            Contact Me
          </h2>

          <p className="mt-4 text-slate-500">
            Let's connect and build something amazing together.
          </p>

        </div>

        {/* Content */}

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-12">

          {/* Contact Information */}

          <div className="space-y-8">

            <div className="flex items-center gap-4">

              <Mail className="text-emerald-600" />

              <div>

                <h4 className="font-semibold">
                  Email
                </h4>

                <p className="break-all text-slate-600">
                  {profile.email}
                </p>

              </div>

            </div>

            <div className="flex items-center gap-4">

              <Phone className="text-emerald-600" />

              <div>

                <h4 className="font-semibold">
                  Phone
                </h4>

                <p className="text-slate-600">
                  {profile.phone}
                </p>

              </div>

            </div>

            <div className="flex items-center gap-4">

              <MapPin className="text-emerald-600" />

              <div>

                <h4 className="font-semibold">
                  Location
                </h4>

                <p className="text-slate-600">
                  {profile.location}
                </p>

              </div>

            </div>

          </div>

          {/* Contact Form */}

          <form className="space-y-4">

            <Input
              placeholder="Your Name"
              className="w-full"
            />

            <Input
              type="email"
              placeholder="Your Email"
              className="w-full"
            />

            <Textarea
              placeholder="Your Message"
              rows={5}
              className="w-full"
            />

            <Button
              className="w-full"
            >
              Send Message
            </Button>

          </form>

        </div>

      </div>
    </section>
  );
}