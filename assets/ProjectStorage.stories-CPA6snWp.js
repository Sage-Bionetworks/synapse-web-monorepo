import{n as e}from"./chunk-jRWAZmH_.js";import{F as t,Gt as n,Jh as r,Kt as i,P as a,Qh as o,Tc as s,Uh as c,Wt as l,Yh as u,Zh as d,l as f,qh as p,u as m,yf as h}from"./iframe-DIpPaeje.js";import{n as g,t as _}from"./ProjectDataAvailability-BU-C6_iD.js";var v,y,b,x,S=e((()=>{h(),v=`syn54321`,y=`syn12345`,b={projectId:v,locations:[{storageLocationId:1,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},x={projectId:y,locations:[{storageLocationId:1,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]}})),C,w=e((()=>{S(),p(),s(),l(),C=(e=d(r.REPO_ENDPOINT))=>[i.get(`${e}${c(v)}`,()=>n.json(b,{status:201})),i.get(`${e}${c(y)}`,()=>n.json(x,{status:201}))]})),T,E,D,O,k;e((()=>{t(),w(),m(),S(),o(),g(),T={title:`Synapse/ProjectStorage`,component:_,argTypes:{isAuthenticated:{type:`boolean`}},args:{isAuthenticated:!0}},E={args:{projectId:y,sx:{backgroundColor:`#375574`}},parameters:{stack:`mock`,msw:{handlers:[...f(u),...a(u),...C(u)]}}},D={args:{projectId:v,sx:{backgroundColor:`#375574`}},parameters:{stack:`mock`,msw:{handlers:[...f(u),...a(u),...C(u)]}}},O={args:{projectId:`syn31415123`},parameters:{stack:`mock`,msw:{handlers:[...f(u),...a(u),...C(u)]}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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