import{s as o,b as n,O as a,H as c}from"./iframe-CtlQt718.js";import{A as m}from"./AccessRequirementRelatedProjectsList-sa8wN--R.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-BU8cqQkl.js";import"./index-BsLL2bsx.js";import"./_baseOrderBy-D43qNHlx.js";import"./_baseIteratee-5SXEVFtE.js";import"./_baseMap-C_NrU3Xc.js";import"./_baseEach-bdqG_XRQ.js";import"./useInfiniteQuery-DXgfUMVI.js";import"./pluralize-DvqWrKl4.js";import"./EntityLink-ChyMX9jP.js";import"./useEntity-DfGflDdN.js";import"./pickBy-C0p9iO4a.js";import"./isString-C2AiwGPF.js";import"./queryOptions-C9woPjwX.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-DMU1fAY0.js";import"./useGetEntityHeaders-DSEEohTj.js";import"./EntityIcon-B6jUu3LO.js";import"./ErrorChip-CF2-34mX.js";import"./Chip-DpB8aqC-.js";import"./ListItem-VfsmfuTr.js";import"./listItemButtonClasses-Bdw6eujR.js";const v={title:"Governance/AccessRequirementRelatedProjectsList",component:m},e={args:{accessRequirementId:9603055}},r={args:{accessRequirementId:9605913}},s={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[o.post(`${n}${a}`,()=>{const t={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return c.json(t,{status:200})})]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const H=["ManyProjects","OneProject","ZeroProjectsMock"];export{e as ManyProjects,r as OneProject,s as ZeroProjectsMock,H as __namedExportsOrder,v as default};
