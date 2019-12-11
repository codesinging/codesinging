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
