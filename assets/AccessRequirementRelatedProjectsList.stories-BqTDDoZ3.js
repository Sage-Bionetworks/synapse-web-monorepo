import{n as o,b as n,Q as a,H as c}from"./iframe-MmUnwf_I.js";import{A as m}from"./AccessRequirementRelatedProjectsList-K0eFiNer.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-COUUD8qB.js";import"./index-DFpfHoB1.js";import"./_baseOrderBy-CLYcswMr.js";import"./_baseIteratee-DuWwUvju.js";import"./_baseMap-Bk2mvBia.js";import"./_baseEach-CKJISio3.js";import"./useQueries-BtYNrF4R.js";import"./useInfiniteQuery-B-kwFNwz.js";import"./pluralize-DvqWrKl4.js";import"./EntityLink-CIWlwnn0.js";import"./useEntity-Dp_Npi43.js";import"./pickBy-CCWt6Y2F.js";import"./isString-CEdUjgis.js";import"./useSuspenseQuery-BiDsxdrf.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-CYL14dsn.js";import"./useGetEntityHeaders-BYHlx3ny.js";import"./EntityIcon-Bm73zfpi.js";import"./ErrorChip-DIFJGlUz.js";import"./Chip-p99lz26K.js";import"./ListItem-B6oOD1HX.js";import"./listItemButtonClasses-D-FBEpbo.js";const H={title:"Governance/AccessRequirementRelatedProjectsList",component:m},e={args:{accessRequirementId:9603055}},r={args:{accessRequirementId:9605913}},t={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[o.post(`${n}${a}`,()=>{const s={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return c.json(s,{status:200})})]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
