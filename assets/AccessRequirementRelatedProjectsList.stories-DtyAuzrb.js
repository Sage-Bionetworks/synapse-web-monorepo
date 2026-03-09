import{n as o,b as n,Q as a,H as c}from"./iframe-BVhGOjHR.js";import{A as m}from"./AccessRequirementRelatedProjectsList-DKl3lv3Z.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-Q8h5xGM7.js";import"./index-B8gzQCaZ.js";import"./_baseOrderBy-CVvrlgtk.js";import"./_baseIteratee-Ck-dt1hT.js";import"./_baseMap-C3_dlTWv.js";import"./_baseEach-DdsX8oqy.js";import"./useInfiniteQuery-DBGOhcL0.js";import"./pluralize-DvqWrKl4.js";import"./EntityLink-Clk7gaoK.js";import"./useEntity-B8pNOBp6.js";import"./pickBy-Ch7pvodo.js";import"./isString-Ddretr-d.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-B5tPR1Ac.js";import"./useGetEntityHeaders-BuUNd2YD.js";import"./EntityIcon-D873_rmf.js";import"./ErrorChip-s_3DFfdC.js";import"./Chip-DZiNGCO2.js";import"./ListItem-BrIwjY3U.js";import"./listItemButtonClasses-CguTVZpn.js";const f={title:"Governance/AccessRequirementRelatedProjectsList",component:m},e={args:{accessRequirementId:9603055}},r={args:{accessRequirementId:9605913}},s={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[o.post(`${n}${a}`,()=>{const t={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return c.json(t,{status:200})})]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
