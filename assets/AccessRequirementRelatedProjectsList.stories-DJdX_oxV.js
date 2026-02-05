import{n as o,b as n,O as a,H as c}from"./iframe-D5_h0PF9.js";import{A as m}from"./AccessRequirementRelatedProjectsList-C_Y62DVa.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-DaJirk2U.js";import"./index-DihqrFgA.js";import"./_baseOrderBy-uRU5TLQw.js";import"./_baseIteratee-B05hfmCH.js";import"./_baseMap-BWK9b449.js";import"./_baseEach-BCgxkOtg.js";import"./useQueries-C4PyX30W.js";import"./useInfiniteQuery-BmUArCE3.js";import"./pluralize-DvqWrKl4.js";import"./EntityLink-CE_0nCsE.js";import"./useEntity-BDNnEgNG.js";import"./pickBy-BCl_XONO.js";import"./isString-6uu2HqKu.js";import"./useSuspenseQuery-BZOc09Ao.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-c9BNONY7.js";import"./useGetEntityHeaders-GeFnHfnR.js";import"./EntityIcon-Cx5S9Ih2.js";import"./ErrorChip-D_iPAClF.js";import"./Chip-CBZ7YR6P.js";import"./ListItem-DQfH65mv.js";import"./listItemButtonClasses-D-qzCweW.js";const H={title:"Governance/AccessRequirementRelatedProjectsList",component:m},e={args:{accessRequirementId:9603055}},r={args:{accessRequirementId:9605913}},t={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[o.post(`${n}${a}`,()=>{const s={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return c.json(s,{status:200})})]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
