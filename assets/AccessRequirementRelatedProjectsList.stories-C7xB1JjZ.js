import{s as o,b as n,O as a,H as c}from"./iframe-D7cxPiDf.js";import{A as m}from"./AccessRequirementRelatedProjectsList-CapAeC_Z.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-Z2Fytl5q.js";import"./index-Dfurbkx6.js";import"./_baseOrderBy-CrKH7iu3.js";import"./_baseIteratee-TLvHA3OX.js";import"./_baseMap-lHyQJgq8.js";import"./_baseEach-BqFsp9gH.js";import"./useInfiniteQuery-8o2gAKoR.js";import"./pluralize-DvqWrKl4.js";import"./EntityLink-DHIudBb_.js";import"./useEntity-wh1b78ru.js";import"./pickBy-B_aDNz0n.js";import"./isString-BrOW184h.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-CyJ-j5um.js";import"./useGetEntityHeaders-Nf3Wk7OG.js";import"./EntityIcon-BmxcsFw0.js";import"./ErrorChip-CG5eXOkR.js";import"./Chip-DysZYHv9.js";import"./ListItem-CBQ2ajbG.js";import"./listItemButtonClasses-Bb2XoFHG.js";const f={title:"Governance/AccessRequirementRelatedProjectsList",component:m},e={args:{accessRequirementId:9603055}},r={args:{accessRequirementId:9605913}},s={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[o.post(`${n}${a}`,()=>{const t={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return c.json(t,{status:200})})]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    accessRequirementId: 9603055
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    accessRequirementId: 9605913
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const v=["ManyProjects","OneProject","ZeroProjectsMock"];export{e as ManyProjects,r as OneProject,s as ZeroProjectsMock,v as __namedExportsOrder,f as default};
