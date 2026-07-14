import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Calendar } from "lucide-react";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import ScrollToTopButton from "@/components/shared/ScrollToTopButton";

export const metadata: Metadata = {
  title: "Privacy Policy | Go Kids India",
  description:
    "Read Go Kids India privacy policy on how we collect, use, share, and protect personal data.",
};

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-3 rounded-3xl border border-brand-grey bg-white p-6 shadow-sm sm:p-7">
      <h2
        className="text-xl sm:text-2xl font-extrabold"
        style={{ color: "#1A1A1A", fontFamily: "var(--font-nunito)" }}
      >
        {title}
      </h2>
      <div
        className="mt-3 space-y-3 text-justify leading-7"
        style={{ color: "#374151" }}
      >
        {children}
      </div>
    </section>
  );
}

export default function PrivacyPolicyPage() {
  const lastUpdated = new Date().toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#FFFDF7_0%,#FFFFFF_100%)] text-gray-800">
      <Navbar />
      <main className="mx-auto max-w-7xl px-4 pb-14 pt-24 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-grey-text transition-colors hover:text-brand-black"
        >
          <ArrowLeft size={16} />
          Back to home
        </Link>

        {/* ── Hero header ─────────────────────────────────────────────────── */}
        <section className="mt-6 rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 lg:p-10">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            {/* <div
              className="inline-flex w-fit items-center gap-2 rounded-full bg-[#FFF9E6] px-3 py-1 text-xs font-bold uppercase tracking-[0.2em]"
              style={{ color: "#F4845F" }}
            >
              <ShieldCheck size={14} />
              Privacy Policy
            </div> */}

            <span
              className="inline-flex w-fit items-center gap-1.5 text-xs font-medium sm:text-sm"
              style={{ color: "#9CA3AF" }}
            >
              <Calendar size={13} />
              Last updated: {lastUpdated}
            </span>
          </div>

          <h1
            className="mt-4 text-3xl font-extrabold leading-tight sm:text-4xl"
            style={{ color: "#1A1A1A", fontFamily: "var(--font-nunito)" }}
          >
            Go Kids India Privacy Policy
          </h1>

          <div className="mt-4 space-y-3">
            <p
              className="text-sm leading-relaxed sm:text-base"
              style={{ color: "#6B7280" }}
            >
              This policy explains how we collect, use, protect, and share your
              family&apos;s information across the Go Kids Platform.
            </p>
            <p
              className="text-sm leading-relaxed sm:text-base"
              style={{ color: "#6B7280" }}
            >
              We are committed to protecting the personal information of
              parents, guardians, and children using our services. This page
              outlines our practices in a clear, parent-friendly way so you know
              how your data is handled.
            </p>
          </div>
        </section>

        <div className="mt-8">
          <Section title="1. Introduction">
            <p className="text-sm sm:text-base">
              Go Kids India (&quot;Go Kids&quot;, &quot;we&quot;,
              &quot;us&quot;, or &quot;our&quot;) operates the website
              www.gokids.co.in and related mobile and web applications
              (collectively, the &quot;Platform&quot;), which provide
              child-development assessments, skill-based workshops, mentorship
              sessions, and a parent community (&quot;Services&quot;).
            </p>
            <p className="text-sm sm:text-base">
              This Privacy Policy explains what personal data we collect, how we
              use it, who we share it with, and the choices and rights available
              to you and your child. It applies to parents, guardians, and
              children who use the Platform, in each case as described below.
            </p>
            <p className="text-sm sm:text-base">
              Please read this Policy carefully. By creating an account,
              registering a child for an assessment or workshop, booking a
              mentor session, or otherwise using the Platform, you confirm that
              you have read, understood, and agree to this Policy and consent to
              the collection and use of information as described here.
            </p>
            <p className="text-sm sm:text-base">
              If you are a parent or legal guardian registering a child under 18
              years of age, you are providing this consent on behalf of your
              child, and you confirm that you have the legal authority to do so.
            </p>
          </Section>

          <Section title="2. Who This Policy Covers">
            <p className="text-sm sm:text-base">
              Go Kids is designed to be used by parents/guardians on behalf of
              their children. Children do not independently create accounts,
              make payments, or agree to our Terms of Service — a parent or
              guardian does so on the child&apos;s behalf. References in this
              Policy to &quot;you&quot; mean the registering parent/guardian,
              except where we specifically describe information about the
              &quot;child&quot;.
            </p>
          </Section>

          <Section title="3. Information We Collect">
            <h3
              className="text-lg font-bold"
              style={{ color: "#1A1A1A", fontFamily: "var(--font-nunito)" }}
            >
              3.1 Information you provide about yourself (the parent/guardian)
            </h3>
            <ul className="text-sm sm:text-base list-disc pl-5 space-y-2">
              <li>
                Contact details: name, email address, phone number,
                city/address.
              </li>
              <li>Account credentials: username/login information.</li>
              <li>
                Payment information: billing details and transaction records for
                workshops, assessments, or mentor sessions (payments are
                processed by our third-party payment gateway; we do not store
                full card numbers).
              </li>
              <li>
                Communications: messages you send us via email, phone, contact
                forms, or the Talk community.
              </li>
            </ul>

            <h3
              className="text-lg font-bold mt-6"
              style={{ color: "#1A1A1A", fontFamily: "var(--font-nunito)" }}
            >
              3.2 Information about your child
            </h3>
            <ul className="text-sm sm:text-base list-disc pl-5 space-y-2">
              <li>
                Basic details: first name, age/date of birth, gender,
                grade/school (where provided).
              </li>
              <li>
                Assessment data: responses to attention-span, writing-ability,
                and other assessments, along with resulting scores and generated
                reports.
              </li>
              <li>
                Workshop and progress data: attendance, exercise completion, and
                progress notes from workshops and daily practice modules.
              </li>
              <li>
                Mentor session information: scheduling details and, where a
                parent has separately consented, session notes taken by a mentor
                for continuity of guidance. Mentor sessions are not medical or
                clinical records (see Section 4).
              </li>
              <li>
                Feedback and testimonials: if a parent chooses to share a
                testimonial, we may collect the child&apos;s first name and age
                as included in that testimonial (see Section 10).
              </li>
            </ul>

            <h3
              className="text-lg font-bold mt-6"
              style={{ color: "#1A1A1A", fontFamily: "var(--font-nunito)" }}
            >
              3.3 Information collected automatically
            </h3>
            <ul className="text-sm sm:text-base list-disc pl-5 space-y-2">
              <li>
                Device and usage data: IP address, browser type, device
                identifiers, pages viewed, and time spent on the Platform.
              </li>
              <li>
                Cookies and similar technologies, as described in Section 9.
              </li>
            </ul>
          </Section>

          <Section title="4. Special Protections for Children's Personal Data">
            <ul className="text-sm sm:text-base list-disc pl-5 space-y-2">
              <li>
                We recognise that much of the data on our Platform relates to
                children, and we handle it with additional care in line with
                India&apos;s Digital Personal Data Protection Act, 2023
                (&quot;DPDP Act&quot;) and applicable rules.
              </li>
              <li>
                We process a child&apos;s personal data only with verifiable
                consent from the child&apos;s parent or lawful guardian,
                obtained at the time of registration.
              </li>
              <li>
                We do not undertake behavioural monitoring or tracking of
                children for advertising purposes, and we do not serve targeted
                or personalised advertisements to children.
              </li>
              <li>
                We do not process children&apos;s personal data in any manner
                that is likely to cause any detrimental effect on the well-being
                of the child.
              </li>
              <li>
                Assessment reports and progress data are shared with the
                registering parent/guardian and, where applicable, the assigned
                mentor/instructor — not with unrelated third parties or
                advertisers.
              </li>
              <li>
                A parent/guardian may withdraw consent for their child&apos;s
                data at any time; see Section 8 for how to exercise this.
              </li>
              <li>
                Mentors on our Platform, including those with psychology or
                counselling backgrounds, provide developmental guidance and
                coaching. They do not provide clinical diagnosis, therapy, or
                treatment, and mentor session notes are not maintained as
                clinical health records.
              </li>
            </ul>
          </Section>

          <Section title="5. How We Use Information">
            <ul className="text-sm sm:text-base list-disc pl-5 space-y-2">
              <li>
                To create and manage parent and child profiles and deliver the
                Services requested (assessments, workshops, mentorship,
                community access).
              </li>
              <li>
                To generate assessment reports and track a child&apos;s progress
                over time.
              </li>
              <li>
                To process payments and send booking confirmations, reminders,
                and receipts.
              </li>
              <li>To respond to enquiries and provide customer support.</li>
              <li>
                To improve our assessments, workshops, and content, including
                through aggregated and de-identified analysis that does not
                identify any individual child.
              </li>
              <li>
                To send administrative updates and, where you have opted in,
                newsletters or promotional communications (you may opt out at
                any time).
              </li>
              <li>
                To comply with legal obligations and protect the safety of
                children and other users on the Platform.
              </li>
            </ul>
          </Section>

          <Section title="6. Sharing of Information">
            <p className="text-sm sm:text-base">
              We do not sell personal data. We may share information as follows:
            </p>
            <ul className="text-sm sm:text-base list-disc pl-5 space-y-2">
              <li>
                Mentors and workshop instructors, limited to the information
                needed to deliver the relevant session or programme.
              </li>
              <li>
                Service providers who support our operations, such as payment
                gateways, cloud hosting, email/SMS providers, and analytics
                providers, under confidentiality and data-protection
                obligations.
              </li>
              <li>
                Legal and regulatory authorities, where required by law, court
                order, or to protect the rights, property, or safety of Go Kids,
                our users, or the public.
              </li>
              <li>
                In connection with a business transfer, such as a merger,
                acquisition, or sale of assets, subject to this Policy
                continuing to apply to the transferred data.
              </li>
            </ul>
          </Section>

          <Section title="7. Data Storage and Security">
            <p className="text-sm sm:text-base">
              We use reasonable administrative, technical, and physical
              safeguards designed to protect personal data against unauthorised
              access, alteration, disclosure, or destruction, including access
              controls and encryption where appropriate. However, no method of
              transmission or storage is completely secure, and we cannot
              guarantee absolute security.
            </p>
            <p className="text-sm sm:text-base">
              Personal data is primarily stored on servers located in India
              and/or with cloud providers offering data centres in India, and
              may be processed by service providers located outside India under
              appropriate contractual safeguards, in accordance with applicable
              law.
            </p>
          </Section>

          <Section title="8. Data Retention and Your Rights">
            <p className="text-sm sm:text-base">
              We retain personal data, including assessment results and progress
              records, for as long as your account is active and as needed to
              provide the Services, and thereafter for a reasonable period to
              comply with legal, accounting, or dispute-resolution requirements,
              after which it is deleted or anonymised.
            </p>
            <p className="text-sm sm:text-base">
              Subject to applicable law, you may:
            </p>
            <ul className="text-sm sm:text-base list-disc pl-5 space-y-2">
              <li>
                Request access to, or a copy of, the personal data we hold about
                you or your child.
              </li>
              <li>Request correction of inaccurate or incomplete data.</li>
              <li>
                Withdraw consent for further processing of your or your
                child&apos;s data, and request erasure, subject to any data we
                are legally required to retain.
              </li>
              <li>
                Close your account and request deletion of associated data.
              </li>
              <li>
                Nominate another individual to exercise these rights on your
                behalf in the event of death or incapacity, where permitted by
                law.
              </li>
            </ul>
            <p className="text-sm sm:text-base mt-4">
              To exercise any of these rights, contact us using the details in
              Section 15. We may need to verify your identity and your
              relationship to the child before actioning a request.
            </p>
          </Section>

          <Section title="9. Cookies and Similar Technologies">
            <p className="text-sm sm:text-base">
              We use cookies and similar technologies to keep you logged in,
              remember preferences, understand how the Platform is used, and
              improve performance. You can control cookies through your browser
              settings; disabling cookies may affect some Platform features.
            </p>
            <p className="text-sm sm:text-base">
              We do not use cookies to build advertising profiles of children.
            </p>
          </Section>

          <Section title="10. Testimonials, Photos, and Community Content">
            <p className="text-sm sm:text-base">
              If you submit a testimonial, review, or comment (including in the
              Talk community), we may publish it on the Platform, our marketing
              materials, or social media, together with your first name, city,
              and your child&apos;s first name and age where you have included
              this. You may request removal or anonymisation of a published
              testimonial at any time by contacting us.
            </p>
            <p className="text-sm sm:text-base">
              Please avoid including sensitive information about your child
              (such as school name, address, or a photograph that clearly
              identifies your child) in public testimonials or community posts,
              as this content may be visible to other users.
            </p>
          </Section>

          <Section title="11. Third-Party Links and Services">
            <p className="text-sm sm:text-base">
              The Platform may contain links to third-party websites or services
              (for example, payment gateways or social media pages). We are not
              responsible for the privacy practices of these third parties, and
              we encourage you to review their respective privacy policies.
            </p>
          </Section>

          <Section title="12. Marketing Communications">
            <p className="text-sm sm:text-base">
              With your consent, we may send you updates about new assessments,
              workshops, or offers by email, SMS, or WhatsApp. You can opt out
              at any time using the unsubscribe link in our communications or by
              contacting us directly.
            </p>
          </Section>

          <Section title="13. Grievance Officer">
            <p className="text-sm sm:text-base">
              In accordance with the Information Technology Act, 2000 and rules
              made thereunder, the details of our Grievance Officer are:
            </p>
            <div className="space-y-2">
              <p className="text-sm sm:text-base">
                <strong>Name:</strong> Pallavi Modi
              </p>
              <p className="text-sm sm:text-base">
                <strong>Email:</strong> pallavi.modi@gokids.co.in
              </p>
              <p className="text-sm sm:text-base">
                <strong>Phone:</strong> +91-9876524155
              </p>
              <p className="text-sm sm:text-base">
                <strong>Address:</strong> SCO-2, Behind Gopals, Patiala Road,
                Zirakpur, Punjab, India
              </p>
            </div>
            <p className="text-sm sm:text-base mt-4">
              We will acknowledge and address grievances in accordance with
              applicable timelines under Indian law.
            </p>
          </Section>

          <Section title="14. Changes to This Policy">
            <p className="text-sm sm:text-base">
              We may update this Privacy Policy from time to time to reflect
              changes in our practices or applicable law. We will post the
              revised Policy on this page with an updated &quot;Last
              updated&quot; date, and where changes are material, we will
              provide additional notice (such as an email or an in-app
              notification) before they take effect.
            </p>
          </Section>

          <Section title="15. Contact Us">
            <p className="text-sm sm:text-base">
              If you have questions about this Privacy Policy or how we handle
              your or your child&apos;s personal data, please contact us at:
            </p>
            <div className="space-y-2">
              <p className="text-sm sm:text-base">
                <strong>Email:</strong> pallavi.modi@gokids.co.in
              </p>
              <p className="text-sm sm:text-base">
                <strong>Phone:</strong> +91-9876524155
              </p>
            </div>
          </Section>
        </div>

        <footer
          className="mt-8 rounded-3xl border border-brand-grey bg-white/80 px-6 py-5 shadow-sm"
          style={{ color: "#6B7280" }}
        >
          <p className="text-sm font-medium">Last updated: {lastUpdated}</p>
        </footer>
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}
