import{s as o,b as n,O as a,H as c}from"./iframe-C4gfjmJw.js";import{A as m}from"./AccessRequirementRelatedProjectsList-CEr4ZBWp.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-CjFFVIfw.js";import"./index-XCAB_K8P.js";import"./_baseOrderBy-BKLqs-oK.js";import"./_baseIteratee-Dz35VWMi.js";import"./_baseMap-DkFsmMNY.js";import"./_baseEach-kgydWJu2.js";import"./useInfiniteQuery-R-HWjYUM.js";import"./pluralize-DvqWrKl4.js";import"./EntityLink-p3_lbCJg.js";import"./useEntity-B8ZSyINM.js";import"./pickBy-B-9RPfBW.js";import"./isString-BCzxW86Q.js";import"./queryOptions-C9woPjwX.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-BJFjglAu.js";import"./useGetEntityHeaders-Bv69iV7X.js";import"./EntityIcon-B4sEsvxU.js";import"./ErrorChip-CIY9Fq_f.js";import"./Chip-DjisOeCN.js";import"./ListItem-B_w-e8lR.js";import"./listItemButtonClasses-CtCO37B-.js";const v={title:"Governance/AccessRequirementRelatedProjectsList",component:m},e={args:{accessRequirementId:9603055}},r={args:{accessRequirementId:9605913}},s={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[o.post(`${n}${a}`,()=>{const t={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return c.json(t,{status:200})})]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const H=["ManyProjects","OneProject","ZeroProjectsMock"];export{e as ManyProjects,r as OneProject,s as ZeroProjectsMock,H as __namedExportsOrder,v as default};
