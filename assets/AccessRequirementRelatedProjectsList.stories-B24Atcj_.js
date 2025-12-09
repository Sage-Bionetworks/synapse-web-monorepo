import{n as u,b as l,O as j,H as P}from"./iframe-mfaqAuKn.js";import{A as I}from"./AccessRequirementRelatedProjectsList-NZLWSkJO.js";import"./index-r8ZA1smB.js";import"./useAccessRequirements-Ba3EFSgx.js";import"./index-D3AHZnx8.js";import"./_baseOrderBy-5R4U94mW.js";import"./_baseIteratee-DEOpNloE.js";import"./_baseMap-1AzMXr6e.js";import"./_baseEach-_IDFhxIe.js";import"./useQueries-CXO38aGV.js";import"./useInfiniteQuery-CFl_zl7K.js";import"./pluralize-CC--1ngb.js";import"./EntityLink-DQeqmojQ.js";import"./useEntity-CMPy2fyR.js";import"./pickBy-yTL7T7iJ.js";import"./isString-CpEOJJ0O.js";import"./useSuspenseQuery-Ck8XhOTY.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-DbTK85fi.js";import"./useGetEntityHeaders-BsyqJ5FP.js";import"./EntityIcon-C7ec2cVS.js";import"./ErrorChip-BZlFdNxL.js";import"./Chip-BGU9tTve.js";import"./ListItem-DFyHUYuQ.js";import"./listItemButtonClasses-BwnT3NXq.js";const L={title:"Governance/AccessRequirementRelatedProjectsList",component:I},e={args:{accessRequirementId:9603055}},r={args:{accessRequirementId:9605913}},t={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[u.post(`${l}${j}`,()=>{const R={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return P.json(R,{status:200})})]}}};var s,o,n;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
