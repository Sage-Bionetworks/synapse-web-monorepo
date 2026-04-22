import{s as o,b as n,O as a,H as c}from"./iframe-DvEsUTpQ.js";import{A as m}from"./AccessRequirementRelatedProjectsList-pKaYrG_Y.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-CMxA9Cat.js";import"./index-BttQD56F.js";import"./_baseOrderBy-C9TUMrXe.js";import"./_baseIteratee-D3bhaGJS.js";import"./_baseMap-CAOUDwt_.js";import"./_baseEach-C5Fi7LFB.js";import"./useInfiniteQuery-BdEWda9R.js";import"./pluralize-DvqWrKl4.js";import"./EntityLink-BrrA0mFV.js";import"./useEntity-D0ug6J_E.js";import"./pickBy-CaZCapPb.js";import"./isString-2mlaZJEb.js";import"./queryOptions-C9woPjwX.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-X871VZH0.js";import"./useGetEntityHeaders-N74AiYsD.js";import"./EntityIcon-BI_XR1kg.js";import"./ErrorChip-v4kVcs9c.js";import"./Chip-DM8j9a4z.js";import"./ListItem-CoP1faAk.js";import"./listItemButtonClasses-BiArEVo7.js";const v={title:"Governance/AccessRequirementRelatedProjectsList",component:m},e={args:{accessRequirementId:9603055}},r={args:{accessRequirementId:9605913}},s={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[o.post(`${n}${a}`,()=>{const t={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return c.json(t,{status:200})})]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
