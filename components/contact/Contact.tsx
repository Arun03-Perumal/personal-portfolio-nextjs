import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 bg-white"
    >
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">
            Contact Me
          </h2>

          <p className="text-slate-500 mt-4">
            Let's connect and build something amazing
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">

          {/* Left Side */}

          <div className="space-y-8">

            <div className="flex items-center gap-4">
              <Mail className="text-emerald-600" />
              <div>
                <h4 className="font-semibold">Email</h4>
                <p className="text-slate-600">
                  yourmail@gmail.com
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Phone className="text-emerald-600" />
              <div>
                <h4 className="font-semibold">Phone</h4>
                <p className="text-slate-600">
                  +91 XXXXX XXXXX
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <MapPin className="text-emerald-600" />
              <div>
                <h4 className="font-semibold">Location</h4>
                <p className="text-slate-600">
                  Chennai, Tamil Nadu
                </p>
              </div>
            </div>

          </div>

          {/* Right Side */}

          <form className="space-y-4">

            <Input placeholder="Your Name" />

            <Input placeholder="Your Email" />

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