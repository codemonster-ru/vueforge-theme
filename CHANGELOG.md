# Changelog

All notable changes to this project will be documented in this file.

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
