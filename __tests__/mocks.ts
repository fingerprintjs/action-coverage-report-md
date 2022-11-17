export const fullTextReportMock = `-----------------------|---------|----------|---------|---------|---------------------
File                   | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s   
-----------------------|---------|----------|---------|---------|---------------------
All files              |   90.82 |    81.03 |   76.47 |   90.71 |                     
 src                   |   92.38 |    88.57 |   67.85 |    91.3 |                     
  agent-server-mock.ts |       0 |      100 |       0 |       0 | 3-5                 
  detect-env.ts        |    92.3 |    86.66 |     100 |    91.3 | 15,85               
  env.ts               |     100 |      100 |     100 |     100 |                     
  env.types.ts         |     100 |      100 |     100 |     100 |                     
  fpjs-context.ts      |   83.33 |      100 |       0 |   83.33 | 38                  
  get-env.ts           |      75 |        0 |     100 |      75 | 9-10                
  index.ts             |     100 |      100 |   14.28 |     100 |                     
  ssr.ts               |     100 |      100 |     100 |     100 |                     
  use-visitor-data.ts  |   97.67 |    93.33 |    87.5 |   97.22 | 77                  
 src/components        |   90.54 |       75 |   86.66 |   92.64 |                     
  fpjs-provider.tsx    |   88.33 |    69.23 |   83.33 |   91.07 | 106,112-117,136-138 
  with-environment.tsx |     100 |      100 |     100 |     100 |                     
 src/utils             |   85.71 |    57.14 |    87.5 |    82.6 |                     
  assert-is-truthy.ts  |   66.66 |        0 |     100 |   66.66 | 3                   
  to-error.ts          |      75 |      100 |     100 |      75 | 6                   
  use-previous.ts      |     100 |      100 |     100 |     100 |                     
  wait-until.ts        |   86.66 |       60 |      75 |      80 | 10-12               
-----------------------|---------|----------|---------|---------|---------------------`

export const fullTextReportMockWithExtraEmptyLines = `

-----------------------|---------|----------|---------|---------|---------------------
File                   | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s   
-----------------------|---------|----------|---------|---------|---------------------
All files              |   90.82 |    81.03 |   76.47 |   90.71 |                     
 src                   |   92.38 |    88.57 |   67.85 |    91.3 |                     
  agent-server-mock.ts |       0 |      100 |       0 |       0 | 3-5                 
  detect-env.ts        |    92.3 |    86.66 |     100 |    91.3 | 15,85               
  env.ts               |     100 |      100 |     100 |     100 |                     
  env.types.ts         |     100 |      100 |     100 |     100 |                     
  fpjs-context.ts      |   83.33 |      100 |       0 |   83.33 | 38                  
  get-env.ts           |      75 |        0 |     100 |      75 | 9-10                
  index.ts             |     100 |      100 |   14.28 |     100 |                     
  ssr.ts               |     100 |      100 |     100 |     100 |                     
  use-visitor-data.ts  |   97.67 |    93.33 |    87.5 |   97.22 | 77                  
 src/components        |   90.54 |       75 |   86.66 |   92.64 |                     
  fpjs-provider.tsx    |   88.33 |    69.23 |   83.33 |   91.07 | 106,112-117,136-138 
  with-environment.tsx |     100 |      100 |     100 |     100 |                     
 src/utils             |   85.71 |    57.14 |    87.5 |    82.6 |                     
  assert-is-truthy.ts  |   66.66 |        0 |     100 |   66.66 | 3                   
  to-error.ts          |      75 |      100 |     100 |      75 | 6                   
  use-previous.ts      |     100 |      100 |     100 |     100 |                     
  wait-until.ts        |   86.66 |       60 |      75 |      80 | 10-12               
-----------------------|---------|----------|---------|---------|---------------------


`

export const textReportHeaderMock = `File                   | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s   
-----------------------|---------|----------|---------|---------|---------------------
All files              |   90.82 |    81.03 |   76.47 |   90.71 |                     `

