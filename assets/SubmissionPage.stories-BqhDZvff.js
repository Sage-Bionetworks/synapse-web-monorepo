import{z as d,b as e,o as u,s,kp as i,kq as c,H as t,kr as R,i as m,ks as E,kt as _,a0 as I,dG as S,k8 as O}from"./iframe-p1uXGzN2.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-sM18_H5E.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-CJkpgK9y.js";import"./useAccessRequirements-CWIpC9-Y.js";import"./index-B5EXqrid.js";import"./_baseOrderBy-Dmq-bvsO.js";import"./_baseIteratee-CIctm2fK.js";import"./_baseMap-CyND8cEz.js";import"./_baseEach-BJaCKh2_.js";import"./useInfiniteQuery-DTskVG3G.js";import"./groupBy-DgSAKG77.js";import"./_createAggregator-ClzMZ_G5.js";import"./DialogBase-C28ovCoY.js";import"./Close-3JlU0mJd.js";import"./HelpPopover-CijXRCXX.js";import"./MarkdownPopover-JkjhCwra.js";import"./LightTooltip-QHB5I4_E.js";import"./MarkdownSynapse-CKFbJzqU.js";import"./SkeletonButton-DFboq54i.js";import"./SkeletonInlineBlock-Bg4QuJBO.js";import"./SkeletonTable-DxscU1yp.js";import"./SkeletonParagraph-D9GGG1Tt.js";import"./EntityLink-CKng27F_.js";import"./useEntity-_QjOZ_u8.js";import"./pickBy-DFCfhoBP.js";import"./isString-FmH_jacF.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-IpobdzlG.js";import"./useGetEntityHeaders-8ofMEYgr.js";import"./EntityIcon-DPcFg3c5.js";import"./ErrorChip-Froeyf17.js";import"./Chip-D-yl_WD6.js";import"./UserOrTeamBadge-CnBNkKAD.js";import"./UserBadge-K3qD0Tmi.js";import"./useUserBundle-DMNSYcHB.js";import"./MenuItem-CvsWYU-W.js";import"./Card-DhYE1SZe.js";import"./TeamBadge-BOnbPe8U.js";import"./UnmanagedACTAccessRequirementItem-Dzfar2e-.js";import"./RequirementItem-DZt-pTfX.js";import"./LockTwoTone-CIbg3CUP.js";import"./ManagedACTAccessRequirementItemView-Hn3S3jb6.js";import"./SelfSignAccessRequirementItem-BF7esqAd.js";import"./DataAccessRequestAccessorsFilesForm-CEGKQfLD.js";import"./enums-BKcs_BPO.js";import"./_arrayReduce-CrxnWFSq.js";import"./uniq-DJjk0Efu.js";import"./forEach-UWyboym_.js";import"./useDataAccessSubmission-CKluyAg4.js";import"./UserSearchBox-CK4kOgWE.js";import"./useDebouncedEffect-Bc1BBC9L.js";import"./Autocomplete-DDVyrGPS.js";import"./usePreviousProps-DkgZ2N9x.js";import"./RadioGroup-CnRjRV1z.js";import"./Radio-DGZ43C8v.js";import"./SwitchBase-CaT_nPZV.js";import"./FormGroup-sBnWoHaQ.js";import"./FormControlLabel-BR7dDpyV.js";import"./UploadDocumentField-BN7P67Yv.js";import"./FileUpload-rVbf6dJO.js";import"./ManagedACTAccessRequirementFormWikiWrapper-KrqoFeOJ.js";import"./GridLegacy-P_rRpgsD.js";import"./ResearchProjectForm-xtzoecS1.js";import"./TextFieldWithWordLimit-BOIPhDn_.js";import"./AuthenticatedRequirement-Bw5Hbdfx.js";import"./CertificationRequirement-CiqJy2_W.js";import"./TwoFactorAuthEnabledRequirement-DZXgjN9b.js";import"./ValidationRequirement-DnN1R7ih.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-Cblb72o_.js";import"./RejectDataAccessRequestModal-_0-Ik8Z1.js";import"./CannedRejectionDialog-DD3R3b38.js";import"./immutable.es-CT6QCxCG.js";import"./ConfirmationDialog-DZOX2IVv.js";import"./Checkbox-Dr9iAAR2.js";import"./Grid-BM8P1l0M.js";import"./upperFirst-DCnA8Vnj.js";import"./_stringToArray-B-jCV0Ed.js";const Le={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>S({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...d(e),...u(e),s.get(`${e}${i(":id")}`,({params:r})=>{const a=c.find(p=>r.id===p.id);return t.json(a,{status:200})}),s.get(`${e}${R(":id")}`,()=>t.json(m,{status:200})),s.get(`${e}${E(":id")}`,()=>t.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),s.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>t.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:_,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...I(e),s.put(`${e}${i(":id")}`,async({request:r})=>t.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[s.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return t.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const xe=["Demo","DemoError"];export{o as Demo,n as DemoError,xe as __namedExportsOrder,Le as default};
