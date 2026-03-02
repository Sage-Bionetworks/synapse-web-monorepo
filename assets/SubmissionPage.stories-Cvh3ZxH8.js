import{g as d,k as u,n as t,a3 as c,dN as R,b as e,kn as i,ko as E,H as s,kp as _,p as m,kq as I,kr as S,k6 as O}from"./iframe-B6BHQgsg.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-Bs1K26zf.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-ByEx30eE.js";import"./useAccessRequirements-DIJuqr1W.js";import"./index-BrxEKyeI.js";import"./_baseOrderBy-C8vVUUyh.js";import"./_baseIteratee-r37fl1Sw.js";import"./_baseMap-d8vVMiiI.js";import"./_baseEach-KeeyuKdO.js";import"./useInfiniteQuery-CyIpqaj4.js";import"./groupBy-B_W_VdqH.js";import"./_createAggregator-BvMEImlo.js";import"./DialogBase-C3nXM1hL.js";import"./Close-DhlrG9rp.js";import"./HelpPopover-Duf7eahg.js";import"./MarkdownPopover-DB1525ks.js";import"./LightTooltip-npEhufm2.js";import"./MarkdownSynapse-CYzlYABb.js";import"./SkeletonButton-DHh5ZoUY.js";import"./SkeletonInlineBlock-C-VRD2YJ.js";import"./SkeletonTable-DrzWDZqG.js";import"./SkeletonParagraph-KorLLKG4.js";import"./EntityLink-DdM0LOiR.js";import"./useEntity-8ALxvOwi.js";import"./pickBy-CNV786-2.js";import"./isString-BsOWPOLC.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-HHNwJCD1.js";import"./useGetEntityHeaders-CBhZStas.js";import"./EntityIcon-DL_OLcVJ.js";import"./ErrorChip-Dh9Ej6fm.js";import"./Chip-DtPmiV3b.js";import"./UserOrTeamBadge-YVa5GO4k.js";import"./UserBadge-CdHLyT5D.js";import"./useUserBundle-Bsv4QG78.js";import"./MenuItem-CURmej8f.js";import"./Card-BZp1HZl7.js";import"./TeamBadge-BRcc9v_0.js";import"./UnmanagedACTAccessRequirementItem-BvKLfzKD.js";import"./RequirementItem-Bggd61eV.js";import"./LockTwoTone-C_3SfhNZ.js";import"./UserSearchBoxV2-6uPoaiyW.js";import"./useDebouncedEffect-dJPxUaIE.js";import"./use-deep-compare-effect.esm-BbOZBEsl.js";import"./uniq-R2X1Zhhg.js";import"./without-CLLe732J.js";import"./Select-aab027f3.esm-CHb51e0y.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./ManagedACTAccessRequirementItemView-C93-WIOI.js";import"./SelfSignAccessRequirementItem-DB_MrZDX.js";import"./DataAccessRequestAccessorsFilesForm-2iekWG5k.js";import"./enums-DhHlTnpF.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-CWOCpBhE.js";import"./useDataAccessSubmission-D8ssnbQi.js";import"./RadioGroup-DiEBItHg.js";import"./Radio-QXXmNzfS.js";import"./SwitchBase-BuMteYEy.js";import"./FormGroup-DWLrxt5u.js";import"./FormControlLabel-DXtGcBFr.js";import"./UploadDocumentField-Dqk713ZR.js";import"./FileUpload-WDQBnJhJ.js";import"./ManagedACTAccessRequirementFormWikiWrapper-yWIyez6z.js";import"./GridLegacy-CEXYyPnP.js";import"./ResearchProjectForm-Bqgw_sQ1.js";import"./TextFieldWithWordLimit-Cb3T9nHe.js";import"./AuthenticatedRequirement-CcBsANcp.js";import"./CertificationRequirement-BYwDJOFM.js";import"./TwoFactorAuthEnabledRequirement-CiTOkHql.js";import"./ValidationRequirement-Cr4UhGBG.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-BT7h-a-W.js";import"./RejectDataAccessRequestModal-COrPAIxr.js";import"./CannedRejectionDialog-D4Snr2EA.js";import"./immutable.es-C7Y1z7XT.js";import"./ConfirmationDialog-Bb8wqThd.js";import"./Checkbox-CJaBoFnV.js";import"./Grid-CBovW_JL.js";import"./upperFirst-B-W9Msqn.js";import"./_stringToArray-DrOupfVb.js";const Ve={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>R({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...d(e),...u(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=E.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${_(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${I(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:S,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...c(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
