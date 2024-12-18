import React, { useEffect } from "react";
import "./PrivacyPolicy.css";
 
 const Refund = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);


   return (
     <>
     <section className="privacy-policy">
      <div className="privacy-container">
      <h1 className="terms-title">Refund Policy</h1>
      <h2>Refund Policy</h2>
      <p>There is no Refund policy as such for now.</p>
      </div>
    </section>
     </>
   )
 }
 
 export default Refund