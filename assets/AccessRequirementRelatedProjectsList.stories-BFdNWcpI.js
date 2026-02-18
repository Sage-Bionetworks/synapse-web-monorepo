import{n as o,b as n,Q as a,H as c}from"./iframe-T7oLJ25f.js";import{A as m}from"./AccessRequirementRelatedProjectsList-CTXAFg_i.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-G8_a63Qz.js";import"./index-BdhaPNFV.js";import"./_baseOrderBy-CM7pO5MO.js";import"./_baseIteratee-Dy1SfAsC.js";import"./_baseMap-Da-WRcVt.js";import"./_baseEach-CLkct6tL.js";import"./useQueries-CYX4p4ut.js";import"./useInfiniteQuery-D-UxbEMz.js";import"./pluralize-DvqWrKl4.js";import"./EntityLink-DXW0B4Vt.js";import"./useEntity-CXW7ZXO6.js";import"./pickBy-LjsbNNdy.js";import"./isString-B3VyUCFl.js";import"./useSuspenseQuery-0xwwePGu.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-BV62bEP6.js";import"./useGetEntityHeaders-BqPziyzY.js";import"./EntityIcon-BnPC7XdH.js";import"./ErrorChip-CSv0jn1K.js";import"./Chip-CoqraAOn.js";import"./ListItem-CG491Iyl.js";import"./listItemButtonClasses-BHIkM2n8.js";const H={title:"Governance/AccessRequirementRelatedProjectsList",component:m},e={args:{accessRequirementId:9603055}},r={args:{accessRequirementId:9605913}},t={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[o.post(`${n}${a}`,()=>{const s={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return c.json(s,{status:200})})]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
