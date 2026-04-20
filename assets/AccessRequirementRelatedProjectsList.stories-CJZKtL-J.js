import{s as o,b as n,O as a,H as c}from"./iframe-D6P0nkNQ.js";import{A as m}from"./AccessRequirementRelatedProjectsList-C-0nA_Bq.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements--XIHuGmg.js";import"./index-ClysohDO.js";import"./_baseOrderBy-TCniqArR.js";import"./_baseIteratee-CU8XNsfN.js";import"./_baseMap-c8a03t3y.js";import"./_baseEach-DEfOtqE_.js";import"./useInfiniteQuery-BabK25aM.js";import"./pluralize-DvqWrKl4.js";import"./EntityLink-CdffyvgF.js";import"./useEntity-CYJXIEUn.js";import"./pickBy-n2ZPQlcK.js";import"./isString-BnRjPazD.js";import"./queryOptions-C9woPjwX.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-BU7atwFz.js";import"./useGetEntityHeaders-bIkgrE29.js";import"./EntityIcon-DrCkpZrq.js";import"./ErrorChip-C8AFXqDu.js";import"./Chip-BsvDvlw9.js";import"./ListItem-BD8Vt6Tg.js";import"./listItemButtonClasses-JVruTrVe.js";const v={title:"Governance/AccessRequirementRelatedProjectsList",component:m},e={args:{accessRequirementId:9603055}},r={args:{accessRequirementId:9605913}},s={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[o.post(`${n}${a}`,()=>{const t={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return c.json(t,{status:200})})]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
