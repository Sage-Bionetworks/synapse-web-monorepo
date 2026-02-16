import{n as o,b as n,Q as a,H as c}from"./iframe-BQ-FyWsS.js";import{A as m}from"./AccessRequirementRelatedProjectsList-BsF4Dsnf.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-CTng2P-U.js";import"./index-B8FvutqA.js";import"./_baseOrderBy-B7Wy6e_z.js";import"./_baseIteratee-D1Tm5upA.js";import"./_baseMap-BilfFXZ5.js";import"./_baseEach-DzmUJdB4.js";import"./useQueries-CogN6Y-I.js";import"./useInfiniteQuery-BmVO0mhr.js";import"./pluralize-DvqWrKl4.js";import"./EntityLink-BFEWJ26e.js";import"./useEntity-Cy5Mg2dp.js";import"./pickBy-BvN_jGL3.js";import"./isString-CYdSqs19.js";import"./useSuspenseQuery-DUVSvPvg.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-CPRwldBA.js";import"./useGetEntityHeaders-BwRrh0VC.js";import"./EntityIcon-Dbz3i6K6.js";import"./ErrorChip-CnkGxJXt.js";import"./Chip-zSUCPrxT.js";import"./ListItem-Bz_4FR8n.js";import"./listItemButtonClasses-DOsnuBW-.js";const H={title:"Governance/AccessRequirementRelatedProjectsList",component:m},e={args:{accessRequirementId:9603055}},r={args:{accessRequirementId:9605913}},t={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[o.post(`${n}${a}`,()=>{const s={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return c.json(s,{status:200})})]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
