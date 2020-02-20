const { deserialise } = require('kitsu-core');

module.exports.responseHooks = [
  context => {
    const body = context.response.getBody();
    const data = JSON.parse(Buffer.from(body).toString());

    if (data.jsonapi !== undefined) {
      const formattedData = Buffer.from(JSON.stringify(deserialise(data)));
      context.response.setBody(formattedData);
    }
  }
];