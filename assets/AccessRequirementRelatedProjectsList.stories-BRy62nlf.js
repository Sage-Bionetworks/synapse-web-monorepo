import{s as o,b as n,O as a,H as c}from"./iframe-DEq4Fwc_.js";import{A as m}from"./AccessRequirementRelatedProjectsList-yMZgMh4k.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-C4yV_srx.js";import"./index-f3FEnX0R.js";import"./_baseOrderBy-CuMO6fDB.js";import"./_baseIteratee-DiRcqJ-V.js";import"./_baseMap-D3t1dmer.js";import"./_baseEach-DduMpDYT.js";import"./useInfiniteQuery-BoS_wNWd.js";import"./pluralize-DvqWrKl4.js";import"./EntityLink-DO4e_Nod.js";import"./useEntity-BBOKy18n.js";import"./pickBy-D-hvBzih.js";import"./isString-D-f34EG8.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-dgC-l_Ks.js";import"./useGetEntityHeaders-CLPT9Ma6.js";import"./EntityIcon-LpKOoh8P.js";import"./ErrorChip-DrYZGsKR.js";import"./Chip-CsLFe4y4.js";import"./ListItem-DYnvc5HH.js";import"./listItemButtonClasses-C9J4YaZ_.js";const f={title:"Governance/AccessRequirementRelatedProjectsList",component:m},e={args:{accessRequirementId:9603055}},r={args:{accessRequirementId:9605913}},s={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[o.post(`${n}${a}`,()=>{const t={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return c.json(t,{status:200})})]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
