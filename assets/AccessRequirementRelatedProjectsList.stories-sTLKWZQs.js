import{n as o,b as n,Q as a,H as c}from"./iframe-2O6u4SzH.js";import{A as m}from"./AccessRequirementRelatedProjectsList-CWQ4_Las.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-BWgolwog.js";import"./index-D8WZJQs0.js";import"./_baseOrderBy-BUAxPvkr.js";import"./_baseIteratee-DQS7eQMK.js";import"./_baseMap-CKBkbJ2G.js";import"./_baseEach-hos6MCbv.js";import"./useInfiniteQuery-DbGbDORf.js";import"./pluralize-DvqWrKl4.js";import"./EntityLink-DxaVMEaq.js";import"./useEntity-v4dqmZGp.js";import"./pickBy-Dqy7Vrx1.js";import"./isString-10tXgNyR.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-D25d2Lgm.js";import"./useGetEntityHeaders-Dh7kIY7o.js";import"./EntityIcon-Cdnvsec5.js";import"./ErrorChip-BGcIXTqB.js";import"./Chip-Dc7Q2EIH.js";import"./ListItem-CoEHE71A.js";import"./listItemButtonClasses-YQAYCKJ1.js";const f={title:"Governance/AccessRequirementRelatedProjectsList",component:m},e={args:{accessRequirementId:9603055}},r={args:{accessRequirementId:9605913}},s={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[o.post(`${n}${a}`,()=>{const t={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return c.json(t,{status:200})})]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
