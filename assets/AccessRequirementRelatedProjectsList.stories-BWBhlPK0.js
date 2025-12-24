import{n as u,b as l,O as j,H as P}from"./iframe-Djv8MYNB.js";import{A as I}from"./AccessRequirementRelatedProjectsList-Br9VZ9TD.js";import"./index-r8ZA1smB.js";import"./useAccessRequirements-bXQ_1Iuc.js";import"./index-DkUUvlSe.js";import"./_baseOrderBy-CVzC67-B.js";import"./_baseIteratee-DzOJkO1l.js";import"./_baseMap-B3uOsC71.js";import"./_baseEach-liTqT7qy.js";import"./useQueries-iQS82f7J.js";import"./useInfiniteQuery-By8at75o.js";import"./pluralize-CC--1ngb.js";import"./EntityLink-CQqWwIfn.js";import"./useEntity-D1Vbp73T.js";import"./pickBy-B4gnU8TW.js";import"./isString-CT6WYqqB.js";import"./useSuspenseQuery-Bke-3bkA.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-C2CqcUzD.js";import"./useGetEntityHeaders-YVTgPJm0.js";import"./EntityIcon-C4gAyI6O.js";import"./ErrorChip-C8ZgST_d.js";import"./Chip-BC_6TuQR.js";import"./ListItem-D3zDAHo2.js";import"./listItemButtonClasses-DsZo8FHL.js";const L={title:"Governance/AccessRequirementRelatedProjectsList",component:I},e={args:{accessRequirementId:9603055}},r={args:{accessRequirementId:9605913}},t={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[u.post(`${l}${j}`,()=>{const R={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return P.json(R,{status:200})})]}}};var s,o,n;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
