const dns = require("dns");

dns.promises.resolveSrv("_mongodb._tcp.cluster0.we7e5fv.mongodb.net")
.then(console.log)
.catch(console.error);