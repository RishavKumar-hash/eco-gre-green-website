import { Helmet } from "react-helmet-async";

function About() {
  return (
    <>
      <Helmet>
        <title>About Eco Gre Energy Biofuels | Biofuel Supplier in Bihar</title>
        <meta
          name="description"
          content="Learn about Eco Gre Energy Biofuels Corporation, a trusted biodiesel and renewable energy company in Mahua, Bihar."
        />
      </Helmet>

      <div className="container py-5">
        <h1 className="section-title">About Eco Gre Energy Biofuels</h1>

        <p>
          Eco Gre Energy Biofuels Corporation is a renewable energy
          company providing sustainable biodiesel and green fuel solutions.
        </p>

      <ul>
          <li> CIN:- U46610BR2024PTC068516 </li>
          <li> PAN:- AAICE0997M </li>
          <li> TAN:- PTNE01871C </li>
          <li> GST:- 10AAICE0997MIZE </li>

        </ul>



      </div>
    </>
  );
}

export default About;
