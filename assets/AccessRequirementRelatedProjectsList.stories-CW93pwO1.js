import{n as o,b as n,O as a,H as c}from"./iframe-C4lSw8dA.js";import{A as m}from"./AccessRequirementRelatedProjectsList-BdFtZdMq.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-i7i48aF5.js";import"./index-CqEyw7E1.js";import"./_baseOrderBy-pp83PfhM.js";import"./_baseIteratee-CUB4KFzE.js";import"./_baseMap-C_lzQBLM.js";import"./_baseEach-BmGA1jR6.js";import"./useQueries-BAA7F4tv.js";import"./useInfiniteQuery-hSCmVKD_.js";import"./pluralize-DvqWrKl4.js";import"./EntityLink-DeOYYDcW.js";import"./useEntity-BOvtRLHU.js";import"./pickBy-BBo1C8Gn.js";import"./isString-r_pENBR9.js";import"./useSuspenseQuery-BJTnPWwx.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-BbK6omeJ.js";import"./useGetEntityHeaders-fr9_UAnK.js";import"./EntityIcon-CNzn9o56.js";import"./ErrorChip-fiBrD16s.js";import"./Chip-DcvWAm0_.js";import"./ListItem-CVBXxeel.js";import"./listItemButtonClasses-C0w4hoKc.js";const H={title:"Governance/AccessRequirementRelatedProjectsList",component:m},e={args:{accessRequirementId:9603055}},r={args:{accessRequirementId:9605913}},t={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[o.post(`${n}${a}`,()=>{const s={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return c.json(s,{status:200})})]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
