import{s as o,b as n,O as a,H as c}from"./iframe-Bg-s9pTZ.js";import{A as m}from"./AccessRequirementRelatedProjectsList-Drcl55oh.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-S-5D3Egc.js";import"./index-BjGPL7ol.js";import"./_baseOrderBy-D6jiSVQT.js";import"./_baseIteratee-BAr5j981.js";import"./_baseMap-B33d-4DG.js";import"./_baseEach-BxudFW9Z.js";import"./useInfiniteQuery-Camq04G4.js";import"./pluralize-DvqWrKl4.js";import"./EntityLink-UVh45yu9.js";import"./useEntity-BQmjN6b5.js";import"./pickBy-B2wdFJ_u.js";import"./isString-DrOnGG_f.js";import"./queryOptions-C9woPjwX.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-CK8Dqze5.js";import"./useGetEntityHeaders-BWC2gBJa.js";import"./EntityIcon-Balj7xp9.js";import"./ErrorChip-CR0ywM8i.js";import"./Chip-DPIa4PAj.js";import"./ListItem-DGasfxS0.js";import"./listItemButtonClasses-rzI78vlT.js";const v={title:"Governance/AccessRequirementRelatedProjectsList",component:m},e={args:{accessRequirementId:9603055}},r={args:{accessRequirementId:9605913}},s={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[o.post(`${n}${a}`,()=>{const t={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return c.json(t,{status:200})})]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
