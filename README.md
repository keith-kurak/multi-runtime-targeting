# Multi-version targeting

## Binary release
1. Increment minor version (7.1.0)
2. Update runtime version
3. Create and push release branch
4. `eas build --profile production --platform ios --message 7.1.0`

## Update

1. Switch to last release branch for binary version (e.g., 7.1.0)
1. Increment patch version (7.1.1)
2. Create and push release branch
3. `eas update --channel production --rollout-percentage=10 --message 7.1.1`
4. Select group (need to automate this)

## Complete rollout
1. `eas update:edit --branch production --rollout-percentage=100`, set 100%

## Revert rollout 
1. `eas update:revert-update-rollout --message "Revert 7.1.1 to 7.1.0`
2. Select channel
3. Select group (need to automate this)

`eas update:list --branch=production --limit=1 --json --non-interactive | jq -r '.currentPage[0].group'`

also need to handle null case