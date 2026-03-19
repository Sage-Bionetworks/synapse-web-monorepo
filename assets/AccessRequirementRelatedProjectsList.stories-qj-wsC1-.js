import{n as o,b as n,Q as a,H as c}from"./iframe-BfDC4V0n.js";import{A as m}from"./AccessRequirementRelatedProjectsList-Dklvwq92.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-Cpf5-i3V.js";import"./index-D_SprHXq.js";import"./_baseOrderBy-CAV9pwT_.js";import"./_baseIteratee-CiW54l-R.js";import"./_baseMap-CVZ_hys5.js";import"./_baseEach-DqL3VxUs.js";import"./useInfiniteQuery-DM4nXvzm.js";import"./pluralize-DvqWrKl4.js";import"./EntityLink-D6WaI9fD.js";import"./useEntity-_bJvplXg.js";import"./pickBy-Df5ApG1Q.js";import"./isString-BkXAEYmg.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-DCWWt0dC.js";import"./useGetEntityHeaders-2JechIOY.js";import"./EntityIcon-HQYQOhNt.js";import"./ErrorChip-IproUbxH.js";import"./Chip-B3QjRI9f.js";import"./ListItem-B86ZXFdv.js";import"./listItemButtonClasses-CZDR-qIN.js";const f={title:"Governance/AccessRequirementRelatedProjectsList",component:m},e={args:{accessRequirementId:9603055}},r={args:{accessRequirementId:9605913}},s={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[o.post(`${n}${a}`,()=>{const t={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return c.json(t,{status:200})})]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
