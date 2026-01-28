import{n as o,b as n,O as a,H as c}from"./iframe-C9XoSndX.js";import{A as m}from"./AccessRequirementRelatedProjectsList-RM6NSgwn.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-B2chJyzz.js";import"./index-CkRaXIId.js";import"./_baseOrderBy-CoYfpbnm.js";import"./_baseIteratee-3cGLS7pB.js";import"./_baseMap-EIGS4Zuu.js";import"./_baseEach-DBoYfXEk.js";import"./useQueries-BPbcnnWt.js";import"./useInfiniteQuery-Jo0FHawD.js";import"./pluralize-DvqWrKl4.js";import"./EntityLink-wu0YUanC.js";import"./useEntity-CJTXN1lX.js";import"./pickBy-DVlhEcQI.js";import"./isString-CcEUl8_F.js";import"./useSuspenseQuery-OCydU3mN.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-DG7pZlew.js";import"./useGetEntityHeaders-CY4VV5mA.js";import"./EntityIcon-DfNaAEVk.js";import"./ErrorChip-C4UkuIqq.js";import"./Chip-DUl13jbe.js";import"./ListItem-xnPVm_RY.js";import"./listItemButtonClasses-ocFg7dLL.js";const H={title:"Governance/AccessRequirementRelatedProjectsList",component:m},e={args:{accessRequirementId:9603055}},r={args:{accessRequirementId:9605913}},t={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[o.post(`${n}${a}`,()=>{const s={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return c.json(s,{status:200})})]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
