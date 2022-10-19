# React Form Architecture

This repo demonstrates how to architect a form-based application.

## Architecture

### `src/providers/Form.provider.jsx`

Accepts standard formik configuration parameters to create a Formik instance that's shared across the component tree.

### `src/models/Login.model.js`

Defines the form's schema including field attributes and validators.

## Setup

```
npm install && npm run start
```
