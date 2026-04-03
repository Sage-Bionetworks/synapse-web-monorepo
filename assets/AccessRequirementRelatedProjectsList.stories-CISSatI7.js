import{s as o,b as n,O as a,H as c}from"./iframe-AuqRm6Xj.js";import{A as m}from"./AccessRequirementRelatedProjectsList-DsdPhKtg.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-CAqgXTxN.js";import"./index-D5YJAeH4.js";import"./_baseOrderBy-QA6TCxfl.js";import"./_baseIteratee-VmDtVic5.js";import"./_baseMap-B9GZp46S.js";import"./_baseEach-CbR7Csp5.js";import"./useInfiniteQuery-CwU4w13D.js";import"./pluralize-DvqWrKl4.js";import"./EntityLink-DOi20-gG.js";import"./useEntity-C-6R0MnF.js";import"./pickBy-C1skkiRy.js";import"./isString-CmiKb-kR.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-DhR_HRI3.js";import"./useGetEntityHeaders-DXbBnZmt.js";import"./EntityIcon-B-LU0QLq.js";import"./ErrorChip-CgEeHnEz.js";import"./Chip-DC7pM5qx.js";import"./ListItem-BjxUNqaO.js";import"./listItemButtonClasses-Bdg07ZGq.js";const f={title:"Governance/AccessRequirementRelatedProjectsList",component:m},e={args:{accessRequirementId:9603055}},r={args:{accessRequirementId:9605913}},s={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[o.post(`${n}${a}`,()=>{const t={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return c.json(t,{status:200})})]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
