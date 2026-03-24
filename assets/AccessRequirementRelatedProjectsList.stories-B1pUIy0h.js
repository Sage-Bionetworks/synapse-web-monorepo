import{n as o,b as n,Q as a,H as c}from"./iframe-BmEDGyjb.js";import{A as m}from"./AccessRequirementRelatedProjectsList-DiWIfvx0.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-BeJHirEK.js";import"./index-95w8b1hR.js";import"./_baseOrderBy-CgfTDg7z.js";import"./_baseIteratee-DaFZjSQq.js";import"./_baseMap-g_RvZdBZ.js";import"./_baseEach-D0lChX0L.js";import"./useInfiniteQuery-BckXm8pp.js";import"./pluralize-DvqWrKl4.js";import"./EntityLink-Dt1WP9rB.js";import"./useEntity-556WyfPL.js";import"./pickBy-DD2e3vqq.js";import"./isString-i0acvnu7.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-DqFjpoQY.js";import"./useGetEntityHeaders-BIvRoFv9.js";import"./EntityIcon-DLnRvaVj.js";import"./ErrorChip-CzGEdIEJ.js";import"./Chip-COc0F3aL.js";import"./ListItem-ddX_2ep6.js";import"./listItemButtonClasses-Bg5Hn2Ij.js";const f={title:"Governance/AccessRequirementRelatedProjectsList",component:m},e={args:{accessRequirementId:9603055}},r={args:{accessRequirementId:9605913}},s={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[o.post(`${n}${a}`,()=>{const t={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return c.json(t,{status:200})})]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
