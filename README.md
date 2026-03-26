# VueForge Theme

[![npm](https://img.shields.io/npm/v/@codemonster-ru/vueforge-theme)](https://www.npmjs.com/package/@codemonster-ru/vueforge-theme)
[![downloads](https://img.shields.io/npm/dw/@codemonster-ru/vueforge-theme)](https://www.npmjs.com/package/@codemonster-ru/vueforge-theme)
[![license](https://img.shields.io/npm/l/@codemonster-ru/vueforge-theme)](LICENSE)

Shared neutral theme engine, token contract, and preset runtime for the VueForge ecosystem.

## Includes

- theme token types
- theme preset types
- preset merging and resolution helpers
- single and multi-config CSS variable serialization helpers
- mode helpers for `light`, `dark`, and `system`
- shared motion tokens

This package is intentionally engine-only. It does not ship a built-in `defaultThemePreset`.
Opinionated presets belong in consumer packages such as `@codemonster-ru/vueforge-core`.

## Usage

```ts
import {
  applyThemeConfig,
  applyThemeConfigs,
  createThemePreset,
  resolveTheme,
  resolveThemeConfig,
  themeConfigsToCssText,
} from "@codemonster-ru/vueforge-theme";
```

## Package Boundary

Use `@codemonster-ru/vueforge-theme` when you need:

- neutral theme types and preset helpers
- runtime CSS variable serialization
- multi-package theme orchestration
- mode helpers without depending on VueForge components

Use `@codemonster-ru/vueforge-core` when you need:

- the built-in `defaultThemePreset`
- Vue plugin integration
- `VfThemeProvider` and `useTheme()`
- the component library itself

## License

[MIT](LICENSE)

## Author

[@KolesnikovKirill](https://github.com/kolesnikovKirill)
