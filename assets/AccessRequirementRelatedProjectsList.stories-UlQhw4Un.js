import{n as o,b as n,Q as a,H as c}from"./iframe-DUgvw_e1.js";import{A as m}from"./AccessRequirementRelatedProjectsList-D1BW4GXv.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-e0J-uQ6G.js";import"./index-D5BySe1V.js";import"./_baseOrderBy-BA14F0fV.js";import"./_baseIteratee-DEPznUuf.js";import"./_baseMap-CaX1bcDJ.js";import"./_baseEach-DYGtEyDy.js";import"./useQueries-CSyyVGU0.js";import"./useInfiniteQuery-DR51fsMw.js";import"./pluralize-DvqWrKl4.js";import"./EntityLink-CAqjujtb.js";import"./useEntity-D5Wm4qKm.js";import"./pickBy-CfLXoUS2.js";import"./isString-BaxO8cnH.js";import"./useSuspenseQuery-ox9OnZJk.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-DjR-jaM9.js";import"./useGetEntityHeaders-vwe8_vj5.js";import"./EntityIcon-B-Y05S76.js";import"./ErrorChip-xtIq5SxP.js";import"./Chip-D6AY4yga.js";import"./ListItem-C_qSr9er.js";import"./listItemButtonClasses-S1QST8yn.js";const H={title:"Governance/AccessRequirementRelatedProjectsList",component:m},e={args:{accessRequirementId:9603055}},r={args:{accessRequirementId:9605913}},t={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[o.post(`${n}${a}`,()=>{const s={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return c.json(s,{status:200})})]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
