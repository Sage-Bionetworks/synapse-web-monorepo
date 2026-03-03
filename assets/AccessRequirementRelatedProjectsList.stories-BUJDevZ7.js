import{n as o,b as n,Q as a,H as c}from"./iframe-CR9Kppk9.js";import{A as m}from"./AccessRequirementRelatedProjectsList-C1TX-G71.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-BwTB5lmZ.js";import"./index-CTj_7GLi.js";import"./_baseOrderBy-BYfxWAAx.js";import"./_baseIteratee-DMXgAEIk.js";import"./_baseMap-BF4oj2Kl.js";import"./_baseEach-mi46k9dW.js";import"./useInfiniteQuery-CfvRCTip.js";import"./pluralize-DvqWrKl4.js";import"./EntityLink-DlK4yqUG.js";import"./useEntity-B9CBydGO.js";import"./pickBy-CKX9T9Zm.js";import"./isString-d8Zj9Cvt.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-BH6Cb_YX.js";import"./useGetEntityHeaders-tU3Ddv74.js";import"./EntityIcon-BSbauZWO.js";import"./ErrorChip-AC9_1Wjy.js";import"./Chip-B6UQirNv.js";import"./ListItem-BNgmpKyp.js";import"./listItemButtonClasses-DLwIaZt5.js";const f={title:"Governance/AccessRequirementRelatedProjectsList",component:m},e={args:{accessRequirementId:9603055}},r={args:{accessRequirementId:9605913}},s={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[o.post(`${n}${a}`,()=>{const t={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return c.json(t,{status:200})})]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
