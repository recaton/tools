# Tools

This project is a pure javascript project and is used to build some tools for me. 

It use [angular-cli-ghpages](https://medium.com/tech-insights/how-to-deploy-angular-apps-to-github-pages-gh-pages-896c4e10f9b4) to publish to [Github Pages](https://pages.github.com/)

# Build
Followig command build and publish the static files:
```bash
ng build --base-href "https://recaton.github.io/tools/"

# this command will create a branch named "gh-pages" contains the finally static files, these files will be published if Github Pages setting is correct.
npx angular-cli-ghpages --dir=dist/docs
```

# Visit
After that, you can visit [https://recaton.github.io/tools/](https://recaton.github.io/tools/) to see the new changes.
