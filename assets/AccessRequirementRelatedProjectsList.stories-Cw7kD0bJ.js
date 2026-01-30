import{n as o,b as n,O as a,H as c}from"./iframe-DuFc9wy7.js";import{A as m}from"./AccessRequirementRelatedProjectsList-CRRT5NVd.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-CvmgBl8a.js";import"./index-CH5M0AIg.js";import"./_baseOrderBy-DE_-pFzz.js";import"./_baseIteratee-qsGxLCcA.js";import"./_baseMap-CQziI25s.js";import"./_baseEach-BR_mWg9y.js";import"./useQueries-DQWP9YtM.js";import"./useInfiniteQuery-DzgY0_q9.js";import"./pluralize-DvqWrKl4.js";import"./EntityLink-DyUzOJ9x.js";import"./useEntity-B7cW9knU.js";import"./pickBy-BR3FB8tc.js";import"./isString-Hxb7yJlJ.js";import"./useSuspenseQuery-DxSHSM8_.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-4CFtjNR5.js";import"./useGetEntityHeaders-Bb0WFsEd.js";import"./EntityIcon-BcEulVYE.js";import"./ErrorChip-BI-Ibx5e.js";import"./Chip-Bhz-2AzF.js";import"./ListItem-gDoknv0B.js";import"./listItemButtonClasses-FzgRrT9s.js";const H={title:"Governance/AccessRequirementRelatedProjectsList",component:m},e={args:{accessRequirementId:9603055}},r={args:{accessRequirementId:9605913}},t={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[o.post(`${n}${a}`,()=>{const s={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return c.json(s,{status:200})})]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
