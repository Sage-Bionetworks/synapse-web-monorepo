import{hN as C,n as d,ct as y,jC as l,H as O,cu as S,g as a,d as o,b as e}from"./iframe-nfXQhXwW.js";import{P as L}from"./ProjectDataAvailability-Dp_3mkfE.js";import"./index-r8ZA1smB.js";import"./HelpPopover-Cb2i7a5w.js";import"./MarkdownPopover-Cs0zikEV.js";import"./LightTooltip-cNRM4CWP.js";import"./MarkdownSynapse-OcvSiBwW.js";import"./SkeletonButton-Bk4CQ1lc.js";import"./SkeletonInlineBlock--rWrAuqR.js";import"./SkeletonTable-I__c7Ied.js";import"./SkeletonParagraph-DtAQS4WM.js";const n="syn54321",c="syn12345",N={projectId:n,locations:[{storageLocationId:C,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},k={projectId:c,locations:[{storageLocationId:C,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},i=(m=y(S.REPO_ENDPOINT))=>[d.get(`${m}${l(n)}`,()=>O.json(N,{status:201})),d.get(`${m}${l(c)}`,()=>O.json(k,{status:201}))],K={title:"Synapse/ProjectStorage",component:L,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},t={args:{projectId:c,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...a(e),...o(e),...i(e)]}}},r={args:{projectId:n,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...a(e),...o(e),...i(e)]}}},s={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...a(e),...o(e),...i(e)]}}};var p,I,g;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(j=(u=s.parameters)==null?void 0:u.docs)==null?void 0:j.source}}};const B=["ProjectDataUnderLimit","ProjectDataOverLimit","ProjectDataStorageNotSet"];export{r as ProjectDataOverLimit,s as ProjectDataStorageNotSet,t as ProjectDataUnderLimit,B as __namedExportsOrder,K as default};