export const textReportBodyMock = ` src                   |   92.38 |    88.57 |   67.85 |    91.3 |                     
  agent-server-mock.ts |       0 |      100 |       0 |       0 | 3-5                 
  detect-env.ts        |    92.3 |    86.66 |     100 |    91.3 | 15,85               
  env.ts               |     100 |      100 |     100 |     100 |                     
  env.types.ts         |     100 |      100 |     100 |     100 |                     
  fpjs-context.ts      |   83.33 |      100 |       0 |   83.33 | 38                  
  get-env.ts           |      75 |        0 |     100 |      75 | 9-10                
  index.ts             |     100 |      100 |   14.28 |     100 |                     
  ssr.ts               |     100 |      100 |     100 |     100 |                     
  use-visitor-data.ts  |   97.67 |    93.33 |    87.5 |   97.22 | 77                  
 src/components        |   90.54 |       75 |   86.66 |   92.64 |                     
  fpjs-provider.tsx    |   88.33 |    69.23 |   83.33 |   91.07 | 106,112-117,136-138 
  with-environment.tsx |     100 |      100 |     100 |     100 |                     
 src/utils             |   85.71 |    57.14 |    87.5 |    82.6 |                     
  assert-is-truthy.ts  |   66.66 |        0 |     100 |   66.66 | 3                   
  to-error.ts          |      75 |      100 |     100 |      75 | 6                   
  use-previous.ts      |     100 |      100 |     100 |     100 |                     
  wait-until.ts        |   86.66 |       60 |      75 |      80 | 10-12               `

export const smallTextReportMock = `-----------|---------|----------|---------|---------|-------------------
File       | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
-----------|---------|----------|---------|---------|-------------------
All files  |   54.38 |    66.66 |    62.5 |   55.35 |                   
 main.ts   |       0 |        0 |       0 |       0 | 1-46              
 report.ts |    77.5 |      100 |   71.42 |    77.5 | 8-24              
-----------|---------|----------|---------|---------|-------------------
`

export const smallTextReportResultMock = `
::set-output name=markdownReport::St|File       | %25 Stmts | %25 Branch | %25 Funcs | %25 Lines | Uncovered Line #s 
--|-----------|---------|----------|---------|---------|-------------------
🟡|All files  |   54.38 |    66.66 |    62.5 |   55.35 |                   
🔴|&nbsp;[main.ts](https://github.com/fingerprintjs/action-coverage-report-md/commit/b7f702e50c62e5291dfa74886525bfe4b5ee2c71/main.ts)|       0 |        0 |       0 |       0 |[1-46](https://github.com/fingerprintjs/action-coverage-report-md/commit/b7f702e50c62e5291dfa74886525bfe4b5ee2c71/main.ts#L1-L46)
🟡|&nbsp;[report.ts](https://github.com/fingerprintjs/action-coverage-report-md/commit/b7f702e50c62e5291dfa74886525bfe4b5ee2c71/report.ts)|    77.5 |      100 |   71.42 |    77.5 |[8-24](https://github.com/fingerprintjs/action-coverage-report-md/commit/b7f702e50c62e5291dfa74886525bfe4b5ee2c71/report.ts#L8-L24)
`

export const smallTextReportNoBaseMock = `St|File       | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
--|-----------|---------|----------|---------|---------|-------------------
🟡|All files  |   54.38 |    66.66 |    62.5 |   55.35 |                   
🔴|&nbsp;[main.ts](https://github.com/fingerprintjs/action-coverage-report-md/commit/b7f702e50c62e5291dfa74886525bfe4b5ee2c71/main.ts)|       0 |        0 |       0 |       0 |[1-46](https://github.com/fingerprintjs/action-coverage-report-md/commit/b7f702e50c62e5291dfa74886525bfe4b5ee2c71/main.ts#L1-L46)
🟡|&nbsp;[report.ts](https://github.com/fingerprintjs/action-coverage-report-md/commit/b7f702e50c62e5291dfa74886525bfe4b5ee2c71/report.ts)|    77.5 |      100 |   71.42 |    77.5 |[8-24](https://github.com/fingerprintjs/action-coverage-report-md/commit/b7f702e50c62e5291dfa74886525bfe4b5ee2c71/report.ts#L8-L24)`

export const smallTextReportSrcBaseMock = `St|File       | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
--|-----------|---------|----------|---------|---------|-------------------
🟡|All files  |   54.38 |    66.66 |    62.5 |   55.35 |                   
🔴|&nbsp;[main.ts](https://github.com/fingerprintjs/action-coverage-report-md/commit/b7f702e50c62e5291dfa74886525bfe4b5ee2c71/src/main.ts)|       0 |        0 |       0 |       0 |[1-46](https://github.com/fingerprintjs/action-coverage-report-md/commit/b7f702e50c62e5291dfa74886525bfe4b5ee2c71/src/main.ts#L1-L46)
🟡|&nbsp;[report.ts](https://github.com/fingerprintjs/action-coverage-report-md/commit/b7f702e50c62e5291dfa74886525bfe4b5ee2c71/src/report.ts)|    77.5 |      100 |   71.42 |    77.5 |[8-24](https://github.com/fingerprintjs/action-coverage-report-md/commit/b7f702e50c62e5291dfa74886525bfe4b5ee2c71/src/report.ts#L8-L24)`
