import "./app.scss"
import { About } from "./components/About/About";
import Contact from "./components/contact/Contact";
import Hero from "./components/hero/hero";
import Navbar from "./components/navbar/navbar";
import Parallax from "./components/parallax/Parallax";
import Portfolio from "./components/portfolio/Portfolio";



const App = () => {
  return <div>
<body>
<section id="Homepage">
  <Navbar/>
  <Hero/>
</section>
<section id="About">
  <Parallax type="services"/>
</section>
<section>
  <About/>
  </section>
<section id="Portfolio">
<Parallax type="portfolio"/>
  </section> <Portfolio/>
<section id="Contact">
  <Contact/>
  </section>
</body>
</div>
};


export default App;


