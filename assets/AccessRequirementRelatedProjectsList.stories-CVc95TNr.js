import{n as o,b as n,Q as a,H as c}from"./iframe-C1Apx41K.js";import{A as m}from"./AccessRequirementRelatedProjectsList-B-BaB483.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-CjVWhuJJ.js";import"./index-BNzSHHEP.js";import"./_baseOrderBy-BIgAoXIE.js";import"./_baseIteratee-8Sc6B18w.js";import"./_baseMap-B8Y4JFJ6.js";import"./_baseEach-Ckpa6zJd.js";import"./useQueries-BXoScF_u.js";import"./useInfiniteQuery-Bd6Dhm29.js";import"./pluralize-DvqWrKl4.js";import"./EntityLink-BDwrgyPq.js";import"./useEntity-794crS3g.js";import"./pickBy-jnwZacz8.js";import"./isString-CUqikMn2.js";import"./useSuspenseQuery-CWXsXeM-.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-DAt6tMDa.js";import"./useGetEntityHeaders-BSjmtArL.js";import"./EntityIcon-Aebv3HJd.js";import"./ErrorChip-BWcd6JBg.js";import"./Chip-S_uffPL4.js";import"./ListItem-p1vUKAzn.js";import"./listItemButtonClasses-8X19HTZJ.js";const H={title:"Governance/AccessRequirementRelatedProjectsList",component:m},e={args:{accessRequirementId:9603055}},r={args:{accessRequirementId:9605913}},t={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[o.post(`${n}${a}`,()=>{const s={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return c.json(s,{status:200})})]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
