import{n as o,b as n,Q as a,H as c}from"./iframe-OvMmZLQw.js";import{A as m}from"./AccessRequirementRelatedProjectsList-DxI2NYa1.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-B3Xh28Ol.js";import"./index--E8oFEpF.js";import"./_baseOrderBy-DIkncgGP.js";import"./_baseIteratee-ByJHsXBB.js";import"./_baseMap-DqU8tWvx.js";import"./_baseEach-B6VA7Zf5.js";import"./useQueries-Bl6uHz3x.js";import"./useInfiniteQuery-8PVcqDIl.js";import"./pluralize-DvqWrKl4.js";import"./EntityLink-CWU-p2fP.js";import"./useEntity-BUtNU_xP.js";import"./pickBy-XDNnLnBh.js";import"./isString-BqeewCpc.js";import"./useSuspenseQuery-C4irymMN.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-uaGE46Td.js";import"./useGetEntityHeaders-CcfJ4auE.js";import"./EntityIcon-DaGwdy-v.js";import"./ErrorChip-zFQZtIFj.js";import"./Chip-mRnT2cVS.js";import"./ListItem-B--1rp9b.js";import"./listItemButtonClasses-C37E5EBE.js";const H={title:"Governance/AccessRequirementRelatedProjectsList",component:m},e={args:{accessRequirementId:9603055}},r={args:{accessRequirementId:9605913}},t={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[o.post(`${n}${a}`,()=>{const s={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return c.json(s,{status:200})})]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
