import{eb as s}from"./iframe-DiPm50UB.js";function i(r){return new Promise(t=>{setTimeout(t.bind(null,{}),r)})}async function c(r,t){let o=125;const n=1e3;let e=await r();for(;"jobState"in e&&e.jobState==="PROCESSING";)await i(o),e=await r(),o=Math.min(o*2,n);if("jobState"in e&&e.jobState==="FAILED"){console.error("Asynchronous job failed:",e.errorMessage,`
Details:
`,e.errorDetails);const a=e.errorMessage??e.errorDetails??e.exception??"An unknown error occurred.";throw new s(400,a,`waitForAsyncResult - ${e.requestBody?.concreteType}`)}return e}export{c as w};
