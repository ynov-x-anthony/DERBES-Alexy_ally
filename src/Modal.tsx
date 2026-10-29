
import { useEffect, useId } from 'react'

type Props = {
  onClose: () => void
  children: React.ReactNode
}

export default function Modal({ onClose, children }: Props) {
  const titleId = useId()

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [onClose])

  return (
    <div
      className="modal-overlay"
      onClick={onClose}
    >
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        onClick={(event) => event.stopPropagation()}
      >
        <h2 id={titleId}>Informations</h2>

        <button
          type="button"
          onClick={onClose}
          aria-label="Fermer la fenêtre"
        >
          ×
        </button>

        <div className="modal-content">
          {children}
        </div>
      </div>
    </div>
  )
}
