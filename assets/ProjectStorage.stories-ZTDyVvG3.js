import{n as e}from"./chunk-zsgVPwQN.js";import{n as t,r as n,t as r}from"./core-DzrPRFGD.js";import{$t as i,Tn as a,bn as o,wn as s,xn as c,yn as l}from"./SynapseClient-BzG4sNth.js";import{t as u}from"./synapse-client-emkCNacw.js";import{y as d}from"./SynapseContext-C2ff49Ob.js";import{n as f,t as p}from"./entityHandlers-BjIOk1pN.js";import{n as m,r as h}from"./userProfileHandlers-DN0lzneN.js";import{n as g,t as _}from"./ProjectDataAvailability-CZ9TnoHW.js";var v,y,b,x,S=e((()=>{u(),v=`syn54321`,y=`syn12345`,b={projectId:v,locations:[{storageLocationId:1,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},x={projectId:y,locations:[{storageLocationId:1,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]}})),C,w=e((()=>{S(),l(),d(),r(),C=(e=s(o.REPO_ENDPOINT))=>[n.get(`${e}${i(v)}`,()=>t.json(b,{status:201})),n.get(`${e}${i(y)}`,()=>t.json(x,{status:201}))]})),T,E,D,O,k;e((()=>{f(),w(),h(),S(),a(),g(),T={title:`Synapse/ProjectStorage`,component:_,argTypes:{isAuthenticated:{type:`boolean`}},args:{isAuthenticated:!0}},E={args:{projectId:y,sx:{backgroundColor:`#375574`}},parameters:{stack:`mock`,msw:{handlers:[...m(c),...p(c),...C(c)]}}},D={args:{projectId:v,sx:{backgroundColor:`#375574`}},parameters:{stack:`mock`,msw:{handlers:[...m(c),...p(c),...C(c)]}}},O={args:{projectId:`syn31415123`},parameters:{stack:`mock`,msw:{handlers:[...m(c),...p(c),...C(c)]}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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