import{n as o,b as n,O as a,H as c}from"./iframe-Fj4lak5c.js";import{A as m}from"./AccessRequirementRelatedProjectsList-BaGyyYG2.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-BK4E0lyi.js";import"./index-_4NbbnB5.js";import"./_baseOrderBy-CBnpW1-x.js";import"./_baseIteratee-CMx6DeJF.js";import"./_baseMap-BixPoDUC.js";import"./_baseEach-DNtmXHsZ.js";import"./useQueries-ootAa_T1.js";import"./useInfiniteQuery-CbadcZWG.js";import"./pluralize-DvqWrKl4.js";import"./EntityLink-BUeIikxm.js";import"./useEntity-CsvyAHgM.js";import"./pickBy-DWGrTkiK.js";import"./isString-CPqjMqSr.js";import"./useSuspenseQuery-DCz9tJ8h.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-CMAJQSrF.js";import"./useGetEntityHeaders-CGPovO9d.js";import"./EntityIcon-xvpe0khs.js";import"./ErrorChip-DCduo5sP.js";import"./Chip-CGB0K5Hb.js";import"./ListItem-By4wjk0j.js";import"./listItemButtonClasses-DJ1LX7Q2.js";const H={title:"Governance/AccessRequirementRelatedProjectsList",component:m},e={args:{accessRequirementId:9603055}},r={args:{accessRequirementId:9605913}},t={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[o.post(`${n}${a}`,()=>{const s={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return c.json(s,{status:200})})]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
