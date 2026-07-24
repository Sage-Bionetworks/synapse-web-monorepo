import{o as e}from"./preload-helper-CsHsquCd.js";import{An as t,En as n}from"./synapse-client-lwpa67nR.js";import{R as r,d as i,f as a,z as o}from"./iframe-B6ItnLpB.js";import{n as s,t as c}from"./ProjectDataAvailability-DOCXKUIX.js";import{a as l,i as u,n as d,r as f,t as p}from"./projectStorageHandlers-EljYEYx1.js";var m,h,g,_,v;e((()=>{o(),d(),a(),l(),t(),s(),m={title:`Synapse/ProjectStorage`,component:c,argTypes:{isAuthenticated:{type:`boolean`}},args:{isAuthenticated:!0}},h={args:{projectId:u,sx:{width:210}},parameters:{stack:`mock`,msw:{handlers:[...i(n),...r(n),...p(n)]}}},g={args:{projectId:f,sx:{width:210}},parameters:{stack:`mock`,msw:{handlers:[...i(n),...r(n),...p(n)]}}},_={args:{projectId:`syn31415123`,sx:{width:210}},parameters:{stack:`mock`,msw:{handlers:[...i(n),...r(n),...p(n)]}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    projectId: UNDER_LIMIT_PROJECT_ID,
    sx: {
      width: 210
    }
  },
  parameters: {
    stack: 'mock',
    msw: {
      handlers: [...getUserProfileHandlers(MOCK_REPO_ORIGIN), ...getEntityHandlers(MOCK_REPO_ORIGIN), ...getProjectStorageHandlers(MOCK_REPO_ORIGIN)]
    }
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    projectId: OVER_LIMIT_PROJECT_ID,
    sx: {
      width: 210
    }
  },
  parameters: {
    stack: 'mock',
    msw: {
      handlers: [...getUserProfileHandlers(MOCK_REPO_ORIGIN), ...getEntityHandlers(MOCK_REPO_ORIGIN), ...getProjectStorageHandlers(MOCK_REPO_ORIGIN)]
    }
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    projectId: 'syn31415123',
    sx: {
      width: 210
    }
  },
  parameters: {
    stack: 'mock',
    msw: {
      handlers: [...getUserProfileHandlers(MOCK_REPO_ORIGIN), ...getEntityHandlers(MOCK_REPO_ORIGIN), ...getProjectStorageHandlers(MOCK_REPO_ORIGIN)]
    }
  }
}`,..._.parameters?.docs?.source}}},v=[`ProjectDataUnderLimit`,`ProjectDataOverLimit`,`ProjectDataStorageNotSet`]}))();export{g as ProjectDataOverLimit,_ as ProjectDataStorageNotSet,h as ProjectDataUnderLimit,v as __namedExportsOrder,m as default};