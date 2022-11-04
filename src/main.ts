import * as github from '@actions/github'
import * as core from '@actions/core'
import {getMarkdownReport} from './report'

async function run(): Promise<void> {
  try {
    const textCoverageReportPath: string = core.getInput('textReportPath')
    const {sha, ref} = github.context
    if (!sha) {
      core.error('Can`t detect commit SHA')
    }
    if (!ref) {
      core.error('Can`t detect repo url')
    }
    const githubBaseUrl = `${ref}/commit/${sha}`
    // const octokit = github.getOctokit(myToken)
    // const { data: pullRequest } = await octokit.rest.pulls.get({
    //   owner: 'octokit',
    //   repo: 'rest.js',
    //   pull_number: 123,
    //   mediaType: {
    //     format: 'diff'
    //   }
    // });
    // core.debug(`Waiting ${ms} milliseconds ...`) // debug is only output if you set the secret `ACTIONS_STEP_DEBUG` to true
    //
    // core.debug(new Date().toTimeString())
    // await wait(parseInt(ms, 10))
    // core.debug(new Date().toTimeString())
    //
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
