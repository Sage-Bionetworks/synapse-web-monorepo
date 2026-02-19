import{g as d,k as u,n as t,a3 as c,d_ as R,b as e,kv as i,kw as E,H as s,kx as _,p as m,ky as I,kz as S,ke as O}from"./iframe-Djf1Gvja.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-H2rG5BLO.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-BUXgspQ4.js";import"./useAccessRequirements-FnBi4e9-.js";import"./index-CikzIJLj.js";import"./_baseOrderBy-C4CfGZuR.js";import"./_baseIteratee-_uY9ZW-D.js";import"./_baseMap-Bzv9jpIq.js";import"./_baseEach-BH2Ai-LR.js";import"./useQueries-9xKPn1nl.js";import"./useInfiniteQuery-pHCKipg_.js";import"./groupBy-B9Ymi_ws.js";import"./_createAggregator-CXWUGj5G.js";import"./DialogBase-DFoHyZgy.js";import"./Close-Clk8l4Z7.js";import"./HelpPopover-COYTKA2i.js";import"./MarkdownPopover-15pHq4Q_.js";import"./LightTooltip-CCYEKJGf.js";import"./MarkdownSynapse-MozwM0EG.js";import"./SkeletonButton-D5sJL5B9.js";import"./SkeletonInlineBlock-CSkbk-eL.js";import"./SkeletonTable-CUnfVmXh.js";import"./SkeletonParagraph-nhe0tvw8.js";import"./EntityLink-2JPQpO0e.js";import"./useEntity-CtpNy3rh.js";import"./pickBy-DzsFI0va.js";import"./isString-BpueyRwN.js";import"./useSuspenseQuery-DqFkurJD.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-DnmLoZSA.js";import"./useGetEntityHeaders-DBnyWVSe.js";import"./EntityIcon-BDMDmDpx.js";import"./ErrorChip-DSyCtWok.js";import"./Chip-DiNFVAcb.js";import"./UserOrTeamBadge-CIR1lEs7.js";import"./UserBadge-CHqh5HJA.js";import"./useUserBundle-CRYenpVP.js";import"./MenuItem-DLvW-sib.js";import"./Card-DDfvoBrM.js";import"./TeamBadge-DYJih9SH.js";import"./useRealmPrincipals-BkEJrudp.js";import"./UnmanagedACTAccessRequirementItem-BdZ-dIYi.js";import"./RequirementItem-aPtk_Fv9.js";import"./LockTwoTone-DoIyTdPj.js";import"./UserSearchBoxV2-DaBtSdG5.js";import"./useDebouncedEffect-DTRbVrFa.js";import"./use-deep-compare-effect.esm-BtBK50_F.js";import"./uniq-BuI1ZZDG.js";import"./without-DPmGw91u.js";import"./Select-aab027f3.esm-7wwj7zon.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./ManagedACTAccessRequirementItemView-BTa-nPJD.js";import"./SelfSignAccessRequirementItem-CkrgzFvI.js";import"./DataAccessRequestAccessorsFilesForm-BMKMXV_q.js";import"./enums-Dwtdrxdy.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-CWOCpBhE.js";import"./useDataAccessSubmission-BEAuHucA.js";import"./RadioGroup-CFol2uMW.js";import"./Radio-DEH2fDlR.js";import"./SwitchBase-DchgHDNt.js";import"./FormGroup-e6niOxjk.js";import"./FormControlLabel-Y2KZ_0l1.js";import"./UploadDocumentField-BOLvbIho.js";import"./FileUpload-C00C4g4f.js";import"./ManagedACTAccessRequirementFormWikiWrapper-Cx4_gQSQ.js";import"./GridLegacy-BdpjK-qp.js";import"./ResearchProjectForm-CtVuDccY.js";import"./TextFieldWithWordLimit-pThEk4vv.js";import"./AuthenticatedRequirement-DAPojPmS.js";import"./CertificationRequirement-DDY6fSSc.js";import"./TwoFactorAuthEnabledRequirement-CZ7VmwA-.js";import"./ValidationRequirement-BP4Gq6tu.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-CKnfstEX.js";import"./RejectDataAccessRequestModal-VTCM2e1_.js";import"./CannedRejectionDialog-Cx5dwN5u.js";import"./immutable.es-C7Y1z7XT.js";import"./ConfirmationDialog-COmnWvpz.js";import"./Checkbox-D2g6Xz4p.js";import"./Grid-9pegnziy.js";import"./upperFirst-BBYCtEYT.js";import"./_stringToArray-Cr0y2fCj.js";const Xe={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>R({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...d(e),...u(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=E.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${_(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${I(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:S,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...c(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'SubmissionPage',
  loaders: [() => registerTableQueryResult({
    sql: \`SELECT * FROM \${REJECT_SUBMISSION_CANNED_RESPONSES_TABLE}\`
  }, mockRejectionReasonsTableQueryResultBundle)],
  parameters: {
    msw: {
      handlers: [...getUserProfileHandlers(MOCK_REPO_ORIGIN), ...getWikiHandlers(MOCK_REPO_ORIGIN),
      // Return submission based on ID
      http.get(\`\${MOCK_REPO_ORIGIN}\${DATA_ACCESS_SUBMISSION_BY_ID(':id')}\`, ({
        params
      }) => {
        const submission = mockSubmissions.find(submission => params.id === submission.id);
        return HttpResponse.json(submission, {
          status: 200
        });
      }),
      // Return a mocked access requirement
      http.get(\`\${MOCK_REPO_ORIGIN}\${ACCESS_REQUIREMENT_BY_ID(':id')}\`, () => {
        return HttpResponse.json(mockManagedACTAccessRequirement, {
          status: 200
        });
      }), http.get(\`\${MOCK_REPO_ORIGIN}\${ACCESS_REQUIREMENT_WIKI_PAGE_KEY(':id')}\`, () => {
        return HttpResponse.json({
          wikiPageId: 123,
          ownerObjectId: mockManagedACTAccessRequirement.id,
          ownerObjectType: 'ACCESS_REQUIREMENT'
        }, {
          status: 200
        });
      }), http.get<{
        id: string;
      }>(\`\${MOCK_REPO_ORIGIN}/repo/v1/accessRequirement/:id/acl\`, ({
        params
      }) => {
        return HttpResponse.json({
          id: params.id,
          creationDate: '2022-05-20T14:32:31.665Z',
          etag: 'f4fbd4f2-751d-40dd-9421-1d2693231217',
          resourceAccess: [{
            principalId: MOCK_USER_ID_2,
            accessType: ['REVIEW_SUBMISSIONS']
          }]
        }, {
          status: 200
        });
      }), ...getHandlersForTableQuery(MOCK_REPO_ORIGIN), http.put(\`\${MOCK_REPO_ORIGIN}\${DATA_ACCESS_SUBMISSION_BY_ID(':id')}\`, async ({
        request
      }) => {
        return HttpResponse.json(await request.json(), {
          status: 201
        });
      })]
    }
  },
  args: {
    isReviewer: true,
    submissionId: 1
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: 'Demo Error State',
  parameters: {
    msw: {
      handlers: [http.get(\`\${MOCK_REPO_ORIGIN}\${DATA_ACCESS_SUBMISSION_BY_ID(':id')}\`, () => {
        const errorResponse: ErrorResponse = {
          reason: 'The user must be validated in order to review data access submissions.',
          concreteType: 'org.sagebionetworks.repo.model.ErrorResponse'
        };
        return HttpResponse.json(errorResponse, {
          status: 403
        });
      })]
    }
  },
  args: {
    isReviewer: true,
    submissionId: 9999
  }
}`,...n.parameters?.docs?.source}}};const er=["Demo","DemoError"];export{o as Demo,n as DemoError,er as __namedExportsOrder,Xe as default};
