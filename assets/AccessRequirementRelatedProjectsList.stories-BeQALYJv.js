import{n as o,b as n,Q as a,H as c}from"./iframe-B_O9kSix.js";import{A as m}from"./AccessRequirementRelatedProjectsList-vxfEHnq1.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-C48nzhrP.js";import"./index-CIA9_xQz.js";import"./_baseOrderBy-DW79tZ4P.js";import"./_baseIteratee-yjnrhNzg.js";import"./_baseMap-DN0Mni7r.js";import"./_baseEach-CfBB6sdk.js";import"./useInfiniteQuery-BhNmSgI4.js";import"./pluralize-DvqWrKl4.js";import"./EntityLink-JzBeVkJY.js";import"./useEntity-CRghs1UI.js";import"./pickBy-BvX4lrYi.js";import"./isString-C6ja5JhB.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-C1kMZ-wS.js";import"./useGetEntityHeaders-B1__sdlU.js";import"./EntityIcon-BdMqIhbN.js";import"./ErrorChip-BsWMTcV1.js";import"./Chip-DJkWIvUs.js";import"./ListItem--hghDhXv.js";import"./listItemButtonClasses-CS700FRz.js";const f={title:"Governance/AccessRequirementRelatedProjectsList",component:m},e={args:{accessRequirementId:9603055}},r={args:{accessRequirementId:9605913}},s={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[o.post(`${n}${a}`,()=>{const t={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return c.json(t,{status:200})})]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
