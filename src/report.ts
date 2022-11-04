import fs from 'fs/promises'
import path from 'path'

export async function getMarkdownReport(
  pathToTextReport: string,
  githubBaseUrl: string
): Promise<string> {
  const data = await fs.readFile(pathToTextReport, {encoding: 'utf8'})

  const {coverageInfoHeader, coverageInfoRows} = getReportParts(data)

  let currentBasePath = ''
  const modifiedInfoRows = coverageInfoRows.map(row => {
    const {updatedRow, basePath} = processRow(
      row,
      currentBasePath,
      githubBaseUrl
    )
    currentBasePath = basePath
    return updatedRow
  })

  return [coverageInfoHeader.join('\n'), modifiedInfoRows.join('\n')].join('\n')
}

export function getReportParts(rawCoverage: string): {
  coverageInfoHeader: string[]
  coverageInfoRows: string[]
} {
  const trimmedRawCoverage = rawCoverage.trim()
  const rawCoverageRows = trimmedRawCoverage.split('\n')
  const coverageRows = rawCoverageRows.slice(1, rawCoverageRows.length - 1)
  const coverageInfoHeader = coverageRows.slice(0, 3)
  const coverageInfoRows = coverageRows.slice(3)
  return {coverageInfoHeader, coverageInfoRows}
}

export function processRow(
  row: string,
  basePath: string,
  githubBaseUrl: string
): {basePath: string; updatedRow: string} {
  // 0: name | 1: statements | 2: branches | 3: functions | 4: lines | 5: uncovered lines
  const columns = row.split('|')

  const parsedNameColumn = columns[0].match(/^( *)(\S+)/)

  if (parsedNameColumn) {
    const [, leadingSpaces, fileName] = parsedNameColumn
    const mdLeadingSpaces = leadingSpaces.replaceAll(' ', '&nbsp;')
    const extension = path.extname(fileName)

    if (!extension) {
      basePath = fileName
      columns[0] = mdLeadingSpaces + fileName
    } else {
      const filePath = basePath ? `${basePath}/${fileName}` : fileName
      columns[0] = `${mdLeadingSpaces}[${fileName}](${githubBaseUrl}/${filePath})`
      columns[5] = formatUncoveredLines(columns[5], filePath)
    }
  }
  return {
    basePath,
    updatedRow: columns.join('|')
  }
}

export function formatUncoveredLines(
  rawUncoveredLines: string,
  filePath: string
): string {
  const uncoveredLines = rawUncoveredLines.trim()

  if (uncoveredLines === '') {
    return ''
  }

  return uncoveredLines
    .split(',')
    .map(group => group.trim())
    .map(group => `[${group}](${filePath}#${group.replaceAll(/\d+/g, 'L$&')})`)
    .join(',')
}
