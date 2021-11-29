import I18n from 'i18n-js'
import { II18nParameter } from 'lib/i18n/i18n.types'
import enUS from 'lib/i18n/locales/en-US.json'
import es from 'lib/i18n/locales/es.json'
import ptBR from 'lib/i18n/locales/pt-BR.json'

const locales = {
  'en-US': enUS,
  es,
  'pt-BR': ptBR,
}

I18n.defaultLocale = 'pt-BR'
I18n.fallbacks = true
I18n.translations = locales

export const getCurrentLocale = () => I18n.currentLocale()

export const setLocale = (locale: string) => (I18n.locale = locale)

export const translate = (key: string, parameters?: II18nParameter) =>
  I18n.t(key, parameters)
