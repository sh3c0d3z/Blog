import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Welcome to Sh3 C0d3z!!!</p>
        <p>
          (This is a demo blog - build your own site with{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>!)
        </p>
      </section>
    </Layout>
  );
}
