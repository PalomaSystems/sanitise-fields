![npm](https://img.shields.io/npm/v/sanitise-fields)
[![Release new version to NPMJS](https://github.com/kylescudder/sanitise-fields/actions/workflows/publish.yml/badge.svg)](https://github.com/kylescudder/sanitise-fields/actions/workflows/publish.yml)
[![Create new GitHub Release](https://github.com/kylescudder/sanitise-fields/actions/workflows/github_release.yml/badge.svg)](https://github.com/kylescudder/sanitise-fields/actions/workflows/github_release.yml)

# sanitise-fields
A small library for an sanitising input fields from dangerous inputs.

## Install
### NPM
`npm i sanitise-fields`
### CDN
`<script src="https://unpkg.com/sanitise-fields/dist/index.min.js"></script>`

## Usage
### sanitise
Add the class `sanitise` to your input element

**index.html**
```
<input type="text" id="txtComment" class="sanitise">
```
**index.js**
```
import { sanitise } from 'sanitise-fields'

sanitise()
```
