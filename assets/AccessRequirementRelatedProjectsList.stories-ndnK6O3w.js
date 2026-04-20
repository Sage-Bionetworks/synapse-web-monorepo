import{s as o,b as n,O as a,H as c}from"./iframe-CsxBzgcc.js";import{A as m}from"./AccessRequirementRelatedProjectsList-BfXJxPjK.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-CRbu92xG.js";import"./index-CqdG97d5.js";import"./_baseOrderBy-BHVJ7-cG.js";import"./_baseIteratee-CocFix3A.js";import"./_baseMap-LcAFCb8i.js";import"./_baseEach-N09lyxf9.js";import"./useInfiniteQuery-DUTjfMBl.js";import"./pluralize-DvqWrKl4.js";import"./EntityLink-BgbwAFbr.js";import"./useEntity-sOpoOsiJ.js";import"./pickBy-CX4DYABF.js";import"./isString-X79f3-Tj.js";import"./queryOptions-C9woPjwX.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-DDfICuEY.js";import"./useGetEntityHeaders-DUUcOv-S.js";import"./EntityIcon-BYgezvzX.js";import"./ErrorChip-DpEEA493.js";import"./Chip-CAnuLq2P.js";import"./ListItem-CRLH8RNZ.js";import"./listItemButtonClasses-9gXcQbF4.js";const v={title:"Governance/AccessRequirementRelatedProjectsList",component:m},e={args:{accessRequirementId:9603055}},r={args:{accessRequirementId:9605913}},s={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[o.post(`${n}${a}`,()=>{const t={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return c.json(t,{status:200})})]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
