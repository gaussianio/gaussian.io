import Head from "next/head";

const Topbar = () => (
  <div>
    <style jsx>
      {`
        div {
          background: rgb(211, 233, 226);
          height: 62px;
        }
        span {
          font-size: 22px;
          font-family: helvetica;
          font-style: italic;
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
        background: rgb(211, 233, 226);
        display: flex;
        font-family: helvetica;
        padding: 32px;
        justify-content: space-between;
      }
      .text {
        color: rgba(57, 52, 183);
        font-size: 120px;
        max-width: 40%;
      }
      aside {
        align-self: flex-end;
        flex-basis: 300px;
        font-size: 24px;
        color: #000;
      }
    `}</style>
    <div className="text">tech expertise* for rapidly growing start-ups</div>
    <aside>
      * We can help you with team management, infrastructure, architecture and
      data-science.
    </aside>
  </div>
);

const Index = () => (
  <div>
    <Head>
      <style>{`body { margin: 0; }`}</style>
    </Head>
    <Topbar />
    <WaveSegment />
    <div>Gaussian.io</div>
  </div>
);

export default Index;
