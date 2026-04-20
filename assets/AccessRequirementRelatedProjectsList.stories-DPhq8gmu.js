import{s as o,b as n,O as a,H as c}from"./iframe-BnuiMoX_.js";import{A as m}from"./AccessRequirementRelatedProjectsList-Pl2ZGcgg.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-mKJQ9X-A.js";import"./index-Jll9ObM-.js";import"./_baseOrderBy-DRT_m02G.js";import"./_baseIteratee-CAfW7TLG.js";import"./_baseMap-P5cfwgYq.js";import"./_baseEach-BqK8_kug.js";import"./useInfiniteQuery-BmLi_mNn.js";import"./pluralize-DvqWrKl4.js";import"./EntityLink-B-ZzRJv8.js";import"./useEntity-BZdZQARv.js";import"./pickBy-EI1FWKdl.js";import"./isString-fNqKPnY6.js";import"./queryOptions-C9woPjwX.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-Cd9CwkMP.js";import"./useGetEntityHeaders-4nYTpNhU.js";import"./EntityIcon-Cp-E7gZa.js";import"./ErrorChip-CDS4oqJF.js";import"./Chip-iaML2TUf.js";import"./ListItem-D5svrYbh.js";import"./listItemButtonClasses-B1OKIsgL.js";const v={title:"Governance/AccessRequirementRelatedProjectsList",component:m},e={args:{accessRequirementId:9603055}},r={args:{accessRequirementId:9605913}},s={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[o.post(`${n}${a}`,()=>{const t={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return c.json(t,{status:200})})]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
