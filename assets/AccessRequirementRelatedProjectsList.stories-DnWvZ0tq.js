import{n as o,b as n,O as a,H as c}from"./iframe-_xC4R-9l.js";import{A as m}from"./AccessRequirementRelatedProjectsList-VDR7RK-a.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements--8vwZ0GX.js";import"./index-CUKFaSIZ.js";import"./_baseOrderBy-DlaZ_3zZ.js";import"./_baseIteratee-qDJ48MbJ.js";import"./_baseMap-BwHlx4Pm.js";import"./_baseEach-BQPGiiEy.js";import"./useQueries-1X25ETRf.js";import"./useInfiniteQuery-_AZmyoIA.js";import"./pluralize-DvqWrKl4.js";import"./EntityLink-B2AHB6yY.js";import"./useEntity-CkbUyaNW.js";import"./pickBy-Da3KKOg8.js";import"./isString-CEuCb2E6.js";import"./useSuspenseQuery-BY1RfPC9.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-B4ZZO_R4.js";import"./useGetEntityHeaders-BkCSwjCX.js";import"./EntityIcon-CWYcSe2S.js";import"./ErrorChip-Ds3v4a9w.js";import"./Chip-m593CfK4.js";import"./ListItem-MZnaYUw3.js";import"./listItemButtonClasses-BMDJa5nh.js";const H={title:"Governance/AccessRequirementRelatedProjectsList",component:m},e={args:{accessRequirementId:9603055}},r={args:{accessRequirementId:9605913}},t={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[o.post(`${n}${a}`,()=>{const s={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return c.json(s,{status:200})})]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
