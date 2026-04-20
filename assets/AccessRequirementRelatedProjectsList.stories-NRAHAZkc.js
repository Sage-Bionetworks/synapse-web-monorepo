import{s as o,b as n,O as a,H as c}from"./iframe-BuKUHwYF.js";import{A as m}from"./AccessRequirementRelatedProjectsList-ByXsTPMy.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-TuE0mxTx.js";import"./index-BkSKqIFv.js";import"./_baseOrderBy-CDVPIvfu.js";import"./_baseIteratee-CXSP4y8a.js";import"./_baseMap-C0fo_1yR.js";import"./_baseEach-B9FQUCG9.js";import"./useInfiniteQuery-BrWu3fho.js";import"./pluralize-DvqWrKl4.js";import"./EntityLink-l2Zfm79d.js";import"./useEntity-CSgo2ceg.js";import"./pickBy-B8SdrGtN.js";import"./isString-BCGF8_pc.js";import"./queryOptions-C9woPjwX.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-Bu-4xrzr.js";import"./useGetEntityHeaders-BqSAZcz6.js";import"./EntityIcon-DXm93XDZ.js";import"./ErrorChip-Bf-iuL-2.js";import"./Chip-D3Gu_L5i.js";import"./ListItem-BzWaE6Rk.js";import"./listItemButtonClasses-l-4efrzS.js";const v={title:"Governance/AccessRequirementRelatedProjectsList",component:m},e={args:{accessRequirementId:9603055}},r={args:{accessRequirementId:9605913}},s={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[o.post(`${n}${a}`,()=>{const t={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return c.json(t,{status:200})})]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
