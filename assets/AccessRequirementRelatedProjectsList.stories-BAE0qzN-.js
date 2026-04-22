import{s as o,b as n,O as a,H as c}from"./iframe-bna6ux0d.js";import{A as m}from"./AccessRequirementRelatedProjectsList-B_Ml0PYq.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-BXov6ZnK.js";import"./index-BPlgQcL-.js";import"./_baseOrderBy-DXDPhcgN.js";import"./_baseIteratee-BTmoqNJP.js";import"./_baseMap-BhRjv0-x.js";import"./_baseEach-Clh7uFEL.js";import"./useInfiniteQuery-BY6Y6iWU.js";import"./pluralize-DvqWrKl4.js";import"./EntityLink-BEOGqR0c.js";import"./useEntity-BhGKEimr.js";import"./pickBy-DFerox6m.js";import"./isString-B7Kehlqn.js";import"./queryOptions-C9woPjwX.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-BDnwF9uX.js";import"./useGetEntityHeaders-f7MwHb1v.js";import"./EntityIcon-Cyo-G9bb.js";import"./ErrorChip-CO319-ro.js";import"./Chip-ezXqmltp.js";import"./ListItem-DRSgKKyv.js";import"./listItemButtonClasses-g5sUZ5P1.js";const v={title:"Governance/AccessRequirementRelatedProjectsList",component:m},e={args:{accessRequirementId:9603055}},r={args:{accessRequirementId:9605913}},s={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[o.post(`${n}${a}`,()=>{const t={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return c.json(t,{status:200})})]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
