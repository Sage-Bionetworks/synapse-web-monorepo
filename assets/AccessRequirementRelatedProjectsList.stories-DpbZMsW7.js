import{n as o,b as n,Q as a,H as c}from"./iframe-DH1YdleT.js";import{A as m}from"./AccessRequirementRelatedProjectsList-CShjG-d0.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-BeG93Z-m.js";import"./index-Dk8XyrUc.js";import"./_baseOrderBy-uh1hQAJz.js";import"./_baseIteratee-CLehzhMb.js";import"./_baseMap-H-FWeyn0.js";import"./_baseEach-DQFyXxgw.js";import"./useQueries-XWhg4h1g.js";import"./useInfiniteQuery-Bhyhxg2I.js";import"./pluralize-DvqWrKl4.js";import"./EntityLink-CPTHVDjj.js";import"./useEntity-DEkwM25s.js";import"./pickBy-uho7WKk-.js";import"./isString-CTOdevqw.js";import"./useSuspenseQuery-D4jnvJmQ.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-1Chtb2OR.js";import"./useGetEntityHeaders-moS1yEoP.js";import"./EntityIcon-zJ87QwH9.js";import"./ErrorChip-F0s207yQ.js";import"./Chip-F_DZPuno.js";import"./ListItem-BX16DSbY.js";import"./listItemButtonClasses-akTatWV3.js";const H={title:"Governance/AccessRequirementRelatedProjectsList",component:m},e={args:{accessRequirementId:9603055}},r={args:{accessRequirementId:9605913}},t={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[o.post(`${n}${a}`,()=>{const s={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return c.json(s,{status:200})})]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
