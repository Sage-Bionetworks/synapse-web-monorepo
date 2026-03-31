import{n as o,b as n,Q as a,H as c}from"./iframe-DGtd-eZ6.js";import{A as m}from"./AccessRequirementRelatedProjectsList-BcMC4C3v.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-Bq3pO1EH.js";import"./index-DRd13Kob.js";import"./_baseOrderBy-DTcwwgEX.js";import"./_baseIteratee-BgTTVm_D.js";import"./_baseMap-Dxa9HPgV.js";import"./_baseEach--0hMyPgP.js";import"./useInfiniteQuery-XzhrhxiT.js";import"./pluralize-DvqWrKl4.js";import"./EntityLink-jpj9dWFR.js";import"./useEntity-CMENiSzy.js";import"./pickBy-CPD5pXPT.js";import"./isString-AovqDiFR.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-Dzzt5U3d.js";import"./useGetEntityHeaders-DK-RsXTp.js";import"./EntityIcon-DGG0bt2n.js";import"./ErrorChip-CpHcjGQ_.js";import"./Chip-CNav__8J.js";import"./ListItem-2DMmQ3OL.js";import"./listItemButtonClasses-CKLLnE8c.js";const f={title:"Governance/AccessRequirementRelatedProjectsList",component:m},e={args:{accessRequirementId:9603055}},r={args:{accessRequirementId:9605913}},s={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[o.post(`${n}${a}`,()=>{const t={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return c.json(t,{status:200})})]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
