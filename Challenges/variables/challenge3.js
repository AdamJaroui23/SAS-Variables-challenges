let GB

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What is you available space on your pc in GB? " , (GB) => {
  let MB = GB * 1024
    console.log("Storage : " + GB + " GB")
    console.log("Result : " + MB + " MB")
});