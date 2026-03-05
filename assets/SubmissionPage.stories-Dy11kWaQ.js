import{g as d,k as u,n as t,a3 as c,dN as R,b as e,ko as i,kp as E,H as s,kq as _,p as m,kr as I,ks as S,k7 as O}from"./iframe-DmJPOOU_.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-yKeJlftS.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-WYoKERvb.js";import"./useAccessRequirements-CMox_RrW.js";import"./index-BXFJdLDG.js";import"./_baseOrderBy-eGJUtKsY.js";import"./_baseIteratee-1Q2L5zu3.js";import"./_baseMap-BWARg_nl.js";import"./_baseEach-CAIliHKy.js";import"./useInfiniteQuery-BDaCbZ6f.js";import"./groupBy-etl_Bs2L.js";import"./_createAggregator-LIt2780W.js";import"./DialogBase-D-N6jGJj.js";import"./Close-DOrDhmY8.js";import"./HelpPopover-CH-RPBO_.js";import"./MarkdownPopover-BCp9ClLr.js";import"./LightTooltip-Cww8R-MD.js";import"./MarkdownSynapse-C6q6tMz7.js";import"./SkeletonButton-Cd2blMTY.js";import"./SkeletonInlineBlock-rRVfoSJd.js";import"./SkeletonTable-B15aTznV.js";import"./SkeletonParagraph-B8-jdRST.js";import"./EntityLink-CwAgcUER.js";import"./useEntity-CQC1iVNp.js";import"./pickBy-M_UJi6ID.js";import"./isString-DV94wrcf.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-RBjfW4XO.js";import"./useGetEntityHeaders-N9vBAa9Y.js";import"./EntityIcon-DRC7RGPj.js";import"./ErrorChip-zGeSWOAx.js";import"./Chip-CM8JUIti.js";import"./UserOrTeamBadge-BH0pz7ML.js";import"./UserBadge-BnbYUF_2.js";import"./useUserBundle-BrqV_bO4.js";import"./MenuItem-DeCPXHAD.js";import"./Card-DctfhZcj.js";import"./TeamBadge-4G3D7SA5.js";import"./UnmanagedACTAccessRequirementItem-DB3lSpnE.js";import"./RequirementItem-BWU4LLPk.js";import"./LockTwoTone-CkyX1_88.js";import"./UserSearchBoxV2-CVb35cui.js";import"./useDebouncedEffect-BsroYQ0t.js";import"./use-deep-compare-effect.esm-Tvv8-TnI.js";import"./uniq-DPbT0Jrg.js";import"./without-BAz2mDyj.js";import"./Select-aab027f3.esm-DyPa_FNK.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./ManagedACTAccessRequirementItemView-BhLSXxR0.js";import"./SelfSignAccessRequirementItem-Db8JSOz6.js";import"./DataAccessRequestAccessorsFilesForm-DQ0y4d0Z.js";import"./enums-BpOx3OUg.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-CWOCpBhE.js";import"./useDataAccessSubmission-CGdihuzg.js";import"./RadioGroup-BpO4zrzo.js";import"./Radio-C0v3VRHl.js";import"./SwitchBase-BGEA75yw.js";import"./FormGroup-Lx1TEJBP.js";import"./FormControlLabel-Drfk0QYR.js";import"./UploadDocumentField-CdbqPQe9.js";import"./FileUpload-BUh0EjHi.js";import"./ManagedACTAccessRequirementFormWikiWrapper-DQhxgm59.js";import"./GridLegacy-B9LwJOAU.js";import"./ResearchProjectForm-aqwjWN1J.js";import"./TextFieldWithWordLimit-Cq-bcVVe.js";import"./AuthenticatedRequirement-kmO5CJSP.js";import"./CertificationRequirement-Bq0GT3B_.js";import"./TwoFactorAuthEnabledRequirement-B6Th_3RA.js";import"./ValidationRequirement-DaPMkvo5.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-BwTxzlhk.js";import"./RejectDataAccessRequestModal-RPdPovDr.js";import"./CannedRejectionDialog-PsBAkFcb.js";import"./immutable.es-C7Y1z7XT.js";import"./ConfirmationDialog-hpX1a8na.js";import"./Checkbox-Dk6Grjtf.js";import"./Grid-7soIe3w7.js";import"./upperFirst-BecBc5Zo.js";import"./_stringToArray-DabP9IIl.js";const Ve={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>R({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...d(e),...u(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=E.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${_(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${I(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:S,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...c(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
