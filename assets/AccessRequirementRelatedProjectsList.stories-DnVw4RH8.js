import{n as o,b as n,Q as a,H as c}from"./iframe-BNuX63Gg.js";import{A as m}from"./AccessRequirementRelatedProjectsList-CBVrNTS9.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-_0RQX0yI.js";import"./index-CsZzG_M-.js";import"./_baseOrderBy-IYGbYqmr.js";import"./_baseIteratee-BV0dwrmo.js";import"./_baseMap-8byQYP5F.js";import"./_baseEach-CkrVvfzN.js";import"./useQueries-92nI7yPX.js";import"./useInfiniteQuery-ETBFsHKX.js";import"./pluralize-DvqWrKl4.js";import"./EntityLink-CqZYJN6J.js";import"./useEntity-3KpRmlIl.js";import"./pickBy-MqZLkr5W.js";import"./isString-CUEBVvBN.js";import"./useSuspenseQuery-5mc94Bck.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-DAdG-b2G.js";import"./useGetEntityHeaders-DiFB5Zwy.js";import"./EntityIcon-2anmf3qi.js";import"./ErrorChip-vdAsbLyw.js";import"./Chip-Dbkz0kTt.js";import"./ListItem-Dn0E00jq.js";import"./listItemButtonClasses-Bekp9Iwc.js";const H={title:"Governance/AccessRequirementRelatedProjectsList",component:m},e={args:{accessRequirementId:9603055}},r={args:{accessRequirementId:9605913}},t={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[o.post(`${n}${a}`,()=>{const s={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return c.json(s,{status:200})})]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
