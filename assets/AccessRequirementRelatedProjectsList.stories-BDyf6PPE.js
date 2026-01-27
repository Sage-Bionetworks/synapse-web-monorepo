import{n as o,b as n,O as a,H as c}from"./iframe-APvH4-EU.js";import{A as m}from"./AccessRequirementRelatedProjectsList-DRfpncXH.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-VgzOe8R1.js";import"./index-D47LyWhc.js";import"./_baseOrderBy-DjelCSDF.js";import"./_baseIteratee-BL2YfOvy.js";import"./_baseMap-CzrgHchl.js";import"./_baseEach-CY-VY-KP.js";import"./useQueries-oePch1EY.js";import"./useInfiniteQuery-D6M6aPtH.js";import"./pluralize-DvqWrKl4.js";import"./EntityLink-DqsOH8yU.js";import"./useEntity-8aU7O6mB.js";import"./pickBy-BniAp8F_.js";import"./isString-CUjFYPnQ.js";import"./useSuspenseQuery-BkKvG_I6.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-NfmsTkgf.js";import"./useGetEntityHeaders-FY1z5De6.js";import"./EntityIcon-Cn178f9c.js";import"./ErrorChip-CWf_UrVY.js";import"./Chip-CQxp7Hzb.js";import"./ListItem-DsR1YIqM.js";import"./listItemButtonClasses-C1LDvtGE.js";const H={title:"Governance/AccessRequirementRelatedProjectsList",component:m},e={args:{accessRequirementId:9603055}},r={args:{accessRequirementId:9605913}},t={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[o.post(`${n}${a}`,()=>{const s={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return c.json(s,{status:200})})]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
