import{n as u,b as l,O as j,H as P}from"./iframe-CJCPT_yY.js";import{A as I}from"./AccessRequirementRelatedProjectsList-BTsodPIy.js";import"./index-r8ZA1smB.js";import"./useAccessRequirements-BB1jEIAf.js";import"./index-8HwUI_iG.js";import"./_baseOrderBy-C-V2pvg8.js";import"./_baseIteratee-BnCE0C_W.js";import"./_baseMap-CSY_I1bl.js";import"./_baseEach-B08SIf5n.js";import"./useQueries-DH-E2OAK.js";import"./useInfiniteQuery-Cpo1uBE7.js";import"./pluralize-CC--1ngb.js";import"./EntityLink-Dwu4Plo3.js";import"./useEntity-cRx-7M0H.js";import"./pickBy-BqKuxUXO.js";import"./isString-BPiNTGH7.js";import"./useSuspenseQuery-CA-nz-xS.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-CUeRAjYH.js";import"./useGetEntityHeaders-viC2TRhx.js";import"./EntityIcon-DWyr-mh-.js";import"./ErrorChip-00tA-ErF.js";import"./Chip-BjrahEkE.js";import"./ListItem-DzQvSdbX.js";import"./listItemButtonClasses-DYyGUxr8.js";const L={title:"Governance/AccessRequirementRelatedProjectsList",component:I},e={args:{accessRequirementId:9603055}},r={args:{accessRequirementId:9605913}},t={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[u.post(`${l}${j}`,()=>{const R={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return P.json(R,{status:200})})]}}};var s,o,n;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
