import React from "react";

import styles from "./GainConfidence.module.css";
import HandsImg from "../../../assets/images/alarms-hands.png";

const gainConfidence = (props) => (
  <div className={styles.GainConfidence}>
    <div className={styles.Wrapper}>
      <div className={styles.ImageSection}>
        <img src={HandsImg} alt="Opton" />
      </div>
      <div className={styles.ListSection}>
        <p>
          <h4>OBRAZ Z MONITORINGU</h4>Najważniejszą cechą monitoringu jest
          dostarczanie informacji. Gdy dojdzie do jakiegoś zdarzenia – napaści,
          bójki, uszkodzenia mienia, kradzieży i innych – obraz z monitoringu
          daje podstawy do wskazania osób odpowiedzialnych i udowodnienia im
          winy na drodze sądowej.
        </p>
        <p>
          <h4>O KAŻDEJ PORZE DNIA</h4>Najważniejszą cechą monitoringu jest
          dostarczanie informacji. Gdy dojdzie do jakiegoś zdarzenia – napaści,
          bójki, uszkodzenia mienia, kradzieży i innych – obraz z monitoringu
          daje podstawy do wskazania osób odpowiedzialnych i udowodnienia im
          winy na drodze sądowej.
        </p>
        <p>
          <h4>KONTROLA W ZASIĘGU RĘKI</h4>Najważniejszą cechą monitoringu jest
          dostarczanie informacji. Gdy dojdzie do jakiegoś zdarzenia – napaści,
          bójki, uszkodzenia mienia, kradzieży i innych – obraz z monitoringu
          daje podstawy do wskazania osób odpowiedzialnych i udowodnienia im
          winy na drodze sądowej.
        </p>
      </div>
    </div>
  </div>
);

export default gainConfidence;