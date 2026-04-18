# Changelog

All notable changes to this project will be documented in this file.

## [1.2.1] - 2026-04-18

### Fixed

- corrected CSS variable serialization for tokens containing digit suffixes: `breakpoint2xl` now becomes `--vf-breakpoint-2xl` (instead of `--vf-breakpoint2xl`)

### Changed

- extended runtime tests to cover positive and negative serialization checks for digit-boundary token names in `themeTokensToCssVars`, `themePresetToCssText`, and `applyThemeConfig`

## [1.2.0] - 2026-03-31

### Changed

- clarified the package boundary in the README and documented that this package stays engine-only without a built-in `defaultThemePreset`

### Removed

- removed `textLineHeight`, `headingLineHeight`, and `tabsLineHeight` from the exported `VfThemeTokens` contract

## [1.1.0] - 2026-03-25

### Added

- `themeConfigsToCssText(...)` for serializing multiple resolved theme configs into one CSS payload
- `applyThemeConfigs(...)` for applying multiple resolved theme configs generically, grouped by `styleId`
- strict TypeScript typechecking for test files via `tsconfig.test.json`

### Changed

- `applyThemeConfig(...)` now uses the shared multi-config apply path internally while keeping the same external API
- test helpers now centralize partial token casting for compact fixture presets

## [1.0.0] - 2026-03-23

### Added

- initial release of `@codemonster-ru/vueforge-theme`
- theme token types and preset types
- theme preset resolution and CSS variable helpers
- light, dark, and system mode helpers
- shared motion tokens
