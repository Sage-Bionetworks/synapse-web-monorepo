import{n as o,b as n,Q as a,H as c}from"./iframe-CIPlMaLT.js";import{A as m}from"./AccessRequirementRelatedProjectsList-D7EIskkn.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements--DGVu5sD.js";import"./index-Bv4HrMwv.js";import"./_baseOrderBy-DYXHbJkm.js";import"./_baseIteratee-B2ldj8aD.js";import"./_baseMap-CdpLgayS.js";import"./_baseEach-CqCzLPLD.js";import"./useInfiniteQuery-CTnmUoN7.js";import"./pluralize-DvqWrKl4.js";import"./EntityLink-BhEIneYb.js";import"./useEntity-BsGg4v5z.js";import"./pickBy-BD90Ah8Q.js";import"./isString-DIwi0Tbr.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-bMyYjk_6.js";import"./useGetEntityHeaders-CJwtx42Z.js";import"./EntityIcon-C0K4G23-.js";import"./ErrorChip-PH8R95h7.js";import"./Chip-CesnYDs9.js";import"./ListItem-Wmzual6U.js";import"./listItemButtonClasses-CZQkbgT_.js";const f={title:"Governance/AccessRequirementRelatedProjectsList",component:m},e={args:{accessRequirementId:9603055}},r={args:{accessRequirementId:9605913}},s={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[o.post(`${n}${a}`,()=>{const t={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return c.json(t,{status:200})})]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
