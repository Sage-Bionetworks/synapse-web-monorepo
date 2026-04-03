import{s as o,b as n,O as a,H as c}from"./iframe-BwdMKcfW.js";import{A as m}from"./AccessRequirementRelatedProjectsList-C9xRR6lO.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-DswR_YxC.js";import"./index-DPZa-GBy.js";import"./_baseOrderBy-DLgIa6mW.js";import"./_baseIteratee-VD_UmMwY.js";import"./_baseMap-CCHmg080.js";import"./_baseEach-e-P7ukc6.js";import"./useInfiniteQuery-BjFBPSmE.js";import"./pluralize-DvqWrKl4.js";import"./EntityLink-CNbiph16.js";import"./useEntity-C9ozPcxe.js";import"./pickBy-HOJozbd1.js";import"./isString-Am2EKcP0.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-BAmhWJtF.js";import"./useGetEntityHeaders-C27idDbT.js";import"./EntityIcon-jHzPX9yU.js";import"./ErrorChip-NWIA38Jr.js";import"./Chip-CdEMn9W3.js";import"./ListItem-Ck_v3OcO.js";import"./listItemButtonClasses-BI3ECPfO.js";const f={title:"Governance/AccessRequirementRelatedProjectsList",component:m},e={args:{accessRequirementId:9603055}},r={args:{accessRequirementId:9605913}},s={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[o.post(`${n}${a}`,()=>{const t={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return c.json(t,{status:200})})]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
