import{n as o,b as n,Q as a,H as c}from"./iframe-C0jSrR5c.js";import{A as m}from"./AccessRequirementRelatedProjectsList-o0nZbbtH.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-Bd_mtqDV.js";import"./index-BLHQs1Hh.js";import"./_baseOrderBy-Bupo46Rb.js";import"./_baseIteratee-v5Xqf9Y2.js";import"./_baseMap-9KwVBg8u.js";import"./_baseEach-C3bTbgFj.js";import"./useQueries-BEt-pfoU.js";import"./useInfiniteQuery-Dm7YsOQW.js";import"./pluralize-DvqWrKl4.js";import"./EntityLink-CpUuLKV7.js";import"./useEntity-EZ3XPIs0.js";import"./pickBy-SdRtXwSN.js";import"./isString-DxWdCZf8.js";import"./useSuspenseQuery-CHrCTvKw.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-De80g6tx.js";import"./useGetEntityHeaders-DAhcw3hW.js";import"./EntityIcon-Zd346r6L.js";import"./ErrorChip-DtXUTgce.js";import"./Chip-DsSr72e_.js";import"./ListItem-FrRRWul4.js";import"./listItemButtonClasses-BVYTYtx4.js";const H={title:"Governance/AccessRequirementRelatedProjectsList",component:m},e={args:{accessRequirementId:9603055}},r={args:{accessRequirementId:9605913}},t={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[o.post(`${n}${a}`,()=>{const s={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return c.json(s,{status:200})})]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
