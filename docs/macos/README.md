# MacOS

## System Path

### Display path

``` sh
echo $PATH
```

### Adding a Temporary Location

You can add extra locations to your path. If you want to add `~/.composer/vendor/bin`:

``` sh
PATH=$PATH:~/.composer/vendor/bin
```

One of the disadvantages of this is that the new location will only be honored for that particular Terminal **session**, when a new Terminal window is launched it will have the original default path again.

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
