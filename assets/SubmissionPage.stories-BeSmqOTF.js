import{g as u,k as d,n as t,a1 as c,dO as R,b as e,kq as i,kr as E,H as s,ks as _,p as m,kt as I,ku as S,k9 as O}from"./iframe-2O6u4SzH.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-Ci9fLpkT.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-CwIQ5F7R.js";import"./useAccessRequirements-BWgolwog.js";import"./index-D8WZJQs0.js";import"./_baseOrderBy-BUAxPvkr.js";import"./_baseIteratee-DQS7eQMK.js";import"./_baseMap-CKBkbJ2G.js";import"./_baseEach-hos6MCbv.js";import"./useInfiniteQuery-DbGbDORf.js";import"./groupBy-DAdjkvwi.js";import"./_createAggregator-Bto83fi7.js";import"./DialogBase-DL0Zz-CT.js";import"./Close-Bft55rfH.js";import"./HelpPopover-DtPUv-h0.js";import"./MarkdownPopover-DCPcpUWN.js";import"./LightTooltip-C0ip7qPz.js";import"./MarkdownSynapse-B-iJPTvS.js";import"./SkeletonButton-CiuXBI7w.js";import"./SkeletonInlineBlock-BxhXmgi0.js";import"./SkeletonTable-Cg2ViMwY.js";import"./SkeletonParagraph-0TQyd4RC.js";import"./EntityLink-DxaVMEaq.js";import"./useEntity-v4dqmZGp.js";import"./pickBy-Dqy7Vrx1.js";import"./isString-10tXgNyR.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-D25d2Lgm.js";import"./useGetEntityHeaders-Dh7kIY7o.js";import"./EntityIcon-Cdnvsec5.js";import"./ErrorChip-BGcIXTqB.js";import"./Chip-Dc7Q2EIH.js";import"./UserOrTeamBadge-C-mlQQMW.js";import"./UserBadge-CMOF3-F_.js";import"./useUserBundle-BSscApBt.js";import"./MenuItem-C5eSP5TX.js";import"./Card-CmTr6plw.js";import"./TeamBadge-BSqbTOYM.js";import"./UnmanagedACTAccessRequirementItem-9I1C8TP8.js";import"./RequirementItem-Bj1atKWG.js";import"./LockTwoTone-BP3kb-nx.js";import"./UserSearchBoxV2-0Cicch3p.js";import"./useDebouncedEffect-BL3vMKQV.js";import"./use-deep-compare-effect.esm-1HSucEhU.js";import"./uniq-BZsjCJJT.js";import"./without-DEpKL-0v.js";import"./Select-aab027f3.esm-DdB2Gk_N.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./ManagedACTAccessRequirementItemView-wFg7eW4s.js";import"./SelfSignAccessRequirementItem-CJPKmf2x.js";import"./DataAccessRequestAccessorsFilesForm-8_ePM3XY.js";import"./enums-tShHe5Bc.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-CWOCpBhE.js";import"./useDataAccessSubmission-C8nmJPHR.js";import"./RadioGroup-CdZLrcGj.js";import"./Radio-DPPUn18y.js";import"./SwitchBase-DBYBJcDT.js";import"./FormGroup-Df6wnuO4.js";import"./FormControlLabel-CSDFCuV7.js";import"./UploadDocumentField-COBQ4fpg.js";import"./FileUpload-DzPn0VWo.js";import"./ManagedACTAccessRequirementFormWikiWrapper-3cETZSAE.js";import"./GridLegacy-BTrsHFOn.js";import"./ResearchProjectForm-BqRbBYJ9.js";import"./TextFieldWithWordLimit-CZeRJjGF.js";import"./AuthenticatedRequirement-BHDdIBV5.js";import"./CertificationRequirement--VMHJS2T.js";import"./TwoFactorAuthEnabledRequirement-DdWilDLT.js";import"./ValidationRequirement-Dm6Sw7a1.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-d8jsSxS3.js";import"./RejectDataAccessRequestModal-BiGdIxPV.js";import"./CannedRejectionDialog-BKy3YLDb.js";import"./immutable.es-C7Y1z7XT.js";import"./ConfirmationDialog-BrGQU89G.js";import"./Checkbox-Cso4WlBt.js";import"./Grid-DA0DBLGO.js";import"./upperFirst-J46CHBiD.js";import"./_stringToArray-CIy_H_lt.js";const Ve={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>R({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...u(e),...d(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=E.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${_(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${I(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:S,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...c(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
