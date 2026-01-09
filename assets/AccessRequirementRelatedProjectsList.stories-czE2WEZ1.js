import{n as o,b as n,O as a,H as c}from"./iframe-DCJ7skCF.js";import{A as m}from"./AccessRequirementRelatedProjectsList-CXWQGrmV.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-40VLCRft.js";import"./index-BmNsh1D_.js";import"./_baseOrderBy-BeTOIVW0.js";import"./_baseIteratee-BxzXFjBF.js";import"./_baseMap-GyITq5cq.js";import"./_baseEach-C1NioYL1.js";import"./useQueries-HPJfUFcz.js";import"./useInfiniteQuery-Cnz7W2re.js";import"./pluralize-DvqWrKl4.js";import"./EntityLink-BlJn1P5E.js";import"./useEntity-7Mmx4dfI.js";import"./pickBy-8XGIGDox.js";import"./isString-DO8e_9rj.js";import"./useSuspenseQuery-hpjNpxLU.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-rdkBsBdL.js";import"./useGetEntityHeaders-rjdI9PWe.js";import"./EntityIcon-CFtTZIuN.js";import"./ErrorChip-CZdumukV.js";import"./Chip-BB_My-sd.js";import"./ListItem-LExT27w0.js";import"./listItemButtonClasses-C8FrM3d1.js";const H={title:"Governance/AccessRequirementRelatedProjectsList",component:m},e={args:{accessRequirementId:9603055}},r={args:{accessRequirementId:9605913}},t={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[o.post(`${n}${a}`,()=>{const s={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return c.json(s,{status:200})})]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    accessRequirementId: 9603055
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    accessRequirementId: 9605913
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const y=["ManyProjects","OneProject","ZeroProjectsMock"];export{e as ManyProjects,r as OneProject,t as ZeroProjectsMock,y as __namedExportsOrder,H as default};
