import{s as o,b as n,O as a,H as c}from"./iframe-b13k1F7I.js";import{A as m}from"./AccessRequirementRelatedProjectsList-BMugjuo-.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-C_2FPiVV.js";import"./index-BnGRXv6y.js";import"./_baseOrderBy-GD0DasP4.js";import"./_baseIteratee-23LNJ6-w.js";import"./_baseMap-DxEPckuz.js";import"./_baseEach-CnMRyE2M.js";import"./useInfiniteQuery-BuA9b8--.js";import"./pluralize-DvqWrKl4.js";import"./EntityLink-CN1oPUQL.js";import"./useEntity-DRqW8oup.js";import"./pickBy-DljaCT6B.js";import"./isString-47yTQKmz.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-CHgiIjNJ.js";import"./useGetEntityHeaders-9wAdbWzp.js";import"./EntityIcon-CQ6uc2UA.js";import"./ErrorChip-lyFve5ja.js";import"./Chip-DjWJ18GV.js";import"./ListItem-DzDRJtuQ.js";import"./listItemButtonClasses-buvqHCdw.js";const f={title:"Governance/AccessRequirementRelatedProjectsList",component:m},e={args:{accessRequirementId:9603055}},r={args:{accessRequirementId:9605913}},s={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[o.post(`${n}${a}`,()=>{const t={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return c.json(t,{status:200})})]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
