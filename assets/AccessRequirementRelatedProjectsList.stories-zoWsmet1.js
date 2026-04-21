import{s as o,b as n,O as a,H as c}from"./iframe-DeCZWsOw.js";import{A as m}from"./AccessRequirementRelatedProjectsList-DhgoOBFE.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-BRAxiTze.js";import"./index-C-sY2UDa.js";import"./_baseOrderBy-CQyk44FF.js";import"./_baseIteratee-CIfFj-z5.js";import"./_baseMap-DC3gc6Nz.js";import"./_baseEach-Dz2eYAP2.js";import"./useInfiniteQuery-U4Po-hj0.js";import"./pluralize-DvqWrKl4.js";import"./EntityLink-Bbl9sRRT.js";import"./useEntity-CBiaU1hI.js";import"./pickBy-B-Moz5ZX.js";import"./isString-B4eYWujz.js";import"./queryOptions-C9woPjwX.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-D0P5jgr-.js";import"./useGetEntityHeaders-BQCi1wlG.js";import"./EntityIcon-YleBpMuR.js";import"./ErrorChip-BDc9RgAj.js";import"./Chip-Zt9ByBCz.js";import"./ListItem-BaWnBC_W.js";import"./listItemButtonClasses-BuwylV9a.js";const v={title:"Governance/AccessRequirementRelatedProjectsList",component:m},e={args:{accessRequirementId:9603055}},r={args:{accessRequirementId:9605913}},s={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[o.post(`${n}${a}`,()=>{const t={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return c.json(t,{status:200})})]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
