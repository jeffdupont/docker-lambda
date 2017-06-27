/**
 * @author Jeff Dupont
 * Performs test calls to lambda handler.
 */

if (process.argv.length < 4) {
    throw("Missing required parameters: node index.js 'lambda_name' '{ event_json }'");
}

// Requested lambda
var lambda = process.argv[2];

// Input event
var event = JSON.parse(process.argv[3]);

// Create mock context for lambda call
const context = require('aws-lambda-mock-context');
const ctx = context({ timeout: 300 });

// Start running timer
console.time("Lambda");

// Load lambda index to test
var index = require(lambda);

// Invoke lambda
index.handler(event, ctx);

ctx.Promise
    .then(() => {
        //=> succeed() called
        console.timeEnd("Lambda");
    })
    .catch(err => {
        //=> fail() called
        console.timeEnd("Lambda");
    })
    .then(() => {
        //=> done()
        process.exit();
    });
