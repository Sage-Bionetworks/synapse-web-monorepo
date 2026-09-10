import{o as e}from"./preload-helper-CsHsquCd.js";import{Ln as t,Vn as n}from"./synapse-client-CnbOkvM7.js";import{D as r,O as i}from"./iframe-DCjmEfdS.js";import{n as a,t as o}from"./AccessTokenPage-g1YyM0VH.js";var s,c,l,u;e((()=>{i(),n(),a(),s={title:`Synapse/AccessTokenPage`,component:o,args:{title:`Personal Access Tokens`,body:`Create and manage tokens that can be used to access your Synapse account programmatically.`},parameters:{stack:`mock`}},c={parameters:{msw:{handlers:[...r(t)]}}},l={parameters:{msw:{handlers:[...r(t,{results:[]})]}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  parameters: {
    msw: {
      handlers: [...getPersonalAccessTokenHandlers(MOCK_REPO_ORIGIN)]
    }
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  parameters: {
    msw: {
      handlers: [...getPersonalAccessTokenHandlers(MOCK_REPO_ORIGIN, {
        results: []
      })]
    }
  }
}`,...l.parameters?.docs?.source}}},u=[`Demo`,`NoTokens`]}))();export{c as Demo,l as NoTokens,u as __namedExportsOrder,s as default};