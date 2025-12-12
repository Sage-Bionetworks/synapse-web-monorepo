import{n as u,b as l,O as j,H as P}from"./iframe-DxLAvgox.js";import{A as I}from"./AccessRequirementRelatedProjectsList-B_zJwCJ-.js";import"./index-r8ZA1smB.js";import"./useAccessRequirements-CIL1_y--.js";import"./index-S82T9GXF.js";import"./_baseOrderBy-BeMHQMvH.js";import"./_baseIteratee-BpeW87oO.js";import"./_baseMap-DCpRc4dc.js";import"./_baseEach-BMFyANHr.js";import"./useQueries-CejlDFtq.js";import"./useInfiniteQuery-5-3iz-fe.js";import"./pluralize-CC--1ngb.js";import"./EntityLink-DMIoihJo.js";import"./useEntity-redXV7b-.js";import"./pickBy-CTBQqIfN.js";import"./isString-C65hQeKh.js";import"./useSuspenseQuery-Bz18OTgk.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-yLb9qLzi.js";import"./useGetEntityHeaders-DwdJafEx.js";import"./EntityIcon-CgDJAnC3.js";import"./ErrorChip-CCDSDKd8.js";import"./Chip-BbRs-Tuc.js";import"./ListItem-CF6JdeO0.js";import"./listItemButtonClasses-B7cg0K7t.js";const L={title:"Governance/AccessRequirementRelatedProjectsList",component:I},e={args:{accessRequirementId:9603055}},r={args:{accessRequirementId:9605913}},t={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[u.post(`${l}${j}`,()=>{const R={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return P.json(R,{status:200})})]}}};var s,o,n;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
