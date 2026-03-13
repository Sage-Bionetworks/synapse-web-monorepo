import{n as o,b as n,Q as a,H as c}from"./iframe-CsSu4aY1.js";import{A as m}from"./AccessRequirementRelatedProjectsList-9UabjZ19.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-BZAV3FFg.js";import"./index-JJ0tKNJq.js";import"./_baseOrderBy-BaS0z3jX.js";import"./_baseIteratee-gsTZcny-.js";import"./_baseMap-WrXwzA6l.js";import"./_baseEach-D0zvbrXD.js";import"./useInfiniteQuery-BqCjpHyD.js";import"./pluralize-DvqWrKl4.js";import"./EntityLink-CSDybpFk.js";import"./useEntity-DxQVxjiV.js";import"./pickBy-Cl3JCYxg.js";import"./isString-7JTEWMLO.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-CB6pyKp2.js";import"./useGetEntityHeaders-DXQe7RjS.js";import"./EntityIcon-CfnBQ4xj.js";import"./ErrorChip-C9tyFXY3.js";import"./Chip-Dd_YPni3.js";import"./ListItem-oxCb3vqO.js";import"./listItemButtonClasses-ByML3Or5.js";const f={title:"Governance/AccessRequirementRelatedProjectsList",component:m},e={args:{accessRequirementId:9603055}},r={args:{accessRequirementId:9605913}},s={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[o.post(`${n}${a}`,()=>{const t={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return c.json(t,{status:200})})]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
