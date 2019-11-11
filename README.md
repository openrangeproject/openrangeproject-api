# Open Range Project

## Installation
Download and install Ubuntu Server (on bare metal if possible) and follow the steps below.  
https://ubuntu.com/download/server  

### Update Ubuntu
`sudo apt update`    
`sudo apt upgrade`  

### Install Libvirt KVM
`sudo apt install qemu-kvm libvirt-bin libvirt-dev`  

### Install python
`sudo apt install python`  

### Install Node.js/NVM
`curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.34.0/install.sh | bash`    
`source ~/.profile`  

`nvm install 12` 

### Install Required Packages  
`npm install sails -g`  
`npm install node-gyp -g`  

### Install OpenRangeProject 
`git clone https://github.com/openrangeproject/openrangeproject-api`  
`cd openrangeproject-api`  
`npm install`  
`node-gyp configure`  
`node-gyp build`

