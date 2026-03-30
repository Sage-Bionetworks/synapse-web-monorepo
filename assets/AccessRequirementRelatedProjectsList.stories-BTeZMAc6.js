import{n as o,b as n,Q as a,H as c}from"./iframe-Cj0e1zel.js";import{A as m}from"./AccessRequirementRelatedProjectsList-BcrISYKH.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-BvX1i9of.js";import"./index-ZhGqh7fx.js";import"./_baseOrderBy-C2LZNiy4.js";import"./_baseIteratee-467XhaM-.js";import"./_baseMap-FtsgiS9G.js";import"./_baseEach-BSzMssFr.js";import"./useInfiniteQuery-CPI4HKnX.js";import"./pluralize-DvqWrKl4.js";import"./EntityLink-A_Oh3WcF.js";import"./useEntity-B9fCB26v.js";import"./pickBy-DdtJhL1v.js";import"./isString-hG5mPmml.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-DsPUnDhp.js";import"./useGetEntityHeaders-C357br7f.js";import"./EntityIcon-EqfpZfuw.js";import"./ErrorChip-CJuc6UC8.js";import"./Chip-Deb-rO6G.js";import"./ListItem-YX9FXMYJ.js";import"./listItemButtonClasses-C4DYsQo7.js";const f={title:"Governance/AccessRequirementRelatedProjectsList",component:m},e={args:{accessRequirementId:9603055}},r={args:{accessRequirementId:9605913}},s={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[o.post(`${n}${a}`,()=>{const t={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return c.json(t,{status:200})})]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
