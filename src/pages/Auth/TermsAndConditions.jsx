import React from 'react';
import { Link } from 'react-router-dom';
import PageContainer from '../../components/layout/PageContainer';

const TermsAndConditions = () => {
  return (
    <PageContainer>
      <div className="max-w-4xl mx-auto py-12">
        <div className="mb-8">
          <Link to="/auth/sign-in" className="text-blue-600 hover:text-blue-700 text-sm font-medium mb-4 inline-flex items-center gap-1">
            ← Back
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mt-4">Terms and Conditions</h1>
          <p className="text-gray-600 mt-2">Last updated: {new Date().toLocaleDateString()}</p>
        </div>

        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-700 mb-4">
              By accessing and using this website and service ("Service"), you accept and agree to be bound by the terms and
              provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Use License</h2>
            <p className="text-gray-700 mb-4">
              Permission is granted to temporarily download one copy of the materials (information or software) on Acorn's
              website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer
              of title, and under this license you may not:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4">
              <li>Modifying or copying the materials</li>
              <li>Using the materials for any commercial purpose or for any public display</li>
              <li>Attempting to decompile or reverse engineer any software contained on the website</li>
              <li>Removing any copyright or other proprietary notations from the materials</li>
              <li>Transferring the materials to another person or "mirroring" the materials on any other server</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Disclaimer</h2>
            <p className="text-gray-700 mb-4">
              The materials on Acorn's website are provided on an 'as is' basis. Acorn makes no warranties, expressed or
              implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties
              or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property
              or other violation of rights.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Limitations</h2>
            <p className="text-gray-700 mb-4">
              In no event shall Acorn or its suppliers be liable for any damages (including, without limitation, damages for
              loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials
              on Acorn's website, even if Acorn or an authorized representative has been notified orally or in writing of the
              possibility of such damage.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Accuracy of Materials</h2>
            <p className="text-gray-700 mb-4">
              The materials appearing on Acorn's website could include technical, typographical, or photographic errors. Acorn
              does not warrant that any of the materials on its website are accurate, complete, or current. Acorn may make
              changes to the materials contained on its website at any time without notice.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Links</h2>
            <p className="text-gray-700 mb-4">
              Acorn has not reviewed all of the sites linked to its website and is not responsible for the contents of any such
              linked site. The inclusion of any link does not imply endorsement by Acorn of the site. Use of any such linked
              website is at the user's own risk.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Modifications</h2>
            <p className="text-gray-700 mb-4">
              Acorn may revise these terms of service for its website at any time without notice. By using this website, you
              are agreeing to be bound by the then current version of these terms of service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Governing Law</h2>
            <p className="text-gray-700 mb-4">
              These terms and conditions are governed by and construed in accordance with the laws of the United States, and
              you irrevocably submit to the exclusive jurisdiction of the courts in that location.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Contact Information</h2>
            <p className="text-gray-700 mb-4">
              If you have any questions about these Terms and Conditions, please contact us at:{' '}
              <a href="mailto:support@acorn.dev" className="text-blue-600 hover:text-blue-700 font-medium">
                support@acorn.dev
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

export default TermsAndConditions;
