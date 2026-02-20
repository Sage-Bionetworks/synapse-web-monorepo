import{n as o,b as n,Q as a,H as c}from"./iframe-Cb9YNozx.js";import{A as m}from"./AccessRequirementRelatedProjectsList-C4y-iyI5.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-BsGhfNJc.js";import"./index-_wJIgEa8.js";import"./_baseOrderBy-B50alGxt.js";import"./_baseIteratee-Crm1dtkV.js";import"./_baseMap-CaFbY6tk.js";import"./_baseEach-C8hjnQXk.js";import"./useQueries-Ba1QGbRl.js";import"./useInfiniteQuery-CgLSPwL6.js";import"./pluralize-DvqWrKl4.js";import"./EntityLink-Bq5aA7eq.js";import"./useEntity-DyZqXoe_.js";import"./pickBy-Itep66an.js";import"./isString-T56SNEqc.js";import"./useSuspenseQuery-DijQnciR.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-CG9M7-op.js";import"./useGetEntityHeaders-CEVXDtlt.js";import"./EntityIcon-B8U_8kzl.js";import"./ErrorChip-By_w8XiF.js";import"./Chip-DkiZ-DGD.js";import"./ListItem-DmdFXjd_.js";import"./listItemButtonClasses-BiDZNeUi.js";const H={title:"Governance/AccessRequirementRelatedProjectsList",component:m},e={args:{accessRequirementId:9603055}},r={args:{accessRequirementId:9605913}},t={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[o.post(`${n}${a}`,()=>{const s={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return c.json(s,{status:200})})]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
