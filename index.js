const core = require('@actions/core');
const github = require('@actions/github');

try {

  const repoOwner = github.context.repo.owner;
  console.log(`found: ${repoOwner}!`);
  core.setOutput('owner', repoOwner.toLowerCase());
} catch (error) {
  core.setFailed(error.message);
}