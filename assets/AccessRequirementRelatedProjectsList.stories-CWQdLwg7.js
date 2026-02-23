import{n as o,b as n,Q as a,H as c}from"./iframe-bA05VlDB.js";import{A as m}from"./AccessRequirementRelatedProjectsList-88cQHreK.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-CBTd1PGL.js";import"./index-C4a7Rce_.js";import"./_baseOrderBy-CTWC63ny.js";import"./_baseIteratee-DKY1oxMw.js";import"./_baseMap-BItPc330.js";import"./_baseEach-Bswgqtar.js";import"./useQueries-CiWEfBA0.js";import"./useInfiniteQuery-DI02BS_t.js";import"./pluralize-DvqWrKl4.js";import"./EntityLink-BJBTQuuM.js";import"./useEntity-Du7tQbIa.js";import"./pickBy-D1zq0sET.js";import"./isString-KkRYkgd4.js";import"./useSuspenseQuery-Zel5Xy26.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-Bc6HNNyS.js";import"./useGetEntityHeaders-BLNkLcHW.js";import"./EntityIcon-BTVhXoJO.js";import"./ErrorChip-CJzqrQy7.js";import"./Chip-vyXQw8tV.js";import"./ListItem-CINv7iyl.js";import"./listItemButtonClasses-DHhqHtAw.js";const H={title:"Governance/AccessRequirementRelatedProjectsList",component:m},e={args:{accessRequirementId:9603055}},r={args:{accessRequirementId:9605913}},t={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[o.post(`${n}${a}`,()=>{const s={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return c.json(s,{status:200})})]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
