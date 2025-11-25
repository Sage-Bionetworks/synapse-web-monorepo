import{g as I,k as S,n as t,a2 as O,e2 as g,b as e,ku as i,kv as C,H as s,kw as l,p as m,kx as b,ky as T,k9 as A}from"./iframe-C_QQiyp-.js";import{m as M}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as N}from"./SubmissionPage-g_J79-JG.js";import"./index-r8ZA1smB.js";import"./AccessRequirementList-DsIiq289.js";import"./useAccessRequirements-B-bjUeHp.js";import"./index-vrcVr6xS.js";import"./_baseOrderBy-BaLIx0cu.js";import"./_baseIteratee-BG9mxM4I.js";import"./_baseMap-QVjVnVNG.js";import"./_baseEach-D_3l14Br.js";import"./useQueries-DoPjc6Lo.js";import"./useInfiniteQuery-CpxJuNol.js";import"./groupBy-De0f3Ssf.js";import"./_createAggregator-zVSc9Z1B.js";import"./DialogBase-GGKQvoi0.js";import"./Close-D2Pf2VjW.js";import"./HelpPopover--l72eRT0.js";import"./MarkdownPopover-BmdxKf0p.js";import"./LightTooltip-BdMbjEZX.js";import"./MarkdownSynapse-5kgLSApZ.js";import"./SkeletonButton-DVayUHLb.js";import"./SkeletonInlineBlock-CYb2G1Vd.js";import"./SkeletonTable-BMz6cgMa.js";import"./SkeletonParagraph-BKhiP51Z.js";import"./EntityLink-Cf1Ut16J.js";import"./useEntity-6A5ZntqV.js";import"./pickBy-BpeWfdL1.js";import"./isString-BdYGoJ81.js";import"./queryOptions-C9woPjwX.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-Bs13mTDt.js";import"./useGetEntityHeaders-DETde6jB.js";import"./EntityIcon-CBkB7JaY.js";import"./ErrorChip-a-H_A1uo.js";import"./Chip-B0GoZMHJ.js";import"./UserOrTeamBadge-DYa8p5E3.js";import"./UserBadge-DhOnwL5s.js";import"./MenuItem-BHFoVdQr.js";import"./Card-CmczJqmp.js";import"./TeamBadge-ClLLGwMF.js";import"./UnmanagedACTAccessRequirementItem-NwAm2V3J.js";import"./RequirementItem-DoRrOkdB.js";import"./LockTwoTone-CUTgX1tz.js";import"./UserSearchBoxV2-DAd0wnDG.js";import"./useDebouncedEffect-BG74UqlW.js";import"./use-deep-compare-effect.esm-jYk1534Z.js";import"./uniq-SnY45GYK.js";import"./without-BKuRpC8_.js";import"./Select-aab027f3.esm-Cwgdc-Fa.js";import"./defineProperty-CegpTSss.js";import"./ManagedACTAccessRequirementItemView-BObZRVs2.js";import"./SelfSignAccessRequirementItem-B9uGFsvN.js";import"./DataAccessRequestAccessorsFilesForm-M_XwcwyR.js";import"./enums-Djj8isWa.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-B8iwwgef.js";import"./useDataAccessSubmission-BY7RStdh.js";import"./RadioGroup-BUM6Eabk.js";import"./Radio-6Ycapv7W.js";import"./SwitchBase-CIU1OHyQ.js";import"./FormGroup-B0CiHBOH.js";import"./FormControlLabel-V09hgZrI.js";import"./UploadDocumentField-FA5vPnAn.js";import"./FileUpload-EJV-cONd.js";import"./ManagedACTAccessRequirementFormWikiWrapper-BupGF6UU.js";import"./GridLegacy-C6SuGHQJ.js";import"./ResearchProjectForm-2MLbUDJS.js";import"./TextFieldWithWordLimit-BE0pLCRS.js";import"./AuthenticatedRequirement-D0q_DIDc.js";import"./CertificationRequirement-dPbndVvY.js";import"./TwoFactorAuthEnabledRequirement-GZZbNowB.js";import"./ValidationRequirement-C_ybUqQp.js";import"./duration-DQ1NfnzY.js";import"./FileHandleLink-CNndA9R5.js";import"./RejectDataAccessRequestModal-DWs6zKqJ.js";import"./CannedRejectionDialog-a6WKyBva.js";import"./immutable.es-BJjDfH8f.js";import"./ConfirmationDialog-DAIzDlJh.js";import"./Checkbox-DR4r2869.js";import"./Grid-rZAudfqA.js";import"./upperFirst-DEo5Rc2I.js";import"./_stringToArray-B6dkpfYp.js";const tr={title:"Governance/SubmissionPage",component:N,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>g({sql:`SELECT * FROM ${A}`},M)],parameters:{msw:{handlers:[...I(e),...S(e),t.get(`${e}${i(":id")}`,({params:r})=>{const E=C.find(_=>r.id===_.id);return s.json(E,{status:200})}),t.get(`${e}${l(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${b(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:T,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...O(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};var a,p,u;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(u=(p=o.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var d,c,R;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(R=(c=n.parameters)==null?void 0:c.docs)==null?void 0:R.source}}};const sr=["Demo","DemoError"];export{o as Demo,n as DemoError,sr as __namedExportsOrder,tr as default};
