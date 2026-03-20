import styles from "./siddharsection.module.css";
import Heading from "@theme/Heading";

export default function SiddharSection() {
  return (
    <section className="container">
      <div className={styles.Hero1}>
        {/* LEFT IMAGE AREA */}
        <div className={styles.image_area}>
          <img
            src="/img/Lord_Shiva_as_an_ancient_Siddhar_sage_meditating_i-1773148063661.png"
            alt="Lord Shiva as Siddhar meditating"
            className={styles.main_img}
          />

          <img
            src="/img/Lord_Shiva_as_an_ancient_Siddhar_sage_meditating_i-1773148063661.png"
            alt="Lord Shiva as Siddhar meditating"
            className={`${styles.small_img} ${styles.top_img}`}
          />

          <img
            src="/img/Lord_Shiva_as_an_ancient_Siddhar_sage_meditating_i-1773148063661.png"
            alt="Lord Shiva as Siddhar meditating"
            className={`${styles.small_img} ${styles.bottom_img}`}
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className={styles.content}>
          <Heading as="h5" className={styles.subtitle}>
            ॐ EDUCATION FOR ALL RURAL CHILDREN
          </Heading>

          <Heading as="h1" className={styles.title}>
            We Hindus Believe In <br /> The Holy Vedas
          </Heading>

          <div className={styles.veda_list}>
            <div className={styles.item}>
              <span>✔</span> Rig-Veda
            </div>
            <div className={styles.item}>
              <span>✔</span> Sama-Veda
            </div>
            <div className={styles.item}>
              <span>✔</span> Yajur-Veda
            </div>
            <div className={styles.item}>
              <span>✔</span> Atharva-Veda
            </div>
          </div>

          <p className={styles.description}>
            We Hindus believe that the Vedas transcend all time and do not have
            a beginning or an end.
          </p>

          <a href="#" className={styles.btn}>
            Learn More →
          </a>
        </div>
      </div>
    </section>
  );
}
