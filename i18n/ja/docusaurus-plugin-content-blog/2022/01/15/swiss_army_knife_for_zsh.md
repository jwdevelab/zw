---
title: A Swiss Army Knife for Zsh - Unix shell
description: Introduction to fast and feature-rich plugin manager.
slug: swiss-army-knife-for-zsh
authors:
  - 
    name: Salvydas Lukosius
    title: Z-Shell ZI Maintainer
    url: https://github.com/ss-o
    image_url: https://github.com/ss-o.png
tags:
  - opensource
  - productivity
  - github
  - zsh
image: /img/logo/501x501.png
hide_table_of_contents: true
---

<div align="center">

## ❮ [ZI](https://z-shell.pages.dev/) ❯ **is a fast and feature-rich plugin manager for [Zsh](https://zsh.sourceforge.io/) - [Unix shell](https://en.wikipedia.org/wiki/Unix_shell).** {#zi--is-a-fast-and-feature-rich-plugin-manager-for-zsh---unix-shell}

</div>

### Fast user experience {#fast-user-experience}

- Has a [turbo mode](https://z-shell.pages.dev/docs/getting_started/useage#turbo-mode) that yields 50-80% [faster](https://github.com/z-shell/pm-perf-test) Zsh startup.

<!--truncate-->

### Stay flexible {#stay-flexible}

1. Run programs and scripts without adding anything to `$PATH`,
2. Install and run Ruby [Gems](https://github.com/rubygems/rubygems), [Node](https://github.com/npm/cli), and [Python](https://python.org) modules from within a local directory with [$GEM_HOME](https://guides.rubygems.org/command-reference/#gem-environment), [$NODE_PATH](https://nodejs.org/api/modules.html#modules_loading_from_the_global_folders), and [$VIRTUALENV](https://docs.python.org/3/tutorial/venv.html) automatically set,
3. Run programs, scripts, and functions with automatic `cd` into the plugin or snippet directory, plus also with automatic standard output & standard error redirecting.
4. Source scripts through an automatically created function with the above `$GEM_HOME`, `$NODE_PATH`, `$VIRTUALENV`, and `cd` features available,
5. Create the so-called `shims` known from [rbenv](https://github.com/rbenv/rbenv) – the same feature as the first item of this enumeration – of running a program without adding anything to `$PATH` with all of the above features, however through an automatic **script** created in `$ZPFX/bin`, not a **function** (the first item uses a function-based mechanism),
6. Automatic updates of Ruby gems and Node modules during regular plugin and snippet updates with `zi update …`.
7. Install almost everything from [GitHub](https://github.com), and other Git providers.

- Detailed information on how it works and how to achieve it is found in the [wiki](https://z-shell.pages.dev/docs/ecosystem/annexes)

### Use what you want - not only what you can. {#use-what-you-want---not-only-what-you-can}

- Supports loading [Oh My Zsh and Prezto](https://z-shell.pages.dev/docs/getting_started/overview#oh-my-zsh-prezto) plugins and libraries, however, the implementation isn't framework-specific and doesn't bloat the plugin manager with such code, it allows to use of any framework. See our wiki on how to [migrate](https://z-shell.pages.dev/docs/getting_started/migration) from other plugin managers.

### Boost performance with integrated tools {#boost-performance-with-integrated-tools}

- The dedicated [packages](https://z-shell.pages.dev/docs/ecosystem/packages) offload the user from providing long and complex commands. See the [Z-Shell ZI](https://github.com/z-shell) organization for a complete list of packages.

- The specialized extensions — so-called [annexes](https://z-shell.pages.dev/docs/ecosystem/annexes) — expand with new commands, URL per-processors (used by e.g.: [z-a-readurl](https://github.com/z-shell/z-a-readurl) annex), post-install and post-update hooks, and much more.

### Keep it clean and consistent {#keep-it-clean-and-consistent}

- The system does not use `$FPATH`, loading multiple plugins doesn't clutter `$FPATH` with the same number of entries (e.g. `10`, `15`, or more). Code is immune to `KSH_ARRAYS` and other options typically causing compatibility problems.

### Focus on What Matters {#focus-on-what-matters}

- Provides [reports and statistics](https://z-shell.pages.dev/docs/guides/commands#reports-and-statistics) about the plugins, such as:

1. **aliases**
2. **functions**
3. **bindkeys**
4. **zle widgets**
5. **zstyles**
6. [completions](https://z-shell.pages.dev/docs/guides/commands#completions-management) management
7. `PATH`, and `FPATH` elements.

- Allows to quickly [familiarize](https://z-shell.pages.dev/docs/guides/benchmark) oneself with a new plugin and provides rich and easy-to-digest information that might be helpful on various occasions.

- Supports the unloading of plugins and the ability to list, (un)install, and **selectively disable**, **enable** plugin's completions.

### Documentation {#documentation}

ZI Wiki pages are often improved and updated. Easily find the topic you are looking for with the [wiki search](https://z-shell.pages.dev/search/)

### New to Zsh or just need support? {#new-to-zsh-or-just-need-support}

Simply start a [discussion](https://github.com/z-shell/zi/discussions/new?category=q-a) and we will help. There is no such thing as a bad question - just ask :)

---

[![asciicast](https://asciinema.org/a/459358.svg)](https://asciinema.org/a/459358)

### Join the open-source {#join-the-open-source}

Friendly for new contributors!

> It's a good place to start with or just to show off your skills as we have almost 100 repositories that require different types of developers with different types of experience.

GitHub Org: [z-shell](https://github.com/z-shell)
