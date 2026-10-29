
import { useEffect, useId, useRef } from 'react'

type Props = {
  onClose: () => void
  children: React.ReactNode
}

const FOCUSABLE_SELECTOR = [
  'a[href]',
  'button:not([disabled])',
  'input:not([disabled])',
  'select:not([disabled])',
  'textarea:not([disabled])',
  '[tabindex]:not([tabindex="-1"])',
].join(', ')

export default function Modal({ onClose, children }: Props) {
  const titleId = useId()
  const modalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const modal = modalRef.current
    if (!modal) return

    // Mémoriser l'élément actif avant l'ouverture
    const previousFocus = document.activeElement as HTMLElement | null

    const getFocusableElements = () =>
      Array.from(
        modal.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR)
      ).filter(
        (element) =>
          !element.hasAttribute('disabled') &&
          element.getAttribute('aria-hidden') !== 'true' &&
          element.getClientRects().length > 0
      )

    // Placer le focus dans la modale
    const elements = getFocusableElements()

    if (elements.length > 0) {
      elements[0].focus()
    } else {
      modal.focus()
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        event.preventDefault()
        onClose()
        return
      }

      if (event.key !== 'Tab') return

      const focusable = getFocusableElements()

      if (focusable.length === 0) {
        event.preventDefault()
        modal.focus()
        return
      }

      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      const active = document.activeElement

      // Maj + Tab depuis le premier élément
      if (event.shiftKey && (active === first || !modal.contains(active))) {
        event.preventDefault()
        last.focus()
        return
      }

      // Tab depuis le dernier élément
      if (!event.shiftKey && (active === last || !modal.contains(active))) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)

      // Rendre le focus au bouton d'ouverture
      if (previousFocus?.isConnected) {
        previousFocus.focus()
      }
    }
  }, [onClose])

  return (
    <div className="modal-overlay">
      <div
        ref={modalRef}
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        tabIndex={-1}
      >
        <h2 id={titleId}>Informations</h2>

        <button type="button" onClick={onClose}>
          Fermer
        </button>

        <div className="modal-content">
          {children}
        </div>
      </div>
    </div>
  )
}
