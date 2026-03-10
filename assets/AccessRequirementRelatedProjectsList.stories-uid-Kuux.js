import{n as o,b as n,Q as a,H as c}from"./iframe-DJOT8ubk.js";import{A as m}from"./AccessRequirementRelatedProjectsList-Css04QLn.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-CkBXklLr.js";import"./index-C3UiH5jH.js";import"./_baseOrderBy-LZ7a3IHt.js";import"./_baseIteratee-CSLaR471.js";import"./_baseMap-ffY1WrHn.js";import"./_baseEach-C7K8H9C3.js";import"./useInfiniteQuery-D5oLhJn7.js";import"./pluralize-DvqWrKl4.js";import"./EntityLink-DlOtW-P-.js";import"./useEntity-BYI2LyM0.js";import"./pickBy-Bw8c6iXR.js";import"./isString-V0uzYRo2.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-B5pDt8NK.js";import"./useGetEntityHeaders-CFfKipEz.js";import"./EntityIcon-DhOZdSSO.js";import"./ErrorChip-UMU-Pugv.js";import"./Chip-OZ5AEEU1.js";import"./ListItem-B_CEgXdE.js";import"./listItemButtonClasses-ClnhnfoV.js";const f={title:"Governance/AccessRequirementRelatedProjectsList",component:m},e={args:{accessRequirementId:9603055}},r={args:{accessRequirementId:9605913}},s={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[o.post(`${n}${a}`,()=>{const t={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return c.json(t,{status:200})})]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
