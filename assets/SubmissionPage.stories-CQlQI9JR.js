import{g as u,k as d,n as t,a3 as c,dO as R,b as e,kq as i,kr as E,H as s,ks as _,p as m,kt as I,ku as S,k9 as O}from"./iframe-D4RhuUSg.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-Di7ENw-r.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-Clk-zSmi.js";import"./useAccessRequirements-D4V-w5Tn.js";import"./index-CH5hbzgU.js";import"./_baseOrderBy-DCeUPTFI.js";import"./_baseIteratee-CZFIogkU.js";import"./_baseMap-bHNVqvDK.js";import"./_baseEach-B4Uvco6Q.js";import"./useInfiniteQuery-BV3yABot.js";import"./groupBy-BR_PKAT_.js";import"./_createAggregator-D71qVY_G.js";import"./DialogBase-xh78bCQG.js";import"./Close-BGSokGDZ.js";import"./HelpPopover-bJT0vM-b.js";import"./MarkdownPopover-1mRSSIgl.js";import"./LightTooltip-LqJznVX-.js";import"./MarkdownSynapse-BEHMyjE6.js";import"./SkeletonButton-Bvto0rCs.js";import"./SkeletonInlineBlock-BZISNmq5.js";import"./SkeletonTable-Caa1erkn.js";import"./SkeletonParagraph-BcdCn_6W.js";import"./EntityLink-4nZU9QS9.js";import"./useEntity-Bm0QuzQo.js";import"./pickBy-BrWS02wJ.js";import"./isString-D6sDk7rj.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-BBL8hy54.js";import"./useGetEntityHeaders-BAPYr-Vg.js";import"./EntityIcon-CA-SBkJD.js";import"./ErrorChip-Di53wrC4.js";import"./Chip-BZ-RMLLV.js";import"./UserOrTeamBadge-DovUrx_g.js";import"./UserBadge-eWfgoGeZ.js";import"./useUserBundle-CoadtSFD.js";import"./MenuItem-DfQMZE47.js";import"./Card-FlQYIFIB.js";import"./TeamBadge-DN_GQeXB.js";import"./UnmanagedACTAccessRequirementItem-B8119hlF.js";import"./RequirementItem-DYOeU2Mt.js";import"./LockTwoTone-BUmD33QM.js";import"./UserSearchBoxV2-JuzUGRMR.js";import"./useDebouncedEffect-Hu4iERg7.js";import"./use-deep-compare-effect.esm-BbEBvHC7.js";import"./uniq-BHVkRMjl.js";import"./without-DPxCsDGK.js";import"./Select-aab027f3.esm-BAk4S-R5.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./ManagedACTAccessRequirementItemView--jjPOm1q.js";import"./SelfSignAccessRequirementItem-BP7udA4H.js";import"./DataAccessRequestAccessorsFilesForm-DoqxlW5_.js";import"./enums-DPYqlo9S.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-CWOCpBhE.js";import"./useDataAccessSubmission-BOJIriyv.js";import"./RadioGroup-ClqrnLSt.js";import"./Radio-DFsxoGl_.js";import"./SwitchBase-D7jvOWBt.js";import"./FormGroup-DEgj8z2G.js";import"./FormControlLabel-CEpo3VRI.js";import"./UploadDocumentField-D-EyyX-j.js";import"./FileUpload-Cpp1KLGl.js";import"./ManagedACTAccessRequirementFormWikiWrapper-C6fwjVnW.js";import"./GridLegacy-BZHMDSDX.js";import"./ResearchProjectForm-CfYGT0Z0.js";import"./TextFieldWithWordLimit-4fw0R8ot.js";import"./AuthenticatedRequirement-F3QQliHv.js";import"./CertificationRequirement-D0aPpb7n.js";import"./TwoFactorAuthEnabledRequirement-DoMJI0Vv.js";import"./ValidationRequirement-BvEffm9i.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-Dr9sPpdn.js";import"./RejectDataAccessRequestModal-CsyNPz3n.js";import"./CannedRejectionDialog-B664aXhY.js";import"./immutable.es-C7Y1z7XT.js";import"./ConfirmationDialog-D7q7Ar98.js";import"./Checkbox-CMr4dX-a.js";import"./Grid-BVIMhD78.js";import"./upperFirst-B_saytCw.js";import"./_stringToArray-ComI0YPw.js";const Ve={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>R({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...u(e),...d(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=E.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${_(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${I(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:S,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...c(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const Ze=["Demo","DemoError"];export{o as Demo,n as DemoError,Ze as __namedExportsOrder,Ve as default};
