import{n as o,b as n,Q as a,H as c}from"./iframe-BFOdDDU9.js";import{A as m}from"./AccessRequirementRelatedProjectsList-BqZsuIaS.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-CP42ArKm.js";import"./index-DDJJe_s9.js";import"./_baseOrderBy-DB_MZpkC.js";import"./_baseIteratee-BJyYAHwo.js";import"./_baseMap-D7kDkJWv.js";import"./_baseEach-C50d_HcC.js";import"./useInfiniteQuery-Dy46-GOZ.js";import"./pluralize-DvqWrKl4.js";import"./EntityLink-BrxymmVB.js";import"./useEntity-Lcrqi5Tl.js";import"./pickBy-B3cb2NI1.js";import"./isString-DMM1tUYl.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-qy3h9EVn.js";import"./useGetEntityHeaders-DK68NbZs.js";import"./EntityIcon-BefpLbW2.js";import"./ErrorChip-F4teQfJ4.js";import"./Chip-D2x9BPaK.js";import"./ListItem-CYmW793j.js";import"./listItemButtonClasses-ByFlDGo4.js";const f={title:"Governance/AccessRequirementRelatedProjectsList",component:m},e={args:{accessRequirementId:9603055}},r={args:{accessRequirementId:9605913}},s={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[o.post(`${n}${a}`,()=>{const t={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return c.json(t,{status:200})})]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const v=["ManyProjects","OneProject","ZeroProjectsMock"];export{e as ManyProjects,r as OneProject,s as ZeroProjectsMock,v as __namedExportsOrder,f as default};
