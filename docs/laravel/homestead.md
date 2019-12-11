# Homestead

Laravel Homestead is an official, pre-packaged Vagrant box that provides you a wonderful development environment without requiring you to install PHP, a web server, and any other software on your local machine. No more worrying about messing up your operating system! Vagrant boxes are completely disposable. If something goes wrong, you can destroy and re-create the box in minutes!

Homestead runs on any Windows, Mac, or Linux system, and includes Nginx, PHP, MySQL, PostgreSQL, Redis, Memcached, Node, and all of the other goodies you need to develop amazing Laravel applications.

::: warning
If you are using Windows, you may need to enable hardware virtualization (VT-x). It can usually be enabled via your BIOS.

If you are using Hyper-V on a UEFI system you may additionally need to disable Hyper-V in order to acccess VT-x.
:::

## Included Software

- Ubuntu 18.04
- Git
- PHP 7.3
- PHP 7.2
- PHP 7.1
- PHP 7.0
- PHP 5.6
- Nginx
- MySQL
- Imm for MySQL or MariaDB database snapshots
- Sqlite3
- PostgreSQL
- Composer
- Node (With Yarn, Bower, Grunt, and Gulp)
- Redis
- Memcached
- Beanstalkd
- Mailhog
- avahi
- ngrok
- Xdebug
- XHProf / Tideways / XHGui
- wp-cli

## Optional Software

- Apache
- Blackfire
- Cassandra
- Chronograf
- CouchDB
- Crystal & Lucky Framework
- Docker
- Elasticsearch
- Gearman
- Go
- Grafana
- InfluxDB
- MariaDB
- MinIO
- MongoDB
- MySQL 8
- Neo4j
- Oh My Zsh
- Open Resty
- PM2
- Python
- RabbitMQ
- Solr
- Webdriver & Laravel Dusk Utilities

## Installation

### Installing Software

- Installing [VirtualBox 6.x](https://www.virtualbox.org/wiki/Downloads), the latest version is 6.0.14 now.
- Installing [Vagrant](https://www.vagrantup.com/downloads.html), the latest version is 2.2.6 now.

### Installing the Homestead Vagrant Box

Once installing VirtualBox and Vagrant have been installed, you shold add the `laravel/homestead` box to your Vagrant installation using the following command in your teminal. It will take a few minutes to download the box, depending on your Internet connection speed.

``` sh
vagrant box add laravel/homestead
```

If you can not download the box via the above command, you can:

- Download it via a download tool directly. The latest version of Homestead box is `9.1.0`, and the url is `https://vagrantcloud.com/laravel/boxes/homestead/versions/9.1.0/providers/virtualbox.box`.
- Download the box provided by [learnku](https://learnku.com/docs/laravel-development-environment/6.x/development-environment-macos/5517#fa010d)  from `https://pan.baidu.com/share/init?surl=RerTgei3pZPAi18ahqCXbQ` (code: rn9g).

::: warning
Homestead periodically issues "alpha" / "beta" boxes for testing, which may interface with the `vagrant box add` command. If you are having issues running `vagrant box add`, you may run the `vagrant up` command and the correct box will be downloaded when Vagrant attempts to start the virtual machine.
:::

### Installing Homestead

You may install Homestead by cloning the repository onto your host machine. Consider cloning the repository into a `homestead` folder within your "home" directory, as the Homestead box will serve as the host to all of your projects:

``` sh
git clone https://github.com/laravel/homestead.git ~/homestead
```

You should check out a tagged version of Homestead since the `master` branch may not always be stable. You can find the latest stable version on the [GitHub Release Page](https://github.com/laravel/homestead/releases). Alternatively, you may checkout the `release` branch which always contains the latest stable release:

``` sh
cd ~/homestead
git checkout release
```

Once you have cloned the Homestead repository, run the `bash ini.sh` command from the Homestead directory to create the `Homestead.yaml` configuration file. The `Homestead.yaml` file will be placed in the Homestead directory:

``` sh
# Mac / Linux
bash init.sh

# Windowns
init.bat
```
