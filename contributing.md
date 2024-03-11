This action based on [typescript-action template](https://github.com/actions/typescript-action). 

To understand actions see the [Hello World JavaScript Action](https://github.com/actions/hello-world-javascript-action)

## Useful commands

Install the dependencies
```bash
$ pnpm install
```

Build the typescript and package it for distribution
```bash
$ pnpm run package
```

Run the tests :heavy_check_mark:
```bash
$ pnpm test
```

## action.yml

The action.yml defines the inputs and output for your action.

See the [documentation](https://help.github.com/en/articles/metadata-syntax-for-github-actions)


## Publish to a distribution branch

Actions are run from GitHub repos so we will checkin the packed dist folder.

Then run [ncc](https://github.com/zeit/ncc) and push the results:
```bash
$ pnpm run package
$ git add dist
$ git commit -a -m "prod dependencies"
$ git push origin releases/v1
```

Note: We recommend using the `--license` option for ncc, which will create a license file for all of the production node modules used in your project.

Your action is now published! :rocket:

See the [versioning documentation](https://github.com/actions/toolkit/blob/master/docs/action-versioning.md)

## Usage:

After testing you can [create a v2 tag](https://github.com/actions/toolkit/blob/master/docs/action-versioning.md) to reference the stable and latest V2 action
