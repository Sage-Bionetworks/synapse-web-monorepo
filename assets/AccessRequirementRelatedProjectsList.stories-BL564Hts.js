import{n as u,b as l,O as j,H as P}from"./iframe-AZFkaj29.js";import{A as I}from"./AccessRequirementRelatedProjectsList-CvG-NRsl.js";import"./index-r8ZA1smB.js";import"./useAccessRequirements-CabBMSpH.js";import"./index-D-3YUotp.js";import"./_baseOrderBy-DxrqB1VL.js";import"./_baseIteratee-DXtS-ESO.js";import"./_baseMap-CoTbMhkx.js";import"./_baseEach-7Jf3BhmM.js";import"./useQueries-DAVMkUle.js";import"./useInfiniteQuery-BBaTsQSm.js";import"./pluralize-Dtp1DlEB.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./EntityLink-DUPWnI0-.js";import"./useEntity-CRct_y1I.js";import"./pickBy-DBC5Ou7j.js";import"./isString-BRS8MwW8.js";import"./queryOptions-C9woPjwX.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-DjNL6bRI.js";import"./useGetEntityHeaders-Cpjzy8Uc.js";import"./EntityIcon-4x7THBXE.js";import"./ErrorChip-DQOYdOyt.js";import"./Chip-TJPVsrF2.js";import"./ListItem--OvGQDlt.js";import"./listItemButtonClasses-Dg_LIiw2.js";const Q={title:"Governance/AccessRequirementRelatedProjectsList",component:I},e={args:{accessRequirementId:9603055}},r={args:{accessRequirementId:9605913}},t={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[u.post(`${l}${j}`,()=>{const R={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return P.json(R,{status:200})})]}}};var s,o,n;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    accessRequirementId: 9603055
  }
}`,...(n=(o=e.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};var a,c,m;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    accessRequirementId: 9605913
  }
}`,...(m=(c=r.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var i,p,d;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(d=(p=t.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};const U=["ManyProjects","OneProject","ZeroProjectsMock"];export{e as ManyProjects,r as OneProject,t as ZeroProjectsMock,U as __namedExportsOrder,Q as default};
