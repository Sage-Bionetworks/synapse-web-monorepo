import{n as o,b as n,O as a,H as c}from"./iframe-IkK4rSOB.js";import{A as m}from"./AccessRequirementRelatedProjectsList-DNf_K4_N.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-B8mi3H00.js";import"./index-C-PIi4pT.js";import"./_baseOrderBy-BK9Xz-Wr.js";import"./_baseIteratee-644iAwmQ.js";import"./_baseMap-BECXTj-9.js";import"./_baseEach-Fi0_Zvy9.js";import"./useQueries-CdqItZda.js";import"./useInfiniteQuery-CRXPq4a_.js";import"./pluralize-DvqWrKl4.js";import"./EntityLink-B7ig1Pvx.js";import"./useEntity-DM9FwObl.js";import"./pickBy-wL58zYrZ.js";import"./isString-BnfrvFdp.js";import"./useSuspenseQuery-D8qvYmV_.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-BgG3FrAY.js";import"./useGetEntityHeaders-CTu1251G.js";import"./EntityIcon-jnZi-fip.js";import"./ErrorChip-wEP0IfG6.js";import"./Chip-Bi8EBQgs.js";import"./ListItem-DkSWpsM8.js";import"./listItemButtonClasses-Bb4lMPv1.js";const H={title:"Governance/AccessRequirementRelatedProjectsList",component:m},e={args:{accessRequirementId:9603055}},r={args:{accessRequirementId:9605913}},t={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[o.post(`${n}${a}`,()=>{const s={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return c.json(s,{status:200})})]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
