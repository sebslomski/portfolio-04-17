import Head from "next/head";

export default () => (
  <div>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <link
        href="https://fonts.googleapis.com/css?family=Lora:400"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        href="https://cdn.rawgit.com/konpa/devicon/4f6a4b08efdad6bb29f9cc801f5c07e263b39907/devicon.min.css"
      />
    </Head>
    <style jsx global>
      {`
        body {
            font-family: system,-apple-system,BlinkMacSystemFont,Helvetica Neue,Helvetica,Arial,sans-serif;
            font-weight: 300;
        }
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        `}
    </style>
  </div>
);
