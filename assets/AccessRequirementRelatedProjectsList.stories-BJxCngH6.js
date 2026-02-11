import{n as o,b as n,Q as a,H as c}from"./iframe-CKkRwo5v.js";import{A as m}from"./AccessRequirementRelatedProjectsList-DYLHWYE1.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-DRtemz2c.js";import"./index-T5CXHaiH.js";import"./_baseOrderBy-Bx7CQqGV.js";import"./_baseIteratee-COPrDePY.js";import"./_baseMap-B36GknGl.js";import"./_baseEach-BM2npHyS.js";import"./useQueries-DAr7Xmz3.js";import"./useInfiniteQuery-D91Hmxok.js";import"./pluralize-DvqWrKl4.js";import"./EntityLink-DuR25SR3.js";import"./useEntity-C_pugPvR.js";import"./pickBy-DnhMagRc.js";import"./isString-Wwui1oe3.js";import"./useSuspenseQuery-vP5ehhR0.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-mjXgY0Yw.js";import"./useGetEntityHeaders-Ct9BkZnW.js";import"./EntityIcon-2WszyjXe.js";import"./ErrorChip-AdQgG4tv.js";import"./Chip-Dbbmbwqm.js";import"./ListItem-y0JfTV8V.js";import"./listItemButtonClasses-CNogcDxo.js";const H={title:"Governance/AccessRequirementRelatedProjectsList",component:m},e={args:{accessRequirementId:9603055}},r={args:{accessRequirementId:9605913}},t={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[o.post(`${n}${a}`,()=>{const s={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return c.json(s,{status:200})})]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    accessRequirementId: 9603055
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    accessRequirementId: 9605913
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const y=["ManyProjects","OneProject","ZeroProjectsMock"];export{e as ManyProjects,r as OneProject,t as ZeroProjectsMock,y as __namedExportsOrder,H as default};
