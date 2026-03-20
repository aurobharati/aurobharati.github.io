// src/components/boxgrid/index.js
import styles from "./boxgrid.module.css";
import Heading from "@theme/Heading";
import Link from "@docusaurus/Link";

// Features array with correct icon paths
const features = [
  {
    title: "Ashram",
    tag: "Pranayama",
    desc: "Spiritual centers for meditation and inner growth inspired by Siddhar traditions.",
    icon: "/img/Lord_Shiva_as_an_ancient_Siddhar_sage_meditating_i-1773148063661.png",
    link: "/docs/mantras",
  },
  {
    title: "Mantras",
    tag: "Pranayama",
    desc: "Sacred sounds and vibrations used for meditation and spiritual awakening.",
    icon: "/img/Lord_Shiva_as_an_ancient_Siddhar_sage_meditating_i-1773148063661.png",
    link: "/docs/mantras",
  },
  {
    title: "Donation",
    tag: "Pranayama",
    desc: "Support spiritual activities and help preserve ancient Siddhar knowledge.",
    icon: "/img/Lord_Shiva_as_an_ancient_Siddhar_sage_meditating_i-1773148063661.png",
    link: "/docs/mantras",
  },
  {
    title: "Donation",
    tag: "Pranayama",
    desc: "Support spiritual activities and help preserve ancient Siddhar knowledge.",
    icon: "/img/Lord_Shiva_as_an_ancient_Siddhar_sage_meditating_i-1773148063661.png",
    link: "/docs/mantras",
  },
];

// Capitalized component name
export default function BoxGrid() {
  return (
    <section className={styles.features}>
      {features.map((item, index) => (
        <div className={styles.card} key={index}>
          <Link to={item.link} className={styles.card_link}>
            <div className={styles.iconWrapper}>
              <img src={item.icon} alt={item.title} />
            </div>

            <p className={styles.tag}>{item.tag}</p>
            <h2 className={styles.title}>{item.title}</h2>
            <p className={styles.desc}>{item.desc}</p>

            <div className={styles.arrow}>→</div>
          </Link>
        </div>
      ))}
    </section>
  );
}
