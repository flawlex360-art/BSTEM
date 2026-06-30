import Link from 'next/link';

export const metadata = {
  title: 'Privacy Policy | Kpando Anglican STEM Club',
  description: 'Comprehensive Privacy Policy and Data Protection standards for the Kpando Anglican STEM Club.',
};

export default function PrivacyPolicy() {
  return (
    <div className="animate-fade-in pb-10">
      {/* Hero Header */}
      <section className="hero" style={{ minHeight: '30vh', padding: '4rem 0', background: 'var(--primary)', color: 'white' }}>
        <div className="container hero-content center">
          <h1 style={{ marginBottom: '0.2rem', color: 'white' }}>Privacy Policy</h1>
          <p className="hero-subtitle" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
            Comprehensive Data Protection & Privacy Guidelines
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section">
        <div className="container" style={{ maxWidth: '900px', margin: '0 auto', background: 'var(--card-bg)', padding: '3rem', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-sm)' }}>
          
          <div style={{ marginBottom: '2.5rem' }}>
            <p className="lead" style={{ fontWeight: 'bold' }}>Effective Date: June 30, 2024</p>
            <p style={{ marginTop: '1rem', lineHeight: '1.7' }}>
              Welcome to the Kpando Anglican STEM Club ("we," "us," or "our"). We are committed to protecting your personal information and your right to privacy. This Privacy Policy governs the privacy policies and practices of our website, located at kpandoanglicanstem.org, and all associated digital platforms and services.
            </p>
            <p style={{ marginTop: '1rem', lineHeight: '1.7' }}>
              Please read this privacy policy carefully as it will help you understand what we do with the information that we collect. If there are any terms in this privacy policy that you do not agree with, please discontinue use of our site and our services immediately.
            </p>
          </div>

          <div style={{ marginBottom: '2.5rem' }}>
            <h2 style={{ color: 'var(--primary)', borderBottom: '2px solid var(--gray-200)', paddingBottom: '0.5rem', marginBottom: '1.5rem', fontSize: '1.5rem' }}>
              1. Information We Collect
            </h2>
            <p style={{ lineHeight: '1.7' }}>
              We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our activities, when you participate in activities on the website, or otherwise when you contact us. The personal information that we collect depends on the context of your interactions with us and the website.
            </p>
            <ul style={{ paddingLeft: '1.5rem', marginTop: '1rem', lineHeight: '1.7' }}>
              <li style={{ marginBottom: '0.5rem' }}><strong>Personal Information Provided by You:</strong> We collect names, phone numbers, email addresses, mailing addresses, contact preferences, educational affiliations, and other similar information.</li>
              <li style={{ marginBottom: '0.5rem' }}><strong>Media and Photography:</strong> During club events, meetings, and activities, we may capture photographs and video recordings for promotional, educational, and reporting purposes.</li>
              <li style={{ marginBottom: '0.5rem' }}><strong>Automatically Collected Data:</strong> We automatically collect certain information when you visit, use, or navigate the website. This information does not reveal your specific identity (like your name or contact information) but may include device and usage information, such as your IP address, browser and device characteristics, operating system, language preferences, referring URLs, device name, country, location, and information about how and when you use our website.</li>
            </ul>
          </div>

          <div style={{ marginBottom: '2.5rem' }}>
            <h2 style={{ color: 'var(--primary)', borderBottom: '2px solid var(--gray-200)', paddingBottom: '0.5rem', marginBottom: '1.5rem', fontSize: '1.5rem' }}>
              2. How We Use Your Information
            </h2>
            <p style={{ lineHeight: '1.7' }}>
              We use personal information collected via our website for a variety of organizational purposes described below. We process your personal information for these purposes in reliance on our legitimate educational interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.
            </p>
            <ul style={{ paddingLeft: '1.5rem', marginTop: '1rem', lineHeight: '1.7' }}>
              <li style={{ marginBottom: '0.5rem' }}><strong>To facilitate account creation and logon process:</strong> If you choose to link your account with us to a third-party account (such as your Google account), we use the information you allowed us to collect from those third parties to facilitate account creation.</li>
              <li style={{ marginBottom: '0.5rem' }}><strong>To post testimonials and leadership profiles:</strong> We post testimonials, leadership roles, and club achievements on our website that may contain personal information. Prior to posting a profile or testimonial, we will obtain your consent to use your name, role, and the content of the testimonial.</li>
              <li style={{ marginBottom: '0.5rem' }}><strong>To communicate with you:</strong> We may use your information to send you updates regarding club meetings, STEM project deadlines, new initiatives, and administrative information.</li>
              <li style={{ marginBottom: '0.5rem' }}><strong>To protect our website:</strong> We may use your information as part of our efforts to keep our website safe and secure (for example, for fraud monitoring and prevention).</li>
              <li style={{ marginBottom: '0.5rem' }}><strong>To analyze usage and improve services:</strong> We may use data analytics to understand how users interact with our site to improve user experience, site functionality, and club offerings.</li>
            </ul>
          </div>

          <div style={{ marginBottom: '2.5rem' }}>
            <h2 style={{ color: 'var(--primary)', borderBottom: '2px solid var(--gray-200)', paddingBottom: '0.5rem', marginBottom: '1.5rem', fontSize: '1.5rem' }}>
              3. Information Sharing and Disclosure
            </h2>
            <p style={{ lineHeight: '1.7' }}>
              We do not sell, rent, or trade your personal information. We may process or share your data that we hold based on the following legal basis:
            </p>
            <ul style={{ paddingLeft: '1.5rem', marginTop: '1rem', lineHeight: '1.7' }}>
              <li style={{ marginBottom: '0.5rem' }}><strong>Consent:</strong> We may process your data if you have given us specific consent to use your personal information for a specific purpose.</li>
              <li style={{ marginBottom: '0.5rem' }}><strong>Legitimate Interests:</strong> We may process your data when it is reasonably necessary to achieve our legitimate educational and organizational interests.</li>
              <li style={{ marginBottom: '0.5rem' }}><strong>Legal Obligations:</strong> We may disclose your information where we are legally required to do so in order to comply with applicable law, governmental requests, a judicial proceeding, court order, or legal process.</li>
              <li style={{ marginBottom: '0.5rem' }}><strong>Vital Interests:</strong> We may disclose your information where we believe it is necessary to investigate, prevent, or take action regarding potential violations of our policies, suspected fraud, situations involving potential threats to the safety of any person and illegal activities.</li>
            </ul>
          </div>

          <div style={{ marginBottom: '2.5rem' }}>
            <h2 style={{ color: 'var(--primary)', borderBottom: '2px solid var(--gray-200)', paddingBottom: '0.5rem', marginBottom: '1.5rem', fontSize: '1.5rem' }}>
              4. Cookies and Web Beacons
            </h2>
            <p style={{ lineHeight: '1.7' }}>
              We may use cookies and similar tracking technologies (like web beacons and pixels) to access or store information. Specific information about how we use such technologies and how you can refuse certain cookies is set out in our Cookie Notice. Generally, we use cookies to operate and administer our site, gather analytics, and improve your browsing experience.
            </p>
          </div>

          <div style={{ marginBottom: '2.5rem' }}>
            <h2 style={{ color: 'var(--primary)', borderBottom: '2px solid var(--gray-200)', paddingBottom: '0.5rem', marginBottom: '1.5rem', fontSize: '1.5rem' }}>
              5. Data Retention and Security
            </h2>
            <p style={{ lineHeight: '1.7' }}>
              We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy policy, unless a longer retention period is required or permitted by law (such as tax, accounting, or other legal requirements). When we have no ongoing legitimate organizational need to process your personal information, we will either delete or anonymize such information.
            </p>
            <p style={{ marginTop: '1rem', lineHeight: '1.7' }}>
              We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure.
            </p>
          </div>

          <div style={{ marginBottom: '2.5rem' }}>
            <h2 style={{ color: 'var(--primary)', borderBottom: '2px solid var(--gray-200)', paddingBottom: '0.5rem', marginBottom: '1.5rem', fontSize: '1.5rem' }}>
              6. Children's Privacy and Educational Data
            </h2>
            <p style={{ lineHeight: '1.7' }}>
              Given our nature as a school-based club, we frequently interact with students. We strictly adhere to all regional and national educational data protection standards. We do not knowingly solicit data from or market to children under 13 years of age without explicit parental consent. By participating in the club, you represent that you have received appropriate permissions from your school or legal guardians. If we learn that personal information from users less than 13 years of age has been collected without verifiable parental consent, we will deactivate the account and take reasonable measures to promptly delete such data from our records.
            </p>
          </div>

          <div style={{ marginBottom: '2.5rem' }}>
            <h2 style={{ color: 'var(--primary)', borderBottom: '2px solid var(--gray-200)', paddingBottom: '0.5rem', marginBottom: '1.5rem', fontSize: '1.5rem' }}>
              7. What Are Your Privacy Rights?
            </h2>
            <p style={{ lineHeight: '1.7' }}>
              Depending on your location, you may have certain rights regarding your personal information, such as the right to:
            </p>
            <ul style={{ paddingLeft: '1.5rem', marginTop: '1rem', lineHeight: '1.7' }}>
              <li style={{ marginBottom: '0.5rem' }}>Request access and obtain a copy of your personal information.</li>
              <li style={{ marginBottom: '0.5rem' }}>Request rectification or erasure of your personal data.</li>
              <li style={{ marginBottom: '0.5rem' }}>Restrict the processing of your personal information.</li>
              <li style={{ marginBottom: '0.5rem' }}>If applicable, object to the processing of your data.</li>
            </ul>
            <p style={{ marginTop: '1rem', lineHeight: '1.7' }}>
              To make such a request, please use the contact details provided below. We will consider and act upon any request in accordance with applicable data protection laws.
            </p>
          </div>

          <div style={{ marginBottom: '2.5rem' }}>
            <h2 style={{ color: 'var(--primary)', borderBottom: '2px solid var(--gray-200)', paddingBottom: '0.5rem', marginBottom: '1.5rem', fontSize: '1.5rem' }}>
              8. Updates to This Policy
            </h2>
            <p style={{ lineHeight: '1.7' }}>
              We may update this privacy policy from time to time. The updated version will be indicated by an updated "Revised" date and the updated version will be effective as soon as it is accessible. If we make material changes to this privacy policy, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification. We encourage you to review this privacy policy frequently to be informed of how we are protecting your information.
            </p>
          </div>

          <div style={{ marginBottom: '2.5rem' }}>
            <h2 style={{ color: 'var(--primary)', borderBottom: '2px solid var(--gray-200)', paddingBottom: '0.5rem', marginBottom: '1.5rem', fontSize: '1.5rem' }}>
              9. Contact Us
            </h2>
            <p style={{ lineHeight: '1.7' }}>
              If you have questions or comments about this policy, you may email us at <strong>info@kpandoanglicanstem.org</strong> or by post to:
            </p>
            <div style={{ marginTop: '1rem', padding: '1rem', background: 'var(--gray-100)', borderRadius: 'var(--radius-md)', display: 'inline-block' }}>
              <strong>Kpando Anglican STEM Club</strong><br />
              Kpando Anglican Junior High School<br />
              Volta Region, Ghana
            </div>
          </div>

          <div style={{ marginTop: '4rem', textAlign: 'center' }}>
            <Link href="/" className="btn btn-primary" style={{ padding: '0.75rem 2rem', fontSize: '1.1rem' }}>
              Return to Home
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
}
