import{n as o,b as n,Q as a,H as c}from"./iframe-D5Jb4H7-.js";import{A as m}from"./AccessRequirementRelatedProjectsList-stPROLk2.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-C-6hKSKQ.js";import"./index-Q_YFCtqN.js";import"./_baseOrderBy-SdmGa5Wt.js";import"./_baseIteratee-HfADOLmS.js";import"./_baseMap-CBAREHGg.js";import"./_baseEach-CkgraRbj.js";import"./useQueries-DOSq_bEV.js";import"./useInfiniteQuery-mtij9nHQ.js";import"./pluralize-DvqWrKl4.js";import"./EntityLink-Ca6O3OJe.js";import"./useEntity-exkOcAkG.js";import"./pickBy-DE0BKS3V.js";import"./isString-DLUNOE4s.js";import"./useSuspenseQuery-CJo7dxig.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-DXcgUWEE.js";import"./useGetEntityHeaders-DvIcjdbt.js";import"./EntityIcon-BFQwZiQm.js";import"./ErrorChip-CHGU2B0I.js";import"./Chip-BPCELKLJ.js";import"./ListItem-7z5wm-H2.js";import"./listItemButtonClasses-D_p-rgYX.js";const H={title:"Governance/AccessRequirementRelatedProjectsList",component:m},e={args:{accessRequirementId:9603055}},r={args:{accessRequirementId:9605913}},t={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[o.post(`${n}${a}`,()=>{const s={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return c.json(s,{status:200})})]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
