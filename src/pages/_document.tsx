import { Html, Head, Main, NextScript } from "next/document";
import { siteMetadata } from "@/data/siteMetaData.mjs";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Favicon from site metadata (allows using /image.webp as favicon) */}
        <link rel="icon" href={siteMetadata.siteLogo} />
        <style>{`link[rel="icon"]{transform:rotate(180deg);}`}</style>
      </Head>
      <body className="bg-background text-zinc-950 antialiased selection:bg-accent selection:text-background">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
