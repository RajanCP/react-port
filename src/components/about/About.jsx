import "./about.scss"

export const About = () => {

    return (
        <section className="about-me">
          <div className="container">
            {/* About Me Section */}
            <h1>Hello!</h1>
            <p className="location">Front-End Developer, based in London, U.K 📍</p>
            <p>Hey, my name is <strong>Rajan</strong>, and I'm a Front-End Developer.</p>
            <p>I have a passion for creating and developing clean, user-friendly UI/UX designs.</p>
            <p>Currently, I'm learning <strong>React</strong> and <strong>Sass</strong>, but most of my experience is with <strong>JavaScript</strong>, <strong>HTML</strong>, and <strong>CSS</strong>.</p>
    
            {/* Tech Stack Section */}
            <div className="tech-stack">
              <p className="label">Tech Stack  </p>
              <div className="icons">
              <img width="200px" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg" />
              </div>
            </div>
          </div>
        </section>
      );
    };

        
  

