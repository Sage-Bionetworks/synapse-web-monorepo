import{n as o,b as n,O as a,H as c}from"./iframe-B-rWBBOy.js";import{A as m}from"./AccessRequirementRelatedProjectsList-Bdj9lk8e.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-D18Zubv0.js";import"./index-BmrJEvkQ.js";import"./_baseOrderBy--eOiBI3k.js";import"./_baseIteratee-BVfqOHkP.js";import"./_baseMap-CcdUGJ7r.js";import"./_baseEach-BBdk3TAU.js";import"./useQueries-BF3c9QfY.js";import"./useInfiniteQuery-BF0L2vpl.js";import"./pluralize-DvqWrKl4.js";import"./EntityLink-Dg0nPH0k.js";import"./useEntity-L7-UAX9e.js";import"./pickBy-BlV6ms5O.js";import"./isString-Cj7Rti5o.js";import"./useSuspenseQuery-BilXPZyB.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-M0ZItEnQ.js";import"./useGetEntityHeaders-C-85b5HH.js";import"./EntityIcon-BeHBcJAo.js";import"./ErrorChip-CqHYp_NN.js";import"./Chip-WQPXL1Rn.js";import"./ListItem-ChCGYBcn.js";import"./listItemButtonClasses-Borf8tjx.js";const H={title:"Governance/AccessRequirementRelatedProjectsList",component:m},e={args:{accessRequirementId:9603055}},r={args:{accessRequirementId:9605913}},t={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[o.post(`${n}${a}`,()=>{const s={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return c.json(s,{status:200})})]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
