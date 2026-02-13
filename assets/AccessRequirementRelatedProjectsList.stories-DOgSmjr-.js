import{n as o,b as n,Q as a,H as c}from"./iframe-D-KER6Qh.js";import{A as m}from"./AccessRequirementRelatedProjectsList-65XbpWad.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-DJdPqZLJ.js";import"./index-C6MZRWmF.js";import"./_baseOrderBy-DIwOyEp0.js";import"./_baseIteratee-DEkFHii0.js";import"./_baseMap-C2UuXXF2.js";import"./_baseEach-DWPf_RCf.js";import"./useQueries-VDAmT_8W.js";import"./useInfiniteQuery-DdL0acdR.js";import"./pluralize-DvqWrKl4.js";import"./EntityLink-8dIjsrxf.js";import"./useEntity-BOsr6wZ7.js";import"./pickBy-GQztHFvZ.js";import"./isString-DdCXbvgk.js";import"./useSuspenseQuery-BSi61cfF.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-Bj7rDXSp.js";import"./useGetEntityHeaders-B3Of4QkP.js";import"./EntityIcon-LQDUmvPQ.js";import"./ErrorChip-tHLRdyJm.js";import"./Chip-BMsDoxJ4.js";import"./ListItem-yGCAuYJI.js";import"./listItemButtonClasses-BQMHwEyd.js";const H={title:"Governance/AccessRequirementRelatedProjectsList",component:m},e={args:{accessRequirementId:9603055}},r={args:{accessRequirementId:9605913}},t={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[o.post(`${n}${a}`,()=>{const s={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return c.json(s,{status:200})})]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
