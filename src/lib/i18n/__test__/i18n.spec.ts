import { translate, getCurrentLocale, setLocale } from 'lib/i18n/i18n'

describe('i18n translate lib', () => {
  it('should return translation with default lang (pt-BR)', () => {
    expect(translate('hi')).toBe('Oi')
  })

  it('should return translation with en-US lang', () => {
    expect(translate('hi', { locale: 'en-US' })).toBe('Hi')
  })

  it('should change locale', () => {
    setLocale('es')
    expect(translate('hi')).toBe('Hola')
  })

  it('should return missing message translation for valid scope with null', () => {
    const expected = `[missing "${getCurrentLocale()}.null_key" translation]`
    expect(translate('null_key')).toEqual(expected)
  })
})
