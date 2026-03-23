// @vitest-environment jsdom

import { afterEach, describe, expect, it } from 'vitest'
import {
  applyThemeConfig,
  createThemePreset,
  resolveThemeConfig,
  resolveThemePreset,
  themePresetToCssText,
  themeTokensToCssVars
} from '../src'

const testPreset = createThemePreset({
  name: 'test-preset',
  tokens: {
    colorPrimary: '#0b63f6',
    colorSurface: '#ffffff',
    controlHeightMd: '2.25rem'
  },
  dark: {
    colorPrimary: '#6ea8fe'
  }
})

describe('theme runtime', () => {
  afterEach(() => {
    document.getElementById('vf-theme-preset')?.remove()
    document.getElementById('vf-test-theme')?.remove()
  })

  it('serializes theme tokens to css variables', () => {
    const cssVars = themeTokensToCssVars(
      {
        colorPrimary: '#ff5a36',
        controlHeightMd: '2.5rem'
      },
      'vf'
    )

    expect(cssVars['--vf-color-primary']).toBe('#ff5a36')
    expect(cssVars['--vf-control-height-md']).toBe('2.5rem')
  })

  it('resolves light and dark theme tokens from a custom preset', () => {
    const preset = resolveThemePreset({
      preset: testPreset,
      extend: {
        colorPrimary: '#ff5a36'
      },
      dark: {
        colorPrimary: '#ff8f70'
      }
    })

    expect(preset.light.colorPrimary).toBe('#ff5a36')
    expect(preset.dark.colorPrimary).toBe('#ff8f70')
    expect(preset.light.controlHeightMd).toBe('2.25rem')
  })

  it('builds light and dark css text from a resolved config', () => {
    const config = resolveThemeConfig({
      preset: testPreset,
      extend: {
        colorPrimary: '#ff5a36'
      },
      dark: {
        colorPrimary: '#ff8f70'
      },
      options: {
        styleId: 'vf-test-theme'
      }
    })

    const cssText = themePresetToCssText(config)

    expect(cssText).toContain(':root')
    expect(cssText).toContain(":root[data-vf-theme='dark']")
    expect(cssText).toContain('--vf-color-primary: #ff5a36;')
    expect(cssText).toContain('--vf-color-primary: #ff8f70;')
  })

  it('injects a style tag with resolved theme variables', () => {
    const style = applyThemeConfig(
      resolveThemeConfig({
        preset: testPreset,
        extend: {
          colorPrimary: '#ff5a36'
        },
        options: {
          styleId: 'vf-test-theme'
        }
      })
    )

    expect(style.id).toBe('vf-test-theme')
    expect(style.textContent).toContain('--vf-color-primary: #ff5a36;')
    expect(document.getElementById('vf-test-theme')).toBe(style)
  })
})
