"use strict";(self.webpackChunkzi_wiki_pages=self.webpackChunkzi_wiki_pages||[]).push([[8683],{6241:function(e){e.exports=JSON.parse('{"blogPosts":[{"id":"contributing-guidlines-update","metadata":{"permalink":"/ja/blog/contributing-guidlines-update","editUrl":"https://github.com/z-shell/zw/tree/main/blog/2022/01/27/contributing_guidelines_update.md","source":"@site/blog/2022/01/27/contributing_guidelines_update.md","title":"Contributing Guidelines Update","description":"Contributing is a great way to learn more about social coding on Github, new technologies and and their ecosystems.","date":"2022-01-27T00:00:00.000Z","formattedDate":"2022\u5e741\u670827\u65e5","tags":[{"label":"opensource","permalink":"/ja/blog/tags/opensource"},{"label":"productivity","permalink":"/ja/blog/tags/productivity"},{"label":"github","permalink":"/ja/blog/tags/github"},{"label":"codenewbie","permalink":"/ja/blog/tags/codenewbie"}],"readingTime":7.555,"truncated":false,"authors":[{"name":"Salvydas Lukosius","title":"Z-Shell ZI Maintainer","url":"https://github.com/ss-o","image_url":"https://github.com/ss-o.png","imageURL":"https://github.com/ss-o.png"}],"frontMatter":{"title":"Contributing Guidelines Update","description":"Contributing is a great way to learn more about social coding on Github, new technologies and and their ecosystems.","slug":"contributing-guidlines-update","authors":[{"name":"Salvydas Lukosius","title":"Z-Shell ZI Maintainer","url":"https://github.com/ss-o","image_url":"https://github.com/ss-o.png","imageURL":"https://github.com/ss-o.png"}],"tags":["opensource","productivity","github","codenewbie"],"image":"/img/logo/501x501.png","hide_table_of_contents":false},"nextItem":{"title":"A Swiss Army Knife for Zsh - Unix shell","permalink":"/ja/blog/swiss-army-knife-for-zsh"}},"content":"When contributing, please first discuss the change you wish to make via issue, email, or any other method with the owners of this repository before making a change.\\nPlease note we have a [code of conduct](https://github.com/z-shell/zi/blob/main/docs/CODE_OF_CONDUCT.md), please follow it in all your interactions with the project.\\n\\n## Knowledge Base\\n\\n- [ZI Wiki](https://z-shell.pages.dev)\\n- [Zsh Plugin Standard](https://z-shell.github.io/docs/zsh/Zsh-Plugin-Standard.html)\\n- [Zsh Native Scripting Handbook](https://z-shell.github.io/docs/zsh/Zsh-Native-Scripting-Handbook.html)\\n\\n### Need some help regarding the basics?\ud83e\udd14\\n\\nYou can refer to the following articles on basics of Git and Github and also contact the Project Mentors,\\nin case you are stuck:\\n\\n- [Forking a Repo](https://help.github.com/en/github/getting-started-with-github/fork-a-repo)\\n- [Cloning a Repo](https://help.github.com/en/desktop/contributing-to-projects/creating-an-issue-or-pull-request)\\n- [How to create a Pull Request](https://opensource.com/article/19/7/create-pull-request-github)\\n- [Getting started with Git and GitHub](https://towardsdatascience.com/getting-started-with-git-and-github-6fcd0f2d4ac6)\\n- [Learn GitHub from Scratch](https://lab.github.com/githubtraining/introduction-to-github)\\n\\n## Submitting Contribution\\n\\nBelow you will find the process and workflow used to review and merge your changes.\\n\\n### Step 0 : Find an issue\\n\\n- Take a look at the Existing Issues or create your **own** Issues!\\n- Wait for the Issue to be assigned to you after which you can start working on it.\\n- Note : Every change in this project should/must have an associated issue.\\n\\n### Step 1 : Fork the Project\\n\\n- Fork this Repository. This will create a Local Copy of this Repository on your Github Profile.\\n  Keep a reference to the original project in `upstream` remote.\\n\\n```bash\\ngit clone https://github.com/<your-username>/<repo-name>\\ncd <repo-name>\\ngit remote add upstream https://github.com/z-shell/<repo-name>\\n```\\n\\n- If you have already forked the project, update your copy before working.\\n\\n```bash\\ngit remote update\\ngit checkout <branch-name>\\ngit rebase upstream/<branch-name>\\n```\\n\\n### Step 2 : Branch\\n\\nCreate a new branch. Use its name to identify the issue your addressing.\\n\\n```bash\\n# It will create a new branch with name Branch_Name and switch to that branch\\ngit checkout -b branch_name\\n```\\n\\n### Step 3 : Work on the issue assigned\\n\\n- Work on the issue(s) assigned to you.\\n- Add all the files/folders needed.\\n- After you\'ve made changes or made your contribution to the project add changes to the branch you\'ve just created by:\\n\\n```bash\\n# To add all new files to branch Branch_Name\\ngit add .\\n\\n# To add only a few files to Branch_Name\\ngit add <some files>\\n```\\n\\n### Step 4 : Commit\\n\\n- To commit give a descriptive message for the convenience of reviewer by:\\n\\n```bash\\n# This message get associated with all files you have changed\\ngit commit -m \\"message\\"\\n```\\n\\n- **NOTE**: A PR should have only one commit. Multiple commits should be squashed.\\n\\n### Step 5 : Work Remotely\\n\\n- Now you are ready to your work to the remote repository.\\n- When your work is ready and complies with the project conventions, upload your changes to your fork:\\n\\n```bash\\n# To push your work to your remote repository\\ngit push -u origin Branch_Name\\n```\\n\\n### Step 6 : Pull Request\\n\\n- Go to your repository in browser and click on compare and pull requests.\\n  Then add a title and description to your pull request that explains your contribution.\\n\\n## Recommendations\\n\\n- Any files to support prefered editor should be collaborated and respected across organization repositories e.g: [editorconfig](https://gist.github.com/ss-o/1e8d9f3a710f78330a09ccc47ef6ddb2).\\n- Write comments extensively as we use: [Doxygen For Shell Scripts](https://github.com/z-shell/zsdoc) which parses Zsh and Bash scripts.\\n- Get familiar with [Conventional commits](https://www.conventionalcommits.org) and [ZenHub](https://go.zenhub.com).\\n\\n### Issues and feature requests\\n\\nYou\'ve found a bug in the source code, a mistake in the documentation or maybe you\'d like a new feature?Take a look at [GitHub Discussions](https://github.com/z-shell/zi/discussions) to see if it\'s already being discussed. You can help us by [submitting an issue on GitHub](https://github.com/z-shell/zi/issues). Before you create an issue, make sure to search the issue archive -- your issue may have already been addressed!\\n\\nPlease try to create bug reports that are:\\n\\n- _Reproducible._ Include steps to reproduce the problem.\\n- _Specific._ Include as much detail as possible: which version, what environment, etc.\\n- _Unique._ Do not duplicate existing opened issues.\\n- _Scoped to a Single Bug._ One bug per report.\\n\\n**Even better: Submit a pull request with a fix or new feature!**\\n\\n### How to submit a Pull Request\\n\\n1. Search our repository for open or closed\\n   [Pull Requests](https://github.com/z-shell/zi/pulls)\\n   that relate to your submission. You don\'t want to duplicate effort.\\n2. Fork the project\\n3. Create your feature branch (`git checkout -b feat/amazing_feature`)\\n4. Commit your changes (`git commit -m \'feat: add amazing_feature\'`) Z-Shell ZI uses [conventional commits](https://www.conventionalcommits.org), so please follow the specification in your commit messages.\\n5. Push to the branch (`git push origin feat/amazing_feature`)\\n6. [Open a Pull Request](https://github.com/z-shell/zi/compare?expand=1)\\n\\n#### Clean Pull Request\\n\\nContributing is also a great way to learn more about social coding on Github, new technologies and and their ecosystems and how to make constructive, helpful bug reports, feature requests and the noblest of all contributions: a good, clean pull request.\\n\\n- Create a personal fork of the project on Github.\\n- Clone the fork on your local machine. Your remote repo on Github is called `origin`.\\n  - `git clone https://github.com/{YOUR-USERNAME}/zi`\\n- Add the original repository as a remote called `upstream`.\\n  - `git remote add upstream https://github.com/z-shell/zi.git`\\n- If you created your fork a while ago be sure to pull upstream changes into your local repository.\\n- Create a new branch to work on! Branch from `develop` if it exists, else from `main`.\\n- Implement/fix your feature, comment your code.\\n- Follow the code style of the project, including indentation.\\n- If there is related tests please run them.\\n- Write or adapt tests as needed.\\n- Add or change the documentation as needed.\\n- Squash your commits into a single commit with git\'s [interactive rebase](https://help.github.com/articles/interactive-rebase). Create a new branch if necessary.\\n- Push your branch to your fork on Github, the remote `origin`.\\n- From your fork open a pull request in the correct branch. Target the project\'s `develop` branch if there is one, else go for `main`!\\n- Once the pull request is approved and merged you can pull the changes from `upstream` to your local repo and delete\\n  your extra branch(es).\\n\\n> Always write your commit messages in the present tense. Your commit message should describe what the commit, when applied, does to the code \u2013 not what you did to the code. ([examples](https://www.google.com/search?q=english+\\"present+tense+example\\"))\\n\\n### Commit messages\\n\\n- Use the Present Tense (\\"Add feature\\" not \\"Added feature\\").\\n- Use the Imperative Mood (\\"Move file to...\\" not \\"Moves file to...\\").\\n- Limit the subject line to 50 characters\\n- Wrap the body at 72 characters\\n- Reference issues and pull requests, where possible.\\n\\n- Be creative with emojies\\n  - :tada: `:tada:` Initial commit\\n  - :art: `:art:` when improving the format/structure of the code\\n  - :racehorse: `:racehorse:` when improving performance\\n  - :books: `:books:` when writing docs\\n  - :pencil2: `:pencil2:` when fixing typos\\n  - :bug: `:bug:` when fixing a bug\\n  - :fire: `:fire:` when removing code or files\\n  - :green_heart: `:green_heart:` when fixing the CI build\\n  - :white_check_mark: `:white_check_mark:` when adding tests\\n  - :lock: `:lock:` when dealing with security\\n  - :heavy_plus_sign: `:heavy_plus_sign:` when adding new dependencies\\n  - :arrow_up: `:arrow_up:` when upgrading dependencies\\n  - :arrow_down: `:arrow_down:` when downgrading dependencies\\n  - :shirt: `:shirt:` when removing linter warnings\\n  - :construction: `:construction:` work in progress\\n  - :sparkles: `:sparkles:` when adding feature\\n  - :lipstick: `:lipstick:` when improving UI\\n  - :gem: `:gem:` new release\\n  - :rocket: `:rocket:` Anything related to Deployments/DevOps\\n\\n### Do not add images, rather \ud83d\udc47\\n\\nInstead of adding non-essential images to repository link them to markdown files.\\n\\n#### How to do that?\\n\\n- You can do that by hosting all you images and screenshots to any images hosting sites such as [imgur](https://imgur.com/), [imgbb](https://imgbb.com/), [postimages](https://postimages.org/).\\n- Then link your uploaded images to README files.\\n\\n## Community membership\\n\\n### New contributors\\n\\nNew contributors should be welcomed to the community by existing members,\\nhelped with PR workflow, and directed to relevant documentation and\\ncommunication channels.\\n\\n### Member\\n\\nMembers are continuously active contributors in the community. They can have\\nissues and PRs assigned to them, and pre-submit tests are automatically run for their PRs. Members are expected to remain active contributors to the community.\\n\\n### Established community members\\n\\nEstablished community members are expected to demonstrate their adherence to the principles in this document.\\nFamiliarity with project organization, roles, policies, procedures, conventions, etc., and technical and/or writing ability.\\nRole-specific expectations, responsibilities, and requirements are enumerated\\nbelow.\\n\\n### Requirements\\n\\n- Enabled two-factor authentication on their GitHub account.\\n- Actively contributing to 1 or more repositories altenatively ensure your sponsors are @mentioned on the issue.\\n\\nThis section outlines the various responsibilities of contributor roles in\\nZ-shell. Responsibilities for most roles are scoped to these subprojects.\\n\\n| Role     | Responsibilities                        | Requirements                                                       | Defined by                                                |\\n| -------- | --------------------------------------- | ------------------------------------------------------------------ | --------------------------------------------------------- |\\n| Member   | Active contributor in the community     | Sponsored by reviewers or multiple contributions to the project    | Z-shell GitHub org member                                 |\\n| Reviewer | Review contributions from other members | History of review and authorship in a subproject                   | [CODEOWNERS](https://github.com/z-shell/zi/blob/main/.github/CODEOWNERS) file reviewer entry |\\n| Approver | Contributions acceptance approval       | Highly experienced active reviewer and contributor to a subproject | [CODEOWNERS](https://github.com/z-shell/zi/blob/main/.github/CODEOWNERS) file approver entry |\\n\\n[**Membership request**](https://github.com/z-shell/zi/issues/new?assignees=&labels=&template=05_membership.yml&title=team%3A+new+member+request)"},{"id":"swiss-army-knife-for-zsh","metadata":{"permalink":"/ja/blog/swiss-army-knife-for-zsh","editUrl":"https://github.com/z-shell/zw/tree/main/blog/2022/01/15/swiss_army_knife_for_zsh.md","source":"@site/blog/2022/01/15/swiss_army_knife_for_zsh.md","title":"A Swiss Army Knife for Zsh - Unix shell","description":"Introduction to fast and feature-rich plugin manager.","date":"2022-01-15T00:00:00.000Z","formattedDate":"2022\u5e741\u670815\u65e5","tags":[{"label":"opensource","permalink":"/ja/blog/tags/opensource"},{"label":"productivity","permalink":"/ja/blog/tags/productivity"},{"label":"github","permalink":"/ja/blog/tags/github"},{"label":"zsh","permalink":"/ja/blog/tags/zsh"}],"readingTime":2.725,"truncated":true,"authors":[{"name":"Salvydas Lukosius","title":"Z-Shell ZI Maintainer","url":"https://github.com/ss-o","image_url":"https://github.com/ss-o.png","imageURL":"https://github.com/ss-o.png"}],"frontMatter":{"title":"A Swiss Army Knife for Zsh - Unix shell","description":"Introduction to fast and feature-rich plugin manager.","slug":"swiss-army-knife-for-zsh","authors":[{"name":"Salvydas Lukosius","title":"Z-Shell ZI Maintainer","url":"https://github.com/ss-o","image_url":"https://github.com/ss-o.png","imageURL":"https://github.com/ss-o.png"}],"tags":["opensource","productivity","github","zsh"],"image":"/img/logo/501x501.png","hide_table_of_contents":true},"prevItem":{"title":"Contributing Guidelines Update","permalink":"/ja/blog/contributing-guidlines-update"}},"content":"<div align=\\"center\\">\\n\\n## \u276e [ZI](https://z-shell.pages.dev/) \u276f **is a fast and feature-rich plugin manager for [Zsh](https://zsh.sourceforge.io/) - [Unix shell](https://en.wikipedia.org/wiki/Unix_shell).** {#zi--is-a-fast-and-feature-rich-plugin-manager-for-zsh---unix-shell}\\n\\n</div>\\n\\n### Fast user experience {#fast-user-experience}\\n\\n- Has a [turbo mode](https://z-shell.pages.dev/docs/getting_started/useage#turbo-mode) that yields 50-80% [faster](https://github.com/z-shell/pm-perf-test) Zsh startup.\\n\\n\x3c!--truncate--\x3e\\n\\n### Stay flexible {#stay-flexible}\\n\\n1. Run programs and scripts without adding anything to `$PATH`,\\n2. Install and run Ruby [Gems](https://github.com/rubygems/rubygems), [Node](https://github.com/npm/cli), and [Python](https://python.org) modules from within a local directory with [$GEM_HOME](https://guides.rubygems.org/command-reference/#gem-environment), [$NODE_PATH](https://nodejs.org/api/modules.html#modules_loading_from_the_global_folders), and [$VIRTUALENV](https://docs.python.org/3/tutorial/venv.html) automatically set,\\n3. Run programs, scripts, and functions with automatic `cd` into the plugin or snippet directory, plus also with automatic standard output & standard error redirecting.\\n4. Source scripts through an automatically created function with the above `$GEM_HOME`, `$NODE_PATH`, `$VIRTUALENV`, and `cd` features available,\\n5. Create the so-called `shims` known from [rbenv](https://github.com/rbenv/rbenv) \u2013 the same feature as the first item of this enumeration \u2013 of running a program without adding anything to `$PATH` with all of the above features, however through an automatic **script** created in `$ZPFX/bin`, not a **function** (the first item uses a function-based mechanism),\\n6. Automatic updates of Ruby gems and Node modules during regular plugin and snippet updates with `zi update \u2026`.\\n7. Install almost everything from [GitHub](https://github.com), and other Git providers.\\n\\n- Detailed information on how it works and how to achieve it is found in the [wiki](https://z-shell.pages.dev/docs/ecosystem/annexes)\\n\\n### Use what you want - not only what you can. {#use-what-you-want---not-only-what-you-can}\\n\\n- Supports loading [Oh My Zsh and Prezto](https://z-shell.pages.dev/docs/getting_started/overview#oh-my-zsh-prezto) plugins and libraries, however, the implementation isn\'t framework-specific and doesn\'t bloat the plugin manager with such code, it allows to use of any framework. See our wiki on how to [migrate](https://z-shell.pages.dev/docs/getting_started/migration) from other plugin managers.\\n\\n### Boost performance with integrated tools {#boost-performance-with-integrated-tools}\\n\\n- The dedicated [packages](https://z-shell.pages.dev/docs/ecosystem/packages) offload the user from providing long and complex commands. See the [Z-Shell ZI](https://github.com/z-shell) organization for a complete list of packages.\\n\\n- The specialized extensions \u2014 so-called [annexes](https://z-shell.pages.dev/docs/ecosystem/annexes) \u2014 expand with new commands, URL per-processors (used by e.g.: [z-a-readurl](https://github.com/z-shell/z-a-readurl) annex), post-install and post-update hooks, and much more.\\n\\n### Keep it clean and consistent {#keep-it-clean-and-consistent}\\n\\n- The system does not use `$FPATH`, loading multiple plugins doesn\'t clutter `$FPATH` with the same number of entries (e.g. `10`, `15`, or more). Code is immune to `KSH_ARRAYS` and other options typically causing compatibility problems.\\n\\n### Focus on What Matters {#focus-on-what-matters}\\n\\n- Provides [reports and statistics](https://z-shell.pages.dev/docs/guides/commands#reports-and-statistics) about the plugins, such as:\\n\\n1. **aliases**\\n2. **functions**\\n3. **bindkeys**\\n4. **zle widgets**\\n5. **zstyles**\\n6. [completions](https://z-shell.pages.dev/docs/guides/commands#completions-management) management\\n7. `PATH`, and `FPATH` elements.\\n\\n- Allows to quickly [familiarize](https://z-shell.pages.dev/docs/guides/benchmark) oneself with a new plugin and provides rich and easy-to-digest information that might be helpful on various occasions.\\n\\n- Supports the unloading of plugins and the ability to list, (un)install, and **selectively disable**, **enable** plugin\'s completions.\\n\\n### Documentation {#documentation}\\n\\nZI Wiki pages are often improved and updated. Easily find the topic you are looking for with the [wiki search](https://z-shell.pages.dev/search/)\\n\\n### New to Zsh or just need support? {#new-to-zsh-or-just-need-support}\\n\\nSimply start a [discussion](https://github.com/z-shell/zi/discussions/new?category=q-a) and we will help. There is no such thing as a bad question - just ask :)\\n\\n---\\n\\n[![asciicast](https://asciinema.org/a/459358.svg)](https://asciinema.org/a/459358)\\n\\n### Join the open-source {#join-the-open-source}\\n\\nFriendly for new contributors!\\n\\n> It\'s a good place to start with or just to show off your skills as we have almost 100 repositories that require different types of developers with different types of experience.\\n\\nGitHub Org: [z-shell](https://github.com/z-shell)"}]}')}}]);