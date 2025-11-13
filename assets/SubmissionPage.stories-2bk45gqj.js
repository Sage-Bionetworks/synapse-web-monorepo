import{g as I,k as S,n as t,a2 as O,e2 as g,b as e,kt as i,ku as C,H as s,kv as l,p as m,kw as b,kx as T,k8 as A}from"./iframe-C7HGvOUl.js";import{m as M}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as N}from"./SubmissionPage-ByhvHAMd.js";import"./index-r8ZA1smB.js";import"./AccessRequirementList-CMo8B3SV.js";import"./useAccessRequirements-CW-MGXNh.js";import"./index-vj5KKvTf.js";import"./_baseOrderBy-Cv90IWNs.js";import"./_baseIteratee-ChsMTM5R.js";import"./_baseMap-DMelYvT1.js";import"./_baseEach-AOC5xPjZ.js";import"./useQueries-CvU6H9bk.js";import"./useInfiniteQuery-CgbthALg.js";import"./groupBy-CRCVeKgq.js";import"./_createAggregator-D3lYe9Bo.js";import"./DialogBase-DKsAEabs.js";import"./Close-DMhKR_rY.js";import"./HelpPopover-CBVnmWOW.js";import"./MarkdownPopover-A1fr4z6g.js";import"./LightTooltip-CO-J6vOj.js";import"./MarkdownSynapse-JFfvupcN.js";import"./SkeletonButton-CkeZGoyu.js";import"./SkeletonInlineBlock-CsElFq45.js";import"./SkeletonTable-COY9zVYr.js";import"./SkeletonParagraph-CttTbUME.js";import"./EntityLink-IukvaA3a.js";import"./useEntity-CNreNgOf.js";import"./pickBy-DLTVIsJf.js";import"./isString-CgS2N-Nd.js";import"./queryOptions-C9woPjwX.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-OEbKImQt.js";import"./useGetEntityHeaders-Bw_3u5-W.js";import"./EntityIcon-DSve2arZ.js";import"./ErrorChip-BD4ucsdv.js";import"./Chip-DuMKcKGN.js";import"./UserOrTeamBadge-BdVhGHd0.js";import"./UserBadge-Bj0YRfAa.js";import"./MenuItem-CIAKLYgH.js";import"./Card-C57WWo12.js";import"./TeamBadge-DN5YD07B.js";import"./UnmanagedACTAccessRequirementItem-D_c9fd_w.js";import"./RequirementItem-Y5bO1Gd5.js";import"./LockTwoTone-CUm1FJLY.js";import"./UserSearchBoxV2-DoKqiuz-.js";import"./useDebouncedEffect-uJhF23_X.js";import"./use-deep-compare-effect.esm-gDonvwry.js";import"./uniq-CSsZv0Eo.js";import"./without-BB2cuDg0.js";import"./Select-aab027f3.esm-CAVdbtFx.js";import"./defineProperty-CegpTSss.js";import"./ManagedACTAccessRequirementItemView-D_uwvRez.js";import"./SelfSignAccessRequirementItem-UZizsVe_.js";import"./DataAccessRequestAccessorsFilesForm-C_-POFue.js";import"./enums-D-RTYdmm.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-B8iwwgef.js";import"./useDataAccessSubmission-tXfNoeAX.js";import"./RadioGroup-CsrQyAjo.js";import"./Radio-Cp3C_kLD.js";import"./SwitchBase-BdB58K7f.js";import"./FormGroup-BOKYp-Pv.js";import"./FormControlLabel-DMzFAHMb.js";import"./UploadDocumentField-e_kbX-N3.js";import"./FileUpload-CsfoXVel.js";import"./ManagedACTAccessRequirementFormWikiWrapper-_yTI35_R.js";import"./GridLegacy-BScpr32M.js";import"./ResearchProjectForm-CJ-O5ffr.js";import"./TextFieldWithWordLimit-tqsjNnH4.js";import"./AuthenticatedRequirement-By1K-vKi.js";import"./CertificationRequirement-D9BSdZlm.js";import"./TwoFactorAuthEnabledRequirement-BS2YjcJf.js";import"./ValidationRequirement-DdEOUv1r.js";import"./duration-DQ1NfnzY.js";import"./FileHandleLink-BMHbi-sM.js";import"./RejectDataAccessRequestModal-CdfysyjD.js";import"./CannedRejectionDialog-Ce0cw4Sm.js";import"./immutable.es-BJjDfH8f.js";import"./ConfirmationDialog-CpTyB7dm.js";import"./Checkbox-bhYdc4KW.js";import"./Grid-zhXO7uYm.js";import"./upperFirst-zri5bTE9.js";import"./_stringToArray-fXXbphPb.js";const tr={title:"Governance/SubmissionPage",component:N,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>g({sql:`SELECT * FROM ${A}`},M)],parameters:{msw:{handlers:[...I(e),...S(e),t.get(`${e}${i(":id")}`,({params:r})=>{const E=C.find(_=>r.id===_.id);return s.json(E,{status:200})}),t.get(`${e}${l(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${b(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:T,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...O(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};var a,p,u;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
