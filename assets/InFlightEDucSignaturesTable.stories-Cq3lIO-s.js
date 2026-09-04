import{o as e}from"./preload-helper-CsHsquCd.js";import{t}from"./jsx-runtime-l3w3GfrB.js";import{_ as n,i as r,t as i}from"./core-CI8DLeHF.js";import{Fn as a,It as o,Ln as s,Vn as c}from"./synapse-client-CZF9FYCe.js";import{s as l,t as u,u as d}from"./development--dxNTjKx.js";import{d as f,f as p}from"./iframe-z0GNZNON.js";import{n as m,t as h}from"./InFlightEDucSignaturesTable-EwMX6VY9.js";function g(e){return r.post(`${s}${o}`,async({request:t})=>{let r=(await t.json())?.nextPageToken;if(!r)return n.json(e[0],{status:200});let i=e[Number(r.replace(/^page-/,``))-1]??{results:[]};return n.json(i,{status:200})})}var _,v,y,b,x,S,C,w;e((()=>{p(),a(),c(),i(),u(),m(),_=t(),v={results:[{requestId:`100`,accessRequirementId:`9602701`,accessRequirementName:`ROSMAP eDUC`,isEDuc:!0,status:`sent`,signaturesAcquired:2,signaturesRequested:5,modifiedOn:`2026-08-20T10:00:00Z`},{requestId:`101`,accessRequirementId:`9602702`,accessRequirementName:`MSSM Study Data`,isEDuc:!0,status:`delivered`,signaturesAcquired:4,signaturesRequested:5,modifiedOn:`2026-08-19T10:00:00Z`},{requestId:`199`,accessRequirementId:`9602703`,accessRequirementName:`Legacy TOU (non-eDUC)`,isEDuc:!1,status:`submitted`,modifiedOn:`2026-06-05T10:00:00Z`}],nextPageToken:`page-2`},y={results:[{requestId:`102`,accessRequirementId:`9602704`,accessRequirementName:`AMP-PD Data`,isEDuc:!0,status:`completed`,signaturesAcquired:3,signaturesRequested:3,modifiedOn:`2026-08-21T10:00:00Z`}]},b={results:[]},x={title:`Governance/User Access Request History/InFlight eDUC Signatures Table`,component:h,decorators:[e=>(0,_.jsx)(l,{router:d([{path:`/*`,element:(0,_.jsx)(e,{})}],{initialEntries:[`/`]})})],parameters:{stack:`mock`,chromatic:{viewports:[600,1200]},msw:{handlers:[...f(s)]}}},S={name:`With in-flight requests (paginated)`,parameters:{msw:{handlers:[g([v,y]),...f(s)]}}},C={name:`No in-flight requests (renders nothing)`,parameters:{msw:{handlers:[g([b]),...f(s)]}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: 'With in-flight requests (paginated)',
  parameters: {
    msw: {
      handlers: [paginatedListHandler([page1, page2]), ...getUserProfileHandlers(MOCK_REPO_ORIGIN)]
    }
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: 'No in-flight requests (renders nothing)',
  parameters: {
    msw: {
      handlers: [paginatedListHandler([emptyList]), ...getUserProfileHandlers(MOCK_REPO_ORIGIN)]
    }
  }
}`,...C.parameters?.docs?.source}}},w=[`WithInFlightRequests`,`Empty`]}))();export{C as Empty,S as WithInFlightRequests,w as __namedExportsOrder,x as default};