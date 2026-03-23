# VueForge Theme

[![npm](https://img.shields.io/npm/v/@codemonster-ru/vueforge-theme)](https://www.npmjs.com/package/@codemonster-ru/vueforge-theme)
[![downloads](https://img.shields.io/npm/dw/@codemonster-ru/vueforge-theme)](https://www.npmjs.com/package/@codemonster-ru/vueforge-theme)
[![license](https://img.shields.io/npm/l/@codemonster-ru/vueforge-theme)](LICENSE)

Shared theme engine, token contract, and preset runtime for the VueForge ecosystem.

## Includes

- theme token types
- theme preset types
- preset merging and resolution helpers
- CSS variable serialization helpers
- mode helpers for `light`, `dark`, and `system`
- shared motion tokens

## Usage

```ts
import {
  applyThemeConfig,
  createThemePreset,
  resolveTheme,
  resolveThemeConfig,
} from "@codemonster-ru/vueforge-theme";
```

## License

[MIT](LICENSE)

## Author

[@KolesnikovKirill](https://github.com/kolesnikovKirill)
