import{n as o,b as n,Q as a,H as c}from"./iframe-Bppf-2Xb.js";import{A as m}from"./AccessRequirementRelatedProjectsList-B7PMlfpM.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-Dzw2qzMw.js";import"./index-Cee3WZrY.js";import"./_baseOrderBy-drfuHX7W.js";import"./_baseIteratee-1VZeL6zj.js";import"./_baseMap-Cd31eUCi.js";import"./_baseEach-1yxKPV3_.js";import"./useInfiniteQuery-B_o5exK7.js";import"./pluralize-DvqWrKl4.js";import"./EntityLink-C8Oz1V9M.js";import"./useEntity-CPxUyPJP.js";import"./pickBy-B-6VfkUC.js";import"./isString-VAhxbzMi.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-Cgh82wex.js";import"./useGetEntityHeaders-u5h7Tawg.js";import"./EntityIcon-C9xs6KQ1.js";import"./ErrorChip-CRJdg5zQ.js";import"./Chip-B-8xLvKL.js";import"./ListItem-Bk_1syXI.js";import"./listItemButtonClasses-DCoAU_xh.js";const f={title:"Governance/AccessRequirementRelatedProjectsList",component:m},e={args:{accessRequirementId:9603055}},r={args:{accessRequirementId:9605913}},s={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[o.post(`${n}${a}`,()=>{const t={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return c.json(t,{status:200})})]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const v=["ManyProjects","OneProject","ZeroProjectsMock"];export{e as ManyProjects,r as OneProject,s as ZeroProjectsMock,v as __namedExportsOrder,f as default};
