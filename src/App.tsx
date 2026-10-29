
import { useState } from 'react'
import Modal from './components/Modal'
import Accordion from './components/Accordion'

export default function App() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      {/* Lien accessible dès la première pression sur Tab */}
      <a className="skip-link" href="#contact-form">
        Aller directement au formulaire
      </a>

      <header>
        <h1>Quête 4 : Navigation clavier</h1>

        <nav aria-label="Navigation principale">
          <a href="#accueil">Accueil</a>
          {' | '}
          <a href="#contact-form">Formulaire</a>
        </nav>
      </header>

      <main id="accueil">
        <section>
          <h2>Accordéon accessible</h2>

          <Accordion title="Afficher les informations">
            <p>
              Ce panneau peut être ouvert et fermé au clavier
              ou à la souris.
            </p>
          </Accordion>
        </section>

        <section>
          <h2>Fenêtre modale</h2>

          <button
            type="button"
            onClick={() => setModalOpen(true)}
          >
            Ouvrir la modale
          </button>

          {modalOpen && (
            <Modal onClose={() => setModalOpen(false)}>
              <p>
                Utilise Tab et Maj + Tab pour parcourir les
                éléments de cette fenêtre.
              </p>
              <p>
                Appuie sur Échap pour la fermer.
              </p>
            </Modal>
          )}
        </section>

        <section>
          <h2>Formulaire de contact</h2>

          <form
            id="contact-form"
            onSubmit={(event) => event.preventDefault()}
          >
            <div>
              <label htmlFor="name">Nom</label>
              <input id="name" name="name" type="text" />
            </div>

            <div>
              <label htmlFor="email">Adresse e-mail</label>
              <input id="email" name="email" type="email" />
            </div>

            <button type="submit">Envoyer</button>
          </form>
        </section>
      </main>
    </>
  )
}
