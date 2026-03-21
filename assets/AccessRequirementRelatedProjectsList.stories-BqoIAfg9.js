import{n as o,b as n,Q as a,H as c}from"./iframe-BfspjTcY.js";import{A as m}from"./AccessRequirementRelatedProjectsList-BCwYAgeJ.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-Dguv-S1B.js";import"./index-C387dLAZ.js";import"./_baseOrderBy-CpKZf7AP.js";import"./_baseIteratee-BDr_3Jg_.js";import"./_baseMap-ZHm_eqdn.js";import"./_baseEach-CKxKqa6S.js";import"./useInfiniteQuery-FUajPpu4.js";import"./pluralize-DvqWrKl4.js";import"./EntityLink-f00J2Z7v.js";import"./useEntity-FGC_VSuz.js";import"./pickBy-Djadq0qK.js";import"./isString-C5yhpn54.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-DjvZUiVi.js";import"./useGetEntityHeaders-3UT9qbwM.js";import"./EntityIcon-3MOHM1l4.js";import"./ErrorChip-BiIX79kV.js";import"./Chip-BneT6US4.js";import"./ListItem-CmbCyKxv.js";import"./listItemButtonClasses-C-o7y1-n.js";const f={title:"Governance/AccessRequirementRelatedProjectsList",component:m},e={args:{accessRequirementId:9603055}},r={args:{accessRequirementId:9605913}},s={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[o.post(`${n}${a}`,()=>{const t={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return c.json(t,{status:200})})]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
