import{n as o,b as n,O as a,H as c}from"./iframe-BMVoK9rQ.js";import{A as m}from"./AccessRequirementRelatedProjectsList-DgOcxTfg.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-Bfgon4dR.js";import"./index-Asaz_d4d.js";import"./_baseOrderBy-CuL3JrF5.js";import"./_baseIteratee-BHLHtG1R.js";import"./_baseMap-gQ2Le4IE.js";import"./_baseEach-UaJT6spa.js";import"./useQueries-DH3Kh0rD.js";import"./useInfiniteQuery-3kgmiq4J.js";import"./pluralize-DvqWrKl4.js";import"./EntityLink-BS8hNSgj.js";import"./useEntity-DgSWrAHS.js";import"./pickBy-DoDuXfPY.js";import"./isString-BLZLoYHn.js";import"./useSuspenseQuery-DZOIBk5v.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-wOmlaOCM.js";import"./useGetEntityHeaders-DEpRd-F7.js";import"./EntityIcon-C6PZewXE.js";import"./ErrorChip-tcQQ_7iY.js";import"./Chip-Bv1Iw22F.js";import"./ListItem-Wbm_dWBo.js";import"./listItemButtonClasses-CNkVRPg1.js";const H={title:"Governance/AccessRequirementRelatedProjectsList",component:m},e={args:{accessRequirementId:9603055}},r={args:{accessRequirementId:9605913}},t={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[o.post(`${n}${a}`,()=>{const s={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return c.json(s,{status:200})})]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
