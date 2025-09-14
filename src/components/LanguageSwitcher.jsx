import { useTranslation } from 'react-i18next'
import ReactCountryFlag from 'react-country-flag'
import { useEffect, useState } from 'react'

export default function LanguageSwitcher () {
  const { i18n } = useTranslation()
  const [current, setCurrent] = useState(i18n.language || localStorage.getItem('i18nextLng') || 'en')

  useEffect(() => {
    const handler = (lng) => setCurrent(lng)
    i18n.on('languageChanged', handler)
    return () => {
      i18n.off('languageChanged', handler)
    }
  }, [i18n])

  const toggle = () => {
    const next = current === 'pt' ? 'en' : 'pt'
    console.log('Language toggle clicked, switching to', next)
    i18n.changeLanguage(next)
    localStorage.setItem('i18nextLng', next)
    setCurrent(next)
  }

  const onKey = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      toggle()
    }
  }

  return (
    <button
      type="button"
      aria-label={current === 'pt' ? 'Português' : 'English'}
      title={current === 'pt' ? 'Português' : 'English'}
      onClick={toggle}
      onKeyDown={onKey}
      className="w-10 h-10 rounded-full flex items-center justify-center focus:outline-none focus:ring-2 ring-offset-2 cursor-pointer hover:scale-105 transition-transform"
    >
      {current === 'pt' ? (
        <ReactCountryFlag countryCode="PT" svg style={{ width: '1.6rem', height: '1.6rem', borderRadius: '999px' }} />
      ) : (
        <ReactCountryFlag countryCode="GB" svg style={{ width: '1.6rem', height: '1.6rem', borderRadius: '999px' }} />
      )}
    </button>
  )
}
