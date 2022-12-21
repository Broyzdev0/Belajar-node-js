// DNS adalah sebuah sistem yang menghubungkan Uniform 
// Resource Locator atau URL dengan Internet Protocol Address atau IP Address.
// Kepanjangan dari DNS adalah domain name system.

import dns from "dns";

const address = await dns.lookup("www.programmerzamannow.com");

console.info("address.address");
console.info("address.family")