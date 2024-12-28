import React, { useEffect } from "react";
import "./TermsAndConditions.css";

const TermsAndConditions = () => {
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="terms-and-conditions">
      <div className="terms-container">
        <h1 className="terms-title">Terms and Conditions</h1>

        <h2>Terms of Use</h2>
        <p>
          By using this website, you acknowledge your assent to the following
          conditions of use without limitation or qualification. Please read
          these conditions carefully before using this website. These terms and
          conditions may be revised at any time by updating this post. You are
          bound by any such revisions and should therefore periodically visit
          this page to review the then current terms and conditions to which
          you are bound.
        </p>

        <h2>Disclaimers</h2>
        <p>
          To the fullest extent permissible pursuant to the applicable law, the
          materials on this website are provided "As it is" and without
          warranties of any kind either expressed or implied, and Mentor Guru
          and its affiliates disclaim all warranties, expressed or implied,
          including, but not limited to, implied warranties of merchantability
          and fitness for a particular purpose. Mentor Guru does not warrant
          that the functions contained in the materials will be uninterrupted
          or error-free, that defects will be corrected, or that this website
          or the server that makes it available are free of viruses or other
          harmful components.
        </p>
        <p>
          Mentor Guru does not warrant or make any representations regarding
          the use or the results of the use of the materials on this website in
          terms of their correctness, accuracy, reliability, or otherwise. You
          (and not Mentor Guru) assume the entire cost of all necessary
          servicing, repair, or correction. The information and descriptions
          contained herein are not intended to be complete descriptions of all
          terms, exclusions, and conditions applicable to the products and
          services but are provided solely for general informational purposes.
        </p>
      </div>
    </section>
  );
};

export default TermsAndConditions;
