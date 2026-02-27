import { Helmet } from "react-helmet-async";

function About() {
  return (
    <>
      <Helmet>
        <title>About Eco Gre Energy Biofuels | Biofuel Supplier in Bihar</title>
        <meta
          name="description"
          content="Learn about Rajdhani Biofuels Corporation, a trusted biodiesel and renewable energy company in Patna, Bihar."
        />
      </Helmet>

      <div className="container py-5">
        <h1 className="section-title">About Rajdhani Biofuels Corporation</h1>

        <p>
          Eco Gre Energy Biofuels Corporation is a renewable energy
          company providing sustainable biodiesel and green fuel solutions.
        </p>
      </div>
    </>
  );
}

export default About;
