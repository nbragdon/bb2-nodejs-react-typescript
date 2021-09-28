Running backend & frontend
---------------
    
    copy server/src/configs/sample.config.ts -> server/src/configs/config.ts
    replace the secret variables with the ones for your application

    copy server/src/pre-start/env/sandbox.sample.env -> server/src/pre-start/env/development.env

    docker-compose up -d

Development
-----------
Read the DEVELOPER NOTES found in the code to understand the application
and where you will need to make adjustments/changes as well as some 
suggestions for best practices.

