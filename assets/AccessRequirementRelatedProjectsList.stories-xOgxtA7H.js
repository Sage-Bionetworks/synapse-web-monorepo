import{s as o,b as n,O as a,H as c}from"./iframe-BnslxpU_.js";import{A as m}from"./AccessRequirementRelatedProjectsList-B_ZWglzz.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-rp0b6PN1.js";import"./index-BBnrFY0q.js";import"./_baseOrderBy-BbY_UuU_.js";import"./_baseIteratee-DKszTi1G.js";import"./_baseMap-CyJy1Bu9.js";import"./_baseEach-DWYlC-Oi.js";import"./useInfiniteQuery-CUtRjsVX.js";import"./pluralize-DvqWrKl4.js";import"./EntityLink-CoscjakM.js";import"./useEntity-BsI2Tbzc.js";import"./pickBy-CE5D0X5Y.js";import"./isString-lNDBQ7zY.js";import"./queryOptions-C9woPjwX.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-CtGbLs_y.js";import"./useGetEntityHeaders-BmJkMqFR.js";import"./EntityIcon-4hntAgS0.js";import"./ErrorChip-Cc5wmi05.js";import"./Chip-Bn_oC1Yj.js";import"./ListItem-DRppa29C.js";import"./listItemButtonClasses-B_i8CeoE.js";const v={title:"Governance/AccessRequirementRelatedProjectsList",component:m},e={args:{accessRequirementId:9603055}},r={args:{accessRequirementId:9605913}},s={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[o.post(`${n}${a}`,()=>{const t={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return c.json(t,{status:200})})]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
