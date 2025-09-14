import React from 'react'
import LanguageSwitcher from './LanguageSwitcher'
import ThemeToggle from './ThemeToggle'

export default function TopControls () {
  return (
    <div className="top-controls flex items-center space-x-3">
      <LanguageSwitcher />
      <ThemeToggle />
    </div>
  )
}
