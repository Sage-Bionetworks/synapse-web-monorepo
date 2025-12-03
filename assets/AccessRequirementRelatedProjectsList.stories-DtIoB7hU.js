import{n as u,b as l,O as j,H as P}from"./iframe-oNn-8uxy.js";import{A as I}from"./AccessRequirementRelatedProjectsList-B-AoC4H4.js";import"./index-r8ZA1smB.js";import"./useAccessRequirements-CsaizCJ_.js";import"./index-BI05yMk-.js";import"./_baseOrderBy-CzjvuFz5.js";import"./_baseIteratee-BbGDd72L.js";import"./_baseMap-Cj7zEA7K.js";import"./_baseEach-zo0gRTCE.js";import"./useQueries-CKE-hIT5.js";import"./useInfiniteQuery-BMvK8V8y.js";import"./pluralize-CC--1ngb.js";import"./EntityLink-BlZnHUSe.js";import"./useEntity-NQfLZli_.js";import"./pickBy-DgR1SMI4.js";import"./isString-DyjIcYAW.js";import"./useSuspenseQuery-yMS-8lGQ.js";import"./queryOptions-C9woPjwX.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-EJdEQ_Jp.js";import"./useGetEntityHeaders-CDDjqkDC.js";import"./EntityIcon-j3-NOGIk.js";import"./ErrorChip-BbpjuoYW.js";import"./Chip-D6UDoJiu.js";import"./ListItem-4ynGeyht.js";import"./listItemButtonClasses-CFDgqxPI.js";const Q={title:"Governance/AccessRequirementRelatedProjectsList",component:I},e={args:{accessRequirementId:9603055}},r={args:{accessRequirementId:9605913}},t={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[u.post(`${l}${j}`,()=>{const R={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return P.json(R,{status:200})})]}}};var s,o,n;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(d=(p=t.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};const U=["ManyProjects","OneProject","ZeroProjectsMock"];export{e as ManyProjects,r as OneProject,t as ZeroProjectsMock,U as __namedExportsOrder,Q as default};
