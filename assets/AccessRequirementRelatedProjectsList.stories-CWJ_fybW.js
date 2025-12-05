import{n as u,b as l,O as j,H as P}from"./iframe-Dh27wMqB.js";import{A as I}from"./AccessRequirementRelatedProjectsList-K7UZliRH.js";import"./index-r8ZA1smB.js";import"./useAccessRequirements-D_WoPHb-.js";import"./index-PG4lqu2T.js";import"./_baseOrderBy-ogl2PcNJ.js";import"./_baseIteratee-DEDPyERc.js";import"./_baseMap-MvKhi6ce.js";import"./_baseEach-B73iYufC.js";import"./useQueries-BPK8tx1d.js";import"./useInfiniteQuery-B-Fw0EIq.js";import"./pluralize-CC--1ngb.js";import"./EntityLink-BFN4ejwr.js";import"./useEntity-CPKm_rx-.js";import"./pickBy-CQtlHPLC.js";import"./isString-BH-A2E2_.js";import"./useSuspenseQuery-B1cUOedV.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-DCXfRG_X.js";import"./useGetEntityHeaders-Dx_fBdYM.js";import"./EntityIcon-BxjNiBbm.js";import"./ErrorChip-CnJjne-6.js";import"./Chip-CVqxkPH_.js";import"./ListItem-BRfwmcp2.js";import"./listItemButtonClasses-CPz0L6T8.js";const L={title:"Governance/AccessRequirementRelatedProjectsList",component:I},e={args:{accessRequirementId:9603055}},r={args:{accessRequirementId:9605913}},t={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[u.post(`${l}${j}`,()=>{const R={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return P.json(R,{status:200})})]}}};var s,o,n;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    accessRequirementId: 9603055
  }
}`,...(n=(o=e.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};var a,c,m;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    accessRequirementId: 9605913
  }
}`,...(m=(c=r.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var i,p,d;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    accessRequirementId: 1234567
  },
  parameters: {
    stack: 'mock',
    msw: {
      handlers: [
      // searchAccessRequirements
      http.post(\`\${MOCK_REPO_ORIGIN}\${ACCESS_REQUIREMENT_SEARCH}\`, () => {
        const zeroRelatedProjects = {
          results: [{
            id: '1234567',
            type: 'org.sagebionetworks.repo.model.ManagedACTAccessRequirement',
            createdOn: '2017-08-23T18:48:20.892Z',
            modifiedOn: '2023-12-14T00:43:41.315Z',
            name: 'Team AR without Related Projects',
            version: '1',
            relatedProjectIds: [],
            reviewerIds: []
          }]
        };
        return HttpResponse.json(zeroRelatedProjects, {
          status: 200
        });
      })]
    }
  }
}`,...(d=(p=t.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};const Q=["ManyProjects","OneProject","ZeroProjectsMock"];export{e as ManyProjects,r as OneProject,t as ZeroProjectsMock,Q as __namedExportsOrder,L as default};
