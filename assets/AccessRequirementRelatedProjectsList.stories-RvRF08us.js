import{s as o,b as n,O as a,H as c}from"./iframe-BfB6FrYj.js";import{A as m}from"./AccessRequirementRelatedProjectsList-C3bCFwQn.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-BN_xhWWt.js";import"./index-DcdQR_Vf.js";import"./_baseOrderBy-BOfaX7OM.js";import"./_baseIteratee-BXfMppB5.js";import"./_baseMap-D5GGKe2u.js";import"./_baseEach-C_OwUKu_.js";import"./useInfiniteQuery-DyZ1e7rN.js";import"./pluralize-DvqWrKl4.js";import"./EntityLink-xf9HG4b6.js";import"./useEntity-Di2XEsy8.js";import"./pickBy-CRDgoixE.js";import"./isString-Bld0cjlJ.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-BITphhFW.js";import"./useGetEntityHeaders-CUEIP8c6.js";import"./EntityIcon-Bv782v8q.js";import"./ErrorChip-CSWUpptK.js";import"./Chip-H1nC51OX.js";import"./ListItem-D5pRGaNH.js";import"./listItemButtonClasses-8UczhBBp.js";const f={title:"Governance/AccessRequirementRelatedProjectsList",component:m},e={args:{accessRequirementId:9603055}},r={args:{accessRequirementId:9605913}},s={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[o.post(`${n}${a}`,()=>{const t={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return c.json(t,{status:200})})]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
