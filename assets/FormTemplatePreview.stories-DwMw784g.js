import{o as e,u as t}from"./preload-helper-CsHsquCd.js";import{t as n}from"./react-BXiJfEW5.js";import{An as r,pn as i}from"./TextField-DshmLCH7.js";import{t as a}from"./jsx-runtime-l3w3GfrB.js";import{B as o,I as s,Mn as c,R as l,a as u,c as d,t as f}from"./esm-CJoHTOXN.js";import{$ as p,t as m}from"./dist-w3HOQuM2.js";import{F as h,I as g,L as _,P as v,R as y}from"./iframe-CHNVRxSI.js";import{n as b,t as x}from"./JsonSchemaForm-DRcEycmk.js";function S(e,t,n=p.REQUEST){let r=new Map(_(t).map(e=>[e.propertyKey,e])),i=[];for(let t of e.steps){let e={},a=[],o={},s=[];for(let i of t.fields){let t=y(i.schemaPath),c=t?r.get(t):void 0;c&&h(c.context,n)&&(e[c.propertyKey]={...c.subSchema},c.isRequired&&a.push(c.propertyKey),i.uiDefinition&&Object.keys(i.uiDefinition).length>0&&(o[c.propertyKey]={...i.uiDefinition}),s.push(c.propertyKey))}if(s.length===0)continue;let c={type:`object`,title:t.title,properties:e};t.description&&(c.description=t.description),a.length>0&&(c.required=a),o[`ui:order`]=s,i.push({jsonSchema:c,uiSchema:o})}return{steps:i}}var C=e((()=>{m(),g()}));function w({template:e,jsonSchema:t}){let[n,a]=(0,T.useState)(0),[f,m]=(0,T.useState)(p.REQUEST),{steps:h}=(0,T.useMemo)(()=>S(e,t,f),[e,t,f]);if(h.length===0)return(0,E.jsx)(r,{variant:`outlined`,sx:{p:2},children:(0,E.jsx)(c,{sx:{py:4,textAlign:`center`},children:(0,E.jsx)(i,{variant:`body2`,color:`text.secondary`,children:`Add at least one step with a bound field to preview the form.`})})});let g=Math.min(n,h.length-1),_=h[g],v=_.jsonSchema.title??``,y=_.jsonSchema.description??``;return(0,E.jsxs)(r,{variant:`outlined`,sx:{p:2},children:[(0,E.jsxs)(u,{value:f,exclusive:!0,size:`small`,onChange:(e,t)=>{t&&m(t)},sx:{mb:2},children:[(0,E.jsx)(d,{value:p.REQUEST,children:`Request`}),(0,E.jsx)(d,{value:p.RENEWAL,children:`Renewal`})]}),h.length>1&&(0,E.jsx)(s,{activeStep:g,nonLinear:!0,sx:{mb:2},children:h.map((e,t)=>(0,E.jsx)(o,{children:(0,E.jsx)(l,{onClick:()=>a(t),children:e.jsonSchema.title??`Step ${t+1}`})},t))}),v&&(0,E.jsx)(i,{variant:`h6`,gutterBottom:!0,children:v}),y&&(0,E.jsx)(i,{variant:`body2`,color:`text.secondary`,sx:{mb:2},children:y}),(0,E.jsx)(x,{schema:_.jsonSchema,uiSchema:_.uiSchema,formContext:{descriptionVariant:`inline`},children:(0,E.jsx)(E.Fragment,{}),liveValidate:!1})]})}var T,E,D=e((()=>{b(),C(),m(),f(),T=t(n(),1),E=a();try{w.displayName=`FormTemplatePreview`,w.__docgenInfo={description:`Renders a live preview of how a FormTemplate + its referenced JSON Schema will appear to a
requester. Computed client-side against the unsaved draft, purely to give ACT instant feedback
while editing.`,displayName:`FormTemplatePreview`,filePath:`/home/runner/work/synapse-web-monorepo/synapse-web-monorepo/packages/synapse-react-client/src/components/FormTemplateEditor/FormTemplatePreview.tsx`,methods:[],props:{template:{defaultValue:null,declarations:[{fileName:`synapse-react-client/src/components/FormTemplateEditor/FormTemplatePreview.tsx`,name:`TypeLiteral`}],description:``,name:`template`,required:!0,tags:{},type:{name:`FormTemplate`}},jsonSchema:{defaultValue:null,declarations:[{fileName:`synapse-react-client/src/components/FormTemplateEditor/FormTemplatePreview.tsx`,name:`TypeLiteral`}],description:``,name:`jsonSchema`,required:!0,tags:{},type:{name:`RJSFSchema`}}},tags:{}}}catch{}}));function O(e){return{id:`template-1`,name:`My Template`,schema$id:`org.example-1.0.0`,steps:e,etag:`etag-1`,versionNumber:1}}var k,A,j,M,N,P,F;e((()=>{m(),g(),D(),k={type:`object`,properties:{institution:{type:`string`,title:`Institution`},signingOfficial:{type:`string`,title:`Signing Official`},[v]:{type:`string`}},required:[`institution`,v],allOf:[{if:{properties:{[v]:{const:p.RENEWAL}}},then:{properties:{summaryOfUse:{type:`string`,title:`Summary`}},required:[`summaryOfUse`]}}]},A={title:`Components/FormTemplateEditor/FormTemplatePreview`,component:w,args:{template:O([{title:`Basics`,description:`Tell us about yourself`,fields:[{schemaPath:`/institution`,uiDefinition:{}}]}]),jsonSchema:k}},j={},M={args:{template:O([{title:`Basics`,description:`Tell us about yourself`,fields:[{schemaPath:`/institution`,uiDefinition:{}}]},{title:`Additional info`,fields:[{schemaPath:`/signingOfficial`,uiDefinition:{}}]}])}},N={args:{template:O([{title:`Basics`,fields:[{schemaPath:`/institution`,uiDefinition:{}}]},{title:`Renewal details`,fields:[{schemaPath:`/summaryOfUse`,uiDefinition:{}}]}])}},P={args:{template:O([])}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    template: template([{
      title: 'Basics',
      description: 'Tell us about yourself',
      fields: [{
        schemaPath: '/institution',
        uiDefinition: {}
      }]
    }, {
      title: 'Additional info',
      fields: [{
        schemaPath: '/signingOfficial',
        uiDefinition: {}
      }]
    }])
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    template: template([{
      title: 'Basics',
      fields: [{
        schemaPath: '/institution',
        uiDefinition: {}
      }]
    }, {
      title: 'Renewal details',
      fields: [{
        schemaPath: '/summaryOfUse',
        uiDefinition: {}
      }]
    }])
  }
}`,...N.parameters?.docs?.source},description:{story:`"Renewal details" only has a resolvable field once the Renewal toggle above the stepper is
selected -- toggle it to see the step appear.`,...N.parameters?.docs?.description}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    template: template([])
  }
}`,...P.parameters?.docs?.source},description:{story:`No step has a field that resolves for either request type -- nothing to preview yet.`,...P.parameters?.docs?.description}}},F=[`SingleStep`,`MultiStepStepper`,`RenewalGatedStep`,`Empty`]}))();export{P as Empty,M as MultiStepStepper,N as RenewalGatedStep,j as SingleStep,F as __namedExportsOrder,A as default};