import {URL} from "url";

//pzn => href
const pzn = new URL ("https://www.youtube.com/watch?v=b39Xqf5iyjo&t=9251s");

//ini untuk mengubah host
pzn.host = "www.angga.com";
pzn.searchParams.append("status", "premium");
//

console.info(pzn.toString());
console.info(pzn.hostname);
console.info(pzn.href);
console.info(pzn.protocol);
console.info(pzn.host);
console.info(pzn.pathname);
console.info(pzn.searchParams);