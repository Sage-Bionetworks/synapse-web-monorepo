import{n as o,b as n,Q as a,H as c}from"./iframe-DhpKet55.js";import{A as m}from"./AccessRequirementRelatedProjectsList-dPJeD39L.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-BS_i6ikn.js";import"./index-CpJ472Wk.js";import"./_baseOrderBy-CR9CeohK.js";import"./_baseIteratee-IrfZTN6K.js";import"./_baseMap-5raP30rN.js";import"./_baseEach-DYMGRgHQ.js";import"./useInfiniteQuery-BThf8L3S.js";import"./pluralize-DvqWrKl4.js";import"./EntityLink-DIB1Fnnq.js";import"./useEntity-9q1Wh5Bu.js";import"./pickBy-2xqbr6W2.js";import"./isString-CTj-vNCx.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-CSN4EF6S.js";import"./useGetEntityHeaders-CoiB1EC4.js";import"./EntityIcon-C2FerJ6P.js";import"./ErrorChip-CXZvbbHA.js";import"./Chip-9P7ZQoxZ.js";import"./ListItem-C9y8yrZY.js";import"./listItemButtonClasses-BKQfmJ0n.js";const f={title:"Governance/AccessRequirementRelatedProjectsList",component:m},e={args:{accessRequirementId:9603055}},r={args:{accessRequirementId:9605913}},s={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[o.post(`${n}${a}`,()=>{const t={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return c.json(t,{status:200})})]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
