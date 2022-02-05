import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import HomepageFeatures from "../components/HomepageFeatures";
import Translate from "@docusaurus/Translate";
import zshellLogo from "@site/static/img/logo/zi/png/c2.png";

function HomepageHeader() {
	const {siteConfig} = useDocusaurusContext();
	return (
		<header className={styles.heroBanner}>
			<div className="container">
				<img className={styles.heroLogo} src={zshellLogo} alt={siteConfig.title}></img>
				<h2 className="hero__title">{siteConfig.title}</h2>
				<p className="hero__subtitle">{siteConfig.tagline}</p>
				<div className={styles.buttons}>
					<Link className="button button--secondary button--lg" to="/docs/intro">
						<Translate id="homepage.button" description="The homepage button to wiki introduction">
							✨ Make it work, make it right, make it fast ✨
						</Translate>
					</Link>
				</div>
			</div>
		</header>
	);
}

export default function Home() {
	const {siteConfig} = useDocusaurusContext();
	return (
		<Layout title={`${siteConfig.tagline}`} description="The home page title tagline">
			<HomepageHeader />
			<main>
				<HomepageFeatures />
			</main>
		</Layout>
	);
}
