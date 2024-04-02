# Get Repo Owner Action

This action returns the repo owner in lower case so that it can be used as part of a docker image name, which does not allow capital characters in the image name.

For open source projects, this allows creating Github Action workflows that work run and are scoped correctly even in forks.

## Outputs

### `owner`
The value of `github.repository_owner` in lower case.

See https://docs.github.com/en/actions/reference/context-and-expression-syntax-for-github-actions#github-context

## Example usage

```yaml
- uses: LucasRoesler/get-repo-owner-action@v1.0
  id: get_owner
- name: print owner
  run: echo ${{ steps.get_owner.outputs.owner }}
```
