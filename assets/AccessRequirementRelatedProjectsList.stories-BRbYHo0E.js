import{n as o,b as n,O as a,H as c}from"./iframe-CJi55ERg.js";import{A as m}from"./AccessRequirementRelatedProjectsList-COrsVX3E.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-B2k2htXt.js";import"./index-DJ8Jevlp.js";import"./_baseOrderBy-CHtZV-az.js";import"./_baseIteratee-DJ2aIvY0.js";import"./_baseMap-CPFYYg7D.js";import"./_baseEach-FHM5R5X1.js";import"./useQueries-B_1J4O-w.js";import"./useInfiniteQuery-COdaCjzZ.js";import"./pluralize-DvqWrKl4.js";import"./EntityLink-BDJ-m1La.js";import"./useEntity-7QBCEi1J.js";import"./pickBy-CiUQvgN0.js";import"./isString-xFfqFUWo.js";import"./useSuspenseQuery-Prdg1nCF.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-5oNH0ZEl.js";import"./useGetEntityHeaders-DSVa7EYO.js";import"./EntityIcon-B0kEQNBZ.js";import"./ErrorChip-DmSLLhtV.js";import"./Chip-DELPMDmB.js";import"./ListItem-qYvTpJhS.js";import"./listItemButtonClasses-CMAgeQfW.js";const H={title:"Governance/AccessRequirementRelatedProjectsList",component:m},e={args:{accessRequirementId:9603055}},r={args:{accessRequirementId:9605913}},t={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[o.post(`${n}${a}`,()=>{const s={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return c.json(s,{status:200})})]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
