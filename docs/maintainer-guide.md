# Maintainer Guide

This document details the development workflow and contribution guidelines for this project.

- [Development Workflow](#development-workflow)
  - [Previewing Deployments](#previewing-deployments)
  - [Deploying to Production](#deploying-to-production)
  - [Recommended Workflows](#recommended-workflows)
    - [Single Developer](#single-developer)
    - [Multiple Developers](#multiple-developers)
- [Contribution Guidelines](#contribution-guidelines)
  - [Commit Messages](#commit-messages)
  - [Branch Naming](#branch-naming)

## Development Workflow

Currently, this project has 2 branches:

- `main`: For production
- `dev`: For development

### Previewing Deployments

After pushing changes to the `dev` or `main` branch, Vercel deploys the changes to a _preview_ site. You can view the preview sites on GitHub under [Deployments](https://github.com/kxrt/rvrc-blog/deployments):

- `dev`: **Preview** environment
- `main`: **Production** environment (Different from production site)

### Deploying to Production

> The `main` branch is deployed onto the production site (https://rvrc-blog.vercel.app/).

To update the production site with your changes in the `dev` branch, open a pull request to merge from `dev` to `main`.

### Recommended Workflows

#### Single Developer

> When working on this project alone, all development can be done in the `dev` branch.

Since this project is usually maintained by a single developer, you can choose to directly commit to the `dev` branch for convenience. The following steps outline this process:

1. Follow these [instructions](/README.md#getting-started) to set up the project.

2. Fetch and switch to the `dev` branch.

```
git fetch origin dev
git checkout dev
```

3. Commit your changes.

```
git add .
git commit -m "feat(2024): add symposium theme"
```

4. Push your changes directly to the `dev` branch.

```
git push origin dev
```

#### Multiple Developers

If more developers are involved, we can adopt a [feature branch workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow) to make changes to the `dev` branch. The following steps outline this process:

1. Follow these [instructions](/README.md#getting-started) to set up the project.
2. Fetch and switch to the `dev` branch.
3. Create a new feature branch based on the `dev` branch. Checkout to the new branch.

```
git checkout -b add-symposium-theme
```

4. Commit your changes.
5. Push your changes on the feature branch to the remote repository.

```
git push origin add-symposium-theme
```

6. Raise a pull request on GitHub to merge the feature branch into the `dev` branch.

## Contribution Guidelines

### Commit Messages

Let's standardize our commit messages using the [Conventional Commits specification](https://www.conventionalcommits.org/en/v1.0.0/#summary).

```
<type>[optional scope]: <description>
```

You may wish to include the symposium's year as the optional scope, because we update this website annually and retain the older symposium editions.

Here are some example commit messages:

```
feat(2024): add symposium theme
fix(2023): fix typo
docs: add development workflow
style: lint
```

### Branch Naming

- **Lowercase**
- **Hyphen-separated**: Use hyphens to separate words
- **Descriptive**: The name should be descriptive and concise, ideally reflecting the work done on the branch.
