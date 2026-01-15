import{g as u,k as d,n as t,a2 as c,d_ as R,b as e,ks as i,kt as E,H as s,ku as _,p as m,kv as I,kw as S,kb as O}from"./iframe-CV5uF1_e.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-C-ersb8j.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-xA3A8c30.js";import"./useAccessRequirements-DYB9COxg.js";import"./index-Lq8AZYKI.js";import"./_baseOrderBy-CALcBExl.js";import"./_baseIteratee-DKiQefv_.js";import"./_baseMap-CndHGrEy.js";import"./_baseEach-BBarx7fo.js";import"./useQueries-NxuMdxZj.js";import"./useInfiniteQuery-oU30NX3B.js";import"./groupBy-DnFZg5Tz.js";import"./_createAggregator-DmX5a-7B.js";import"./DialogBase-BBjGlBIj.js";import"./Close-BXWZan39.js";import"./HelpPopover-jZCDiU0J.js";import"./MarkdownPopover-DuJ5uVW5.js";import"./LightTooltip-CPpYn2Kh.js";import"./MarkdownSynapse-DKo3fnwU.js";import"./SkeletonButton-CpwnNhlN.js";import"./SkeletonInlineBlock-CfS9comD.js";import"./SkeletonTable-Dkaqgxy9.js";import"./SkeletonParagraph-CfoCBxY5.js";import"./EntityLink-22bkctei.js";import"./useEntity-K0J7SxVO.js";import"./pickBy-CCxuAjeM.js";import"./isString-DmYfii3A.js";import"./useSuspenseQuery-CGczKAJn.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-4JZ_nBvJ.js";import"./useGetEntityHeaders-PapYV6en.js";import"./EntityIcon-MUgI2uul.js";import"./ErrorChip-DNDlfeSX.js";import"./Chip-KBD8jJOF.js";import"./UserOrTeamBadge-DnfNL1e_.js";import"./UserBadge-yVhGbWiX.js";import"./useUserBundle-9F9vUiBr.js";import"./MenuItem-BzuAhGLX.js";import"./Card-DCUNa1gA.js";import"./TeamBadge-C9O5iN2q.js";import"./UnmanagedACTAccessRequirementItem-Bu9IUGd1.js";import"./RequirementItem-DKL3jPdB.js";import"./LockTwoTone-Cor2eGev.js";import"./UserSearchBoxV2-BZMIRREA.js";import"./useDebouncedEffect-Cg31oXO1.js";import"./use-deep-compare-effect.esm-BeIpRdZO.js";import"./uniq-L1qv973h.js";import"./without-iK-b8OFb.js";import"./Select-aab027f3.esm-BlVyaPXS.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./ManagedACTAccessRequirementItemView-DNrvPtmY.js";import"./SelfSignAccessRequirementItem-rDOjZWUO.js";import"./DataAccessRequestAccessorsFilesForm-CqitZB1g.js";import"./enums-CIkk4jIk.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-CWOCpBhE.js";import"./useDataAccessSubmission-D2dxKatm.js";import"./RadioGroup-DWaSmKKp.js";import"./Radio-DRToH1H2.js";import"./SwitchBase-DGbLlKb7.js";import"./FormGroup-DsD0HsQw.js";import"./FormControlLabel-BDjFPPQX.js";import"./UploadDocumentField-Dx3C-aNK.js";import"./FileUpload-D9ae0E5g.js";import"./ManagedACTAccessRequirementFormWikiWrapper-C_Tsvu3q.js";import"./GridLegacy-T8o6rqLU.js";import"./ResearchProjectForm-BPqqMeqo.js";import"./TextFieldWithWordLimit-D7yHQgxf.js";import"./AuthenticatedRequirement-CvFXKx1g.js";import"./CertificationRequirement-DUexcPBn.js";import"./TwoFactorAuthEnabledRequirement-Cj6_Zr9t.js";import"./ValidationRequirement-CqvHigrL.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-Cbj7e4Ze.js";import"./RejectDataAccessRequestModal-CJD0k0lu.js";import"./CannedRejectionDialog-CTGaUZbC.js";import"./immutable.es-C7Y1z7XT.js";import"./ConfirmationDialog-D2HwlyP0.js";import"./Checkbox-C2-C51xv.js";import"./Grid-Pr30XWBi.js";import"./upperFirst-Bh2dLumI.js";import"./_stringToArray-BKx_A9Xk.js";const ze={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>R({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...u(e),...d(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=E.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${_(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${I(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:S,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...c(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const Xe=["Demo","DemoError"];export{o as Demo,n as DemoError,Xe as __namedExportsOrder,ze as default};
