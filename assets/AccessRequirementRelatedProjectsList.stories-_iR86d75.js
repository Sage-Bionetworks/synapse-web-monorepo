import{n as o,b as n,O as a,H as c}from"./iframe-z21gSILm.js";import{A as m}from"./AccessRequirementRelatedProjectsList-CbWRGNR-.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-BkOw6L9o.js";import"./index-BRmRy84u.js";import"./_baseOrderBy-BuzTgFRM.js";import"./_baseIteratee-K4gGkGhX.js";import"./_baseMap-9TWFIhh_.js";import"./_baseEach-BjqsPzRj.js";import"./useQueries-BqopBRXG.js";import"./useInfiniteQuery-DViYzGwW.js";import"./pluralize-DvqWrKl4.js";import"./EntityLink-BQ0KIBmD.js";import"./useEntity-DnU3C6M5.js";import"./pickBy-C38-sRNI.js";import"./isString-BfwWT6Hp.js";import"./useSuspenseQuery-BDbBJqHo.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-hKGlFwyR.js";import"./useGetEntityHeaders-D3YVm3Gg.js";import"./EntityIcon-BI2gxiJM.js";import"./ErrorChip-Djh_fclV.js";import"./Chip-rCXgsppD.js";import"./ListItem-Cc1k8A6D.js";import"./listItemButtonClasses-Oj7JTGQ5.js";const H={title:"Governance/AccessRequirementRelatedProjectsList",component:m},e={args:{accessRequirementId:9603055}},r={args:{accessRequirementId:9605913}},t={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[o.post(`${n}${a}`,()=>{const s={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return c.json(s,{status:200})})]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
