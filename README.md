# TheCampSite
This is a group project created in 5 working days during the Hack Reacter (HR) bootcamp. Our team met with a fictional client played by HR staff member. Our client hired us to create a website that allows users to search for campgrounds based on distance from their location, number of reviews and average review rating. The application features user authentication through google, a user profile page for "liked" campsites, and the ability to leave user reviews.

## Contributors<br />
<a href="https://github.com/BO-BiscayBay/TheCampSite/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=BO-BiscayBay/TheCampSite" />
</a>

   •[Tim Mussack](https://github.com/timmussack) - Engineer & Product Manager<br />
   •[Willy McNamara](https://github.com/Willy-McNamara) - Engineer & Architecture Lead<br />
   •[Cordelia Payson](https://github.com/cordelia-payson) - Engineer & UI Lead<br />
   •[Sam Noden](https://github.com/samnoden) - Engineer<br />
   •[Timothy Williams](https://github.com/Tersebike) - Engineer<br />
   •[Camran Rynowecer](https://github.com/CrynowecerO) - Engineer<br />

## Technologies
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![React](https://img.shields.io/badge/-React-61DAFB?logo=react&logoColor=white&style=for-the-badge)
![Node](https://img.shields.io/badge/-Node-9ACD32?logo=node.js&logoColor=white&style=for-the-badge)
![Express](https://img.shields.io/badge/-Express-DCDCDC?logo=express&logoColor=black&style=for-the-badge)
![Axios](https://img.shields.io/badge/-Axios-671ddf?logo=axios&logoColor=black&style=for-the-badge)

## Search by location & average rating
<img src="assets/SearchByLocation.gif" width="100%"/>

## User profile page
<img src="assets/ProfilePageBO.gif" width="100%"/>

## Sign in
<img src="assets/SignOutSignIn.gif" width="100%"/>

## CampSite detail page & reviews
<img src="assets/CampSiteDetailsPage.gif" width="100%"/>

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
