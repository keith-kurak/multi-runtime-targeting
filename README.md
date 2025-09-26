# Multi-version targeting

## Binary release
1. Increment minor version (7.1.0)
2. Create and push release branch
3. `eas build --profile production --platform ios`

## Update
1. Increment patch version (7.1.1)
2. Create and push release branch
3. `eas update --rollout-percentage=10 --message 7.1.1`

## Complete rollout
1. `eas update:edit`, set 100%

## Revert rollout 
1. `eas update:revert-update-rollout`