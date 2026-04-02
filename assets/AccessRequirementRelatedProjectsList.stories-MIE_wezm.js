import{u as o,a as n,Q as a,H as c}from"./iframe-DW4EtDFR.js";import{A as m}from"./AccessRequirementRelatedProjectsList-D2_TbHmJ.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-Bx-a7XZ6.js";import"./index-BLzBB5Yr.js";import"./_baseOrderBy-BtuaxwW1.js";import"./_baseIteratee-B5nmCdgY.js";import"./_baseMap-j4TtnkBh.js";import"./_baseEach-DJgCo8iQ.js";import"./useInfiniteQuery-ZPKFav0H.js";import"./pluralize-DvqWrKl4.js";import"./EntityLink-DKmszXch.js";import"./useEntity-Br6tMZiC.js";import"./pickBy-DLXoSZ5t.js";import"./isString-BpTDfkdd.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-CgWKW-Dr.js";import"./useGetEntityHeaders-_0Pc_0hH.js";import"./EntityIcon-DGgzKS3-.js";import"./ErrorChip-D5ySMl9c.js";import"./Chip-CUP-lTls.js";import"./ListItem-BVKcch1j.js";import"./listItemButtonClasses-B4kVsD_z.js";const f={title:"Governance/AccessRequirementRelatedProjectsList",component:m},e={args:{accessRequirementId:9603055}},r={args:{accessRequirementId:9605913}},s={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[o.post(`${n}${a}`,()=>{const t={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return c.json(t,{status:200})})]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
