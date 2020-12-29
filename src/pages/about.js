import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "./../components/about.css"

const AboutPage = () => (
  <Layout>
    <SEO title="About Cocktail Cards" />
      <div className="about-content">
      <h1>About</h1>
      <p>Cocktail Cards is a simple app designed to make finding cocktail recipes quicker and easier than ever. It was created by <a href="https://github.com/edsaav">Edward Saavedra</a> using <a href="https://www.gatsbyjs.com">Gatsby</a>. Recipes are sourced from assorted books and websites and represent only a fraction of the myriad libations available to the adventurous tippler. More creative concoctions to be added in the future.</p>
      <br/>
      <p><i>Cocktail logo by Danil Polshin from the Noun Project.</i></p>
      <p><i>Background illustration created by vectorpocket - <a href="https://www.freepik.com/vectors/background">www.freepik.com</a></i></p>
    </div>
  </Layout>
)

export default AboutPage
