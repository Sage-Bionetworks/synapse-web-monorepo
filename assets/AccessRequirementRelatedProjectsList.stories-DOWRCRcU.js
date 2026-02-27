import{n as o,b as n,Q as a,H as c}from"./iframe-BjBBiDsW.js";import{A as m}from"./AccessRequirementRelatedProjectsList-C4hSRANa.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-C7B8474T.js";import"./index-ILKMxz0s.js";import"./_baseOrderBy-8hmMvEym.js";import"./_baseIteratee-C9y3TvvF.js";import"./_baseMap-BgKfZnKQ.js";import"./_baseEach-BmEqmHzA.js";import"./useInfiniteQuery-Bv0FdpMA.js";import"./pluralize-DvqWrKl4.js";import"./EntityLink-B4tWv8Uh.js";import"./useEntity-CofmP_Ww.js";import"./pickBy-BzGO56ob.js";import"./isString-Cr72riR3.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-CUXukPKv.js";import"./useGetEntityHeaders-DA3qIFzN.js";import"./EntityIcon-Cb5mZ2Xa.js";import"./ErrorChip-DkFXu039.js";import"./Chip-DPNGaouF.js";import"./ListItem-zjaN5wyq.js";import"./listItemButtonClasses-CgQWHpQN.js";const f={title:"Governance/AccessRequirementRelatedProjectsList",component:m},e={args:{accessRequirementId:9603055}},r={args:{accessRequirementId:9605913}},s={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[o.post(`${n}${a}`,()=>{const t={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return c.json(t,{status:200})})]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
