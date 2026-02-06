import{n as o,b as n,Q as a,H as c}from"./iframe-D-3jDgkP.js";import{A as m}from"./AccessRequirementRelatedProjectsList-hvCe6WnO.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-CUKfd1Wa.js";import"./index-DB-dn3wn.js";import"./_baseOrderBy-h4Ei6xa1.js";import"./_baseIteratee-DyY3KhVC.js";import"./_baseMap-Ca_HBm0L.js";import"./_baseEach-ChY8cEpb.js";import"./useQueries-C3g3qxiV.js";import"./useInfiniteQuery-C8k1H9sd.js";import"./pluralize-DvqWrKl4.js";import"./EntityLink-CrU9HjCv.js";import"./useEntity-B6svLYEJ.js";import"./pickBy-B4Jk1TTY.js";import"./isString-LRv9Os_2.js";import"./useSuspenseQuery-CtXxGYgq.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-C0BL-9h9.js";import"./useGetEntityHeaders-B8TAoeTj.js";import"./EntityIcon-B-pMevjp.js";import"./ErrorChip-li_66L8y.js";import"./Chip-CH85Kc0i.js";import"./ListItem-oUWFd0jK.js";import"./listItemButtonClasses-dd7ynsmY.js";const H={title:"Governance/AccessRequirementRelatedProjectsList",component:m},e={args:{accessRequirementId:9603055}},r={args:{accessRequirementId:9605913}},t={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[o.post(`${n}${a}`,()=>{const s={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return c.json(s,{status:200})})]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
