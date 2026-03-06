import{n as o,b as n,Q as a,H as c}from"./iframe-CAtQIdHN.js";import{A as m}from"./AccessRequirementRelatedProjectsList-htOOnuA5.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-D3aEtsQ7.js";import"./index-DVkiAmff.js";import"./_baseOrderBy-Bs2JefcG.js";import"./_baseIteratee-_Nd2QfE8.js";import"./_baseMap-CXOYZcZC.js";import"./_baseEach-CC59DhCt.js";import"./useInfiniteQuery-BLpRTFv2.js";import"./pluralize-DvqWrKl4.js";import"./EntityLink-C4P1r8ph.js";import"./useEntity-BJFovbK0.js";import"./pickBy-OoY_CQtS.js";import"./isString-Daqzr2H6.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-CNGULn-c.js";import"./useGetEntityHeaders-Gp_cPO_D.js";import"./EntityIcon-BICYYmhZ.js";import"./ErrorChip-C8NCCMDw.js";import"./Chip-CfWpGXU5.js";import"./ListItem-B2k86Eei.js";import"./listItemButtonClasses-DmHw4WH8.js";const f={title:"Governance/AccessRequirementRelatedProjectsList",component:m},e={args:{accessRequirementId:9603055}},r={args:{accessRequirementId:9605913}},s={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[o.post(`${n}${a}`,()=>{const t={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return c.json(t,{status:200})})]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
