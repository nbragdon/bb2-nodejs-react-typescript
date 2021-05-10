Running backend
---------------
    cd server
    yarn install

    copy server/src/configs/sample.config.ts -> server/src/configs/config.ts
    replace the secret variables with the ones for your application

    copy server/src/pre-start/sandbox.sample.env -> server/src/pre-start/development.sample.env

    yarn start:dev

Running frontend
----------------
    cd client
    yarn install
    yarn start

Development
-----------
In order to add a new api endpoint, it must be added first in
server/api/base.ts. After that, the compiler will throw errors until both
server/controllers/routes.ts and client/src/App.tsx are updated accordingly.

