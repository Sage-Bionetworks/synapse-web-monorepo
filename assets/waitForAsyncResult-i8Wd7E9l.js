import{et as o,eu as s}from"./iframe-BhrR5Sll.js";async function l(r,n){let t=125;const a=1e3;let e=await r();for(;"jobState"in e&&e.jobState==="PROCESSING";)await o(t),e=await r(),t=Math.min(t*2,a);if("jobState"in e&&e.jobState==="FAILED")throw console.error("Asynchronous job failed:",e.errorMessage,`
Details:
`,e.errorDetails),new s(400,e.errorMessage,`waitForAsyncResult - ${e.requestBody?.concreteType}`);return e}export{l as w};
