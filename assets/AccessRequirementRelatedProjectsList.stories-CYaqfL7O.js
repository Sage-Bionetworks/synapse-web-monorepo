import{n as o,b as n,Q as a,H as c}from"./iframe-05B79XZ4.js";import{A as m}from"./AccessRequirementRelatedProjectsList-rwLG-tfn.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-D8KrmOhE.js";import"./index-Daq82rHX.js";import"./_baseOrderBy-Go6U-7AU.js";import"./_baseIteratee-DXgMmV7G.js";import"./_baseMap-Y6mqOJtS.js";import"./_baseEach-DDJYCD3q.js";import"./useQueries-DXkCjI1X.js";import"./useInfiniteQuery-BL4rT7lo.js";import"./pluralize-DvqWrKl4.js";import"./EntityLink-BBX8SjB1.js";import"./useEntity-BBgR9ZOs.js";import"./pickBy-B2D8woLZ.js";import"./isString-CO1VSkJm.js";import"./useSuspenseQuery-DXOpFrh-.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-Cw4P0fYX.js";import"./useGetEntityHeaders-De81WEe9.js";import"./EntityIcon-B3iK79ZU.js";import"./ErrorChip-DQODkJAm.js";import"./Chip-MTPGu8Dp.js";import"./ListItem-BDJ8bk3W.js";import"./listItemButtonClasses-BcaI3SIE.js";const H={title:"Governance/AccessRequirementRelatedProjectsList",component:m},e={args:{accessRequirementId:9603055}},r={args:{accessRequirementId:9605913}},t={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[o.post(`${n}${a}`,()=>{const s={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return c.json(s,{status:200})})]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
