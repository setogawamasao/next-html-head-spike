import type { NextPage } from "next";
import Head from "next/head";

type CustomHeadProps = {
  title?: string;
};

const CustomHead: NextPage<CustomHeadProps> = ({ title }) => {
  const siteName = "サイト名";
  if (title === undefined) {
    title = siteName;
  }

  return (
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default CustomHead;
