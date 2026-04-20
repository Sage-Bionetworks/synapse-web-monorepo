import{s as o,b as n,O as a,H as c}from"./iframe-CFYObmv2.js";import{A as m}from"./AccessRequirementRelatedProjectsList-DFRymyKd.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-WsNzyT70.js";import"./index-DTq8PnfG.js";import"./_baseOrderBy-lQa05oOf.js";import"./_baseIteratee-BYzSMaDv.js";import"./_baseMap-YiQ3K5X2.js";import"./_baseEach-CNVYPDDa.js";import"./useInfiniteQuery-DrJ287ay.js";import"./pluralize-DvqWrKl4.js";import"./EntityLink-zxE33EzG.js";import"./useEntity-Dm7QhD3_.js";import"./pickBy-C9MrKhu7.js";import"./isString-CpJrndPS.js";import"./queryOptions-C9woPjwX.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-CeCyyWeM.js";import"./useGetEntityHeaders-eRjC93R7.js";import"./EntityIcon-iiqg0nQF.js";import"./ErrorChip-CRkOkrIe.js";import"./Chip-DVyYNIMf.js";import"./ListItem-BF6lJWtr.js";import"./listItemButtonClasses-tdOIFwDw.js";const v={title:"Governance/AccessRequirementRelatedProjectsList",component:m},e={args:{accessRequirementId:9603055}},r={args:{accessRequirementId:9605913}},s={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[o.post(`${n}${a}`,()=>{const t={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return c.json(t,{status:200})})]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
