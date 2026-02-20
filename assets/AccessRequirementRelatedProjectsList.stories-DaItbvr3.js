import{n as o,b as n,Q as a,H as c}from"./iframe-BoCRNbsR.js";import{A as m}from"./AccessRequirementRelatedProjectsList-CocZT6Bu.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-DkQ0N4uD.js";import"./index-DSH6M_f8.js";import"./_baseOrderBy-B-jABIUm.js";import"./_baseIteratee-CTfPkNe8.js";import"./_baseMap-m90rBXOw.js";import"./_baseEach-CrkqBzm4.js";import"./useQueries-DDvkrzrG.js";import"./useInfiniteQuery-C7o_Dqt1.js";import"./pluralize-DvqWrKl4.js";import"./EntityLink-Co1VwZuj.js";import"./useEntity-BLxQdrE1.js";import"./pickBy-6pkKX37b.js";import"./isString-1YX391PZ.js";import"./useSuspenseQuery-BPlGfXJb.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-anaddiS5.js";import"./useGetEntityHeaders-Bu0sna_E.js";import"./EntityIcon-BETcrj3P.js";import"./ErrorChip-CB9VFob9.js";import"./Chip-BpnG7Xon.js";import"./ListItem-Bh2QNf2Q.js";import"./listItemButtonClasses-DRvlpZ1L.js";const H={title:"Governance/AccessRequirementRelatedProjectsList",component:m},e={args:{accessRequirementId:9603055}},r={args:{accessRequirementId:9605913}},t={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[o.post(`${n}${a}`,()=>{const s={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return c.json(s,{status:200})})]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
