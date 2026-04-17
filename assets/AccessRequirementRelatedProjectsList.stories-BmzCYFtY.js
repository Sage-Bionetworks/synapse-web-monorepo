import{s as o,b as n,O as a,H as c}from"./iframe-xQMv0B7c.js";import{A as m}from"./AccessRequirementRelatedProjectsList-lka6fz1-.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-CS4PK7gM.js";import"./index-CXBvLS03.js";import"./_baseOrderBy-CoiZOdYB.js";import"./_baseIteratee-CSd0qoWC.js";import"./_baseMap-B4rPe6R-.js";import"./_baseEach-BGb-mPrr.js";import"./useInfiniteQuery-B0ejREUV.js";import"./pluralize-DvqWrKl4.js";import"./EntityLink-BkSqVf9-.js";import"./useEntity-Bub6w0mt.js";import"./pickBy-Dz9fSFLS.js";import"./isString-BV9IZ56Z.js";import"./queryOptions-C9woPjwX.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-Yb-HzIGK.js";import"./useGetEntityHeaders-BT56odZ9.js";import"./EntityIcon-Dr_GtkmV.js";import"./ErrorChip-BhVoFYl3.js";import"./Chip-T-Cvxbkm.js";import"./ListItem-DTNYGMmm.js";import"./listItemButtonClasses-AET5PToo.js";const v={title:"Governance/AccessRequirementRelatedProjectsList",component:m},e={args:{accessRequirementId:9603055}},r={args:{accessRequirementId:9605913}},s={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[o.post(`${n}${a}`,()=>{const t={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return c.json(t,{status:200})})]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const H=["ManyProjects","OneProject","ZeroProjectsMock"];export{e as ManyProjects,r as OneProject,s as ZeroProjectsMock,H as __namedExportsOrder,v as default};
