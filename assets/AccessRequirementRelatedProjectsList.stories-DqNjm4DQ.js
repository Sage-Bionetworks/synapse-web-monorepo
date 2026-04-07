import{s as o,b as n,O as a,H as c}from"./iframe-p1uXGzN2.js";import{A as m}from"./AccessRequirementRelatedProjectsList-_u7GCrxz.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-CWIpC9-Y.js";import"./index-B5EXqrid.js";import"./_baseOrderBy-Dmq-bvsO.js";import"./_baseIteratee-CIctm2fK.js";import"./_baseMap-CyND8cEz.js";import"./_baseEach-BJaCKh2_.js";import"./useInfiniteQuery-DTskVG3G.js";import"./pluralize-DvqWrKl4.js";import"./EntityLink-CKng27F_.js";import"./useEntity-_QjOZ_u8.js";import"./pickBy-DFCfhoBP.js";import"./isString-FmH_jacF.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-IpobdzlG.js";import"./useGetEntityHeaders-8ofMEYgr.js";import"./EntityIcon-DPcFg3c5.js";import"./ErrorChip-Froeyf17.js";import"./Chip-D-yl_WD6.js";import"./ListItem-CRnLhEQR.js";import"./listItemButtonClasses-B3WjABaF.js";const f={title:"Governance/AccessRequirementRelatedProjectsList",component:m},e={args:{accessRequirementId:9603055}},r={args:{accessRequirementId:9605913}},s={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[o.post(`${n}${a}`,()=>{const t={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return c.json(t,{status:200})})]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
