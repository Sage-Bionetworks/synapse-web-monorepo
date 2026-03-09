import{n as o,b as n,Q as a,H as c}from"./iframe-CMt_VWB6.js";import{A as m}from"./AccessRequirementRelatedProjectsList-zmR-EtNp.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-DaQAx_wL.js";import"./index-CXnGKoIL.js";import"./_baseOrderBy-CkOwEgRy.js";import"./_baseIteratee-B5bSJZ1u.js";import"./_baseMap-CsGQuzjF.js";import"./_baseEach-BoAwORqe.js";import"./useInfiniteQuery-BAQXKU0U.js";import"./pluralize-DvqWrKl4.js";import"./EntityLink-CVK3UIIT.js";import"./useEntity-DjmvQj1X.js";import"./pickBy-Djb2FVbf.js";import"./isString-ip3O_EYI.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-BRn05waU.js";import"./useGetEntityHeaders-C4BI_pXU.js";import"./EntityIcon-C6g3JCkg.js";import"./ErrorChip-BXC1fpnH.js";import"./Chip-CyQCL8kX.js";import"./ListItem-DsZE78Aa.js";import"./listItemButtonClasses-DcR7PE9G.js";const f={title:"Governance/AccessRequirementRelatedProjectsList",component:m},e={args:{accessRequirementId:9603055}},r={args:{accessRequirementId:9605913}},s={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[o.post(`${n}${a}`,()=>{const t={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return c.json(t,{status:200})})]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
