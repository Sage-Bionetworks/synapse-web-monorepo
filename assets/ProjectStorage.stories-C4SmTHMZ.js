import{o as e}from"./preload-helper-CsHsquCd.js";import{n as t,p as n,t as r}from"./core-IjRt3rc-.js";import{An as i,En as a,Tn as o,kn as s,nn as c,t as l,wn as u}from"./synapse-client-C_QK7pog.js";import{y as d}from"./SynapseContext-CW3LnE8I.js";import{R as f,d as p,f as m,z as h}from"./iframe-Bo9vZUB2.js";import{n as g,t as _}from"./ProjectDataAvailability-cZGFAVKp.js";var v,y,b,x,S=e((()=>{l(),v=`syn54321`,y=`syn12345`,b={projectId:v,locations:[{storageLocationId:1,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},x={projectId:y,locations:[{storageLocationId:1,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]}})),C,w=e((()=>{S(),u(),d(),r(),C=(e=s(o.REPO_ENDPOINT))=>[t.get(`${e}${c(v)}`,()=>n.json(b,{status:201})),t.get(`${e}${c(y)}`,()=>n.json(x,{status:201}))]})),T,E,D,O,k;e((()=>{h(),w(),m(),S(),i(),g(),T={title:`Synapse/ProjectStorage`,component:_,argTypes:{isAuthenticated:{type:`boolean`}},args:{isAuthenticated:!0}},E={args:{projectId:y,sx:{backgroundColor:`#375574`}},parameters:{stack:`mock`,msw:{handlers:[...p(a),...f(a),...C(a)]}}},D={args:{projectId:v,sx:{backgroundColor:`#375574`}},parameters:{stack:`mock`,msw:{handlers:[...p(a),...f(a),...C(a)]}}},O={args:{projectId:`syn31415123`},parameters:{stack:`mock`,msw:{handlers:[...p(a),...f(a),...C(a)]}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    projectId: UNDER_LIMIT_PROJECT_ID,
    sx: {
      backgroundColor: '#375574'
    }
  },
  parameters: {
    stack: 'mock',
    msw: {
      handlers: [...getUserProfileHandlers(MOCK_REPO_ORIGIN), ...getEntityHandlers(MOCK_REPO_ORIGIN), ...getProjectStorageHandlers(MOCK_REPO_ORIGIN)]
    }
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    projectId: OVER_LIMIT_PROJECT_ID,
    sx: {
      backgroundColor: '#375574'
    }
  },
  parameters: {
    stack: 'mock',
    msw: {
      handlers: [...getUserProfileHandlers(MOCK_REPO_ORIGIN), ...getEntityHandlers(MOCK_REPO_ORIGIN), ...getProjectStorageHandlers(MOCK_REPO_ORIGIN)]
    }
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    projectId: 'syn31415123'
  },
  parameters: {
    stack: 'mock',
    msw: {
      handlers: [...getUserProfileHandlers(MOCK_REPO_ORIGIN), ...getEntityHandlers(MOCK_REPO_ORIGIN), ...getProjectStorageHandlers(MOCK_REPO_ORIGIN)]
    }
  }
}`,...O.parameters?.docs?.source}}},k=[`ProjectDataUnderLimit`,`ProjectDataOverLimit`,`ProjectDataStorageNotSet`]}))();export{D as ProjectDataOverLimit,O as ProjectDataStorageNotSet,E as ProjectDataUnderLimit,k as __namedExportsOrder,T as default};