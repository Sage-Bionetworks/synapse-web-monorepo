import{n as o,b as n,Q as a,H as c}from"./iframe-BjUpq5xd.js";import{A as m}from"./AccessRequirementRelatedProjectsList-k-748c4D.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-Bx9h85Ai.js";import"./index-DbW4RfeC.js";import"./_baseOrderBy-DorvlhIH.js";import"./_baseIteratee-CH7JnBeO.js";import"./_baseMap-C1Geoiqh.js";import"./_baseEach-CpXFuCDm.js";import"./useQueries-Cqwk_xQ6.js";import"./useInfiniteQuery-BQLrsI8-.js";import"./pluralize-DvqWrKl4.js";import"./EntityLink-rnzCSOLo.js";import"./useEntity-Cwe7aQYA.js";import"./pickBy-DY83DiKG.js";import"./isString-C2yk-Fxu.js";import"./useSuspenseQuery-DbgujXvY.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-DPEZEXzu.js";import"./useGetEntityHeaders-CPrZEWZW.js";import"./EntityIcon-whableCV.js";import"./ErrorChip-EBIvMclo.js";import"./Chip-iDCojdQO.js";import"./ListItem-t7v8GaVx.js";import"./listItemButtonClasses-CE8hegso.js";const H={title:"Governance/AccessRequirementRelatedProjectsList",component:m},e={args:{accessRequirementId:9603055}},r={args:{accessRequirementId:9605913}},t={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[o.post(`${n}${a}`,()=>{const s={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return c.json(s,{status:200})})]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
