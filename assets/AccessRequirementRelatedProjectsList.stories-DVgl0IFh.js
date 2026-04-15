import{s as o,b as n,O as a,H as c}from"./iframe-C9UTN7n5.js";import{A as m}from"./AccessRequirementRelatedProjectsList-G030Q91v.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-3GKgLa2M.js";import"./index-C0fxb07w.js";import"./_baseOrderBy-wpc6i2AL.js";import"./_baseIteratee-C6RusqKP.js";import"./_baseMap-CwOwxQ_D.js";import"./_baseEach-CdgYGI7S.js";import"./useInfiniteQuery-DWfE7Y6F.js";import"./pluralize-DvqWrKl4.js";import"./EntityLink-CxYmyYoh.js";import"./useEntity-wCUUthKY.js";import"./pickBy-D3qrbo5r.js";import"./isString-DH2pOUh7.js";import"./queryOptions-C9woPjwX.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-P91ojiDp.js";import"./useGetEntityHeaders-CW9wNnEz.js";import"./EntityIcon-D1i1100e.js";import"./ErrorChip-B_E_vK7e.js";import"./Chip-kWAD_96F.js";import"./ListItem-BV4Jjguv.js";import"./listItemButtonClasses-Dh3m0zIa.js";const v={title:"Governance/AccessRequirementRelatedProjectsList",component:m},e={args:{accessRequirementId:9603055}},r={args:{accessRequirementId:9605913}},s={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[o.post(`${n}${a}`,()=>{const t={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return c.json(t,{status:200})})]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
