import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Calendar } from "lucide-react";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import ScrollToTopButton from "@/components/shared/ScrollToTopButton";

export const metadata: Metadata = {
  title: "Terms of Service | Go Kids India",
  description:
    "Read the Go Kids India Terms of Service governing access to and use of the Go Kids Platform.",
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

export default function TermsOfServicePage() {
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
            Go Kids India Terms of Service
          </h1>

          <div className="mt-4 space-y-3">
            <p
              className="text-sm leading-relaxed sm:text-base"
              style={{ color: "#6B7280" }}
            >
              These Terms govern access to and use of www.gokids.co.in and
              related applications. Please read them carefully before using the
              Go Kids Platform.
            </p>
            <p
              className="text-sm leading-relaxed sm:text-base"
              style={{ color: "#6B7280" }}
            >
              By creating an account, registering a child for an assessment or
              workshop, booking a mentor session, or otherwise using the
              Platform, you agree to be bound by these Terms.
            </p>
          </div>
        </section>

        <div className="mt-8">
          <Section title="1. Acceptance of Terms">
            <p className="text-sm sm:text-base">
              These Terms of Service (&quot;Terms&quot;) govern access to and
              use of www.gokids.co.in and related applications (the
              &quot;Platform&quot;), operated by Go Kids India (&quot;Go
              Kids&quot;, &quot;we&quot;, &quot;us&quot;, &quot;our&quot;). By
              creating an account, registering a child for an assessment or
              workshop, booking a mentor session, or otherwise using the
              Platform, you agree to be bound by these Terms and by our Privacy
              Policy, which is incorporated by reference.
            </p>
            <p className="text-sm sm:text-base">
              If you do not agree to these Terms, please do not use the
              Platform.
            </p>
          </Section>

          <Section title="2. Eligibility and Accounts">
            <ul className="text-sm sm:text-base list-disc pl-5 space-y-2">
              <li>
                You must be at least 18 years old and have the legal capacity to
                enter into a binding contract to register an account on the
                Platform.
              </li>
              <li>
                The Platform is designed for use by parents and legal guardians
                on behalf of their children. Children do not register their own
                accounts, agree to these Terms, or make payments.
              </li>
              <li>
                You are responsible for maintaining the confidentiality of your
                account credentials and for all activity that occurs under your
                account.
              </li>
              <li>
                You agree to provide accurate, current, and complete information
                during registration and to keep it updated.
              </li>
            </ul>
          </Section>

          <Section title="3. Description of Services">
            <p className="text-sm sm:text-base">Go Kids provides:</p>
            <ul className="text-sm sm:text-base list-disc pl-5 space-y-2">
              <li>
                Assessments: online, science-informed questionnaires and
                activities that generate a report on a child&apos;s attention
                span, writing ability, and other developmental areas.
              </li>
              <li>
                Workshops: live and self-paced skill-building programmes (e.g.,
                public speaking, writing, critical thinking) for children aged
                approximately 4–16.
              </li>
              <li>
                Mentor sessions: one-on-one sessions with child-development
                professionals, career coaches, or education specialists for
                guidance and coaching purposes.
              </li>
              <li>
                Talk: a community space for parents to share experiences and
                support one another.
              </li>
            </ul>
            <p className="text-sm sm:text-base mt-4">
              Go Kids may add, modify, or discontinue any Service, in whole or
              in part, at any time.
            </p>
          </Section>

          <Section title="4. Nature of Our Services — Please Read Carefully">
            <ul className="text-sm sm:text-base list-disc pl-5 space-y-2">
              <li>
                Assessments provide indicative, informational insights into a
                child&apos;s skills and tendencies. They are not standardised
                psychometric, medical, psychiatric, or diagnostic instruments,
                and results should not be treated as a clinical diagnosis of any
                condition.
              </li>
              <li>
                Mentors, including those with backgrounds in psychology,
                counselling, or education, provide developmental guidance and
                coaching. Mentor sessions are not psychotherapy, medical
                treatment, or a substitute for professional mental-health,
                medical, or educational-assessment services.
              </li>
              <li>
                If you have concerns about your child&apos;s mental health,
                learning needs, or development, please consult a qualified
                medical practitioner, licensed psychologist, or the child&apos;s
                school, in addition to or instead of using our Services.
              </li>
              <li>
                Statistics, testimonials, and outcomes referenced on the
                Platform (for example, satisfaction percentages or before/after
                stories) are illustrative and based on self-reported or
                aggregated data; individual results will vary.
              </li>
            </ul>
          </Section>

          <Section title="5. Parental Responsibility and Consent">
            <ul className="text-sm sm:text-base list-disc pl-5 space-y-2">
              <li>
                By registering a child for any Service, you confirm that you are
                the child&apos;s parent or legal guardian, or are otherwise
                authorised to make this decision on the child&apos;s behalf.
              </li>
              <li>
                You are responsible for supervising your child&apos;s use of the
                Platform, including participation in live workshops and mentor
                sessions, and for ensuring the information you provide about
                your child is accurate.
              </li>
              <li>
                You consent to the collection and use of your child&apos;s
                information as described in our Privacy Policy, and you may
                withdraw this consent as set out there.
              </li>
            </ul>
          </Section>

          <Section title="6. Fees, Payments, and Refunds">
            <ul className="text-sm sm:text-base list-disc pl-5 space-y-2">
              <li>
                Fees for workshops, assessments, and mentor sessions are as
                displayed on the Platform at the time of booking, in Indian
                Rupees (INR) unless stated otherwise.
              </li>
              <li>
                Payments are processed through a third-party payment gateway. By
                making a payment, you agree to that gateway&apos;s applicable
                terms.
              </li>
              <li>
                Unless otherwise stated for a specific programme, fees are
                non-refundable once a workshop has commenced or a mentor session
                has been completed. Cancellations made at least [Insert Number]
                hours/days before a scheduled session may be eligible for a
                reschedule or refund, at our discretion, as set out on the
                relevant booking page.
              </li>
              <li>
                We reserve the right to cancel or reschedule a workshop or
                session (for example, due to insufficient enrolment or mentor
                unavailability) and will offer an alternative date or a full
                refund in that event.
              </li>
            </ul>
          </Section>

          <Section title="7. User Conduct">
            <p className="text-sm sm:text-base">
              When using the Talk community or interacting with mentors and
              instructors, you agree not to:
            </p>
            <ul className="text-sm sm:text-base list-disc pl-5 space-y-2">
              <li>
                Post content that is unlawful, defamatory, obscene, harassing,
                or harmful to another user or child.
              </li>
              <li>
                Share another child&apos;s personal information without that
                child&apos;s parent&apos;s consent.
              </li>
              <li>
                Impersonate any person or misrepresent your affiliation with any
                person or entity.
              </li>
              <li>
                Use the Platform for any commercial solicitation not authorised
                by Go Kids.
              </li>
              <li>
                Attempt to gain unauthorised access to the Platform, other
                users&apos; accounts, or our systems.
              </li>
            </ul>
            <p className="text-sm sm:text-base mt-4">
              We may remove content or suspend or terminate accounts that
              violate these Terms, at our discretion, particularly where child
              safety is a concern.
            </p>
          </Section>

          <Section title="8. Intellectual Property">
            <p className="text-sm sm:text-base">
              All content on the Platform, including assessment methodologies,
              workshop materials, text, graphics, logos, and software, is owned
              by or licensed to Go Kids and is protected by applicable
              intellectual-property laws. You may use this content only for your
              personal, non-commercial use in connection with the Services and
              may not copy, reproduce, distribute, or create derivative works
              from it without our prior written consent.
            </p>
          </Section>

          <Section title="9. User-Generated Content and Testimonials">
            <p className="text-sm sm:text-base">
              If you submit testimonials, reviews, comments, or other content to
              the Platform, you grant Go Kids a non-exclusive, worldwide,
              royalty-free licence to use, reproduce, and display that content
              on the Platform and in our marketing materials, in accordance with
              our Privacy Policy. You confirm you have the right to submit such
              content and that it does not infringe any third party&apos;s
              rights.
            </p>
          </Section>

          <Section title="10. Third-Party Links and Services">
            <p className="text-sm sm:text-base">
              The Platform may link to or integrate third-party services (such
              as payment processors or social media). We do not control and are
              not responsible for these third parties, and your use of them is
              subject to their own terms and policies.
            </p>
          </Section>

          <Section title="11. Disclaimers">
            <p className="text-sm sm:text-base">
              The Platform and Services are provided on an &quot;as is&quot; and
              &quot;as available&quot; basis. To the fullest extent permitted by
              law, Go Kids disclaims all warranties, whether express or implied,
              including warranties of merchantability, fitness for a particular
              purpose, and non-infringement. We do not warrant that assessments
              will be error-free, that workshops will produce any specific
              outcome, or that the Platform will be uninterrupted or secure.
            </p>
          </Section>

          <Section title="12. Limitation of Liability">
            <p className="text-sm sm:text-base">
              To the fullest extent permitted by applicable law, Go Kids and its
              officers, employees, mentors, and instructors shall not be liable
              for any indirect, incidental, special, or consequential damages
              arising from or related to your use of the Platform or Services.
              Our total liability for any claim arising out of or relating to
              these Terms or the Services shall not exceed the amount paid by
              you for the specific Service giving rise to the claim in the
              preceding six (6) months.
            </p>
            <p className="text-sm sm:text-base">
              Nothing in these Terms limits any liability that cannot be
              excluded or limited under applicable Indian law.
            </p>
          </Section>

          <Section title="13. Indemnification">
            <p className="text-sm sm:text-base">
              You agree to indemnify and hold harmless Go Kids and its officers,
              employees, mentors, and instructors from any claims, losses,
              liabilities, and expenses (including reasonable legal fees)
              arising out of your breach of these Terms, misuse of the Platform,
              or violation of any law or third-party right.
            </p>
          </Section>

          <Section title="14. Termination">
            <p className="text-sm sm:text-base">
              You may close your account at any time by contacting us. We may
              suspend or terminate your access to the Platform, with or without
              notice, if we reasonably believe you have violated these Terms,
              engaged in conduct harmful to another user or child, or for any
              other reason at our discretion, including discontinuation of the
              Service.
            </p>
          </Section>

          <Section title="15. Governing Law and Jurisdiction">
            <p className="text-sm sm:text-base">
              These Terms are governed by the laws of India. Subject to any
              mandatory consumer-protection venue rights you may have, the
              courts at Mohali/Chandigarh, Punjab, shall have exclusive
              jurisdiction over any dispute arising out of or relating to these
              Terms or the Services.
            </p>
          </Section>

          <Section title="16. Grievance Redressal">
            <p className="text-sm sm:text-base">
              For any complaints or grievances regarding the Platform, please
              contact our Grievance Officer:
            </p>
            <div className="space-y-2">
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
          </Section>

          <Section title="17. Changes to These Terms">
            <p className="text-sm sm:text-base">
              We may update these Terms from time to time. The updated version
              will be posted on this page with a revised &quot;Last
              updated&quot; date. Continued use of the Platform after changes
              take effect constitutes acceptance of the revised Terms. For
              material changes, we will make reasonable efforts to notify
              registered users in advance.
            </p>
          </Section>

          <Section title="18. Contact Us">
            <p className="text-sm sm:text-base">
              For questions about these Terms, please contact us at:
            </p>
            <div className="space-y-2">
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
