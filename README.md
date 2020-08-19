# Insomnia - Logger

## Install

1. Go to `Insomnia/Preferences` and choose the *Plugins* tab
2. Enter `insomnia-plugin-logger` and click on `Install Plugin`
3. That's it, enjoy!

## Usage

To see your logs, simply open the DevTools by clicking on `View/Toggle Devtools`

## Queries

You can use [jsonpath](https://github.com/dchester/jsonpath) based queries to log specific sets of data. To do that, create a `queries` environment variable (cmd + e).

For example

```json
{
  "queries": [
    "$.data[*].author",
    "$.data[*].title",
  ]
}
```

