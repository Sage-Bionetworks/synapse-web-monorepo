import{n as u,b as l,O as j,H as P}from"./iframe-BWoxTCTX.js";import{A as I}from"./AccessRequirementRelatedProjectsList-CJ76FPG6.js";import"./index-r8ZA1smB.js";import"./useAccessRequirements-mAF70aXt.js";import"./index-5LTwdmKr.js";import"./_baseOrderBy-0yWC6QnQ.js";import"./_baseIteratee-Dnn4YH6E.js";import"./_baseMap-BjjJ5wwm.js";import"./_baseEach-BPp_zO2O.js";import"./useQueries-B7bat4DS.js";import"./useInfiniteQuery-BFw00c2J.js";import"./pluralize-CC--1ngb.js";import"./EntityLink-DS-ZpkED.js";import"./useEntity-CpNVHOmb.js";import"./pickBy-Kpx_SBE9.js";import"./isString-BOx_ak6Z.js";import"./queryOptions-C9woPjwX.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-C0QJFTTF.js";import"./useGetEntityHeaders-CiU31_Oa.js";import"./EntityIcon-BK6WBDFO.js";import"./ErrorChip-Cm8OJJzn.js";import"./Chip-BAz2TZVD.js";import"./ListItem-0cDlcVGp.js";import"./listItemButtonClasses-D1FOLiQs.js";const L={title:"Governance/AccessRequirementRelatedProjectsList",component:I},e={args:{accessRequirementId:9603055}},r={args:{accessRequirementId:9605913}},t={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[u.post(`${l}${j}`,()=>{const R={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return P.json(R,{status:200})})]}}};var s,o,n;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
