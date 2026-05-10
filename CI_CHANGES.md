# Suggested CI workflow changes (apply manually)

The OAuth token used by this branch lacks the `workflow` scope, so this
file is included instead of editing `.github/workflows/build.yml`
directly. Apply this diff via the GitHub UI or with a PAT that has the
`workflow` scope:

```yaml
# .github/workflows/build.yml
name: Build Validation

on:
  push:
    branches: [master, main]
  pull_request:
    branches: [master, main]

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout Code
        uses: actions/checkout@v6

      - name: Setup Node.js
        uses: actions/setup-node@v6
        with:
          node-version: 20
          cache: 'npm'

      - name: Install Dependencies
        run: npm ci

      - name: Format Check
        run: npm run format:check

      - name: Lint
        run: npm run lint

      - name: Test
        run: npm test

      - name: Type Check and Build
        run: npm run build
```

After applying, delete this `CI_CHANGES.md` file.
