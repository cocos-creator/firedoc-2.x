REMOTE=`git remote -v | grep origin | grep push | awk '{split($0,a," "); print a[2]}'`
cd ./docs-ghpages

git init
git add .
git commit -a -m 'update gh-pages'
git branch 'gh-pages'
git checkout 'gh-pages'
git push $REMOTE 'gh-pages' --force