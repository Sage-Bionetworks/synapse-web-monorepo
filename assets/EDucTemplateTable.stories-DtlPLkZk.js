import{o as e}from"./preload-helper-CsHsquCd.js";import{_ as t,i as n,t as r}from"./core-CI8DLeHF.js";import{Fn as i,Ht as a,Nn as o,Ut as s,zn as c}from"./synapse-client-DT80sJpp.js";import{J as l,Y as u}from"./iframe-DKBSVwHi.js";import{n as d,t as f}from"./EDucTemplateTable-B6MYHdgh.js";var p,m,h,g,_;e((()=>{u(),c(),o(),r(),d(),p={title:`Governance/eDUC Templates Table`,component:f,parameters:{stack:`mock`,msw:{handlers:l(i)}}},m={name:`Templates table`},h={name:`Templates table — invalid validation result`,parameters:{msw:{handlers:[n.get(`${i}${s(`:templateId`)}`,()=>t.json({isValid:!1,reason:`Template is missing required signer tab.`},{status:200})),...l(i)]}}},g={name:`Templates table — empty`,parameters:{msw:{handlers:[n.post(`${i}${a}`,()=>t.json({results:[]},{status:200}))]}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'Templates table'
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: 'Templates table — invalid validation result',
  parameters: {
    msw: {
      handlers: [
      // Override before the default handler so MSW's first-match wins.
      http.get(\`\${MOCK_REPO_ORIGIN}\${EDUC_TEMPLATE_VALIDATION(':templateId')}\`, () => HttpResponse.json({
        isValid: false,
        reason: 'Template is missing required signer tab.'
      }, {
        status: 200
      })), ...getEDucTemplateHandlers(MOCK_REPO_ORIGIN)]
    }
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: 'Templates table — empty',
  parameters: {
    msw: {
      handlers: [http.post(\`\${MOCK_REPO_ORIGIN}\${EDUC_TEMPLATE}\`, () => HttpResponse.json({
        results: []
      }, {
        status: 200
      }))]
    }
  }
}`,...g.parameters?.docs?.source}}},_=[`Demo`,`InvalidTemplate`,`EmptyList`]}))();export{m as Demo,g as EmptyList,h as InvalidTemplate,_ as __namedExportsOrder,p as default};