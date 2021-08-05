
const shelljs = require('shelljs');
const env = process.argv[2];

if (!env) {
  console.log("Select either 'dev', 'test', or 'prod'")
  process.exit(1);
}

if (env === 'dev') {
  shelljs.exec('docker-compose --env-file .env.dev up --build')
} else if (env === 'test') {
  shelljs.exec('docker-compose --env-file .env.test up --build')
} else if (env === 'prod') {
  console.log('Not yet implemented.')
  process.env(1);
}


