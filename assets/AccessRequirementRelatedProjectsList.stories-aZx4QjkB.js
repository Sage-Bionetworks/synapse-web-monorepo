import{s as o,b as n,O as a,H as c}from"./iframe-I9EoyWQf.js";import{A as m}from"./AccessRequirementRelatedProjectsList-CKkzISDK.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-CBjoxYBs.js";import"./index-BR8vhpyy.js";import"./_baseOrderBy-DnLUej7u.js";import"./_baseIteratee-DhR4h-9n.js";import"./_baseMap-C2ThkLcN.js";import"./_baseEach-BVz6q7ID.js";import"./useInfiniteQuery-ybg8uaKh.js";import"./pluralize-DvqWrKl4.js";import"./EntityLink-Duapq-5Y.js";import"./useEntity-B4TqUGVZ.js";import"./pickBy-BeiKyk-k.js";import"./isString-XDvs-I67.js";import"./queryOptions-C9woPjwX.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-CuHV45TU.js";import"./useGetEntityHeaders-BOIYDVV_.js";import"./EntityIcon-CUn8yAv1.js";import"./ErrorChip-4P8-9Tlk.js";import"./Chip-qFrw06qV.js";import"./ListItem-B2eHdVkL.js";import"./listItemButtonClasses-B12uDCc1.js";const v={title:"Governance/AccessRequirementRelatedProjectsList",component:m},e={args:{accessRequirementId:9603055}},r={args:{accessRequirementId:9605913}},s={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[o.post(`${n}${a}`,()=>{const t={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return c.json(t,{status:200})})]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const H=["ManyProjects","OneProject","ZeroProjectsMock"];export{e as ManyProjects,r as OneProject,s as ZeroProjectsMock,H as __namedExportsOrder,v as default};
