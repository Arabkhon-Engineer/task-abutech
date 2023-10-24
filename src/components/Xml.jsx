// import React, { useEffect, useState } from "react";

// const links = [
//   { names: "goole", link: "https://www.google.com/" },
//   { names: "yandex", link: "https://ya.ru/" },
//   { names: "instagram", link: "https://www.instagram.com/" },
//   { names: "vk", link: "https://www.vk.com/" },
//   { names: "twitter", link: "https://twitter.com/" },
//   { names: "twitter", link: "https://twitter1.com/" },
// ];

// const link = "https://quickref.me/javascript.html";
// function sendRequest(method, url, body) {
//   return new Promise((resolve, reject) => {
//     const xhr = new XMLHttpRequest();
//     xhr.open(method, url);
//     xhr.responseType = "json";
//     xhr.onload = () => {
//       if (xhr.status >= 400) {
//         console.log(xhr.status);
//         reject(xhr);
//       } else {
//         resolve(xhr.response);
//       }
//     };
//     xhr.onerror = () => reject("Error!");
//     xhr.send(JSON.stringify(body));
//   });
// }
// let fragment = new DocumentFragment();
// let ul = document.getElementById('ul');

// const XML = () => {
//     const [test, setTest] = useState([]);
//   useEffect(() => {
//       for (let item of links) {
//         let a = document.createElement("a");
//         a.href = item.link;
//         a.append(item.names);
//         a.target = "_blank";
//         fragment.appendChild(a);
//         const testBtn = ()=> {
//           sendRequest("GET", item.names, {})
//             .then((data) =>{
//                 setTest[data]
//                 console.log(test);
//             })
//             .catch(console.log);
//         };
//       }
//     return () => {
//       "hello";
//     };
//   }, []);
//   return (
//     <div className="container">
//       <ul id="ul">
//       </ul>
//       <button id={testBtn}></button>
//     </div>
//   );
// };

// export default XML;
