import{o as e}from"./preload-helper-CsHsquCd.js";import{i as t,n,t as r}from"./core-CC_khciW.js";import{Cn as i,Dn as a,On as o,Sn as s,en as c,wn as l}from"./SynapseClient-CErk6Dnm.js";import{t as u}from"./synapse-client-CC_qEERI.js";import{y as d}from"./SynapseContext-CJuT_vcR.js";import{R as f,d as p,f as m,z as h}from"./iframe-CXY2_LtV.js";import{n as g,t as _}from"./ProjectDataAvailability-CBTySFsi.js";var v,y,b,x,S=e((()=>{u(),v=`syn54321`,y=`syn12345`,b={projectId:v,locations:[{storageLocationId:1,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},x={projectId:y,locations:[{storageLocationId:1,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]}})),C,w=e((()=>{S(),s(),d(),r(),C=(e=a(i.REPO_ENDPOINT))=>[t.get(`${e}${c(v)}`,()=>n.json(b,{status:201})),t.get(`${e}${c(y)}`,()=>n.json(x,{status:201}))]})),T,E,D,O,k;e((()=>{h(),w(),m(),S(),o(),g(),T={title:`Synapse/ProjectStorage`,component:_,argTypes:{isAuthenticated:{type:`boolean`}},args:{isAuthenticated:!0}},E={args:{projectId:y,sx:{backgroundColor:`#375574`}},parameters:{stack:`mock`,msw:{handlers:[...p(l),...f(l),...C(l)]}}},D={args:{projectId:v,sx:{backgroundColor:`#375574`}},parameters:{stack:`mock`,msw:{handlers:[...p(l),...f(l),...C(l)]}}},O={args:{projectId:`syn31415123`},parameters:{stack:`mock`,msw:{handlers:[...p(l),...f(l),...C(l)]}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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