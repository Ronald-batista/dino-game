#!/usr/bin/env sh

# abort on errors
set -e

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io/<REPO>
 git push -f git@github.com:Ronald-batista/dino-game.git master:gh-pages
