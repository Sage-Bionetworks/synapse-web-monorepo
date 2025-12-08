import{n as u,b as l,O as j,H as P}from"./iframe-CQ5-qSaZ.js";import{A as I}from"./AccessRequirementRelatedProjectsList-D3lVL4b9.js";import"./index-r8ZA1smB.js";import"./useAccessRequirements-Dy8pbEn3.js";import"./index-CMGxuthB.js";import"./_baseOrderBy-C1pU_GaP.js";import"./_baseIteratee-Dj3IYEgL.js";import"./_baseMap-BEQgNlee.js";import"./_baseEach-BprtyPd6.js";import"./useQueries-D_Kjb9rp.js";import"./useInfiniteQuery-CRASm_E1.js";import"./pluralize-CC--1ngb.js";import"./EntityLink-ptUt0OGg.js";import"./useEntity-BsUfOOVp.js";import"./pickBy-16oidJkG.js";import"./isString-C9y1aqR9.js";import"./useSuspenseQuery-Be5C3Dgn.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-BgFzjrxA.js";import"./useGetEntityHeaders-C_srIHdn.js";import"./EntityIcon-CHE9mlR2.js";import"./ErrorChip-DVY7LwYp.js";import"./Chip-CIMnCwMP.js";import"./ListItem-Ll8eJkm3.js";import"./listItemButtonClasses-BKccAi9X.js";const L={title:"Governance/AccessRequirementRelatedProjectsList",component:I},e={args:{accessRequirementId:9603055}},r={args:{accessRequirementId:9605913}},t={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[u.post(`${l}${j}`,()=>{const R={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return P.json(R,{status:200})})]}}};var s,o,n;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
