---
title: "Cypress Real World App"
date: "2022-03-01"
slug: "cypress-real-world-app"
description: "In this short article I give a brief overview of the Cypress Real World app, which is a payment application to demonstrate real-world usage of Cypress testing methods, patterns, and workflows"
hero: "/images/hero/real-world-app.png"
tags: ["cypress"]
---

## Overview

[The Real World App (RWA)](https://github.com/cypress-io/cypress-realworld-app) is an application created by the Cypress team that demonstrates real-world usage of Cypress testing methods, patterns, and workflows. Essentially, this application is a [Venmo](https://venmo.com/) clone.

The RWA allows users to sign up for an account, add a bank account and send/receive money between friends.

## Install

You can find the repo [here](https://github.com/cypress-io/cypress-realworld-app).

You can clone the repo via the command line with:

```bash
git clone git@github.com:cypress-io/cypress-realworld-app.git
```

> It might be best to first fork a copy of the repo and then clone the forked version.

Note: The Cypress Real World App uses [Yarn](https://yarnpkg.com/) to manage its dependencies. Please install [Yarn](https://yarnpkg.com/) on your computer as installing with npm may lead to issues running the application.

Once cloned, change into the **cypress-realworld-app** directory and install all of the npm dependencies using Yarn.

```bash
cd cypress-realworld-app
yarn install
```

You can then run the application with

```bash
yarn dev
```

Once the application is up and running, a browser window should open a new tab to **http://localhost:3000**, where you should see the Sign In page.

![](/images/cypress-real-world-app/Screen_Shot_2021-06-28_at_11.32.22_AM.png)

Refer to the [README.md](https://github.com/cypress-io/cypress-realworld-app/blob/develop/README.md) file in the repo for additional information and instructions.

## How to Log In

We provide a set of default users in the database, or you can create your own account. We recommend you first log in with one of the default users to see some of the sample data seeded in the app.

You can list out all of the default users with this command.

```bash
yarn list:dev:users
```

> Every user's password is **s3cret**.

For example, you can use the following username and password to log in.

```bash
Username: Katharina_Bernier
Password: s3cret
```

Once logged in, you will see the main dashboard.

![](/images/cypress-real-world-app/Screen_Shot_2021-09-16_at_1.40.27_PM.png)

## Exploring the Tests

Once you have taken some time to play around with the application, you can start exploring the tests which are located in [cypress/tests/](https://github.com/cypress-io/cypress-realworld-app/tree/develop/cypress/tests).
