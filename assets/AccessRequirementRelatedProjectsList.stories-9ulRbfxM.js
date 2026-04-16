import{s as o,b as n,O as a,H as c}from"./iframe-Dwm9QZ_I.js";import{A as m}from"./AccessRequirementRelatedProjectsList-BE1Lukws.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-VXF8jzzv.js";import"./index-unwEzT-4.js";import"./_baseOrderBy-BCLGTMTg.js";import"./_baseIteratee-Cmga9963.js";import"./_baseMap-BQV7qzGd.js";import"./_baseEach-CyVnp5d9.js";import"./useInfiniteQuery-uvWeC_ze.js";import"./pluralize-DvqWrKl4.js";import"./EntityLink-BDt_Gt-W.js";import"./useEntity-B1cCiiLS.js";import"./pickBy-BnL0Lcrb.js";import"./isString-Do94spI8.js";import"./queryOptions-C9woPjwX.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-C1BAXjXB.js";import"./useGetEntityHeaders-_5xndYH8.js";import"./EntityIcon-DygvXrri.js";import"./ErrorChip-BYbjZgp9.js";import"./Chip-DSK9YH7S.js";import"./ListItem-C-rQejs7.js";import"./listItemButtonClasses-jAAVPZlU.js";const v={title:"Governance/AccessRequirementRelatedProjectsList",component:m},e={args:{accessRequirementId:9603055}},r={args:{accessRequirementId:9605913}},s={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[o.post(`${n}${a}`,()=>{const t={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return c.json(t,{status:200})})]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
