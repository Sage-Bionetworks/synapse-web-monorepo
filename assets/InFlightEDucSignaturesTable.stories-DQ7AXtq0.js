import{o as e}from"./preload-helper-CsHsquCd.js";import{_ as t,i as n,t as r}from"./core-CI8DLeHF.js";import{Fn as i,Nn as a,Pt as o,zn as s}from"./synapse-client-DT80sJpp.js";import{d as c,f as l}from"./iframe-BW3en15n.js";import{n as u,t as d}from"./InFlightEDucSignaturesTable-ca_emT20.js";function f(e){return n.post(`${i}${o}`,async({request:n})=>{let r=(await n.json())?.nextPageToken;if(!r)return t.json(e[0],{status:200});let i=e[Number(r.replace(/^page-/,``))-1]??{results:[]};return t.json(i,{status:200})})}var p,m,h,g,_,v,y;e((()=>{l(),a(),s(),r(),u(),p={results:[{requestId:`100`,accessRequirementName:`ROSMAP eDUC`,isEDuc:!0,status:`sent`,signaturesAcquired:2,signaturesRequested:5,modifiedOn:`2026-08-20T10:00:00Z`},{requestId:`101`,accessRequirementName:`MSSM Study Data`,isEDuc:!0,status:`delivered`,signaturesAcquired:4,signaturesRequested:5,modifiedOn:`2026-08-19T10:00:00Z`},{requestId:`199`,accessRequirementName:`Legacy TOU (non-eDUC)`,isEDuc:!1,status:`submitted`,modifiedOn:`2026-06-05T10:00:00Z`}],nextPageToken:`page-2`},m={results:[{requestId:`102`,accessRequirementName:`AMP-PD Data`,isEDuc:!0,status:`completed`,signaturesAcquired:3,signaturesRequested:3,modifiedOn:`2026-08-21T10:00:00Z`}]},h={results:[]},g={title:`Governance/User Access Request History/InFlight eDUC Signatures Table`,component:d,parameters:{stack:`mock`,chromatic:{viewports:[600,1200]},msw:{handlers:[...c(i)]}}},_={name:`With in-flight requests (paginated)`,parameters:{msw:{handlers:[f([p,m]),...c(i)]}}},v={name:`No in-flight requests (renders nothing)`,parameters:{msw:{handlers:[f([h]),...c(i)]}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: 'With in-flight requests (paginated)',
  parameters: {
    msw: {
      handlers: [paginatedListHandler([page1, page2]), ...getUserProfileHandlers(MOCK_REPO_ORIGIN)]
    }
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: 'No in-flight requests (renders nothing)',
  parameters: {
    msw: {
      handlers: [paginatedListHandler([emptyList]), ...getUserProfileHandlers(MOCK_REPO_ORIGIN)]
    }
  }
}`,...v.parameters?.docs?.source}}},y=[`WithInFlightRequests`,`Empty`]}))();export{v as Empty,_ as WithInFlightRequests,y as __namedExportsOrder,g as default};