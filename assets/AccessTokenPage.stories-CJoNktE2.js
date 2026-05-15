import{n as e}from"./chunk-jRWAZmH_.js";import{E as t,T as n,ig as r,sg as i}from"./iframe-DZ4nI-zg.js";import{n as a,t as o}from"./AccessTokenPage-ThG8S9hE.js";var s,c,l,u;e((()=>{t(),i(),a(),s={title:`Synapse/AccessTokenPage`,component:o,args:{title:`Personal Access Tokens`,body:`Create and manage tokens that can be used to access your Synapse account programmatically.`},parameters:{stack:`mock`}},c={parameters:{msw:{handlers:[...n(r)]}}},l={parameters:{msw:{handlers:[...n(r,{results:[]})]}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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