import "./styles.css";
import Navbar from "./componnents/Navbar";
import Footer from "./componnents/Footer";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <h1>Bob VAZ </h1>
      <h2>Developpeur Web Full Stack</h2>

    <p>
      Je suis un developpeur Web Full Stack. J'ai appris le developpement web
      avec la formation à distance chez Studi. J'ai appris les languages de
      programmation suivant : HTML, CSS, Javascript, React, Node.js, PHP. J'ai
      appris à utiliser les outils suivant : Git, Github, Visual Studio Code,
      Heroku, Netlify, Wordpress, MySQL, MongoDB, Express, Bootstrap, Material
      UI, React Router, React Hooks, React Context, Redux, Redux Toolkit,
      Redux-Saga, React Native, Next.js, Gatsby, GraphQL, Strapi, Contentful,
      Firebase, Stripe, OAuth, TypeScript.
    </p>

      <Footer />
    </div>
  );
}
