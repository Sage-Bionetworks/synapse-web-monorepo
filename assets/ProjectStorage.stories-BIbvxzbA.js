import{hC as p,s as d,ju as l,H as O,cf as I,cg as g,z as a,b as e,g as o}from"./iframe-C4gfjmJw.js";import{P as _}from"./ProjectDataAvailability-BaR7zX21.js";import"./index-Chi_LkuB.js";import"./HelpPopover-COiLoIGR.js";import"./MarkdownPopover-5mB1Kxab.js";import"./LightTooltip-DDJdQBDx.js";import"./MarkdownSynapse-BLr68Dpv.js";import"./SkeletonButton-BIeEptZL.js";import"./SkeletonInlineBlock-BRt0lIXt.js";import"./SkeletonTable-BpAtksSS.js";import"./SkeletonParagraph-C0oOWbiy.js";const n="syn54321",c="syn12345",P={projectId:n,locations:[{storageLocationId:p,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},R={projectId:c,locations:[{storageLocationId:p,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},i=(m=I(g.REPO_ENDPOINT))=>[d.get(`${m}${l(n)}`,()=>O.json(P,{status:201})),d.get(`${m}${l(c)}`,()=>O.json(R,{status:201}))],M={title:"Synapse/ProjectStorage",component:_,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},t={args:{projectId:c,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...a(e),...o(e),...i(e)]}}},r={args:{projectId:n,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...a(e),...o(e),...i(e)]}}},s={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...a(e),...o(e),...i(e)]}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    projectId: 'syn31415123'
  },
  parameters: {
    stack: 'mock',
    msw: {
      handlers: [...getUserProfileHandlers(MOCK_REPO_ORIGIN), ...getEntityHandlers(MOCK_REPO_ORIGIN), ...getProjectStorageHandlers(MOCK_REPO_ORIGIN)]
    }
  }
}`,...s.parameters?.docs?.source}}};const T=["ProjectDataUnderLimit","ProjectDataOverLimit","ProjectDataStorageNotSet"];export{r as ProjectDataOverLimit,s as ProjectDataStorageNotSet,t as ProjectDataUnderLimit,T as __namedExportsOrder,M as default};
