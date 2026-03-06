import{n as o,b as n,Q as a,H as c}from"./iframe-Ak5JkJtY.js";import{A as m}from"./AccessRequirementRelatedProjectsList-DeqYrl9e.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-9va52kNa.js";import"./index-DhBGOdhC.js";import"./_baseOrderBy-B5C28sMC.js";import"./_baseIteratee-BXsmtn2r.js";import"./_baseMap-BDo9iXyH.js";import"./_baseEach-Czuq5CBY.js";import"./useInfiniteQuery-BIO-789Q.js";import"./pluralize-DvqWrKl4.js";import"./EntityLink-RO3g8mfv.js";import"./useEntity-BDEACah7.js";import"./pickBy-eunfHSHr.js";import"./isString-BNwI_j1J.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-DrUTqZYy.js";import"./useGetEntityHeaders-O04KsngJ.js";import"./EntityIcon-BAHaVXax.js";import"./ErrorChip-DE9Qp1oS.js";import"./Chip-rT4uyFgK.js";import"./ListItem-CfMMKAHf.js";import"./listItemButtonClasses-BHpZ8CPe.js";const f={title:"Governance/AccessRequirementRelatedProjectsList",component:m},e={args:{accessRequirementId:9603055}},r={args:{accessRequirementId:9605913}},s={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[o.post(`${n}${a}`,()=>{const t={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return c.json(t,{status:200})})]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
