import{n as o,b as n,Q as a,H as c}from"./iframe-BoxuKy9E.js";import{A as m}from"./AccessRequirementRelatedProjectsList-FkW4663Y.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-DTI3EWsr.js";import"./index-Log0dJvg.js";import"./_baseOrderBy-a7LEQnpv.js";import"./_baseIteratee-DjnxVzYp.js";import"./_baseMap-n6KAJL3v.js";import"./_baseEach-D_05QTIw.js";import"./useInfiniteQuery-BcQtjXyf.js";import"./pluralize-DvqWrKl4.js";import"./EntityLink-BrZLz9ty.js";import"./useEntity-DZwAKLC3.js";import"./pickBy-CU-qiH3K.js";import"./isString-cGe6Knce.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-BedGSkPc.js";import"./useGetEntityHeaders-BLM6vhhZ.js";import"./EntityIcon-RuyaSbD0.js";import"./ErrorChip-DzaP61YR.js";import"./Chip-BVijHoac.js";import"./ListItem-Cy5KTyCf.js";import"./listItemButtonClasses-CvbEJXfZ.js";const f={title:"Governance/AccessRequirementRelatedProjectsList",component:m},e={args:{accessRequirementId:9603055}},r={args:{accessRequirementId:9605913}},s={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[o.post(`${n}${a}`,()=>{const t={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return c.json(t,{status:200})})]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
