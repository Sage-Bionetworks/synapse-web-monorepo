import{n as o,b as n,Q as a,H as c}from"./iframe-CCrcZxgU.js";import{A as m}from"./AccessRequirementRelatedProjectsList-bHe1yrJ7.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-BQdyOVUc.js";import"./index-DOETxQEh.js";import"./_baseOrderBy-D6U9sUP-.js";import"./_baseIteratee-DKTdiFzP.js";import"./_baseMap-BMwtKdev.js";import"./_baseEach-w-ECc3U0.js";import"./useInfiniteQuery-1J2BPHjO.js";import"./pluralize-DvqWrKl4.js";import"./EntityLink-Cpcten75.js";import"./useEntity-CaXvVkPm.js";import"./pickBy-LV4paVeK.js";import"./isString-Czclw4dB.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-DIyq_LAQ.js";import"./useGetEntityHeaders-BOaYFX4g.js";import"./EntityIcon-BwxxXsXX.js";import"./ErrorChip-0bLbGXgm.js";import"./Chip-BosvP6Bi.js";import"./ListItem-PU0ILmJV.js";import"./listItemButtonClasses-DBBBInAv.js";const f={title:"Governance/AccessRequirementRelatedProjectsList",component:m},e={args:{accessRequirementId:9603055}},r={args:{accessRequirementId:9605913}},s={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[o.post(`${n}${a}`,()=>{const t={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return c.json(t,{status:200})})]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
