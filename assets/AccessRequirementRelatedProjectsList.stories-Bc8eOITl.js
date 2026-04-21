import{s as o,b as n,O as a,H as c}from"./iframe-BfPCYB0E.js";import{A as m}from"./AccessRequirementRelatedProjectsList-BewEaEsn.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-XmiC3EAc.js";import"./index-LtIvAFo0.js";import"./_baseOrderBy-BomYH4Yz.js";import"./_baseIteratee-Nxg2-rLG.js";import"./_baseMap-DMrCzabq.js";import"./_baseEach-BAX3P3MS.js";import"./useInfiniteQuery-DBxaVkr7.js";import"./pluralize-DvqWrKl4.js";import"./EntityLink-C33scBKc.js";import"./useEntity-DHIcQkQl.js";import"./pickBy-JCuXjl7E.js";import"./isString-BUiSeu9X.js";import"./queryOptions-C9woPjwX.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-EhsdYR-5.js";import"./useGetEntityHeaders-61LbvBH9.js";import"./EntityIcon-BCL96LFN.js";import"./ErrorChip-BoG8EHf2.js";import"./Chip-CozfZRmm.js";import"./ListItem-CwxPB7Q5.js";import"./listItemButtonClasses-DnXgjUQR.js";const v={title:"Governance/AccessRequirementRelatedProjectsList",component:m},e={args:{accessRequirementId:9603055}},r={args:{accessRequirementId:9605913}},s={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[o.post(`${n}${a}`,()=>{const t={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return c.json(t,{status:200})})]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const H=["ManyProjects","OneProject","ZeroProjectsMock"];export{e as ManyProjects,r as OneProject,s as ZeroProjectsMock,H as __namedExportsOrder,v as default};
