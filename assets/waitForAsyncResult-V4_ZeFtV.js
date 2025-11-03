import{eB as s,eC as n}from"./iframe-kh7i1csa.js";async function c(t,i){var a;let r=125;const o=1e3;let e=await t();for(;"jobState"in e&&e.jobState==="PROCESSING";)await s(r),e=await t(),r=Math.min(r*2,o);if("jobState"in e&&e.jobState==="FAILED")throw console.error("Asynchronous job failed:",e.errorMessage,`
Details:
`,e.errorDetails),new n(400,e.errorMessage,`waitForAsyncResult - ${(a=e.requestBody)==null?void 0:a.concreteType}`);return e}export{c as w};
