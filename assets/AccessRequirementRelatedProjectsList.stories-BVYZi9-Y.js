import{n as o,b as n,Q as a,H as c}from"./iframe-Du6HmmeA.js";import{A as m}from"./AccessRequirementRelatedProjectsList-Cpn1JUq_.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-DZYtBqti.js";import"./index-IUqGcT1d.js";import"./_baseOrderBy-DmLN6kHS.js";import"./_baseIteratee-BjGF9gaT.js";import"./_baseMap-D7z7svm5.js";import"./_baseEach-BFnmKIH3.js";import"./useInfiniteQuery-C6JA7Ilj.js";import"./pluralize-DvqWrKl4.js";import"./EntityLink-DQB6wGb9.js";import"./useEntity-wRD2FBZ2.js";import"./pickBy-cEEp_iLx.js";import"./isString-Co2d92W-.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-BLpky4Yt.js";import"./useGetEntityHeaders-EVX6ep5I.js";import"./EntityIcon-BatUdWht.js";import"./ErrorChip-DPwQvXgy.js";import"./Chip-CcMLA9LH.js";import"./ListItem-dLoTxdvw.js";import"./listItemButtonClasses-D181yDZA.js";const f={title:"Governance/AccessRequirementRelatedProjectsList",component:m},e={args:{accessRequirementId:9603055}},r={args:{accessRequirementId:9605913}},s={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[o.post(`${n}${a}`,()=>{const t={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return c.json(t,{status:200})})]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
