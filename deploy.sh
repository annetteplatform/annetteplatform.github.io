#!/bin/sh

# abort on errors
set -e
# build
vuepress build 

# navigate into the build output directory
cd .vuepress/dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'


# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f https://github.com/annetteplatform/annetteplatform.github.io.git master:gh-pages

cd -