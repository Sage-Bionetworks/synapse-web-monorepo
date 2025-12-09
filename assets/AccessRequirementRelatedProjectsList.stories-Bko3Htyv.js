import{n as u,b as l,O as j,H as P}from"./iframe-BUOdsTSh.js";import{A as I}from"./AccessRequirementRelatedProjectsList-BLQFHxRC.js";import"./index-r8ZA1smB.js";import"./useAccessRequirements-B80D173R.js";import"./index-Dy3y5VXk.js";import"./_baseOrderBy-BrYmiZ1z.js";import"./_baseIteratee-ikfqENkb.js";import"./_baseMap-Ct-pV0We.js";import"./_baseEach-kMjIUVBO.js";import"./useQueries-Cj0FJGxA.js";import"./useInfiniteQuery-BQSNFCnR.js";import"./pluralize-CC--1ngb.js";import"./EntityLink-Cn714u2N.js";import"./useEntity-U-3a_1Bs.js";import"./pickBy-D4pEibDA.js";import"./isString-Bij-w0kH.js";import"./useSuspenseQuery-BjDE67iy.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-BO7k6330.js";import"./useGetEntityHeaders-qmsiWhIX.js";import"./EntityIcon-B_TgwKi_.js";import"./ErrorChip-B0ddWvXe.js";import"./Chip-D1GuGoQD.js";import"./ListItem-BDT3a6Ww.js";import"./listItemButtonClasses-BFI_lEVh.js";const L={title:"Governance/AccessRequirementRelatedProjectsList",component:I},e={args:{accessRequirementId:9603055}},r={args:{accessRequirementId:9605913}},t={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[u.post(`${l}${j}`,()=>{const R={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return P.json(R,{status:200})})]}}};var s,o,n;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(d=(p=t.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};const Q=["ManyProjects","OneProject","ZeroProjectsMock"];export{e as ManyProjects,r as OneProject,t as ZeroProjectsMock,Q as __namedExportsOrder,L as default};
