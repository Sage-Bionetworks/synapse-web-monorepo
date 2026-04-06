import{s as o,b as n,O as a,H as c}from"./iframe-Dh1-Bj9i.js";import{A as m}from"./AccessRequirementRelatedProjectsList-BsemIAXx.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-DucLZ6v-.js";import"./index-DA_VxtNU.js";import"./_baseOrderBy-BCuRUHAk.js";import"./_baseIteratee-CuoQlIYx.js";import"./_baseMap-GDF1xtgf.js";import"./_baseEach-OMUz4HGL.js";import"./useInfiniteQuery-CKi0ZKKC.js";import"./pluralize-DvqWrKl4.js";import"./EntityLink-Br0YMoIx.js";import"./useEntity-BLDKE0cv.js";import"./pickBy-QrfkUTe_.js";import"./isString-BV1mrbKX.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-83B7KXq6.js";import"./useGetEntityHeaders-CbKI9awj.js";import"./EntityIcon-4deVTKD-.js";import"./ErrorChip-Bwftuvzp.js";import"./Chip-D6-vR_S7.js";import"./ListItem-C4Z2ugj3.js";import"./listItemButtonClasses-l_taRAwC.js";const f={title:"Governance/AccessRequirementRelatedProjectsList",component:m},e={args:{accessRequirementId:9603055}},r={args:{accessRequirementId:9605913}},s={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[o.post(`${n}${a}`,()=>{const t={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return c.json(t,{status:200})})]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
