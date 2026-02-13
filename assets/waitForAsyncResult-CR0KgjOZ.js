import{ew as a}from"./iframe-D-KER6Qh.js";function s(t){return new Promise(o=>{setTimeout(o.bind(null,{}),t)})}async function l(t,o){let r=125;const n=1e3;let e=await t();for(;"jobState"in e&&e.jobState==="PROCESSING";)await s(r),e=await t(),r=Math.min(r*2,n);if("jobState"in e&&e.jobState==="FAILED")throw console.error("Asynchronous job failed:",e.errorMessage,`
Details:
`,e.errorDetails),new a(400,e.errorMessage,`waitForAsyncResult - ${e.requestBody?.concreteType}`);return e}export{l as w};
