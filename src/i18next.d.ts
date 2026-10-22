import 'i18next'
import type { TranslationResource } from './i18n'

// Tipa las claves de t() a partir de las traducciones en español
declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: 'translation'
    resources: {
      translation: TranslationResource
    }
  }
}
