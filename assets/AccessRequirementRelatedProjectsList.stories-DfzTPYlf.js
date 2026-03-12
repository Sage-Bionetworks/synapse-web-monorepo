import{n as o,b as n,Q as a,H as c}from"./iframe-Dj9QuIYm.js";import{A as m}from"./AccessRequirementRelatedProjectsList-BWZheaky.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-BZitSFn0.js";import"./index-BLkPSDKJ.js";import"./_baseOrderBy-YfcBlpNZ.js";import"./_baseIteratee-DhNtCOv6.js";import"./_baseMap-D-dsez5o.js";import"./_baseEach-DeWBIhgR.js";import"./useInfiniteQuery-BlRW4UqT.js";import"./pluralize-DvqWrKl4.js";import"./EntityLink-BgNMX2HM.js";import"./useEntity-DrsXJrOv.js";import"./pickBy-C7zQ5L4o.js";import"./isString-CL_Uwcm1.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-C6D_Cjqk.js";import"./useGetEntityHeaders-BVfG_zwT.js";import"./EntityIcon-CzNv8YIT.js";import"./ErrorChip-Bxrb9m2k.js";import"./Chip-Dc-U4nz3.js";import"./ListItem-D74AJDZK.js";import"./listItemButtonClasses-DBPUANJZ.js";const f={title:"Governance/AccessRequirementRelatedProjectsList",component:m},e={args:{accessRequirementId:9603055}},r={args:{accessRequirementId:9605913}},s={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[o.post(`${n}${a}`,()=>{const t={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return c.json(t,{status:200})})]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
