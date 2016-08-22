[![Build Status](https://travis-ci.org/aconfee/MEANTemplateV3.svg?branch=master)](https://travis-ci.org/aconfee/MEANTemplateV3)

Live Site: https://young-savannah-99031.herokuapp.com/
Travis: https://travis-ci.org/aconfee/MEANTemplateV3
mLab: https://www.mlab.com/databases/heroku_0p01cnk5

IN THIS README:
  1. Description
  2. Continuous Integration
  3. Terminal Commands
  4. First Time Setup

Description:
This project is my base scaffolding for any MEAN stack project using Angular 2.
- Uses Angular 2.
- Has tests wired in already testing data, API endpoints, and Angular 2 components.
- Has build system set up with Webpack.
- Has Procfile specified for easy deployment to Heroku
- Has local MongoDB instance wired up.
- Connected to Travis CI. Continually tested and deployed on success: https://travis-ci.org/aconfee.

CONTINUOUS INTEGRATION AND DEPLOYMENT

Simply running `npm run deploy` will kick off building the production dist of the app locally (and removing any dev files), running tests locally, then committing and pushing to git. The push to git will trigger Travis CI to run tests on the application once more before deploying to Heroku.

Can see each deployment here: https://travis-ci.org/aconfee

TERMINAL COMMANDS

- `npm install` -- Installs all dependencies.
- `npm run build` -- Builds production version of app. Compiles scss and typescript and resolves dependencies. Uglifies and distributes.
- `npm run start` -- Used by Heroku to run app.
- `npm run dev:build` -- Builds dev version of app and watches for changes.
- `npm run dev:start` -- Runs app on localhost:3000 and watches for changes.
- `npm test` -- Runs Mocha unit tests once locally.
- `npm run deploy` -- As mentioned above, this is the only step needed to make your local code end up on the real life internet.


FIRST TIME SETUP

1. Clone the project from github.

2. Run `npm install` and `npm run dev:build` to be all set up locally.
  - You can test to make sure everything works by running `npm run dev:start` and viewing on localhost:3000.

3. Initialize a new github repo and push to it.
  - Remove current origin and add remote to new repo, then push to it.

4. Change the app name in package.json and change the folder name (for your own use).

5. Activate the repo in Travis CI: https://travis-ci.org/profile/aconfee. May need to sync account to see new repo.

6. Prepare For Heroku Deployment:
  - Run `heroku create`
  - Verify Heroku remote was added with `git remote -v`
  - In config/webpack.prod.js change the output public path to the Heroku site url.
  - Build a production ready version of the app with `npm run build`. (npm and webpack are set up with corresponding developer and production commands. build / dev:build and start / dev:start)
  - Deploy with `git push heroku master` (after committing changes).
  - Open app with `heroku open`
  - (This process will become easier after setting up Heroku deployment from Travis in step 8)

7. Set up MongoDB
  - Add MongoDB to the heroku app with `sudo heroku addons:create mongolab`
  - Get the URI with `sudo heroku config | grep MONGODB_URI`
  - Add the URI to the production Heroku environment with `heroku config:set MONGOLAB_URI=<my uri>`
  - For good measure, also add `heroku config:set NODE_ENV=production`
    - Test this is working by deploying to Heroku and viewing the logs.
  - Add TEST_MONGOLAB_URI to local environment by creating .env file and adding. Will automatically be ignored by git and parsed by Node into env variables. Used in test.
  - Add TEST_MONGOLAB_URI to Travis CI environment. Can be encrypted and added to .travis.yml. See instructions here: https://docs.travis-ci.com/user/environment-variables/#Encrypted-Variables

8. Set up Heroku deployment from Travis CI
  - Install Travis CI command line client `gem install travis -v 1.8.2 --no-rdoc --no-ri`
  - Get your Heroku auth token by running `heroku auth:token`. Copy this.
  - Encrypt your Heroku token with `travis encrypt -r aconfee/<your repo name> --org` (then paste in the token when prompted with 'Reading stdin.. press ctrl+D to finish')
  - Copy the encrypted token and add to 'api_key: secure:' under 'deploy' in .travis.yml
  - Just beneath that key, enter the new heroku app name for 'app' under 'deploy'
  - If Mongo was not set up for this project, comment or remove the Mongo tests from test/apiTests.js.
  - Deploy now using `npm run deploy` (don't commit changes, this will be done for you -- however, in the future, commit for the sake of leaving a good history of messages). Travis should run everything and deploy to Heroku when finished.

9. Once everything is up and running, remove this README and start creating! (Verify Travis build completes and Heroku app is deployed).
