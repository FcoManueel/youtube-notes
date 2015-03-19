# youtube-notes
Awesome note taking tool for YouTube videos

## How to run locally
### Enviroment setup
1. Install virtualbox
2. Install vagrant
3. Download this project
4. Go to project location and run 
    
    ```$ vagrant up``` 

5. Add this entry to your **hosts** file (*/etc/hosts*)

    192.168.56.102     ytnotes.dev

### Start VM + Rails server
0. Go to project directory
1. Run `vagrant up` to start vagrant
2. Run `vagrant ssh` to connect to VM via ssh
3. Run `cd /var/www` to go to VM project directory
4. Run `rails s` to start rails server
5. Browse to `http://ytnotes.dev:3000/` to access rails app

The project folder is synced to the VM (virtual machine), so every local change to the project is in the VM instantly.


### Vagrant commands
All vagrant commands should be run from the project folder

+ To start the VM use `$ vagrant up` .
+ To stop the VM use `$ vagrant halt`.
+ To run the VM command line use `$ vagrant ssh`.
+ To start your VM from scratch:

```
$ vagrant destroy
$ vagrant up
```

### Known installation issues 
#### Permission denied/Errno::EACCES
This happens during the first `$ vagrant up`,  one workaround might be executing the command as root, however, this may cause future conflicts with the permissions of the VM, (and you will have to run every vagrant command as root). 
A more suitable solution is to change the ownership of the conflicting file. An example of how this has been solved is:

```
$ sudo chown mvalle:mvalle /home/mvalle/.vagrant.d/data/machine-index/index
$ sudo chown mvalle:mvalle /home/mvalle/.vagrant.d/data/fp-leases/
```
#### Something went wrong during vagrant up
Destroy the VM and create it again (check above).
