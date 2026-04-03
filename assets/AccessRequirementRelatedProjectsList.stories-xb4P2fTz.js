import{s as o,b as n,O as a,H as c}from"./iframe-DnxOmzjq.js";import{A as m}from"./AccessRequirementRelatedProjectsList-CRThr14i.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-Dd_a-IF6.js";import"./index-CXjrgaVo.js";import"./_baseOrderBy-x4-CC6Wy.js";import"./_baseIteratee-C_T2x48z.js";import"./_baseMap-DlgqdAJU.js";import"./_baseEach-MCwZYOPx.js";import"./useInfiniteQuery-BiSYghaZ.js";import"./pluralize-DvqWrKl4.js";import"./EntityLink-BEUxyjpZ.js";import"./useEntity-DJslnMA8.js";import"./pickBy-BhKGT5ho.js";import"./isString-Cg4EQByH.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-D5DN4xp6.js";import"./useGetEntityHeaders-smdE_G0i.js";import"./EntityIcon-0qAgNDDN.js";import"./ErrorChip-CTTtNNJG.js";import"./Chip-IfgFn8uB.js";import"./ListItem-DCxpPG7F.js";import"./listItemButtonClasses-Dx3JM9G1.js";const f={title:"Governance/AccessRequirementRelatedProjectsList",component:m},e={args:{accessRequirementId:9603055}},r={args:{accessRequirementId:9605913}},s={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[o.post(`${n}${a}`,()=>{const t={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return c.json(t,{status:200})})]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
