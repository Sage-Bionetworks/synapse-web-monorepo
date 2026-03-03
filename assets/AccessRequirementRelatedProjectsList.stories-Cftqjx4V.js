import{n as o,b as n,Q as a,H as c}from"./iframe-BkPHOFWj.js";import{A as m}from"./AccessRequirementRelatedProjectsList-CpKR5vkJ.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-DqQWUE3-.js";import"./index-ZxbTHjgY.js";import"./_baseOrderBy-jU331Xzb.js";import"./_baseIteratee-DcTN9bCB.js";import"./_baseMap-BJs1A3zN.js";import"./_baseEach-v_Rhmx0E.js";import"./useInfiniteQuery-CnlPE4i8.js";import"./pluralize-DvqWrKl4.js";import"./EntityLink-sQQ3bXXN.js";import"./useEntity-B0KS4UYv.js";import"./pickBy-CmcKUwMm.js";import"./isString-COEEFKQl.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-CEgBR25T.js";import"./useGetEntityHeaders-B00W8uXq.js";import"./EntityIcon-C5zNp4qx.js";import"./ErrorChip-DQbtc_bx.js";import"./Chip-C5nNw1tU.js";import"./ListItem-C9d7TIRU.js";import"./listItemButtonClasses-AE8LoPH9.js";const f={title:"Governance/AccessRequirementRelatedProjectsList",component:m},e={args:{accessRequirementId:9603055}},r={args:{accessRequirementId:9605913}},s={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[o.post(`${n}${a}`,()=>{const t={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return c.json(t,{status:200})})]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
