import{n as o,b as n,O as a,H as c}from"./iframe-DrCEazsW.js";import{A as m}from"./AccessRequirementRelatedProjectsList-DpfG7bi9.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-vxNOeDz5.js";import"./index-Bxv-iQH3.js";import"./_baseOrderBy-DFkEE16g.js";import"./_baseIteratee-s9gtzg3G.js";import"./_baseMap-DjbTSRZA.js";import"./_baseEach-BI8KWHZ6.js";import"./useQueries-DvWk4uuh.js";import"./useInfiniteQuery-Bi9tYdtQ.js";import"./pluralize-DvqWrKl4.js";import"./EntityLink-B_-Ose9S.js";import"./useEntity-BtnzEjDW.js";import"./pickBy-DY3T_7Uu.js";import"./isString-CXb79rfM.js";import"./useSuspenseQuery-DQ6p8VKt.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-GemdhLWE.js";import"./useGetEntityHeaders-K5yyZGuQ.js";import"./EntityIcon-l2U_0ffN.js";import"./ErrorChip-CVpKcldq.js";import"./Chip-DN_sqkiV.js";import"./ListItem-BRzpHifX.js";import"./listItemButtonClasses-DDwCKa2g.js";const H={title:"Governance/AccessRequirementRelatedProjectsList",component:m},e={args:{accessRequirementId:9603055}},r={args:{accessRequirementId:9605913}},t={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[o.post(`${n}${a}`,()=>{const s={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return c.json(s,{status:200})})]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
