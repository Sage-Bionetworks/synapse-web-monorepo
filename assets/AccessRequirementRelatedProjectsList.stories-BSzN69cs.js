import{s as o,b as n,O as a,H as c}from"./iframe-ClOjSJTq.js";import{A as m}from"./AccessRequirementRelatedProjectsList-Mn_0bL5z.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-lD4_jFjj.js";import"./index-35chbdE6.js";import"./_baseOrderBy-Db020ehJ.js";import"./_baseIteratee-DSUbmYQr.js";import"./_baseMap-CzWHLApD.js";import"./_baseEach-DVm10B22.js";import"./useInfiniteQuery-KGAKspLs.js";import"./pluralize-DvqWrKl4.js";import"./EntityLink-UP3hfZru.js";import"./useEntity-B5q0foS7.js";import"./pickBy-tj_hzmtS.js";import"./isString-D-YS4RG8.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-BuxfqmKk.js";import"./useGetEntityHeaders-C62MEdMW.js";import"./EntityIcon-CCEPTjL6.js";import"./ErrorChip-Cpey7UJM.js";import"./Chip-CnxOiplN.js";import"./ListItem-B5PwrZdH.js";import"./listItemButtonClasses-BJ5ATAmT.js";const f={title:"Governance/AccessRequirementRelatedProjectsList",component:m},e={args:{accessRequirementId:9603055}},r={args:{accessRequirementId:9605913}},s={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[o.post(`${n}${a}`,()=>{const t={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return c.json(t,{status:200})})]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
