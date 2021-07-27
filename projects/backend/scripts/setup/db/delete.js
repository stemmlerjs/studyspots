const mysql = require('mysql2');  

const env = process.argv[2];

if (!['dev', 'test'].find((e) => env)) {
  console.log("Run with either 'dev' or 'test'");
  process.exit(1)
}

if (env === 'dev') {
  require('dotenv').config({ path:__dirname + '/../../../.env.dev' })
} else {
  require('dotenv').config({ path:__dirname + '/../../../.env.test' })
}

const { 
  STUDYSPOTS_DB_USER, 
  STUDYSPOTS_DB_PASS, 
  STUDYSPOTS_DB_HOST,
  STUDYSPOTS_DB_NAME
} = process.env;

const dbName = STUDYSPOTS_DB_NAME;

const connection = mysql.createConnection({  
  host: STUDYSPOTS_DB_HOST,  
  user: STUDYSPOTS_DB_USER,  
  password: STUDYSPOTS_DB_PASS  
});  

connection.connect((err) => {
  if (err) throw err;
  connection.query(`DROP SCHEMA ${dbName}`, (err, result) => {
    if (err && err.code === "ER_DB_DROP_EXISTS") {
      console.log("Already deleted");
      process.exit(0);
    }

    if (err) throw err;

    console.log('Deleted db');
    process.exit(0);
  })
})