import React, { useEffect } from "react";
import "./PrivacyPolicy.css";
 
 const Refund = () => {

    useEffect(() => {
      console.log("Hello World")
        window.scrollTo(0, 0);
      }, []);


   return (
     <>
     <section className="privacy-policy">
      <div className="privacy-container">
      <h1 className="terms-title">Refund Policy</h1>
      <h2>Refund Policy</h2>
      <p>At present, we do not have a refund policy.</p>
      </div>
    </section>
     </>
   )
 }
 
 export default Refund