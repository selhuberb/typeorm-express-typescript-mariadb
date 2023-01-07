#!/bin/sh

echo "Install bash and execute 'wait-for-it.sh' script"
apk add --update bash
./scripts/wait-for-it.sh $DB_HOST:3306 --timeout=30 --strict -- echo "mariadb up and running"

npm run migration:run
npm run seed:run
npm run dev