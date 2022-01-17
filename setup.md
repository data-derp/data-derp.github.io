# Setup
Install NVM: https://github.com/nvm-sh/nvm

```bash
nvm install 16
nvm use 16
yarn run start
```

Navigate to [http://localhost:3000](http://localhost:3000)

## Building Production
```bash
yarn run build
yarn run serve
```


## Deploying
```bash
GIT_USER=<your-git-username> yarn deploy
```
You will be asked for a password. Please use a Personal Access Token with repo permissions.
