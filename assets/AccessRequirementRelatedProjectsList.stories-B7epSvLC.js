import{s as o,b as n,O as a,H as c}from"./iframe-BJt7q_JV.js";import{A as m}from"./AccessRequirementRelatedProjectsList-CGcPrXOd.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-BwSgVLqv.js";import"./index-D1KUKnNi.js";import"./_baseOrderBy-CIQ5pYB6.js";import"./_baseIteratee-BPQNR2Jo.js";import"./_baseMap-BzkpFs2l.js";import"./_baseEach-B4timjj-.js";import"./useInfiniteQuery-Ceo7_zT8.js";import"./pluralize-DvqWrKl4.js";import"./EntityLink-Cv3CpSGO.js";import"./useEntity-BiFHWUYV.js";import"./pickBy-ggZJH3G-.js";import"./isString-CsqEOPqS.js";import"./queryOptions-C9woPjwX.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-BO5FYJrE.js";import"./useGetEntityHeaders-ome2CvUP.js";import"./EntityIcon-CbW7rJO7.js";import"./ErrorChip-BH7aKgi-.js";import"./Chip-D4cY5ocF.js";import"./ListItem-CS-Guzgl.js";import"./listItemButtonClasses-CLI1Iss5.js";const v={title:"Governance/AccessRequirementRelatedProjectsList",component:m},e={args:{accessRequirementId:9603055}},r={args:{accessRequirementId:9605913}},s={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[o.post(`${n}${a}`,()=>{const t={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return c.json(t,{status:200})})]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
