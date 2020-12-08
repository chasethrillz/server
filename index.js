/**
 * index.js
 * Vishal Kumar
 */

'use strict';

global.Pack = require('./package.json');

let nodeVersion = parseInt(process.versions.node);
// console.log(`\nnodeVersion===>`, nodeVersion, `---nodeVersion`);
if (nodeVersion < 12) throw ('Please upgrade Node version to 12 or higher');

const App = require('./src/app');

const init = async () => {
    try {
        const postgres = await App.db.init();
        // console.log(`\npostgres===>`, postgres.config, `---postgres`);
        console.log(`DB connected to ${postgres.config.database}:${postgres.config.port}`);

        const server = await App.server.init();
        // console.log(`\nserver===>`, server, `---server`);
    } catch (error) {
        console.log(`\nFatal Error:::***>`, JSON.stringify(error), `---Fatal Error`);
    }
};

process.on('unhandledRejection', (err) => {
    console.log('unhandledRejection===>', err);
    process.exit(1);
});

init();