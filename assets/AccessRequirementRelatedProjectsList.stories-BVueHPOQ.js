import{s as o,b as n,O as a,H as c}from"./iframe-vLBQZPS1.js";import{A as m}from"./AccessRequirementRelatedProjectsList-56WZczcl.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-C7_nf46j.js";import"./index-huQsABd9.js";import"./_baseOrderBy-BC97-PTG.js";import"./_baseIteratee-BmZJlmI5.js";import"./_baseMap-BExDUO8C.js";import"./_baseEach-D90opGFA.js";import"./useInfiniteQuery-CjBQlBHx.js";import"./pluralize-DvqWrKl4.js";import"./EntityLink-CaWTTFmm.js";import"./useEntity-B8YDBI_I.js";import"./pickBy-Rr7aYo8C.js";import"./isString-uOCvHjpj.js";import"./queryOptions-C9woPjwX.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-Czhkwfxc.js";import"./useGetEntityHeaders-G8vz0XIv.js";import"./EntityIcon-0-qXS0Ig.js";import"./ErrorChip-DgJ7OQAC.js";import"./Chip-BwFdox-s.js";import"./ListItem-DQfdo3rS.js";import"./listItemButtonClasses-BZulfIb5.js";const v={title:"Governance/AccessRequirementRelatedProjectsList",component:m},e={args:{accessRequirementId:9603055}},r={args:{accessRequirementId:9605913}},s={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[o.post(`${n}${a}`,()=>{const t={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return c.json(t,{status:200})})]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
