# Contributing to Remarkability

Thanks for taking the time to contribute to Remarkability!

- [Code of Conduct](#code-of-conduct)
- [Objectives](#objectives)
- [Git Commits](#git-commits)

## Code of Conduct

All the participations for Remarkability are governed by [Contributor Covenant Code of Conduct](./CODE_OF_CONDUCT.md).

## Objectives

Remarkability has the following objectives:

- **Readability**: Any change should not compromise on the readability of the HTML document. Additionally, it is desirable if the change improves the readability.
- **Accessibility**: At the very minimum, Lighthouse should pass with 100% score.
- **Extensibility**: Remarkability strives to maintain a DRY and immutable codebase. Any change that addresses a very specific aspect of reading experience should accompany an option to enable or disable it. 

## Git Commits

- Use the present tense, e.g., `add status badges`, not `added status badges`
- Use lowercase, except when to emphasize or when a name can't be used in lowercase.
- Use the imperative mood, e.g., `tweak postcss configuration`, not `tweaks postcss configuration`
- Prefix the commits with a type, which consists of a noun, `feat`, `fix`, `chore`, etc.
- Provide a scope to describe a section of codebase surrounded by parenthesis, e.g., `fix(ci)`
- Use the type `feat` when a commit adds a new feature.
- Use the type `fix` when a commit represents a bug fix.
- Use the type `chore` when a commit represents anything else and provide the scope to clarify the context of commit, e.g., `chore(deps)`
- Provide a description after adding a colon and a space after the type/scope prefix, e.g., `chore(deps): switch to dart-sass`
- Optionally, provide a long description in the commit body, which begins one blank line after the description.
- Indicate a breaking change by adding a `!` immediately before the `:`, e.g., `chore!: prepare v0.7.0`
