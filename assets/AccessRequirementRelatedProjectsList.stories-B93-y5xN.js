import{s as o,b as n,O as a,H as c}from"./iframe-DcOQ9qHF.js";import{A as m}from"./AccessRequirementRelatedProjectsList-Cg6Oq3rR.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-B-ySsNsD.js";import"./index-Qd4VnuKv.js";import"./_baseOrderBy-NXSRpOSN.js";import"./_baseIteratee-DnNaE3ya.js";import"./_baseMap-vH1D4gpk.js";import"./_baseEach-DqnZX-4V.js";import"./useInfiniteQuery-ghiUseCs.js";import"./pluralize-DvqWrKl4.js";import"./EntityLink-CKDxYOCW.js";import"./useEntity-x2jk6rCv.js";import"./pickBy-CbWc_Uxm.js";import"./isString-Dt1pMH2y.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-DYOIW0i4.js";import"./useGetEntityHeaders-WJW7slfl.js";import"./EntityIcon-mVWk58Yd.js";import"./ErrorChip-B3qIRj-y.js";import"./Chip-CelqGmC0.js";import"./ListItem-BXiXSFOh.js";import"./listItemButtonClasses-CUva6xBS.js";const f={title:"Governance/AccessRequirementRelatedProjectsList",component:m},e={args:{accessRequirementId:9603055}},r={args:{accessRequirementId:9605913}},s={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[o.post(`${n}${a}`,()=>{const t={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return c.json(t,{status:200})})]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
