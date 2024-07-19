#!/bin/bash

docker run -e MYSQL_ROOT_PASSWORD=password \
  -e DATABASE_URL=sampledb \
  -p 3306:3306 -d --name sampledb mysql:8.0
