import{n as o,b as n,O as a,H as c}from"./iframe-9zwml_ZL.js";import{A as m}from"./AccessRequirementRelatedProjectsList-Dsi4slX1.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-DgT6K-E4.js";import"./index-qxRvCYco.js";import"./_baseOrderBy-k-W7iE60.js";import"./_baseIteratee-wuXEnZXa.js";import"./_baseMap-BDolchDL.js";import"./_baseEach-C2lZPHvD.js";import"./useQueries-asxxJCv1.js";import"./useInfiniteQuery-BQlxA6Iu.js";import"./pluralize-DvqWrKl4.js";import"./EntityLink-DUc-3jPO.js";import"./useEntity-DWqu37_A.js";import"./pickBy-BWz3d5Ni.js";import"./isString-ByvIj2fE.js";import"./useSuspenseQuery-DROjoE-r.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-SAdnotM0.js";import"./useGetEntityHeaders-C-xEs9wX.js";import"./EntityIcon-DpSzREsq.js";import"./ErrorChip-CAOFtT1Q.js";import"./Chip-D5tNn4lG.js";import"./ListItem-COyOXpqD.js";import"./listItemButtonClasses-BHTt-fvf.js";const H={title:"Governance/AccessRequirementRelatedProjectsList",component:m},e={args:{accessRequirementId:9603055}},r={args:{accessRequirementId:9605913}},t={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[o.post(`${n}${a}`,()=>{const s={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return c.json(s,{status:200})})]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
