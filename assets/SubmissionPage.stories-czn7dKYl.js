import{g as d,k as u,n as t,a3 as c,d_ as R,b as e,kw as i,kx as E,H as s,ky as _,p as m,kz as I,kA as S,kf as O}from"./iframe-Cb9YNozx.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-CWYcdhtU.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-yhMWsazZ.js";import"./useAccessRequirements-BsGhfNJc.js";import"./index-_wJIgEa8.js";import"./_baseOrderBy-B50alGxt.js";import"./_baseIteratee-Crm1dtkV.js";import"./_baseMap-CaFbY6tk.js";import"./_baseEach-C8hjnQXk.js";import"./useQueries-Ba1QGbRl.js";import"./useInfiniteQuery-CgLSPwL6.js";import"./groupBy-b5pI-3ia.js";import"./_createAggregator-H-JN2VCX.js";import"./DialogBase-CgXBzYW4.js";import"./Close-CQaXLTm7.js";import"./HelpPopover-BQnaThHT.js";import"./MarkdownPopover-DhA9uHcY.js";import"./LightTooltip-CdqBbLFh.js";import"./MarkdownSynapse-DVECeIy7.js";import"./SkeletonButton-n18AgO8O.js";import"./SkeletonInlineBlock-Cy31Etok.js";import"./SkeletonTable-D9G853Nf.js";import"./SkeletonParagraph-C98TKSTr.js";import"./EntityLink-Bq5aA7eq.js";import"./useEntity-DyZqXoe_.js";import"./pickBy-Itep66an.js";import"./isString-T56SNEqc.js";import"./useSuspenseQuery-DijQnciR.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-CG9M7-op.js";import"./useGetEntityHeaders-CEVXDtlt.js";import"./EntityIcon-B8U_8kzl.js";import"./ErrorChip-By_w8XiF.js";import"./Chip-DkiZ-DGD.js";import"./UserOrTeamBadge-GKGn8VBX.js";import"./UserBadge-Bh4Ksb1L.js";import"./useUserBundle--HGZeLM6.js";import"./MenuItem-WtaSofOf.js";import"./Card-CUlSPQ6A.js";import"./TeamBadge-BDVNxB1t.js";import"./useRealmPrincipals-BOYcyrLO.js";import"./UnmanagedACTAccessRequirementItem-Clfn47-q.js";import"./RequirementItem-DusPSBTU.js";import"./LockTwoTone-K5OSONom.js";import"./UserSearchBoxV2-B2E5TQjc.js";import"./useDebouncedEffect-C_9kQbIo.js";import"./use-deep-compare-effect.esm-DRlUfThG.js";import"./uniq-B_kjh9wh.js";import"./without-Dc8QFibI.js";import"./Select-aab027f3.esm-CJ_oX53i.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./ManagedACTAccessRequirementItemView-BLnP65nv.js";import"./SelfSignAccessRequirementItem-UVL-LPAf.js";import"./DataAccessRequestAccessorsFilesForm-BFZ28q7i.js";import"./enums-9EnIqiIL.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-CWOCpBhE.js";import"./useDataAccessSubmission-C9zNQz3d.js";import"./RadioGroup-Bb5it0eo.js";import"./Radio-CPckAT_J.js";import"./SwitchBase-Dg-qdkEc.js";import"./FormGroup-DLCtR279.js";import"./FormControlLabel-DLrXg_In.js";import"./UploadDocumentField-DuU9T68O.js";import"./FileUpload-DuIK9E-8.js";import"./ManagedACTAccessRequirementFormWikiWrapper-Czpb_082.js";import"./GridLegacy-Dc0OtKIb.js";import"./ResearchProjectForm-CPrenJ-w.js";import"./TextFieldWithWordLimit-DArvxBqX.js";import"./AuthenticatedRequirement-Dwq9E9YH.js";import"./CertificationRequirement-CWoXPCDF.js";import"./TwoFactorAuthEnabledRequirement-nCGHJseD.js";import"./ValidationRequirement-oXEL8v8Z.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-X2Gt-D7X.js";import"./RejectDataAccessRequestModal-DVw3_c4W.js";import"./CannedRejectionDialog-CtN-uK5S.js";import"./immutable.es-C7Y1z7XT.js";import"./ConfirmationDialog-Cy0nFlwJ.js";import"./Checkbox-nIJeGWWn.js";import"./Grid-L5kZtU_P.js";import"./upperFirst-CudMsEVl.js";import"./_stringToArray-yY0Gl44g.js";const Xe={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>R({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...d(e),...u(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=E.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${_(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${I(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:S,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...c(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
