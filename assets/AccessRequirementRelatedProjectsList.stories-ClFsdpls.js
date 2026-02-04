import{n as o,b as n,O as a,H as c}from"./iframe-BhrR5Sll.js";import{A as m}from"./AccessRequirementRelatedProjectsList-D2YbsPRG.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-iVIEM_r3.js";import"./index-CPX53gcL.js";import"./_baseOrderBy-BTMBj8Ip.js";import"./_baseIteratee-BvC8fp-4.js";import"./_baseMap-BS7AJXJp.js";import"./_baseEach-BandNteZ.js";import"./useQueries-DqSPqXIA.js";import"./useInfiniteQuery-BrWjCX7v.js";import"./pluralize-DvqWrKl4.js";import"./EntityLink-SMq9YFQf.js";import"./useEntity-Dq9EUdRo.js";import"./pickBy-CCz-VO2T.js";import"./isString-ChPx5Gz6.js";import"./useSuspenseQuery-CuIa-HUN.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-DoH_2kpH.js";import"./useGetEntityHeaders-C1mvfARP.js";import"./EntityIcon-C4dnsPV8.js";import"./ErrorChip-Ca4CaPsk.js";import"./Chip-BT3G1XLE.js";import"./ListItem-CGDrFowS.js";import"./listItemButtonClasses-DXNiEFb2.js";const H={title:"Governance/AccessRequirementRelatedProjectsList",component:m},e={args:{accessRequirementId:9603055}},r={args:{accessRequirementId:9605913}},t={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[o.post(`${n}${a}`,()=>{const s={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return c.json(s,{status:200})})]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
