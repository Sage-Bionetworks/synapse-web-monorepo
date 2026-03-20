import{n as o,b as n,Q as a,H as c}from"./iframe-CDThL800.js";import{A as m}from"./AccessRequirementRelatedProjectsList-DO72wlfn.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-DqPM-gQd.js";import"./index-BZVSFT2Q.js";import"./_baseOrderBy-Bk20ImG4.js";import"./_baseIteratee-v5oFDp_8.js";import"./_baseMap-BzsjZ0ef.js";import"./_baseEach-C_MJJvSQ.js";import"./useInfiniteQuery-Cp7Kwu84.js";import"./pluralize-DvqWrKl4.js";import"./EntityLink-DXfwKyac.js";import"./useEntity-a1JV8O5f.js";import"./pickBy-D4LV4kin.js";import"./isString-kiX4Blh2.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-vftcMZZQ.js";import"./useGetEntityHeaders-DnHNdeot.js";import"./EntityIcon-Hd5HGN34.js";import"./ErrorChip-DcNe_U-7.js";import"./Chip-DKZciXua.js";import"./ListItem-DQYb0Uxh.js";import"./listItemButtonClasses-Cg2nCnuj.js";const f={title:"Governance/AccessRequirementRelatedProjectsList",component:m},e={args:{accessRequirementId:9603055}},r={args:{accessRequirementId:9605913}},s={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[o.post(`${n}${a}`,()=>{const t={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return c.json(t,{status:200})})]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
