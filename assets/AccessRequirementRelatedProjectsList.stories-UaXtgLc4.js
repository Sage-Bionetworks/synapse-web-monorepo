import{s as o,b as n,O as a,H as c}from"./iframe-BdS9-wdc.js";import{A as m}from"./AccessRequirementRelatedProjectsList-CEBEi-DU.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-CYXIEknU.js";import"./index-BmEGML5A.js";import"./_baseOrderBy-DwefgT-I.js";import"./_baseIteratee-D3oGQqia.js";import"./_baseMap-sufoZ6nL.js";import"./_baseEach-C3R-Q7qo.js";import"./useInfiniteQuery-B54oxMok.js";import"./pluralize-DvqWrKl4.js";import"./EntityLink-DtA0spe_.js";import"./useEntity-yk3zKDSU.js";import"./pickBy-zLYfMzn_.js";import"./isString-Bg-Bq7K1.js";import"./queryOptions-C9woPjwX.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-CfwXDFET.js";import"./useGetEntityHeaders-Cqaui4eI.js";import"./EntityIcon-CTJ1PyV0.js";import"./ErrorChip-DGTa7iDG.js";import"./Chip-B8w46sev.js";import"./ListItem-Ckg72ivS.js";import"./listItemButtonClasses-ChAWww3W.js";const v={title:"Governance/AccessRequirementRelatedProjectsList",component:m},e={args:{accessRequirementId:9603055}},r={args:{accessRequirementId:9605913}},s={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[o.post(`${n}${a}`,()=>{const t={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return c.json(t,{status:200})})]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    accessRequirementId: 9603055
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    accessRequirementId: 9605913
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const H=["ManyProjects","OneProject","ZeroProjectsMock"];export{e as ManyProjects,r as OneProject,s as ZeroProjectsMock,H as __namedExportsOrder,v as default};
