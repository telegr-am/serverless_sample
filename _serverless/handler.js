'use strict';

module.exports.time = (event, context, callback) => {
  const response = {
    statusCode: 200,
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        message: (new Date()).toString(),
        input: event
    })
  };

  callback(null, response);
};

module.exports.hello = (event, context, callback) => {
    const data = JSON.parse(event.body);
    if (typeof data.name !== 'string') {
        console.error('Validation Failed');
        callback(null, {
            statusCode: 400,
            headers: { 'Content-Type': 'text/plain' },
            body: 'Could not parse JSON'
        });
        return;
    }

  const response = {
    statusCode: 200,
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        message: "Hello, " + data.name + "!",
        input: event
    })
  };

  callback(null, response);
};
