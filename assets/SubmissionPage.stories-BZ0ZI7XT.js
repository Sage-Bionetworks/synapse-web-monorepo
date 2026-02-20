import{g as d,k as u,n as t,a3 as c,d_ as R,b as e,kv as i,kw as E,H as s,kx as _,p as m,ky as I,kz as S,ke as O}from"./iframe-BoCRNbsR.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-CK4NYnWA.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-UmVedq3G.js";import"./useAccessRequirements-DkQ0N4uD.js";import"./index-DSH6M_f8.js";import"./_baseOrderBy-B-jABIUm.js";import"./_baseIteratee-CTfPkNe8.js";import"./_baseMap-m90rBXOw.js";import"./_baseEach-CrkqBzm4.js";import"./useQueries-DDvkrzrG.js";import"./useInfiniteQuery-C7o_Dqt1.js";import"./groupBy-Cwj15R-_.js";import"./_createAggregator-DHMybxwl.js";import"./DialogBase-BB6caHGd.js";import"./Close-DsrOrIhe.js";import"./HelpPopover-_vX2Eq3R.js";import"./MarkdownPopover-CTLC6eAI.js";import"./LightTooltip-BeuPdc0Y.js";import"./MarkdownSynapse-DncFydPI.js";import"./SkeletonButton-DmCSxkyJ.js";import"./SkeletonInlineBlock-C7NJLvZR.js";import"./SkeletonTable-COyqVKjD.js";import"./SkeletonParagraph-DoTSC7_a.js";import"./EntityLink-Co1VwZuj.js";import"./useEntity-BLxQdrE1.js";import"./pickBy-6pkKX37b.js";import"./isString-1YX391PZ.js";import"./useSuspenseQuery-BPlGfXJb.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-anaddiS5.js";import"./useGetEntityHeaders-Bu0sna_E.js";import"./EntityIcon-BETcrj3P.js";import"./ErrorChip-CB9VFob9.js";import"./Chip-BpnG7Xon.js";import"./UserOrTeamBadge-Ct7WDy2d.js";import"./UserBadge-jrgoiBJ0.js";import"./useUserBundle-CSKimz6W.js";import"./MenuItem-jUPn2SHm.js";import"./Card-Bt5_s5Bl.js";import"./TeamBadge-C5tfyvyH.js";import"./useRealmPrincipals-CsoK2Czf.js";import"./UnmanagedACTAccessRequirementItem-B30mLMa1.js";import"./RequirementItem-B6lfkD48.js";import"./LockTwoTone-BN5ZnTlv.js";import"./UserSearchBoxV2-CaveAnuw.js";import"./useDebouncedEffect-ZAyscT8J.js";import"./use-deep-compare-effect.esm-B8nkfzTc.js";import"./uniq-DRjkbO_K.js";import"./without-DHqdmtmG.js";import"./Select-aab027f3.esm-Cg2rbb1H.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./ManagedACTAccessRequirementItemView-BsGh4RDj.js";import"./SelfSignAccessRequirementItem-B6VEOwJ-.js";import"./DataAccessRequestAccessorsFilesForm-DYn60E-o.js";import"./enums-j_O7apI4.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-CWOCpBhE.js";import"./useDataAccessSubmission-CmEvE5bW.js";import"./RadioGroup-HkR5c_Uz.js";import"./Radio-aiIcsTLC.js";import"./SwitchBase-DMiiRzXA.js";import"./FormGroup-DctWVFCf.js";import"./FormControlLabel-BKE42yhb.js";import"./UploadDocumentField-ZRMXBvCw.js";import"./FileUpload-BupL01y8.js";import"./ManagedACTAccessRequirementFormWikiWrapper-C3hWvIqI.js";import"./GridLegacy-Zhp2FBJW.js";import"./ResearchProjectForm-BldlhJzC.js";import"./TextFieldWithWordLimit-OzBmEtnm.js";import"./AuthenticatedRequirement-Cm-T9ep9.js";import"./CertificationRequirement-CfzdWYs5.js";import"./TwoFactorAuthEnabledRequirement-9nQBav-S.js";import"./ValidationRequirement-Dlqdnexh.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-DyG8udI0.js";import"./RejectDataAccessRequestModal-CgGyH9U-.js";import"./CannedRejectionDialog-BJiMCsDE.js";import"./immutable.es-C7Y1z7XT.js";import"./ConfirmationDialog-DXOTVrB0.js";import"./Checkbox-DV0KOIC_.js";import"./Grid-bLyHLBDy.js";import"./upperFirst-DBzoLddS.js";import"./_stringToArray-CUKY9Qvj.js";const Xe={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>R({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...d(e),...u(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=E.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${_(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${I(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:S,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...c(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
