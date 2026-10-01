import{o as e}from"./preload-helper-CsHsquCd.js";import{t,tt as n}from"./dist-nqzfKTp6.js";import{$ as r,Z as i}from"./iframe-t_tV_hX7.js";import{n as a,t as o}from"./FormTemplatePreview-DZMYdwYE.js";function s(e){return{id:`template-1`,name:`My Template`,schema$id:`org.example-1.0.0`,steps:e,etag:`etag-1`,versionNumber:1}}var c,l,u,d,f,p,m;e((()=>{t(),r(),a(),c={type:`object`,properties:{institution:{type:`string`,title:`Institution`},signingOfficial:{type:`string`,title:`Signing Official`},[i]:{type:`string`}},required:[`institution`,i],allOf:[{if:{properties:{[i]:{const:n.RENEWAL}}},then:{properties:{summaryOfUse:{type:`string`,title:`Summary`}},required:[`summaryOfUse`]}}]},l={title:`Components/FormTemplateEditor/FormTemplatePreview`,component:o,args:{template:s([{title:`Basics`,description:`Tell us about yourself`,fields:[{schemaPath:`/institution`,uiDefinition:{}}]}]),jsonSchema:c}},u={},d={args:{template:s([{title:`Basics`,description:`Tell us about yourself`,fields:[{schemaPath:`/institution`,uiDefinition:{}}]},{title:`Additional info`,fields:[{schemaPath:`/signingOfficial`,uiDefinition:{}}]}])}},f={args:{template:s([{title:`Basics`,fields:[{schemaPath:`/institution`,uiDefinition:{}}]},{title:`Renewal details`,fields:[{schemaPath:`/summaryOfUse`,uiDefinition:{}}]}])}},p={args:{template:s([])}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source},description:{story:`"Renewal details" only has a resolvable field once the Renewal toggle above the stepper is
selected -- toggle it to see the step appear.`,...f.parameters?.docs?.description}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    template: template([])
  }
}`,...p.parameters?.docs?.source},description:{story:`No step has a field that resolves for either request type -- nothing to preview yet.`,...p.parameters?.docs?.description}}},m=[`SingleStep`,`MultiStepStepper`,`RenewalGatedStep`,`Empty`]}))();export{p as Empty,d as MultiStepStepper,f as RenewalGatedStep,u as SingleStep,m as __namedExportsOrder,l as default};