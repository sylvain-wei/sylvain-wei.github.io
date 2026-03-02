# Backup and Restore Notes

This file records the pre-migration backup artifacts for the homepage migration.

## Directory Snapshot Backup

- Snapshot location:
  - `/Users/weishaohang/个人事务/PR/backup-snapshots/sylvain-wei.github.io.backup-20260302-200810`

## Git Backup Points

- Tag:
  - `pre-template-migration-20260302-200815`
- Backup branch:
  - `backup/pre-template-migration-20260302-200815`

## Quick Restore Commands

### Restore from directory snapshot

```bash
cd "/Users/weishaohang/个人事务/PR"
rm -rf "sylvain-wei.github.io"
cp -R "backup-snapshots/sylvain-wei.github.io.backup-20260302-200810" "sylvain-wei.github.io"
```

### Restore repo state from git tag

```bash
cd "/Users/weishaohang/个人事务/PR/sylvain-wei.github.io"
git checkout gh-pages
git reset --hard pre-template-migration-20260302-200815
```

### Restore using backup branch

```bash
cd "/Users/weishaohang/个人事务/PR/sylvain-wei.github.io"
git checkout backup/pre-template-migration-20260302-200815
```
