import{s as o,b as n,O as a,H as c}from"./iframe-CkqKht9A.js";import{A as m}from"./AccessRequirementRelatedProjectsList-B_31hRRK.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-BGecfaTc.js";import"./index-HFPXFcrl.js";import"./_baseOrderBy-D5qdCMjS.js";import"./_baseIteratee-DkkmHvlR.js";import"./_baseMap-CXPVSq4N.js";import"./_baseEach-BtLnyfgf.js";import"./useInfiniteQuery-BEEFWGUG.js";import"./pluralize-DvqWrKl4.js";import"./EntityLink-DzIyfNRI.js";import"./useEntity-Kb2CejYP.js";import"./pickBy-B2H4A_RN.js";import"./isString-CoHondZR.js";import"./queryOptions-C9woPjwX.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-CA0fBehT.js";import"./useGetEntityHeaders-C95EaXe8.js";import"./EntityIcon-DA-fPqBx.js";import"./ErrorChip-DTu8SpLu.js";import"./Chip-BmVL4eVd.js";import"./ListItem-BCiJtmTu.js";import"./listItemButtonClasses-O3BfULam.js";const v={title:"Governance/AccessRequirementRelatedProjectsList",component:m},e={args:{accessRequirementId:9603055}},r={args:{accessRequirementId:9605913}},s={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[o.post(`${n}${a}`,()=>{const t={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return c.json(t,{status:200})})]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
