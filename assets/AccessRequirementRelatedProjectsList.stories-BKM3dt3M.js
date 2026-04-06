import{s as o,b as n,O as a,H as c}from"./iframe-BPNyJNxm.js";import{A as m}from"./AccessRequirementRelatedProjectsList-B_5CKHBi.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-CPn0ZvtY.js";import"./index-Br3ickc1.js";import"./_baseOrderBy-roILrO3o.js";import"./_baseIteratee-j2vHxdg-.js";import"./_baseMap-vlPjx_9F.js";import"./_baseEach-CZ4hYEvj.js";import"./useInfiniteQuery-XrkzDwnB.js";import"./pluralize-DvqWrKl4.js";import"./EntityLink-AjRi6V-b.js";import"./useEntity-g0LGIseq.js";import"./pickBy-DiD8FMOP.js";import"./isString-LELON9p1.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-DQkGL32t.js";import"./useGetEntityHeaders-CR1lm3HN.js";import"./EntityIcon-BKz4CsgU.js";import"./ErrorChip-BhmEl-76.js";import"./Chip-Hk6f0McD.js";import"./ListItem-d4IiLeG1.js";import"./listItemButtonClasses-Ds1B8RjS.js";const f={title:"Governance/AccessRequirementRelatedProjectsList",component:m},e={args:{accessRequirementId:9603055}},r={args:{accessRequirementId:9605913}},s={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[o.post(`${n}${a}`,()=>{const t={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return c.json(t,{status:200})})]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
