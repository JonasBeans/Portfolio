# Linux 
Linux is much better than Windows. 
It has a much more efficient CLI. 

Installing packages is way easier. 
Beside that there a a ton of usefull packages being made by developers all around the world.  
This is possible because Linux is open source. Everybody can contribute to this wonderfull operating system. 

Another example of an open source operating system is OpenBSD. 
This operating system is however not used for everyday use but is better accounted for server purposes.

## SSH
SSH is an applicatin layer protocol and is a framework used by many other application layer protocols.
Some example protocols using SSH are:
- SFTP (file transfer layer on top FTP)
- SCP (file transfer)
- HTTPS (layer above HTTP)

It is also used for making a secured connection to remote in order to execute commands in the command line interface (CLI).

### Connection to remote host using Private/Public key pair

Todo implement mermaid diagram
```mermaid
    
```

if you don't already, create a private/public key pair on the host.
`ssh-keygen -t {type of encryption}`

log in to remote host
`ssh {user}@{host}`

locate .ssh folder or make one
`cd .ssh`
or
`mkdir .ssh`

add public key to authorized_keys file
`cat id_rsa >> ~/.ssh/authorized_keys`


## Commands default in linux

<details>
<summary>chmod</summary>

= edit permissions on a file or directory
### fc
= edit previous commands and execute them 
#### Options 
\- e edit with editor you choose
</details>


### crontab
= creating cronjobs
source: [website](https://crontab.guru/) 

#### Options 


### htop
= monitor resources

### df
= see mounts

### systemctl
= controller to see whats happening on the system

### journalctl
= controller deamon for watching logs about services

### networkctl
= controllre daemon for watching logs about network trafic

## Commands additionaly added through package manager



### fzf
= Fuzzy finder

Looks for files in a directory by specifying part of the name.

### zoxide
Better way of navigating the filesystem than 'cd'.

#### Install 

## Pipes

| 

\> 

\>> 

\\

\&&