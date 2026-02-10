import{n as o,b as n,Q as a,H as c}from"./iframe-C80DNIXY.js";import{A as m}from"./AccessRequirementRelatedProjectsList-B9MLobVB.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-Bjdl36fC.js";import"./index-Bee01HS_.js";import"./_baseOrderBy-DqQOHAJE.js";import"./_baseIteratee-CmYeUqfJ.js";import"./_baseMap-eSh9iFHA.js";import"./_baseEach-DUUo9Nf8.js";import"./useQueries-BaRURQgG.js";import"./useInfiniteQuery-4baG4-hB.js";import"./pluralize-DvqWrKl4.js";import"./EntityLink-BJZce3Hh.js";import"./useEntity-BFq9en9A.js";import"./pickBy-C1JTeSPX.js";import"./isString-lbmFIYbF.js";import"./useSuspenseQuery-CqybcQ2J.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-CzveUUhX.js";import"./useGetEntityHeaders-CwVj1QcI.js";import"./EntityIcon-AJpP8A_P.js";import"./ErrorChip-CZQXgjbD.js";import"./Chip-BVUqKial.js";import"./ListItem-Baef_HGj.js";import"./listItemButtonClasses-D5iOJME6.js";const H={title:"Governance/AccessRequirementRelatedProjectsList",component:m},e={args:{accessRequirementId:9603055}},r={args:{accessRequirementId:9605913}},t={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[o.post(`${n}${a}`,()=>{const s={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return c.json(s,{status:200})})]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
