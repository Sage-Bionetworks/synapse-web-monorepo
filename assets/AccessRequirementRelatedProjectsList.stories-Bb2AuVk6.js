import{n as u,b as l,O as j,H as P}from"./iframe-DVXODLNu.js";import{A as I}from"./AccessRequirementRelatedProjectsList-fVnHycID.js";import"./index-r8ZA1smB.js";import"./useAccessRequirements-DhOrpIWz.js";import"./index-Bd7KE_sO.js";import"./_baseOrderBy-eA1ieNmu.js";import"./_baseIteratee-BHw4qJII.js";import"./_baseMap-CS6dt86a.js";import"./_baseEach-Bw65e-UW.js";import"./useQueries-ByecndiH.js";import"./useInfiniteQuery-BezuufV7.js";import"./pluralize-CC--1ngb.js";import"./EntityLink-kLvrh-uV.js";import"./useEntity-DVoCZCK1.js";import"./pickBy-BK2OgJ-K.js";import"./isString-BA_dK8xI.js";import"./useSuspenseQuery-sm4bvu-Z.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-gxy6vIym.js";import"./useGetEntityHeaders-ChlNRI-D.js";import"./EntityIcon-keRJ5h89.js";import"./ErrorChip-CuVG0HMe.js";import"./Chip-Cr5hy2JG.js";import"./ListItem-Cpe2-Ecz.js";import"./listItemButtonClasses-wVJFmvzZ.js";const L={title:"Governance/AccessRequirementRelatedProjectsList",component:I},e={args:{accessRequirementId:9603055}},r={args:{accessRequirementId:9605913}},t={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[u.post(`${l}${j}`,()=>{const R={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return P.json(R,{status:200})})]}}};var s,o,n;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
