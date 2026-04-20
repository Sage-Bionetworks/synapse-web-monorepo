import{s as o,b as n,O as a,H as c}from"./iframe-Gl2uG7Gu.js";import{A as m}from"./AccessRequirementRelatedProjectsList-DjW1LUVj.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-CNvie9sI.js";import"./index-Dl1iid2-.js";import"./_baseOrderBy-CThs2gYZ.js";import"./_baseIteratee-BYtIyUzR.js";import"./_baseMap-QVGtldut.js";import"./_baseEach-DDXBWgx7.js";import"./useInfiniteQuery-B8esF6xB.js";import"./pluralize-DvqWrKl4.js";import"./EntityLink-C-7VEjWx.js";import"./useEntity-D934njKf.js";import"./pickBy-CvHjxjJ_.js";import"./isString-Dwqv5QF9.js";import"./queryOptions-C9woPjwX.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-DMHI0iCj.js";import"./useGetEntityHeaders-CMjjRh3f.js";import"./EntityIcon-ynVXFnm1.js";import"./ErrorChip-BBwpsiGN.js";import"./Chip-DiD-80ip.js";import"./ListItem-CyRfeqXs.js";import"./listItemButtonClasses-PeSON1or.js";const v={title:"Governance/AccessRequirementRelatedProjectsList",component:m},e={args:{accessRequirementId:9603055}},r={args:{accessRequirementId:9605913}},s={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[o.post(`${n}${a}`,()=>{const t={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return c.json(t,{status:200})})]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
