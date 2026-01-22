import{n as o,b as n,O as a,H as c}from"./iframe-Du5t3CHa.js";import{A as m}from"./AccessRequirementRelatedProjectsList-CVUIklQf.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-4RQqBe7C.js";import"./index-CNn6qoPA.js";import"./_baseOrderBy-3Fjog4iC.js";import"./_baseIteratee-46oxJqcI.js";import"./_baseMap-Dt6qK5dy.js";import"./_baseEach-C0b7CaDS.js";import"./useQueries-CNFOi_mw.js";import"./useInfiniteQuery-OCUbEd9y.js";import"./pluralize-DvqWrKl4.js";import"./EntityLink-T0wxriNP.js";import"./useEntity-CDeYLYkU.js";import"./pickBy-DTHw_VPu.js";import"./isString-Rffp6-yY.js";import"./useSuspenseQuery-DK6Y2lqg.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-DL2eN5zJ.js";import"./useGetEntityHeaders-BIeW1UVB.js";import"./EntityIcon-D3jOXoTo.js";import"./ErrorChip-DiPpM0eW.js";import"./Chip-C9V27U36.js";import"./ListItem-MxuW_3Fh.js";import"./listItemButtonClasses-DCXsY9V-.js";const H={title:"Governance/AccessRequirementRelatedProjectsList",component:m},e={args:{accessRequirementId:9603055}},r={args:{accessRequirementId:9605913}},t={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[o.post(`${n}${a}`,()=>{const s={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return c.json(s,{status:200})})]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
