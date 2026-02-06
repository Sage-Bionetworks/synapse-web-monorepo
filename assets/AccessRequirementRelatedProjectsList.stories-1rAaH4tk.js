import{n as o,b as n,Q as a,H as c}from"./iframe-CL1UF9wq.js";import{A as m}from"./AccessRequirementRelatedProjectsList-BUlIDaF0.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-h24F7TBD.js";import"./index-D_p7qk7E.js";import"./_baseOrderBy-BNZ_rKpc.js";import"./_baseIteratee-DMV55V0L.js";import"./_baseMap-OqYiEbFz.js";import"./_baseEach-Bcjl1bpK.js";import"./useQueries-NvxyI8_9.js";import"./useInfiniteQuery-DWi368jF.js";import"./pluralize-DvqWrKl4.js";import"./EntityLink-CwwiTXLB.js";import"./useEntity-D195lckg.js";import"./pickBy-Dh62N0PQ.js";import"./isString-Bk_2wf3u.js";import"./useSuspenseQuery-LePCNQBH.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-BEcFfxs5.js";import"./useGetEntityHeaders-CyRN7NGS.js";import"./EntityIcon-Cx60DiI_.js";import"./ErrorChip-CzlSJgzl.js";import"./Chip-DXWiT4yo.js";import"./ListItem-BwABetlb.js";import"./listItemButtonClasses-C02VQ1J6.js";const H={title:"Governance/AccessRequirementRelatedProjectsList",component:m},e={args:{accessRequirementId:9603055}},r={args:{accessRequirementId:9605913}},t={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[o.post(`${n}${a}`,()=>{const s={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return c.json(s,{status:200})})]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
