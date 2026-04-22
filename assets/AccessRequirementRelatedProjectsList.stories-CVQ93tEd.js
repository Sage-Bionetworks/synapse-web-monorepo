import{s as o,b as n,O as a,H as c}from"./iframe-KW3Ki4s5.js";import{A as m}from"./AccessRequirementRelatedProjectsList-xZWDy2_Z.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-CpHsZk-y.js";import"./index-CBVoQ7Md.js";import"./_baseOrderBy-nJrzT3qc.js";import"./_baseIteratee-Cq4s9rvn.js";import"./_baseMap-BQL-gxEZ.js";import"./_baseEach-fBObMu14.js";import"./useInfiniteQuery-B3Zfqdzl.js";import"./pluralize-DvqWrKl4.js";import"./EntityLink-1AqP0csA.js";import"./useEntity-BfHK77a0.js";import"./pickBy-bS4bFqsd.js";import"./isString-BDA1_wrZ.js";import"./queryOptions-C9woPjwX.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-C2a3n16o.js";import"./useGetEntityHeaders-zv2TIPZF.js";import"./EntityIcon-VbOgzeCp.js";import"./ErrorChip-DKuNveDB.js";import"./Chip-M2qGtBYy.js";import"./ListItem-CaeRbkmG.js";import"./listItemButtonClasses-BS-txcj0.js";const v={title:"Governance/AccessRequirementRelatedProjectsList",component:m},e={args:{accessRequirementId:9603055}},r={args:{accessRequirementId:9605913}},s={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[o.post(`${n}${a}`,()=>{const t={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return c.json(t,{status:200})})]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
