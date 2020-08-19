const jp = require('jsonpath');

module.exports.responseHooks = [
  context => {
    const body = context.response.getBody();
    const data = JSON.parse(Buffer.from(body).toString());
    const queries = context.request.getEnvironmentVariable('queries');

    if (queries !== undefined && queries.length > 0) {
      queries.forEach(query => {
        const result = jp.query(data, query);
        console.log(`🕵️ [QUERY] ${query} (https://git.io/JJAkZ)`);
        console.log(JSON.stringify(result, null, 2));
      });
    }

    console.log('📡 [FULL RESPONSE]');
    console.log(data);
  }
];