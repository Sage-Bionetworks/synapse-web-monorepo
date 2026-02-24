import{n as o,b as n,Q as a,H as c}from"./iframe-BQS6qtw3.js";import{A as m}from"./AccessRequirementRelatedProjectsList-CiHNfgz6.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-DnjV3O4T.js";import"./index-DIRtHi4A.js";import"./_baseOrderBy-DyNgBBWz.js";import"./_baseIteratee-tzEKu30x.js";import"./_baseMap-D1_qqhz5.js";import"./_baseEach-DGXnFwjl.js";import"./useQueries-CUWRB_Du.js";import"./useInfiniteQuery-CbIRomxB.js";import"./pluralize-DvqWrKl4.js";import"./EntityLink-C7wMFlju.js";import"./useEntity-D-Y1SZCd.js";import"./pickBy-jxgpgMOu.js";import"./isString-ZjUzAhK6.js";import"./useSuspenseQuery-z742AnhG.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-BsZvQjm7.js";import"./useGetEntityHeaders-1Z_5fIsE.js";import"./EntityIcon-xZ-RQSDl.js";import"./ErrorChip-CGDjRB4z.js";import"./Chip-ecDlwPeu.js";import"./ListItem-CHHP6nus.js";import"./listItemButtonClasses-B9xhDk9q.js";const H={title:"Governance/AccessRequirementRelatedProjectsList",component:m},e={args:{accessRequirementId:9603055}},r={args:{accessRequirementId:9605913}},t={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[o.post(`${n}${a}`,()=>{const s={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return c.json(s,{status:200})})]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
