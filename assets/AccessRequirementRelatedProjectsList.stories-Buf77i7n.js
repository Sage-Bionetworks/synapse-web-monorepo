import{n as o,b as n,Q as a,H as c}from"./iframe-HaQTQwuz.js";import{A as m}from"./AccessRequirementRelatedProjectsList-DLyNIofQ.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-XdwbVJy7.js";import"./index-2-kVSTun.js";import"./_baseOrderBy-Dkf75jER.js";import"./_baseIteratee-DKLhN1qh.js";import"./_baseMap-CH7s2_hf.js";import"./_baseEach-CBBwMrU5.js";import"./useInfiniteQuery-CVhxs5X4.js";import"./pluralize-DvqWrKl4.js";import"./EntityLink-CHLp2FjP.js";import"./useEntity-ByrB7KpH.js";import"./pickBy-L5QMPLXV.js";import"./isString-rtaSDnNo.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-DITbluvm.js";import"./useGetEntityHeaders-D_ZH0E7L.js";import"./EntityIcon-BXYO9uQX.js";import"./ErrorChip-B5PXJSYh.js";import"./Chip-DJaXVpz2.js";import"./ListItem-BiDYJe52.js";import"./listItemButtonClasses-CR3w9tUA.js";const f={title:"Governance/AccessRequirementRelatedProjectsList",component:m},e={args:{accessRequirementId:9603055}},r={args:{accessRequirementId:9605913}},s={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[o.post(`${n}${a}`,()=>{const t={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return c.json(t,{status:200})})]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
