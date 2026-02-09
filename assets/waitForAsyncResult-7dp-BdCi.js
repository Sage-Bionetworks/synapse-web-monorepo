import{ev as o,ew as s}from"./iframe-MmUnwf_I.js";async function l(t,n){let r=125;const a=1e3;let e=await t();for(;"jobState"in e&&e.jobState==="PROCESSING";)await o(r),e=await t(),r=Math.min(r*2,a);if("jobState"in e&&e.jobState==="FAILED")throw console.error("Asynchronous job failed:",e.errorMessage,`
Details:
`,e.errorDetails),new s(400,e.errorMessage,`waitForAsyncResult - ${e.requestBody?.concreteType}`);return e}export{l as w};
