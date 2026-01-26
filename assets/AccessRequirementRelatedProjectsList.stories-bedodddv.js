import{n as o,b as n,O as a,H as c}from"./iframe-BZ6Cksnd.js";import{A as m}from"./AccessRequirementRelatedProjectsList-CAh4tI7b.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-SqP5N62U.js";import"./index-DT9MyxYS.js";import"./_baseOrderBy-DL8E65ut.js";import"./_baseIteratee-MHolBcN4.js";import"./_baseMap-DChNRkmg.js";import"./_baseEach-Dx2X7r9r.js";import"./useQueries-Dko-e5-x.js";import"./useInfiniteQuery-Cab2Nvsr.js";import"./pluralize-DvqWrKl4.js";import"./EntityLink-B3RskAuj.js";import"./useEntity-G_TXiFsJ.js";import"./pickBy-BNVHpo-c.js";import"./isString-CQsMPZlF.js";import"./useSuspenseQuery-BArtp2Wi.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-r_DKGK-Q.js";import"./useGetEntityHeaders-BzEJSnYd.js";import"./EntityIcon-BGUje8zP.js";import"./ErrorChip-DLtKCdD2.js";import"./Chip-CRcycbBa.js";import"./ListItem-BT6nkyPP.js";import"./listItemButtonClasses-d2SUOwj6.js";const H={title:"Governance/AccessRequirementRelatedProjectsList",component:m},e={args:{accessRequirementId:9603055}},r={args:{accessRequirementId:9605913}},t={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[o.post(`${n}${a}`,()=>{const s={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return c.json(s,{status:200})})]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    accessRequirementId: 9603055
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    accessRequirementId: 9605913
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const y=["ManyProjects","OneProject","ZeroProjectsMock"];export{e as ManyProjects,r as OneProject,t as ZeroProjectsMock,y as __namedExportsOrder,H as default};
