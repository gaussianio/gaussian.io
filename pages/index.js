import Head from "next/head";

const Topbar = () => (
  <div>
    <style jsx>
      {`
        div {
          background: rgb(211, 233, 226);
          height: 62px;
          position: fixed;
          width: 100%;
        }
        span {
          font-size: 22px;
          font-family: helvetica;
          font-style: italic;
          color: #333;
          font-weight: 500;
          vertical-align: middle;
          padding: 0 30px;
          line-height: 62px;
        }
      `}
    </style>
    <span>gaussian</span>
  </div>
);

const WaveSegment = () => (
  <div className="root">
    <style jsx>{`
      .root {
        background-color: rgb(211, 233, 226);
        background: url(/static/background-main.svg) bottom left no-repeat;
        background-size: cover;
        display: flex;
        padding: 32px;
        padding-top: 60px;
        justify-content: space-between;
      }
      .text {
        color: rgb(57, 52, 183);
        font-size: 90px;
        max-width: 40%;
        font-weight: 600;
        line-height: 110%;
        font-style: italic;
        letter-spacing: 2px;
      }
      aside {
        align-self: flex-end;
        flex-basis: 300px;
        font-size: 20px;
        color: #333;
        padding-left: 32px;
        padding-right: 32px;
        padding-bottom: 200px;
        line-height: 140%;
      }
    `}</style>
    <div className="text">tech expertise for rapidly growing start-ups</div>
    <aside>
      <p>Get in touch</p>
      <p />
    </aside>
  </div>
);

const SplitPane = () => (
  <div className="root">
    <style jsx>
      {`
        .root {
          display: flex;
        }
        .left {
          background: rgb(149, 158, 179);
          flex-basis: 55%;
          fill: rgb(58, 53, 183);
        }

        .right {
          font-size: 16px;
          width: 260px;
          padding: 100px 200px;
          padding-bottom: 0;
          line-height: 140%;
        }

        .heading {
          color: rgb(58, 53, 183);
          text-transform: uppercase;
          font-size: 24px;
          font-weight: 700;
          line-height: 140%;
          letter-spacing: 2px;
        }
        .strong {
          font-weight: 700;
        }
      `}
    </style>
    <div className="left">
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="25" />
      </svg>
    </div>
    <div className="right">
      <p className="heading">The first step is always the hardest</p>
      <p className="strong">
        But to scale up you need a helping hand, we help you make sure that
        everything is in order, So you can focus on what really matters &mdash;
        your product.
      </p>
      <p>
        We have worked with everything from <i>team leadership and processes</i>{" "}
        to <i>technical infrastructure and architecture</i>. We help you find
        out how your business is doing, by setting up KPIs; and help others find
        out about you by creating a fresh new brand-identity.
      </p>
    </div>
  </div>
);

const Footer = () => (
  <div className="root">
    <style jsx>{`
      .root {
        background: rgb(251 221 183);
      }
    `}</style>
    me@whn.se
  </div>
);
const Index = () => (
  <div>
    <Head>
      <style>{`
        body {
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, sans-serif;
        }`}</style>
    </Head>
    <Topbar />
    <WaveSegment />
    <SplitPane />
    <Footer />
  </div>
);

export default Index;
