import{n as o,b as n,O as a,H as c}from"./iframe-CS-qe6F5.js";import{A as m}from"./AccessRequirementRelatedProjectsList-Dyl9lLpx.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-dXP3fsXx.js";import"./index-DshQ37pH.js";import"./_baseOrderBy-CVJcvRpU.js";import"./_baseIteratee-Bajx_U4R.js";import"./_baseMap-CCpY8ocF.js";import"./_baseEach-B_Uh_NTp.js";import"./useQueries-DFD7lTHh.js";import"./useInfiniteQuery-CgiD7N7J.js";import"./pluralize-DvqWrKl4.js";import"./EntityLink-Dr7UWh95.js";import"./useEntity-CEovt95A.js";import"./pickBy-D3anvpoD.js";import"./isString-DPWYiFta.js";import"./useSuspenseQuery-CKSmV4Hq.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-DE-sM5d8.js";import"./useGetEntityHeaders-BXxgwFoH.js";import"./EntityIcon-DsLfREd8.js";import"./ErrorChip-Dx-8h8HL.js";import"./Chip-CoY3YmCv.js";import"./ListItem-9FlV2VkA.js";import"./listItemButtonClasses-CHkccG3X.js";const H={title:"Governance/AccessRequirementRelatedProjectsList",component:m},e={args:{accessRequirementId:9603055}},r={args:{accessRequirementId:9605913}},t={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[o.post(`${n}${a}`,()=>{const s={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return c.json(s,{status:200})})]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
