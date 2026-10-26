
import React, { useState } from "react";

function App() {
  const [likes, setLikes] = useState(0);
  const [email, setEmail] = useState("");

  const handleSubscribe = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (email.trim() !== "") {
      alert(`Inscription enregistrée pour ${email}`);
      setEmail("");
    }
  };

  return (
    <>
      <header>
        <h1>Mon Blog</h1>

        <nav aria-label="Navigation principale">
          <ul>
            <li><a href="#accueil">Accueil</a></li>
            <li><a href="#articles">Articles</a></li>
            <li><a href="#newsletter">Newsletter</a></li>
          </ul>
        </nav>
      </header>

      <main id="accueil">
        <section id="articles" aria-labelledby="articles-title">
          <h2 id="articles-title">Nos derniers articles</h2>

          <article>
            <h2>Découvrir le développement web</h2>
            <p>
              Apprenez les bases du HTML, du CSS et de JavaScript
              pour créer vos premiers sites web.
            </p>

            <button
              type="button"
              onClick={() => setLikes(likes + 1)}
            >
              J'aime ({likes})
            </button>
          </article>

          <article>
            <h2>Pourquoi utiliser HTML sémantique ?</h2>
            <p>
              Les balises sémantiques améliorent la structure
              des pages et facilitent la navigation des personnes
              utilisant des technologies d'assistance.
            </p>

            <button
              type="button"
              onClick={() => setLikes(likes + 1)}
            >
              J'aime ({likes})
            </button>
          </article>
        </section>

        <section id="newsletter" aria-labelledby="newsletter-title">
          <h2 id="newsletter-title">Inscris-toi à notre newsletter</h2>

          <form onSubmit={handleSubscribe}>
            <label htmlFor="email">Ton adresse e-mail :</label>

            <input
              id="email"
              name="email"
              type="email"
              placeholder="ton@email.fr"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />

            <button type="submit">S'inscrire</button>
          </form>
        </section>
      </main>

      <footer>
        <p>&copy; 2026 Mon Blog — Tous droits réservés.</p>
        <a href="#accueil">Retour en haut</a>
      </footer>
    </>
  );
}

export default App;

