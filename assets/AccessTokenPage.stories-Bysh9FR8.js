import{n as e}from"./chunk-zsgVPwQN.js";import{Tn as t,xn as n}from"./SynapseClient-BzG4sNth.js";import{n as r,t as i}from"./personalAccessTokenHandlers-HzSESkRg.js";import{n as a,t as o}from"./AccessTokenPage-D88JyhIt.js";var s,c,l,u;e((()=>{r(),t(),a(),s={title:`Synapse/AccessTokenPage`,component:o,args:{title:`Personal Access Tokens`,body:`Create and manage tokens that can be used to access your Synapse account programmatically.`},parameters:{stack:`mock`}},c={parameters:{msw:{handlers:[...i(n)]}}},l={parameters:{msw:{handlers:[...i(n,{results:[]})]}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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