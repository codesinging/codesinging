# MacOS

## System Path

### Display Path

``` sh
echo $PATH
```

### Adding a Temporary Location

You can add extra locations to your path. If you want to add `~/.composer/vendor/bin`:

``` sh
PATH=$PATH:~/.composer/vendor/bin
```

One of the disadvantages of this is that the new location will only be honored for that particular Terminal **session**, when a new Terminal window is launched it will have the original default path again.

### Adding a Permanent Location

To make the path stick permanently, you should set the path in the `~/.bash_profile`(`bash shell`) or `~/.zshrc`(`zsh shell`) file.

For example, if you want to add `~/.composer/vendor/bin/` to the system path, you should firstly open the file:

- `~/.bash_profile` for bash shell
- `~/.zshrc` for zsh shell

And then, add in the `export PATH=$PATH:~/.composer/vendor/bin/` code.

### Default Path

The system default path is `/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin`.

## Brew Mirror

Change Homebrew mirror to USTC:

``` sh
# change brew.git
cd "$(brew --repo)"
git remote set-url origin https://mirrors.ustc.edu.cn/brew.git

# change homebrew-core.git
cd "$(brew --repo)/Library/Taps/homebrew/homebrew-core"
git remote set-url origin https://mirrors.ustc.edu.cn/homebrew-core.git

# change bottles
# for bash
echo 'export HOMEBREW_BOTTLE_DOMAIN=https://mirrors.ustc.edu.cn/homebrew-bottles' >> ~/.bash_profile
source ~/.bash_profile
# for zsh
echo 'export HOMEBREW_BOTTLE_DOMAIN=https://mirrors.ustc.edu.cn/homebrew-bottles' >> ~/.zshrc
source ~/.zshrc
```

For more details, see [https://lug.ustc.edu.cn/wiki/mirrors/help/brew.git](https://lug.ustc.edu.cn/wiki/mirrors/help/brew.git)
