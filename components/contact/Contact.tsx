import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { profile } from "@/data/profile";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-white py-24"
    >
      <div className="mx-auto max-w-6xl px-6">

        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold">
            Contact Me
          </h2>

          <p className="mt-4 text-slate-500">
            Let's connect and build something amazing together.
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-2">

          {/* Contact Information */}

          <div className="space-y-8">

            <div className="flex items-center gap-4">

              <Mail className="text-emerald-600" />

              <div>
                <h4 className="font-semibold">
                  Email
                </h4>

                <p className="text-slate-600">
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

            <Input placeholder="Your Name" />

            <Input
              type="email"
              placeholder="Your Email"
            />

            <Textarea
              placeholder="Your Message"
              rows={5}
            />

            <Button className="w-full">
              Send Message
            </Button>

          </form>

        </div>

      </div>
    </section>
  );
}