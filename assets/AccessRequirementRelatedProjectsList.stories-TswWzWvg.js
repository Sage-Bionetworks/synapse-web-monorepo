import{s as o,b as n,O as a,H as c}from"./iframe-ebumedXL.js";import{A as m}from"./AccessRequirementRelatedProjectsList-BY1Oa_sV.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-De2fY97W.js";import"./index-BXiypiiB.js";import"./_baseOrderBy-Du1uYSUs.js";import"./_baseIteratee-BZfyLuxI.js";import"./_baseMap-DuHHUBBV.js";import"./_baseEach-Bpi3XsvX.js";import"./useInfiniteQuery-DYtjmNBb.js";import"./pluralize-DvqWrKl4.js";import"./EntityLink-B5lzHA50.js";import"./useEntity-8Ga6EkSh.js";import"./pickBy-BpZa6GB7.js";import"./isString-AT5xGzJd.js";import"./queryOptions-C9woPjwX.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-CfivZ6YV.js";import"./useGetEntityHeaders-DB5hbNfY.js";import"./EntityIcon-Dgp5oPNQ.js";import"./ErrorChip-B3JEivCb.js";import"./Chip-DwqfSnWD.js";import"./ListItem-Cl8t-CVO.js";import"./listItemButtonClasses-iA8X2Ldm.js";const v={title:"Governance/AccessRequirementRelatedProjectsList",component:m},e={args:{accessRequirementId:9603055}},r={args:{accessRequirementId:9605913}},s={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[o.post(`${n}${a}`,()=>{const t={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return c.json(t,{status:200})})]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
