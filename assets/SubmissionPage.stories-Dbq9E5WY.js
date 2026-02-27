import{g as d,k as u,n as t,a3 as c,dN as R,b as e,kn as i,ko as E,H as s,kp as _,p as m,kq as I,kr as S,k6 as O}from"./iframe-BjBBiDsW.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-BOde-aIB.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-z1Qqph7_.js";import"./useAccessRequirements-C7B8474T.js";import"./index-ILKMxz0s.js";import"./_baseOrderBy-8hmMvEym.js";import"./_baseIteratee-C9y3TvvF.js";import"./_baseMap-BgKfZnKQ.js";import"./_baseEach-BmEqmHzA.js";import"./useInfiniteQuery-Bv0FdpMA.js";import"./groupBy-CQ7VVjUy.js";import"./_createAggregator-Cfbw10QH.js";import"./DialogBase-czf-e16q.js";import"./Close-L1FnxEBh.js";import"./HelpPopover-BtucvZ0a.js";import"./MarkdownPopover-DE2XYuuV.js";import"./LightTooltip-DhGFGjue.js";import"./MarkdownSynapse-BDqMYaol.js";import"./SkeletonButton-Bl0qAliy.js";import"./SkeletonInlineBlock-Cx_wfJlM.js";import"./SkeletonTable-DFpSOBHH.js";import"./SkeletonParagraph-CeuyOR5i.js";import"./EntityLink-B4tWv8Uh.js";import"./useEntity-CofmP_Ww.js";import"./pickBy-BzGO56ob.js";import"./isString-Cr72riR3.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-CUXukPKv.js";import"./useGetEntityHeaders-DA3qIFzN.js";import"./EntityIcon-Cb5mZ2Xa.js";import"./ErrorChip-DkFXu039.js";import"./Chip-DPNGaouF.js";import"./UserOrTeamBadge-DoHycKSj.js";import"./UserBadge-CFxxKEtt.js";import"./useUserBundle-ATC_tAU4.js";import"./MenuItem-BSCaFnRG.js";import"./Card-CmP1D5pZ.js";import"./TeamBadge-DS93-8vj.js";import"./UnmanagedACTAccessRequirementItem-CVW-xSnJ.js";import"./RequirementItem-CgwyiaOa.js";import"./LockTwoTone-DNVeIAkn.js";import"./UserSearchBoxV2-CSJdmvhD.js";import"./useDebouncedEffect-CTF_OZ2t.js";import"./use-deep-compare-effect.esm-LRI6-38D.js";import"./uniq-Cf0oueQT.js";import"./without-CVE_-1o3.js";import"./Select-aab027f3.esm-CAFTvbQw.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./ManagedACTAccessRequirementItemView-BlnEx_mg.js";import"./SelfSignAccessRequirementItem-BgJTR6mu.js";import"./DataAccessRequestAccessorsFilesForm-B4BJ9WL5.js";import"./enums-DParUuBL.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-CWOCpBhE.js";import"./useDataAccessSubmission-BvAKDcn5.js";import"./RadioGroup-DwAYFpdq.js";import"./Radio-BVUIeMr1.js";import"./SwitchBase-hUejxJGt.js";import"./FormGroup-ayQk_S-J.js";import"./FormControlLabel-CzFzYJgz.js";import"./UploadDocumentField-C5ekVs7e.js";import"./FileUpload-CtQx-z71.js";import"./ManagedACTAccessRequirementFormWikiWrapper-Dd6rX12g.js";import"./GridLegacy-GY6L6yLH.js";import"./ResearchProjectForm-Csi57Q-o.js";import"./TextFieldWithWordLimit-6PUIaIe9.js";import"./AuthenticatedRequirement-DgtxHGpF.js";import"./CertificationRequirement-DXXnjPwm.js";import"./TwoFactorAuthEnabledRequirement-BDyrLjkn.js";import"./ValidationRequirement-DiCmGF_j.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-CJ2Lzax4.js";import"./RejectDataAccessRequestModal-BRa5XGbh.js";import"./CannedRejectionDialog-D_78frqG.js";import"./immutable.es-C7Y1z7XT.js";import"./ConfirmationDialog-D0UfN1Xa.js";import"./Checkbox-BCnKoQnO.js";import"./Grid-BDro-XsP.js";import"./upperFirst-DwvNTWWS.js";import"./_stringToArray-DQX_AvGa.js";const Ve={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>R({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...d(e),...u(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=E.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${_(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${I(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:S,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...c(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
