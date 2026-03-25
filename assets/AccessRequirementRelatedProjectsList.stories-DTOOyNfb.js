import{n as o,b as n,Q as a,H as c}from"./iframe-BnwOOxVB.js";import{A as m}from"./AccessRequirementRelatedProjectsList-CIuX95ly.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-DZU0KuhL.js";import"./index-BWFWUV0I.js";import"./_baseOrderBy-EvR_akUg.js";import"./_baseIteratee-B9myDPIW.js";import"./_baseMap-Bsco3WZ-.js";import"./_baseEach-D1jaI2sf.js";import"./useInfiniteQuery-1s6_iIB7.js";import"./pluralize-DvqWrKl4.js";import"./EntityLink-Dvyvye-H.js";import"./useEntity-UkRqMMHl.js";import"./pickBy-Bjj4ZDBL.js";import"./isString-okp__rGt.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-DuqX2qT_.js";import"./useGetEntityHeaders-BMZfaAWz.js";import"./EntityIcon-D4FtD9Jt.js";import"./ErrorChip-C7WG5rED.js";import"./Chip-B5d3JXK1.js";import"./ListItem-DFximy5l.js";import"./listItemButtonClasses-DGgrJKdk.js";const f={title:"Governance/AccessRequirementRelatedProjectsList",component:m},e={args:{accessRequirementId:9603055}},r={args:{accessRequirementId:9605913}},s={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[o.post(`${n}${a}`,()=>{const t={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return c.json(t,{status:200})})]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
