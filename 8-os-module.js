const os = require('os');

// # info about current user
// const user= os.userInfo();
// console.log(user);

// # method returns the system uptime in seconds
// const uptime = os.uptime();
// console.log(`The System Uptime is ${uptime} seconds`);

// # method returns the system home dir
// const homedir = os.homedir();
// console.log(homedir);

// # Os method
const currentOS ={
    name: os.type(),
    release: os.release(),
    totalMen: os.totalmem(),
    freeMen: os.freemem(),
}

console.log(currentOS);

