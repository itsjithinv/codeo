import { AbstractBaseConfig } from './abstract-base.config';

export class GitConfig extends AbstractBaseConfig {
  generateConfig(): object {
    return {
      'gitDecoration.modifiedResourceForeground':
        this.theme.gitDecorationModifiedResourceForeground,
      'gitDecoration.deletedResourceForeground':
        this.theme.gitDecorationDeletedResourceForeground,
      'gitDecoration.untrackedResourceForeground':
        this.theme.untrackedResourceForeground,
      'gitDecoration.ignoredResourceForeground':
        this.theme.gitDecorationIgnoredResourceForeground,
      'gitDecoration.conflictingResourceForeground':
        this.theme.gitDecorationConflictingResourceForeground,
    };
  }
}
