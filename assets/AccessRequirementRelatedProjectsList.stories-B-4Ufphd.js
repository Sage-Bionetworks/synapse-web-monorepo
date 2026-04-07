import{s as o,b as n,O as a,H as c}from"./iframe-CkF2RhKN.js";import{A as m}from"./AccessRequirementRelatedProjectsList-Czkb6-lj.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-BLD7zE6A.js";import"./index-Ci6ZMoUD.js";import"./_baseOrderBy-DPTo7phS.js";import"./_baseIteratee-BEB7CkmA.js";import"./_baseMap-DTKDCLFE.js";import"./_baseEach-CNkAXNOm.js";import"./useInfiniteQuery-B7jSsWM4.js";import"./pluralize-DvqWrKl4.js";import"./EntityLink-C69yftJQ.js";import"./useEntity-zBm3Or6t.js";import"./pickBy-BbztYAG1.js";import"./isString-B5YIl0UX.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-fPh8GeMM.js";import"./useGetEntityHeaders-Cg5AohM_.js";import"./EntityIcon-DskuIoEL.js";import"./ErrorChip-yrC8bCfM.js";import"./Chip-BzTGJFEB.js";import"./ListItem-l8Rfb5x-.js";import"./listItemButtonClasses-D_9PsBch.js";const f={title:"Governance/AccessRequirementRelatedProjectsList",component:m},e={args:{accessRequirementId:9603055}},r={args:{accessRequirementId:9605913}},s={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[o.post(`${n}${a}`,()=>{const t={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return c.json(t,{status:200})})]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
