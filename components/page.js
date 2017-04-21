import Meta from "./meta";

export default ({ children }) => (
  <div className="main">
    <Meta />
    <div className="page">
      {children}
    </div>
     <style jsx>{`
      .main {
        margin: auto;
        padding: 0 0 0 0;
      }
      .page {
        line-height: 1.4;
        color: #2c3343;
        max-width: 1260px;
        margin: 0 auto;
      }
      @media (max-width: 750px) {
        .main {
          padding: 0;
          width: auto;
        }
      }
    `}</style>
  </div>
);
