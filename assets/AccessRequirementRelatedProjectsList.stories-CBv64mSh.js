import{n as o,b as n,O as a,H as c}from"./iframe-C7rwSIbr.js";import{A as m}from"./AccessRequirementRelatedProjectsList-BmL50m6E.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-CDGfE6As.js";import"./index-Di-Cz18U.js";import"./_baseOrderBy-B3i1xKb7.js";import"./_baseIteratee-RvX3gnAq.js";import"./_baseMap-DlS14YDy.js";import"./_baseEach-B7tQAwJE.js";import"./useQueries-Ch1NNzV5.js";import"./useInfiniteQuery-B_4JrFtn.js";import"./pluralize-DvqWrKl4.js";import"./EntityLink--Nx1-4VJ.js";import"./useEntity-CKCkIYWj.js";import"./pickBy-xqbS2Hav.js";import"./isString-D10AZ56B.js";import"./useSuspenseQuery-SFMk3h0j.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-CWXhfopj.js";import"./useGetEntityHeaders-YKg_s5gg.js";import"./EntityIcon-ClsdALgC.js";import"./ErrorChip-B3ETCfTQ.js";import"./Chip-CdXxtxxp.js";import"./ListItem-8rqI6aFs.js";import"./listItemButtonClasses-2rTXFjyQ.js";const H={title:"Governance/AccessRequirementRelatedProjectsList",component:m},e={args:{accessRequirementId:9603055}},r={args:{accessRequirementId:9605913}},t={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[o.post(`${n}${a}`,()=>{const s={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return c.json(s,{status:200})})]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
