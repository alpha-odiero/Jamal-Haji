import { Moon, Sun } from 'lucide-react'
import type { Theme } from '../../hooks/useTheme'

interface ThemeToggleProps {
  theme: Theme
  onToggle: () => void
  className?: string
}

export default function ThemeToggle({ theme, onToggle, className = '' }: ThemeToggleProps) {
  const dark = theme === 'dark'

  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={dark ? 'Switch to light mode' : 'Switch to dark mode'}
      className={`inline-flex h-9 w-9 flex-none items-center justify-center rounded-full border border-line text-ink transition-colors hover:border-accent hover:text-accent ${className}`}
    >
      {dark ? (
        <Sun className="h-4 w-4" aria-hidden="true" />
      ) : (
        <Moon className="h-4 w-4" aria-hidden="true" />
      )}
    </button>
  )
}