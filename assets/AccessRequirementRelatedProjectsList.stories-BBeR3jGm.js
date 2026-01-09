import{n as o,b as n,O as a,H as c}from"./iframe-DvdBRTAM.js";import{A as m}from"./AccessRequirementRelatedProjectsList-CbC08Lvm.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-Byh4VCNF.js";import"./index-Bj0_rJzU.js";import"./_baseOrderBy-jb9vneOI.js";import"./_baseIteratee-Dv0BX8Lk.js";import"./_baseMap-ClSQlnUC.js";import"./_baseEach-Bn6A16a5.js";import"./useQueries-Cz9ppJHT.js";import"./useInfiniteQuery-B2hHHZp9.js";import"./pluralize-DvqWrKl4.js";import"./EntityLink-9YmNDSpu.js";import"./useEntity-CZLbcF9Z.js";import"./pickBy-C-PLJ321.js";import"./isString-sJ0BruNM.js";import"./useSuspenseQuery-0rL7Zkrv.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-C2JsL5FI.js";import"./useGetEntityHeaders-BHpp2K6l.js";import"./EntityIcon-Bqcg0Ban.js";import"./ErrorChip-BQ1DNOQy.js";import"./Chip-BH2X6cI_.js";import"./ListItem-CXtU3fAI.js";import"./listItemButtonClasses-CGHB4GqN.js";const H={title:"Governance/AccessRequirementRelatedProjectsList",component:m},e={args:{accessRequirementId:9603055}},r={args:{accessRequirementId:9605913}},t={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[o.post(`${n}${a}`,()=>{const s={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return c.json(s,{status:200})})]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
