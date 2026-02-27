import{n as o,b as n,Q as a,H as c}from"./iframe-D5fi-UCI.js";import{A as m}from"./AccessRequirementRelatedProjectsList-ngP2he0u.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-1DEUDwY-.js";import"./index-B56RpF6G.js";import"./_baseOrderBy-413dCsCn.js";import"./_baseIteratee-BYNmJDpT.js";import"./_baseMap-CzQRQ99N.js";import"./_baseEach-M2k7E20T.js";import"./useInfiniteQuery-CAh9MY-H.js";import"./pluralize-DvqWrKl4.js";import"./EntityLink-BF5GTh_x.js";import"./useEntity-DZBcJwIJ.js";import"./pickBy-CM25teq7.js";import"./isString-qWB6MhPe.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-CGvoFaMT.js";import"./useGetEntityHeaders-DNjL00D9.js";import"./EntityIcon-CodVHMlC.js";import"./ErrorChip-BACl_teu.js";import"./Chip-B5Ta4kZT.js";import"./ListItem-CDmLrxcZ.js";import"./listItemButtonClasses-DM81AST1.js";const f={title:"Governance/AccessRequirementRelatedProjectsList",component:m},e={args:{accessRequirementId:9603055}},r={args:{accessRequirementId:9605913}},s={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[o.post(`${n}${a}`,()=>{const t={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return c.json(t,{status:200})})]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
