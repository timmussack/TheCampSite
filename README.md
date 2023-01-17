# TheCampSite
Team Biscay Bay's Blue Ocean Project! 

## Team Git Workflow 

- FORK the group repo to your personal account. This will be your own dev branch! Clone this forked repo onto your local machine to use when coding. 
- Submit work by pushing up to your personal fork (git push will work!), then submit a pull request to have it commited to the main, team repo.
- You can set the main repo as a remote upstream, that way when you run git pull you will automatically pull down the most up to date version of our group repo.
- To set up the remote upstream, run git remote add upstream https://github.com/BO-BiscayBay/TheCampSite.git


```bash
$ git remote -v
origin  https://github.com/timmussack/TheCampSite.git (fetch)
origin  https://github.com/timmussack/TheCampSite.git (push)
upstream  https://github.com/BO-BiscayBay/TheCampSite.git. (fetch)
upstream  https://github.com/BO-BiscayBay/TheCampSite.git. (push)
```

**Open in VS Code and install the dependencies**

```bash
npm install
```
 
- When working locally, make a new branch to work on whatever feature it is that day. This is CRUCIAL! Do your work in this branch, that way you can pull down the most up-to-date version of main (without any merge conflicts) before you merge your own updates.

#### Pull Request Procedures

```bash
git checkout -b <branch-name>       # work on a new branch on your fork.
git add <files>                     # add changed files.
git commit -m 'descriptive message' # write a descriptive commit message.
git checkout main                   # switch to main branch
git pull upstream main              # pull latest changes from upstream before committing.
git merge <branch-name>             # merge new branch to main, make sure to resolve any merge conflicts before pushing.
git push                            # push to your fork
```

# Go to your fork on Github and initiate a pull request.

__PR Rules:__

- changes are only to be committed by PRs, no direct push allowed.
- each PR needs a confirmation from at least one other member.
