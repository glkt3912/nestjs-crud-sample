#!/bin/bash

yarn run prisma migrate deploy
yarn seed
yarn start:prod
