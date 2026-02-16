import{g as u,k as d,n as t,a3 as c,e0 as R,b as e,kv as i,kw as E,H as s,kx as _,p as m,ky as I,kz as S,ke as O}from"./iframe-D5Jb4H7-.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-COpNZ7QU.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-KJR4ptNq.js";import"./useAccessRequirements-C-6hKSKQ.js";import"./index-Q_YFCtqN.js";import"./_baseOrderBy-SdmGa5Wt.js";import"./_baseIteratee-HfADOLmS.js";import"./_baseMap-CBAREHGg.js";import"./_baseEach-CkgraRbj.js";import"./useQueries-DOSq_bEV.js";import"./useInfiniteQuery-mtij9nHQ.js";import"./groupBy-CNVMsa8V.js";import"./_createAggregator-DMtefBZ-.js";import"./DialogBase-DbS96YQV.js";import"./Close-CbOuO2km.js";import"./HelpPopover-zrq7Oti8.js";import"./MarkdownPopover-CET6pvp6.js";import"./LightTooltip-D5wkP_b3.js";import"./MarkdownSynapse-BYeobG0y.js";import"./SkeletonButton-C8q9GuK7.js";import"./SkeletonInlineBlock-B1J-x5sp.js";import"./SkeletonTable-CWnnOC4O.js";import"./SkeletonParagraph-1IqDxZQP.js";import"./EntityLink-Ca6O3OJe.js";import"./useEntity-exkOcAkG.js";import"./pickBy-DE0BKS3V.js";import"./isString-DLUNOE4s.js";import"./useSuspenseQuery-CJo7dxig.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-DXcgUWEE.js";import"./useGetEntityHeaders-DvIcjdbt.js";import"./EntityIcon-BFQwZiQm.js";import"./ErrorChip-CHGU2B0I.js";import"./Chip-BPCELKLJ.js";import"./UserOrTeamBadge-CeBvbA6J.js";import"./UserBadge-DVbiFxjq.js";import"./useUserBundle-B8Qf3-u2.js";import"./MenuItem-BcAY2td_.js";import"./Card-DcE5VUZL.js";import"./TeamBadge-SHh3dXIq.js";import"./UnmanagedACTAccessRequirementItem-CSVhH2ev.js";import"./RequirementItem-C11nfBAl.js";import"./LockTwoTone-fzLSWwZT.js";import"./UserSearchBoxV2-CDrL2IhN.js";import"./useDebouncedEffect-CVHaDEbp.js";import"./use-deep-compare-effect.esm-DXtDHnkH.js";import"./uniq-D-LBtm9m.js";import"./without-CbuVaYEE.js";import"./Select-aab027f3.esm-BPefcjaS.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./ManagedACTAccessRequirementItemView-DQzbDP1o.js";import"./SelfSignAccessRequirementItem-BztSElsh.js";import"./DataAccessRequestAccessorsFilesForm-Do57hZV7.js";import"./enums-BW2guRn4.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-CWOCpBhE.js";import"./useDataAccessSubmission-DG2CNbVT.js";import"./RadioGroup-DA4HFht7.js";import"./Radio-qVEd2-7n.js";import"./SwitchBase-CdPFBs56.js";import"./FormGroup-mlOlK-1J.js";import"./FormControlLabel-lBjb8bgb.js";import"./UploadDocumentField-Mp-XFZ4X.js";import"./FileUpload-wRByptln.js";import"./ManagedACTAccessRequirementFormWikiWrapper-JbA-HUTu.js";import"./GridLegacy-DYFoaTzK.js";import"./ResearchProjectForm-xITxrA2H.js";import"./TextFieldWithWordLimit-Dnr1V9RS.js";import"./AuthenticatedRequirement-CpGhYKjT.js";import"./CertificationRequirement-B6_o6cwq.js";import"./TwoFactorAuthEnabledRequirement-CdBXvXp8.js";import"./ValidationRequirement-BWbgmdex.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-BnmCC1YP.js";import"./RejectDataAccessRequestModal-vhnfDDQ_.js";import"./CannedRejectionDialog-CeG_V0iB.js";import"./immutable.es-C7Y1z7XT.js";import"./ConfirmationDialog-Cf6HqVui.js";import"./Checkbox-BQnzTFlH.js";import"./Grid-DSYoMefi.js";import"./upperFirst-BUh1CLsz.js";import"./_stringToArray-C1gJtnPV.js";const ze={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>R({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...u(e),...d(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=E.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${_(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${I(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:S,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...c(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
