import{n as o,b as n,Q as a,H as c}from"./iframe-DCS9ymbE.js";import{A as m}from"./AccessRequirementRelatedProjectsList-BKa7yWQK.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-CFNwm_cr.js";import"./index-BGH17Atw.js";import"./_baseOrderBy-W-KymVih.js";import"./_baseIteratee-3beHZvMb.js";import"./_baseMap-DFIEFFTP.js";import"./_baseEach-Bjn0m_k4.js";import"./useQueries-DqiFrR4N.js";import"./useInfiniteQuery-JlDeuLpM.js";import"./pluralize-DvqWrKl4.js";import"./EntityLink-BSIE3hwb.js";import"./useEntity-BwOnA2wS.js";import"./pickBy-BpwiYU9z.js";import"./isString-DTsCICEq.js";import"./useSuspenseQuery-CJw-BZwU.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-CKp12yOY.js";import"./useGetEntityHeaders-kCux1Mpo.js";import"./EntityIcon-B5afL435.js";import"./ErrorChip-Drefk8d6.js";import"./Chip-DizRxpNc.js";import"./ListItem-Cwt_wPo2.js";import"./listItemButtonClasses-Ux2lmj8-.js";const H={title:"Governance/AccessRequirementRelatedProjectsList",component:m},e={args:{accessRequirementId:9603055}},r={args:{accessRequirementId:9605913}},t={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[o.post(`${n}${a}`,()=>{const s={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return c.json(s,{status:200})})]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
