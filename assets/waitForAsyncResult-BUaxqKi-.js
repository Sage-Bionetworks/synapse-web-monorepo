import{es as s,et as n}from"./iframe-CnFFtBM5.js";async function c(r,i){var a;let t=125;const o=1e3;let e=await r();for(;"jobState"in e&&e.jobState==="PROCESSING";)await s(t),e=await r(),t=Math.min(t*2,o);if("jobState"in e&&e.jobState==="FAILED")throw console.error("Asynchronous job failed:",e.errorMessage,`
Details:
`,e.errorDetails),new n(400,e.errorMessage,`waitForAsyncResult - ${(a=e.requestBody)==null?void 0:a.concreteType}`);return e}export{c as w};
