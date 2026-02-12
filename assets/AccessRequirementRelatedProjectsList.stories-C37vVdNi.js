import{n as o,b as n,Q as a,H as c}from"./iframe-Es1qDbGP.js";import{A as m}from"./AccessRequirementRelatedProjectsList-CXtk2DSg.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-DYTw_Pge.js";import"./index-BV5A7KqH.js";import"./_baseOrderBy-BkGIHqcP.js";import"./_baseIteratee-mYcJ16Ig.js";import"./_baseMap-loH1m8zG.js";import"./_baseEach-C3zPdy9m.js";import"./useQueries-eWENE-QR.js";import"./useInfiniteQuery-COtoiiDm.js";import"./pluralize-DvqWrKl4.js";import"./EntityLink-BaStRQpA.js";import"./useEntity-hcwalfFt.js";import"./pickBy-DpHz-Dvo.js";import"./isString-DTvs6K00.js";import"./useSuspenseQuery-CeVxUvBp.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-Cpq9fcWX.js";import"./useGetEntityHeaders-B69xvGlR.js";import"./EntityIcon-BKxjFgDO.js";import"./ErrorChip-C2JDtPIl.js";import"./Chip-BzTFnY_r.js";import"./ListItem-0DBm3wmV.js";import"./listItemButtonClasses-D8lNtuSI.js";const H={title:"Governance/AccessRequirementRelatedProjectsList",component:m},e={args:{accessRequirementId:9603055}},r={args:{accessRequirementId:9605913}},t={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[o.post(`${n}${a}`,()=>{const s={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return c.json(s,{status:200})})]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
