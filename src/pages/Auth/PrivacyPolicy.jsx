import React from 'react';
import { Link } from 'react-router-dom';
import PageContainer from '../../components/layout/PageContainer';

const PrivacyPolicy = () => {
  return (
    <PageContainer>
      <div className="max-w-4xl mx-auto py-12">
        <div className="mb-8">
          <Link to="/auth/sign-in" className="text-blue-600 hover:text-blue-700 text-sm font-medium mb-4 inline-flex items-center gap-1">
            ← Back
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mt-4">Privacy Policy</h1>
          <p className="text-gray-600 mt-2">Last updated: {new Date().toLocaleDateString()}</p>
        </div>

        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
            <p className="text-gray-700 mb-4">
              At Acorn, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use,
              disclose, and safeguard your information when you visit our website and use our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>
            <p className="text-gray-700 mb-4">We may collect information about you in a variety of ways:</p>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Information You Provide Directly</h3>
            <ul className="list-disc list-inside text-gray-700 mb-4">
              <li>Name and email address when you create an account</li>
              <li>Payment information when you make a purchase</li>
              <li>Communications when you contact us</li>
              <li>Any other information you choose to provide</li>
            </ul>

            <h3 className="text-lg font-semibold text-gray-800 mb-2">Information Collected Automatically</h3>
            <ul className="list-disc list-inside text-gray-700 mb-4">
              <li>Browser type and version</li>
              <li>IP address</li>
              <li>Pages you visit and time spent on them</li>
              <li>Referral source</li>
              <li>Device type and operating system</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Use Your Information</h2>
            <p className="text-gray-700 mb-4">We use the information we collect to:</p>
            <ul className="list-disc list-inside text-gray-700 mb-4">
              <li>Create and manage your account</li>
              <li>Process transactions and send you related information</li>
              <li>Email you regarding your account status and updates</li>
              <li>Fulfill and manage requests for services</li>
              <li>Generate analytics data</li>
              <li>Detect and prevent fraud</li>
              <li>Improve and personalize our services</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Data Security</h2>
            <p className="text-gray-700 mb-4">
              We implement a variety of security measures to maintain the safety of your personal information. Your personal
              information is contained behind secured networks and is only accessible by a limited number of persons who have
              special access rights to such systems.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Disclosure of Information</h2>
            <p className="text-gray-700 mb-4">
              We may disclose your information when required by law or if we have a good-faith belief that such action is
              necessary to comply with the law, enforce our policies, or protect the rights, property, and safety of Acorn,
              our users, or others.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Third-Party Services</h2>
            <p className="text-gray-700 mb-4">
              We may share your information with third-party service providers who perform services on our behalf, including
              payment processors, data analytics companies, and hosting providers. These third parties are bound by
              confidentiality agreements and are prohibited from using your information for any other purpose.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Cookies</h2>
            <p className="text-gray-700 mb-4">
              We use cookies to enhance your experience on our website. Cookies are small files that a site or its service
              provider transfers to your computer's hard drive through your web browser (if you allow). You can choose to have
              your computer warn you each time a cookie is being sent, or you can choose to turn off all cookies.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Your Rights</h2>
            <p className="text-gray-700 mb-4">Depending on your location, you may have certain rights regarding your personal data, including:</p>
            <ul className="list-disc list-inside text-gray-700 mb-4">
              <li>The right to access your personal data</li>
              <li>The right to correct inaccurate data</li>
              <li>The right to delete your data</li>
              <li>The right to restrict processing</li>
              <li>The right to data portability</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Changes to This Policy</h2>
            <p className="text-gray-700 mb-4">
              We reserve the right to modify this Privacy Policy at any time. Changes will be effective immediately upon
              posting to the website. Your continued use of the Service after any changes constitutes your acceptance of the
              new Privacy Policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Contact Us</h2>
            <p className="text-gray-700 mb-4">
              If you have any questions about this Privacy Policy or our privacy practices, please contact us at:{' '}
              <a href="mailto:privacy@acorn.dev" className="text-blue-600 hover:text-blue-700 font-medium">
                privacy@acorn.dev
              </a>
            </p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <Link
            to="/auth/sign-in"
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
          >
            Back to Sign In
          </Link>
        </div>
      </div>
    </PageContainer>
  );
};

export default PrivacyPolicy;
