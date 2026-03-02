import{n as o,b as n,Q as a,H as c}from"./iframe-B6BHQgsg.js";import{A as m}from"./AccessRequirementRelatedProjectsList-1w5JAPoz.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-DIJuqr1W.js";import"./index-BrxEKyeI.js";import"./_baseOrderBy-C8vVUUyh.js";import"./_baseIteratee-r37fl1Sw.js";import"./_baseMap-d8vVMiiI.js";import"./_baseEach-KeeyuKdO.js";import"./useInfiniteQuery-CyIpqaj4.js";import"./pluralize-DvqWrKl4.js";import"./EntityLink-DdM0LOiR.js";import"./useEntity-8ALxvOwi.js";import"./pickBy-CNV786-2.js";import"./isString-BsOWPOLC.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-HHNwJCD1.js";import"./useGetEntityHeaders-CBhZStas.js";import"./EntityIcon-DL_OLcVJ.js";import"./ErrorChip-Dh9Ej6fm.js";import"./Chip-DtPmiV3b.js";import"./ListItem-BkRG3o36.js";import"./listItemButtonClasses-CIxdJEM0.js";const f={title:"Governance/AccessRequirementRelatedProjectsList",component:m},e={args:{accessRequirementId:9603055}},r={args:{accessRequirementId:9605913}},s={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[o.post(`${n}${a}`,()=>{const t={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return c.json(t,{status:200})})]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
