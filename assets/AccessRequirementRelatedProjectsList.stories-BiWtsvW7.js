import{n as o,b as n,Q as a,H as c}from"./iframe-CqOjta_N.js";import{A as m}from"./AccessRequirementRelatedProjectsList-CYli_g2n.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-Dj24ol6H.js";import"./index-BRBOZzYG.js";import"./_baseOrderBy-CrOC6Mn0.js";import"./_baseIteratee-Qgts5el_.js";import"./_baseMap-DE06An5T.js";import"./_baseEach-DE_p8oHn.js";import"./useQueries-DQ-K6YXz.js";import"./useInfiniteQuery-BaCRejyT.js";import"./pluralize-DvqWrKl4.js";import"./EntityLink-Dbd66-s9.js";import"./useEntity-BTY_Vrx_.js";import"./pickBy-DCigQKsA.js";import"./isString-CviB6SVY.js";import"./useSuspenseQuery-BD3WNLbV.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-D6jYmZmr.js";import"./useGetEntityHeaders-CFQZnQLN.js";import"./EntityIcon-BXLjmr0A.js";import"./ErrorChip-CPn8AjKg.js";import"./Chip-9i0QEYWa.js";import"./ListItem-DUeR_jRb.js";import"./listItemButtonClasses-BKhNCkCn.js";const H={title:"Governance/AccessRequirementRelatedProjectsList",component:m},e={args:{accessRequirementId:9603055}},r={args:{accessRequirementId:9605913}},t={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[o.post(`${n}${a}`,()=>{const s={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return c.json(s,{status:200})})]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
