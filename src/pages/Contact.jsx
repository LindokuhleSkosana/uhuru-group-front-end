import { useState } from "react";
import { ArrowRight, CircleDollarSign, ShieldCheck } from "lucide-react";
import { contactDetails } from "../data";

export default function Contact() {
  const [formNotice, setFormNotice] = useState("");
  const handleSubmit = () =>
    setFormNotice("Your email app will open with the enquiry details ready to send.");

  return (
    <section className="contact section-pad" id="contact">
      <div className="section-heading">
        <p className="section-kicker">Contact</p>
        <h2>Start A Conversation</h2>
        <p>
          For business inquiries, partnerships, procurement opportunities or project
          discussions, contact the Uhuru Group team.
        </p>
      </div>

      <div className="contact-grid">
        <form
          className="enquiry-form"
          action="mailto:info@uhurugroup.co.za"
          method="post"
          encType="text/plain"
          onSubmit={handleSubmit}
        >
          <label>Name<input name="Name" type="text" autoComplete="name" required /></label>
          <label>Company<input name="Company" type="text" autoComplete="organization" /></label>
          <label>Email<input name="Email" type="email" autoComplete="email" required /></label>
          <label>Phone<input name="Phone" type="tel" autoComplete="tel" /></label>
          <label className="span-2">
            Enquiry Type
            <select name="Enquiry Type" defaultValue="Partnerships">
              <option>Partnerships</option>
              <option>Procurement</option>
              <option>Project Discussion</option>
              <option>Enterprise Development</option>
              <option>General Enquiry</option>
            </select>
          </label>
          <label className="span-2">
            Message
            <textarea name="Message" rows="6" required />
          </label>
          <button className="form-submit span-2" type="submit">
            Submit Enquiry <ArrowRight size={18} />
          </button>
          {formNotice && <p className="form-notice span-2">{formNotice}</p>}
        </form>

        <aside className="contact-panel">
          <div className="contact-panel-header">
            <ShieldCheck size={28} />
            <h3>Group Contact Details</h3>
          </div>
          {contactDetails.map(({ icon: Icon, label, href }) => (
            <a href={href} key={label}>
              <Icon size={17} /><span>{label}</span>
            </a>
          ))}
          <div className="contact-note">
            <CircleDollarSign size={22} />
            <p>
              Partnership, procurement and project opportunities are routed through the group
              office for review.
            </p>
          </div>
        </aside>
      </div>

      <div className="map-frame">
        <iframe
          title="Uhuru Group location at 45 Tambotie Avenue, Pretoria"
          src="https://www.google.com/maps?q=45+Tambotie+Avenue%2C+Pretoria%2C+South+Africa%2C+0184&output=embed"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
}
