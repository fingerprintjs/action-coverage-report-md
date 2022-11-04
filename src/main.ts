import * as github from '@actions/github'
import * as core from '@actions/core'
import {getMarkdownReport} from './report'

async function run(): Promise<void> {
  try {
    const textCoverageReportPath: string = core.getInput('textReportPath')
    const {sha, serverUrl} = github.context
    const {repo: repository, owner} = github.context.repo

    if (!sha) {
      core.error('Can`t detect commit SHA')
    }
    if (!sha) {
      core.error('Can`t detect serverUrl')
    }
    if (!repository) {
      core.error('Can`t detect repo url')
    }
    if (!repository) {
      core.error('Can`t detect owner url')
    }
    const githubBaseUrl = `${serverUrl}/${owner}/${repository}/commit/${sha}`
    core.debug(`githubBaseUrl: ${githubBaseUrl}`)
    const mdReport = await getMarkdownReport(
      textCoverageReportPath,
      githubBaseUrl
    )
    core.setOutput('markdownReport', mdReport)
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message)
  }
}

run()
