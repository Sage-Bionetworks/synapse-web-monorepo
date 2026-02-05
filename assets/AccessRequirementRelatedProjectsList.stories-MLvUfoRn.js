import{n as o,b as n,O as a,H as c}from"./iframe-CmoSAPSB.js";import{A as m}from"./AccessRequirementRelatedProjectsList-Bd7w2LSP.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-B0jypzSE.js";import"./index-C2zeCRkX.js";import"./_baseOrderBy-CzF72RSC.js";import"./_baseIteratee-DrVRnZ10.js";import"./_baseMap-Bv-goPXo.js";import"./_baseEach-BEIVkryU.js";import"./useQueries-BicLalCF.js";import"./useInfiniteQuery-apdbL5yC.js";import"./pluralize-DvqWrKl4.js";import"./EntityLink-BUGX8Vk6.js";import"./useEntity-BU_W9GNB.js";import"./pickBy-Ce-CCuqq.js";import"./isString-DEA74dYv.js";import"./useSuspenseQuery-BKY6Qa88.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-B66UalsI.js";import"./useGetEntityHeaders-NMjoebvG.js";import"./EntityIcon-B9hast9_.js";import"./ErrorChip-pvUts_Pp.js";import"./Chip-B9lbWoVh.js";import"./ListItem-fgZATpRf.js";import"./listItemButtonClasses-C6QQJw1t.js";const H={title:"Governance/AccessRequirementRelatedProjectsList",component:m},e={args:{accessRequirementId:9603055}},r={args:{accessRequirementId:9605913}},t={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[o.post(`${n}${a}`,()=>{const s={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return c.json(s,{status:200})})]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
