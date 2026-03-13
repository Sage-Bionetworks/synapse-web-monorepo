import{n as o,b as n,Q as a,H as c}from"./iframe-DR0uSfJB.js";import{A as m}from"./AccessRequirementRelatedProjectsList-DFyGho0C.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-DioFPcC_.js";import"./index-BHYxApRu.js";import"./_baseOrderBy-DpB0RZ7Z.js";import"./_baseIteratee-BliHnktd.js";import"./_baseMap-BohI5ZmA.js";import"./_baseEach-DK-2XrG3.js";import"./useInfiniteQuery-Bf2Ztb4F.js";import"./pluralize-DvqWrKl4.js";import"./EntityLink-DMGuyLea.js";import"./useEntity-BooQYDEM.js";import"./pickBy-BtS8uSOi.js";import"./isString-B5pzKkPi.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-B0tud9UF.js";import"./useGetEntityHeaders-C3ZQDLXZ.js";import"./EntityIcon-PoNf9mAp.js";import"./ErrorChip-CdoM5z0c.js";import"./Chip-C7t_e7oc.js";import"./ListItem-DwXaJExL.js";import"./listItemButtonClasses-B9kCoXz5.js";const f={title:"Governance/AccessRequirementRelatedProjectsList",component:m},e={args:{accessRequirementId:9603055}},r={args:{accessRequirementId:9605913}},s={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[o.post(`${n}${a}`,()=>{const t={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return c.json(t,{status:200})})]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
