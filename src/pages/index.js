import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import BoxGrid from "../components/boxgrid";
import SiddharSection from "../components/SiddharSection";
import BlogSection from "../components/BlogSection";
import Heading from "@theme/Heading";
import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/category/siddhars-of-pondicherry"
          >
            Learn more about Siddhars{" "}
          </Link>
        </div>
        {/* <div className="hero_section">
          <div className="hero_sub1">
            <img
              src="/img/Lord_Shiva_as_an_ancient_Siddhar_sage_meditating_i-1773148063661.png"
              alt="Lord Shiva as Siddhar meditating"
            />
          </div>
          <div className="hero_sub2">
            <Heading as="h1" className="hero__title">
              {siteConfig.title}
            </Heading>
            <p className="hero__subtitle">{siteConfig.tagline}</p>
            <div className={styles.buttons}>
              <Link
                className="button button--secondary button--lg"
                to="/docs/category/siddhars-of-pondicherry"
              >
                Learn more about Siddhars
              </Link>
            </div>
          </div>
        </div> */}
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <SiddharSection />
        <BoxGrid />
        <BlogSection />
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
