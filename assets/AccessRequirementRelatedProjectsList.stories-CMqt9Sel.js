import{n as u,b as l,O as j,H as P}from"./iframe-k9YwU_Xc.js";import{A as I}from"./AccessRequirementRelatedProjectsList-BiGQ4gDM.js";import"./index-r8ZA1smB.js";import"./useAccessRequirements-Bpx4VYGs.js";import"./index-DfC-1pI_.js";import"./_baseOrderBy-BDPdyESe.js";import"./_baseIteratee-DxLFM1hL.js";import"./_baseMap-B172oB3N.js";import"./_baseEach-CNGY3RY2.js";import"./useQueries-J55c1hQt.js";import"./useInfiniteQuery-CV6-OEbg.js";import"./pluralize-CC--1ngb.js";import"./EntityLink-BvRiccKu.js";import"./useEntity-DLxNvIyy.js";import"./pickBy-CBoyaqdZ.js";import"./isString-D-byzQtq.js";import"./useSuspenseQuery-CiFSWrMs.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-CRLaABuD.js";import"./useGetEntityHeaders-_nUXFdFr.js";import"./EntityIcon-B4pl2vPH.js";import"./ErrorChip-DXLIzqZP.js";import"./Chip-CKkKYJUZ.js";import"./ListItem-DH0fqhPz.js";import"./listItemButtonClasses-COA1h9CO.js";const L={title:"Governance/AccessRequirementRelatedProjectsList",component:I},e={args:{accessRequirementId:9603055}},r={args:{accessRequirementId:9605913}},t={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[u.post(`${l}${j}`,()=>{const R={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return P.json(R,{status:200})})]}}};var s,o,n;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
