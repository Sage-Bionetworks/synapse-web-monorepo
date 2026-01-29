import{n as o,b as n,O as a,H as c}from"./iframe-DOA--ypP.js";import{A as m}from"./AccessRequirementRelatedProjectsList-D7bROI4F.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-BDvRpZ_H.js";import"./index-gKWz_61H.js";import"./_baseOrderBy-Bdpj--zw.js";import"./_baseIteratee-DP1eEInn.js";import"./_baseMap-CMMBPE8F.js";import"./_baseEach-JG6bUIyt.js";import"./useQueries-ms_hA1-B.js";import"./useInfiniteQuery-TrFnHSG6.js";import"./pluralize-DvqWrKl4.js";import"./EntityLink-BsP9jwHO.js";import"./useEntity-CbdSqMq0.js";import"./pickBy-DE-dR2QS.js";import"./isString-VW1VaUU-.js";import"./useSuspenseQuery-CH8JGQoS.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-kCPWgBXC.js";import"./useGetEntityHeaders-CK6NTC-o.js";import"./EntityIcon-D5xZenXw.js";import"./ErrorChip-CpxllZj2.js";import"./Chip-B3zCMCcx.js";import"./ListItem-BaTpQ8xZ.js";import"./listItemButtonClasses-eIq3jCjC.js";const H={title:"Governance/AccessRequirementRelatedProjectsList",component:m},e={args:{accessRequirementId:9603055}},r={args:{accessRequirementId:9605913}},t={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[o.post(`${n}${a}`,()=>{const s={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return c.json(s,{status:200})})]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
