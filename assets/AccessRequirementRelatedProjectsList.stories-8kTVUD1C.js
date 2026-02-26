import{n as o,b as n,Q as a,H as c}from"./iframe-B7KGf7-k.js";import{A as m}from"./AccessRequirementRelatedProjectsList-DcFo-jm2.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-C16fleld.js";import"./index-bUombD9c.js";import"./_baseOrderBy-Dwvk5Ids.js";import"./_baseIteratee-DRGNglyf.js";import"./_baseMap-cJAH5Rrm.js";import"./_baseEach-1iQAkd9B.js";import"./useInfiniteQuery-DoSxFn_y.js";import"./pluralize-DvqWrKl4.js";import"./EntityLink-B8G6GcB6.js";import"./useEntity-BEZrwshI.js";import"./pickBy-DA-_w30I.js";import"./isString-Cj2KjwPP.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-DzCWwzL7.js";import"./useGetEntityHeaders-BbaRgZNW.js";import"./EntityIcon-KjQ62OTa.js";import"./ErrorChip-Dt1AJr5o.js";import"./Chip-BchH_Wga.js";import"./ListItem-BFUFNJ5l.js";import"./listItemButtonClasses-DEJZgMDS.js";const f={title:"Governance/AccessRequirementRelatedProjectsList",component:m},e={args:{accessRequirementId:9603055}},r={args:{accessRequirementId:9605913}},s={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[o.post(`${n}${a}`,()=>{const t={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return c.json(t,{status:200})})]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
