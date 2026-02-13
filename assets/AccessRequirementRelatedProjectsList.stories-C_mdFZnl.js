import{n as o,b as n,Q as a,H as c}from"./iframe-vUTu6M8D.js";import{A as m}from"./AccessRequirementRelatedProjectsList-BvOHRlwU.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-Oj0TN5gc.js";import"./index-DwgiIHef.js";import"./_baseOrderBy-TErK5KDZ.js";import"./_baseIteratee-BvpquvUu.js";import"./_baseMap-DTuWLxma.js";import"./_baseEach-DYOJ9REo.js";import"./useQueries-Bv2f7GHO.js";import"./useInfiniteQuery-i4mklQoJ.js";import"./pluralize-DvqWrKl4.js";import"./EntityLink-DP78KUE2.js";import"./useEntity-CJyHliIQ.js";import"./pickBy-ttRy5A60.js";import"./isString-Vkflck2t.js";import"./useSuspenseQuery-p_6e0XOX.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-HV3Xzo9J.js";import"./useGetEntityHeaders-ChaomBsO.js";import"./EntityIcon-CqdFzg0s.js";import"./ErrorChip-kLcmsZi-.js";import"./Chip-Cogs__Re.js";import"./ListItem-DQAnUC73.js";import"./listItemButtonClasses-DtmrCkrg.js";const H={title:"Governance/AccessRequirementRelatedProjectsList",component:m},e={args:{accessRequirementId:9603055}},r={args:{accessRequirementId:9605913}},t={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[o.post(`${n}${a}`,()=>{const s={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return c.json(s,{status:200})})]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
