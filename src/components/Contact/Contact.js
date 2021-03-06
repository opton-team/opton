import React, { Component } from "react";
import Form from "./Form/Form";
import BasicSection from "../BasicSection/BasicSection";
import styles from "./Contact.module.css";

class Contact extends Component {
  render() {
    let tel = "tel:600668695";
    let mail = "mailto:biuro@opton.net.pl";
    return (
      <React.Fragment>
        <Form />
        <BasicSection customClass={styles.Info}>
          <center>
            <p className={styles.SmallInfo}>TELEFON</p>
            <a href={tel} className={styles.BigInfo}>
              +48 600 668 695
            </a>
            <p className={styles.SmallInfo}>E-MAIL</p>
            <a href={mail} className={styles.BigInfo}>
              biuro@opton.net.pl
            </a>
            <p className={styles.SmallInfo}>ADRES</p>
            <p className={styles.Address}>
              ul. Ks. A. Kordeckiego 34/4, Bydgoszcz 85-225
            </p>
          </center>
        </BasicSection>
        <iframe
          title="Opton-Google-Maps"
          width="100%"
          height="400"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          id="gmap_canvas"
          src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=Ksi%C4%99dza%20Augustyna%20Kordeckiego%2034%20Bydgoszcz+(Opton)&amp;t=p&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        ></iframe>
        <script
          type="text/javascript"
          src="https://embedmaps.com/google-maps-authorization/script.js?id=6c8c710997a02d11f9751949ee3cea79c7977320"
        ></script>
      </React.Fragment>
    );
  }
}

export default Contact;
