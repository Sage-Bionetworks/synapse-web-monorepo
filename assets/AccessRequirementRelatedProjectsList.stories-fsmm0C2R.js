import{n as o,b as n,O as a,H as c}from"./iframe-BCo6xRtR.js";import{A as m}from"./AccessRequirementRelatedProjectsList-SGyGXtcM.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-sEp-Kbc4.js";import"./index-BIDqU31Y.js";import"./_baseOrderBy-gBgr0Ly3.js";import"./_baseIteratee-TfZ3SFX4.js";import"./_baseMap-BjvZOnjw.js";import"./_baseEach-BZ-7nqlo.js";import"./useQueries-DIyvlilN.js";import"./useInfiniteQuery-DNwGIq_T.js";import"./pluralize-DvqWrKl4.js";import"./EntityLink-DJdPJLhP.js";import"./useEntity-DdatXp-C.js";import"./pickBy-7bpIkYUP.js";import"./isString-Bnn4G-E_.js";import"./useSuspenseQuery-DtqIfE1u.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-BlCrwPzV.js";import"./useGetEntityHeaders-BjzsmZSX.js";import"./EntityIcon-BqLf9vw6.js";import"./ErrorChip-BLv3LqXg.js";import"./Chip-_-7K_QD-.js";import"./ListItem-D_ghWDd2.js";import"./listItemButtonClasses-DPiL5uzD.js";const H={title:"Governance/AccessRequirementRelatedProjectsList",component:m},e={args:{accessRequirementId:9603055}},r={args:{accessRequirementId:9605913}},t={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[o.post(`${n}${a}`,()=>{const s={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return c.json(s,{status:200})})]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
