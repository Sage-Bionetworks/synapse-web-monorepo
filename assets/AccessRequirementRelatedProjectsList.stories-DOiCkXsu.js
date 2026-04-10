import{s as o,b as n,O as a,H as c}from"./iframe-FsOg9uwU.js";import{A as m}from"./AccessRequirementRelatedProjectsList-BAbI4qDG.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-E4wX1h6m.js";import"./index-BE4_cl56.js";import"./_baseOrderBy-CnEKSfr8.js";import"./_baseIteratee-CPfpbnLi.js";import"./_baseMap-CKj7t-u-.js";import"./_baseEach-BFISFCE3.js";import"./useInfiniteQuery-rDeNbqp3.js";import"./pluralize-DvqWrKl4.js";import"./EntityLink-DAyEs37b.js";import"./useEntity-BtyQdG2W.js";import"./pickBy-DfOY2WJ2.js";import"./isString-DXW-YMkO.js";import"./queryOptions-C9woPjwX.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-DVlwq94Z.js";import"./useGetEntityHeaders-B_P8R0wa.js";import"./EntityIcon-CxTGw3bd.js";import"./ErrorChip-CrPSJ9bD.js";import"./Chip-CwjHvWgT.js";import"./ListItem-BbIUcrJF.js";import"./listItemButtonClasses-DlXbiyd-.js";const v={title:"Governance/AccessRequirementRelatedProjectsList",component:m},e={args:{accessRequirementId:9603055}},r={args:{accessRequirementId:9605913}},s={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[o.post(`${n}${a}`,()=>{const t={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return c.json(t,{status:200})})]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
