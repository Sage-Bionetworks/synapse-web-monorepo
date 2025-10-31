import{iT as y,n as d,cs as C,jz as l,H as O,ct as S,g as a,d as o,b as e}from"./iframe-Ci1lmE8g.js";import{P as L}from"./ProjectDataAvailability-BEhN4NfJ.js";import"./index-r8ZA1smB.js";import"./HelpPopover-Dp5xAO-J.js";import"./MarkdownPopover-C8x7eb7i.js";import"./LightTooltip-D8-ypvp8.js";import"./MarkdownSynapse-3G1qoarh.js";import"./SkeletonButton-CC-6gNoS.js";import"./SkeletonInlineBlock-B2RYwmUI.js";import"./SkeletonTable-DkbE7er9.js";import"./SkeletonParagraph-ITJPOI8x.js";const n="syn54321",c="syn12345",k={projectId:n,locations:[{storageLocationId:y,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},N={projectId:c,locations:[{storageLocationId:y,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},i=(m=C(S.REPO_ENDPOINT))=>[d.get(`${m}${l(n)}`,()=>O.json(k,{status:201})),d.get(`${m}${l(c)}`,()=>O.json(N,{status:201}))],h={title:"Synapse/ProjectStorage",component:L,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},t={args:{projectId:c,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...a(e),...o(e),...i(e)]}}},r={args:{projectId:n,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...a(e),...o(e),...i(e)]}}},s={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...a(e),...o(e),...i(e)]}}};var p,I,g;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(g=(I=t.parameters)==null?void 0:I.docs)==null?void 0:g.source}}};var _,P,R;r.parameters={...r.parameters,docs:{...(_=r.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(R=(P=r.parameters)==null?void 0:P.docs)==null?void 0:R.source}}};var E,u,j;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    projectId: 'syn31415123'
  },
  parameters: {
    stack: 'mock',
    msw: {
      handlers: [...getUserProfileHandlers(MOCK_REPO_ORIGIN), ...getEntityHandlers(MOCK_REPO_ORIGIN), ...getProjectStorageHandlers(MOCK_REPO_ORIGIN)]
    }
  }
}`,...(j=(u=s.parameters)==null?void 0:u.docs)==null?void 0:j.source}}};const B=["ProjectDataUnderLimit","ProjectDataOverLimit","ProjectDataStorageNotSet"];export{r as ProjectDataOverLimit,s as ProjectDataStorageNotSet,t as ProjectDataUnderLimit,B as __namedExportsOrder,h as default};
