import sqlite3 from 'sqlite3'
// Importata la funzione isValidUrl per il controllo dell'url
import { isValidUrl } from './echo'
import { Command } from 'commander'

// Crea un nuovo comando
const program = new Command()

program
  .name('pixel')
  .description('Compare images with tacchini and style')
  .requiredOption('-s, --sampler <url>')

program.parse()

// Create options var to be used as referent for the options
const options = program.opts()

// Database
let db = new sqlite3.Database('db/sampler.db')
// Sta roba mi permette di storare in una variabile una opzione tra quelle create
let sampler = options.sampler

// Sta roba qua per il momento resta commentata
// if (isValidUrl(sampler) === true) {
//   db.run(`INSERT INTO url(url) VALUES(?)`, [`${sampler}`], function (err) {
//     if (err) {
//       console.log(err.message)
//     } else if () {
//       console.log('url succesfully inserted')
//     }
//   })
// }

// Questa specifica roba so che non funziona ma la query si, provata a manina
let look = db.all(`select count(*) from samplers;`)
console.log(look)

// Link per testaggio
// https://www.freecodecamp.org/news/check-if-a-javascript-string-is-a-url/









// SQLite commands

// .archive ...             Manage SQL archives
// .auth ON|OFF             Show authorizer callbacks
// .backup ?DB? FILE        Backup DB (default "main") to FILE
// .bail on|off             Stop after hitting an error.  Default OFF
// .binary on|off           Turn binary output on or off.  Default OFF
// .cd DIRECTORY            Change the working directory to DIRECTORY
// .changes on|off          Show number of rows changed by SQL
// .check GLOB              Fail if output since .testcase does not match
// .clone NEWDB             Clone data into NEWDB from the existing database
// .connection [close] [#]  Open or close an auxiliary database connection
// .databases               List names and files of attached databases
// .dbconfig ?op? ?val?     List or change sqlite3_db_config() options
// .dbinfo ?DB?             Show status information about the database
// .dump ?OBJECTS?          Render database content as SQL
// .echo on|off             Turn command echo on or off
// .eqp on|off|full|...     Enable or disable automatic EXPLAIN QUERY PLAN
// .excel                   Display the output of next command in spreadsheet
// .exit ?CODE?             Exit this program with return-code CODE
// .expert                  EXPERIMENTAL. Suggest indexes for queries
// .explain ?on|off|auto?   Change the EXPLAIN formatting mode.  Default: auto
// .filectrl CMD ...        Run various sqlite3_file_control() operations
// .fullschema ?--indent?   Show schema and the content of sqlite_stat tables
// .headers on|off          Turn display of headers on or off
// .help ?-all? ?PATTERN?   Show help text for PATTERN
// .import FILE TABLE       Import data from FILE into TABLE
// .imposter INDEX TABLE    Create imposter table TABLE on index INDEX
// .indexes ?TABLE?         Show names of indexes
// .limit ?LIMIT? ?VAL?     Display or change the value of an SQLITE_LIMIT
// .lint OPTIONS            Report potential schema issues.
// .load FILE ?ENTRY?       Load an extension library
// .log FILE|off            Turn logging on or off.  FILE can be stderr/stdout
// .mode MODE ?TABLE?       Set output mode
// .nonce STRING            Disable safe mode for one command if the nonce matches
// .nullvalue STRING        Use STRING in place of NULL values
// .once ?OPTIONS? ?FILE?   Output for the next SQL command only to FILE
// .open ?OPTIONS? ?FILE?   Close existing database and reopen FILE
// .output ?FILE?           Send output to FILE or stdout if FILE is omitted
// .parameter CMD ...       Manage SQL parameter bindings
// .print STRING...         Print literal STRING
// .progress N              Invoke progress handler after every N opcodes
// .prompt MAIN CONTINUE    Replace the standard prompts
// .quit                    Exit this program
// .read FILE               Read input from FILE
// .recover                 Recover as much data as possible from corrupt db.
// .restore ?DB? FILE       Restore content of DB (default "main") from FILE
// .save FILE               Write in-memory database into FILE
// .scanstats on|off        Turn sqlite3_stmt_scanstatus() metrics on or off
// .schema ?PATTERN?        Show the CREATE statements matching PATTERN
// .selftest ?OPTIONS?      Run tests defined in the SELFTEST table
// .separator COL ?ROW?     Change the column and row separators
// .session ?NAME? CMD ...  Create or control sessions
// .sha3sum ...             Compute a SHA3 hash of database content
// .shell CMD ARGS...       Run CMD ARGS... in a system shell
// .show                    Show the current values for various settings
// .stats ?ARG?             Show stats or turn stats on or off
// .system CMD ARGS...      Run CMD ARGS... in a system shell
// .tables ?TABLE?          List names of tables matching LIKE pattern TABLE
// .testcase NAME           Begin redirecting output to 'testcase-out.txt'
// .testctrl CMD ...        Run various sqlite3_test_control() operations
// .timeout MS              Try opening locked tables for MS milliseconds
// .timer on|off            Turn SQL timer on or off
// .trace ?OPTIONS?         Output each SQL statement as it is run
// .vfsinfo ?AUX?           Information about the top-level VFS
// .vfslist                 List all available VFSes
// .vfsname ?AUX?           Print the name of the VFS stack
// .width NUM1 NUM2 ...     Set minimum column widths for columnar output
