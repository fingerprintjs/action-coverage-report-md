<p align="center">
  <a href="https://github.com/actions/typescript-action/actions"><img alt="typescript-action status" src="https://github.com/actions/typescript-action/workflows/build-test/badge.svg"></a>
</p>

# Jest coverage report in markdown

This action uses a text coverage report from jest and generates a markdown report based on it.
The report generates as in the example below. Each file gets a link to the correct version; the same goes for uncovered lines.
Statuses also add to the table.

St|File                | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
--|--------------------|---------|----------|---------|---------|-------------------
🟡|All files           |   70.58 |    72.22 |   83.33 |   71.42 |                   
🟡|&nbsp;src|   63.23 |    64.28 |      80 |   64.17 |                   
🔴|&nbsp;&nbsp;[main.ts](https://github.com/fingerprintjs/action-coverage-report-md/blob/80148ef2d10c51d31e3a472c61ce2ead8b68a2e1/src/main.ts)|       0 |        0 |       0 |       0 |[1-37](https://github.com/fingerprintjs/action-coverage-report-md/blob/80148ef2d10c51d31e3a472c61ce2ead8b68a2e1/src/main.ts#L1-L37)
🟢|&nbsp;&nbsp;[report.ts](https://github.com/fingerprintjs/action-coverage-report-md/blob/80148ef2d10c51d31e3a472c61ce2ead8b68a2e1/src/report.ts)|   95.55 |      100 |   88.88 |   95.55 |[14-15](https://github.com/fingerprintjs/action-coverage-report-md/blob/80148ef2d10c51d31e3a472c61ce2ead8b68a2e1/src/report.ts#L14-L15)
🟢|&nbsp;src/utils|     100 |      100 |     100 |     100 |                   
🟢|&nbsp;&nbsp;[getReportParts.ts](https://github.com/fingerprintjs/action-coverage-report-md/blob/80148ef2d10c51d31e3a472c61ce2ead8b68a2e1/src/utils/getReportParts.ts)|     100 |      100 |     100 |     100 |
🟢|&nbsp;&nbsp;[status.ts](https://github.com/fingerprintjs/action-coverage-report-md/blob/80148ef2d10c51d31e3a472c61ce2ead8b68a2e1/src/utils/status.ts)|     100 |      100 |     100 |     100 |


## Usage

Action returns output `markdownReport` and you can use it in other actions.
Example below shows how to use this report in the comment to pr

```yaml
steps:
  - uses: fingerprintjs/action-coverage-report-md@V1
    id: coverage
  - uses: marocchino/sticky-pull-request-comment@v2
    with:
      message: ${{ steps.coverage.outputs.markdownReport }}
```

### Extended usage

```yaml
steps:
  - uses: fingerprintjs/action-coverage-report-md@V1
    id: coverage
    with:
      textReportPath: './coverage/text-report.txt'
      srcBasePath: './utils'
  - uses: marocchino/sticky-pull-request-comment@v2
    with:
      message: ${{ steps.coverage.outputs.markdownReport }}
```

## API

### Inputs

`textReportPath` - path to the coverage report in Istanbul text format.
default value is `'./coverage/coverage.txt'`

`srcBasePath` - base path for the source folder
default value is `'./src'`

### Outputs

`markdownReport` - Coverage report in markdown
