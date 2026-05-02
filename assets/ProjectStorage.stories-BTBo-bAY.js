import{n as e}from"./chunk-jRWAZmH_.js";import{F as t,Gt as n,Hh as r,Jh as i,Kh as a,Kt as o,P as s,Tc as c,Wt as l,Xh as u,Zh as d,l as f,qh as p,u as m,vf as h}from"./iframe-CffxUUe4.js";import{n as g,t as _}from"./ProjectDataAvailability-DOJ3bWlX.js";var v,y,b,x,S=e((()=>{h(),v=`syn54321`,y=`syn12345`,b={projectId:v,locations:[{storageLocationId:1,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},x={projectId:y,locations:[{storageLocationId:1,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]}})),C,w=e((()=>{S(),a(),c(),l(),C=(e=u(p.REPO_ENDPOINT))=>[o.get(`${e}${r(v)}`,()=>n.json(b,{status:201})),o.get(`${e}${r(y)}`,()=>n.json(x,{status:201}))]})),T,E,D,O,k;e((()=>{t(),w(),m(),S(),d(),g(),T={title:`Synapse/ProjectStorage`,component:_,argTypes:{isAuthenticated:{type:`boolean`}},args:{isAuthenticated:!0}},E={args:{projectId:y,sx:{backgroundColor:`#375574`}},parameters:{stack:`mock`,msw:{handlers:[...f(i),...s(i),...C(i)]}}},D={args:{projectId:v,sx:{backgroundColor:`#375574`}},parameters:{stack:`mock`,msw:{handlers:[...f(i),...s(i),...C(i)]}}},O={args:{projectId:`syn31415123`},parameters:{stack:`mock`,msw:{handlers:[...f(i),...s(i),...C(i)]}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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