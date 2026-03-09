import{n as o,b as n,Q as a,H as c}from"./iframe-B-ViuSv9.js";import{A as m}from"./AccessRequirementRelatedProjectsList-Cr29-Vx_.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-DtI3-BAf.js";import"./index-N4ikXHAo.js";import"./_baseOrderBy-DrVzQcaL.js";import"./_baseIteratee-BksGswVt.js";import"./_baseMap-CAKhQWbA.js";import"./_baseEach-BEUDsluR.js";import"./useInfiniteQuery-vlKUWQr_.js";import"./pluralize-DvqWrKl4.js";import"./EntityLink-Dpgbsgnu.js";import"./useEntity-DsGEj5CP.js";import"./pickBy-DbnEGlxu.js";import"./isString-C3U7md_q.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-DBJb4iNa.js";import"./useGetEntityHeaders-v36z9svG.js";import"./EntityIcon-MPHgMq3A.js";import"./ErrorChip-CoZJvQZw.js";import"./Chip-CMkns0F1.js";import"./ListItem-BI8NMSIJ.js";import"./listItemButtonClasses-BPaLvI69.js";const f={title:"Governance/AccessRequirementRelatedProjectsList",component:m},e={args:{accessRequirementId:9603055}},r={args:{accessRequirementId:9605913}},s={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[o.post(`${n}${a}`,()=>{const t={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return c.json(t,{status:200})})]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
