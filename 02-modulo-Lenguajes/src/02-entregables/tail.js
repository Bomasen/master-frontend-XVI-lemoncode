const names = ["Javier","Mónica","Pepe","Laura","Isabel"]

const tail = (_first,...names) => names

console.log("This is tail exercise:\n",tail(...names))