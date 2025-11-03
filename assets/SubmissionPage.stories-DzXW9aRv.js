import{g as I,k as S,n as t,a1 as O,am as g,b as e,km as i,kn as C,H as s,ko as l,p as m,kp as b,kq as T,k1 as A}from"./iframe-BaLjRbxV.js";import{m as M}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as N}from"./SubmissionPage-CzDGC_MG.js";import"./index-r8ZA1smB.js";import"./AccessRequirementList-Z5YsOXYy.js";import"./useAccessRequirements-CiBPUAL1.js";import"./index-Bf6lqsG1.js";import"./_baseOrderBy-CI36gZIY.js";import"./_baseIteratee-DSMfcoPD.js";import"./_baseMap-D8bdCiPL.js";import"./_baseEach-BPR38kYI.js";import"./useQueries-BG08BzmQ.js";import"./useInfiniteQuery-BKbW_T3d.js";import"./groupBy-Cg_OvppJ.js";import"./_createAggregator-DkZh1I6i.js";import"./DialogBase-DQC5Xm4N.js";import"./Close-DUVDmgA5.js";import"./HelpPopover-HEhffQ-9.js";import"./MarkdownPopover-D0-hXxlT.js";import"./LightTooltip-Df4OWJg3.js";import"./MarkdownSynapse-D5dupBHl.js";import"./SkeletonButton-BCO3ltYO.js";import"./SkeletonInlineBlock-DlbO9j3B.js";import"./SkeletonTable-DRhIcjmz.js";import"./SkeletonParagraph-2OOcKN6S.js";import"./EntityLink-DwJFGiPX.js";import"./useEntity-Dxf6u6dv.js";import"./pickBy-CTDFDvlL.js";import"./isString-D57dOGgm.js";import"./queryOptions-C9woPjwX.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-CB9jZsng.js";import"./useGetEntityHeaders-CiYQFh60.js";import"./EntityIcon-RFFHZEz3.js";import"./ErrorChip-DwQSnQy_.js";import"./Chip-BNDtClPI.js";import"./UserOrTeamBadge-DmtpDTA8.js";import"./UserBadge-CkEzG92Y.js";import"./MenuItem-CmlP5UgZ.js";import"./Card-BCoCTWa3.js";import"./TeamBadge-Fonkoz20.js";import"./UnmanagedACTAccessRequirementItem-CnvUjKoS.js";import"./RequirementItem-s36bVfsW.js";import"./LockTwoTone-BrTQqL6d.js";import"./UserSearchBoxV2-CBRXAn5I.js";import"./useDebouncedEffect-CzeqrTza.js";import"./use-deep-compare-effect.esm-B-oB1mUD.js";import"./uniq-Cjs6CA2m.js";import"./without-BGeO4KNe.js";import"./Select-aab027f3.esm-HGcDTeOM.js";import"./defineProperty-CegpTSss.js";import"./ManagedACTAccessRequirementItemView-BT9EbBC9.js";import"./SelfSignAccessRequirementItem-D90AOpgb.js";import"./DataAccessRequestAccessorsFilesForm-D4vMiFlo.js";import"./enums-FDDBZdXm.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-B8iwwgef.js";import"./useDataAccessSubmission-UdoRhH6r.js";import"./RadioGroup-wJFwoQNJ.js";import"./Radio-BDTe1i3K.js";import"./SwitchBase-CB7olyeo.js";import"./FormGroup-jAPpei11.js";import"./FormControlLabel-BeQpfg_x.js";import"./UploadDocumentField-BFiSN_hH.js";import"./FileUpload-DGENYXiZ.js";import"./ManagedACTAccessRequirementFormWikiWrapper-Cj3eSi5D.js";import"./GridLegacy-C9fo58PV.js";import"./ResearchProjectForm-CfM1OQG5.js";import"./TextFieldWithWordLimit-6qWEjq5n.js";import"./AuthenticatedRequirement-B4y02EvM.js";import"./CertificationRequirement-BUSgZhJ4.js";import"./TwoFactorAuthEnabledRequirement-BcDsDaLL.js";import"./ValidationRequirement-Bt-1VIDi.js";import"./duration-DQ1NfnzY.js";import"./FileHandleLink-BxWgS-Nn.js";import"./RejectDataAccessRequestModal-I1zyKdRf.js";import"./CannedRejectionDialog-B6avMD7j.js";import"./immutable.es-BJjDfH8f.js";import"./ConfirmationDialog-BerI96kx.js";import"./Checkbox-CmQZLcxz.js";import"./Grid-DXUoF1k2.js";import"./upperFirst-DtXYUWYe.js";import"./_stringToArray-COOk6YrD.js";const tr={title:"Governance/SubmissionPage",component:N,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>g({sql:`SELECT * FROM ${A}`},M)],parameters:{msw:{handlers:[...I(e),...S(e),t.get(`${e}${i(":id")}`,({params:r})=>{const E=C.find(_=>r.id===_.id);return s.json(E,{status:200})}),t.get(`${e}${l(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${b(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:T,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...O(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};var a,p,u;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
