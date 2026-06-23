import { useState, useEffect } from 'react'

export function useTypewriter(texts: string[], speed = 80, pause = 2000): string {
  const [index, setIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const word = texts[index % texts.length]
    let timeout: ReturnType<typeof setTimeout>
    if (!deleting && text === word) {
      timeout = setTimeout(() => setDeleting(true), pause)
    } else if (deleting && text === '') {
      setDeleting(false)
      setIndex(i => i + 1)
    } else {
      timeout = setTimeout(() => {
        setText(prev => deleting ? prev.slice(0, -1) : word.slice(0, prev.length + 1))
      }, deleting ? speed / 2 : speed)
    }
    return () => clearTimeout(timeout)
  }, [text, deleting, index, texts, speed, pause])

  return text
}
