import React from "react";
import "./PrivacyPolicy.css";

const PrivacyPolicy = () => {
  return (
    <section className="privacy-policy">
      <div className="privacy-container">
        <h1 className="privacy-title">Privacy Policy</h1>
        <p>
          Any personal information that you transmit to Mentor Guru and its
          affiliates will be used only for purposes of processing your
          application, the assessment and processing of any other administration
          relevant to Mentor Guru. This privacy policy applies to the services
          made available at <a href="https://mentorguru.in">mentorguru.in</a> and the Email ID of the developer
          is <a href="mailto:ask@mentorguru.in">ask@mentorguru.in</a>.
        </p>
        <p>
          The website will be hereinafter collectively referred to as Platform.
          Statistical information derived from any personal information
          transmitted to Mentor Guru via this Platform may be shared with third
          parties but will not include any personally identifiable data.
        </p>
        <h2>Location Information</h2>
        <p>
          Access to location/GPS data is optional and doesn't affect the
          services at all. If the user has granted access to the location/GPS
          data, we may collect and use this information to create a heatmap or
          to improve our services in a particular geographical region.
        </p>
        <h2>Data Collection</h2>
        <p>
          We collect Name, Email, and Profile picture during Facebook
          Login/Signup feature. This information is used to create the user's
          account and to send emails regarding services provided by us.
        </p>
        <h2>Account Deletion</h2>
        <p>
          A user can send an email to <a href="mailto:ask@mentorguru.in">ask@mentorguru.in</a> to get
          their account deleted from our system. We will erase the user's data
          from our system. However, in some cases, we will retain the
          information for as long as it is required for complying with legal
          obligations or business compliances.
        </p>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
