npm i -g typescript
tsc --init
"target": "es6",   
"outDir": "./dist",  
"strict": true,
"esModuleInterop": true,    
"sourceMap": true, 
 "moduleResolution": "node", 

 * Siempre compilamos con tsc en consola y dsp lanzamos la app usando nodemon dist/app.js
* tsc --watch  con nodemon corriendo

 npm i tslint --save-dev
 npm i typescript --save-dev 
 ./node_modules/.bin/tslint --init

 ```
 {
    "defaultSeverity": "error",
    "extends": [
        "tslint:recommended"
    ],
    "jsRules": {},
    "rules": {
        "no-console":false
    },
    "rulesDirectory": []
}
 ```

npm i express cors dotenv 
npm i --save-dev @types/express 
npm i --save-dev @types/cors

npm i --save sequelize
npm install --save mysql2