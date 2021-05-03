Running backend
---------------
    cd server; yarn start:dev

Running frontend
----------------
    cd client; yarn start

Development
-----------
In order to add a new api endpoint, it must be added first in
server/api/base.ts. After that, the compiler will throw errors until both
server/controllers/routes.ts and client/src/App.tsx are updated accordingly.

