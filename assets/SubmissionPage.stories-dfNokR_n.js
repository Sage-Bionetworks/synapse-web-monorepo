import{g as d,k as u,n as t,a3 as c,dZ as R,b as e,kw as i,kx as E,H as s,ky as _,p as m,kz as I,kA as S,kf as O}from"./iframe-C0jSrR5c.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-C8pZV5HU.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-CwrSr_qJ.js";import"./useAccessRequirements-Bd_mtqDV.js";import"./index-BLHQs1Hh.js";import"./_baseOrderBy-Bupo46Rb.js";import"./_baseIteratee-v5Xqf9Y2.js";import"./_baseMap-9KwVBg8u.js";import"./_baseEach-C3bTbgFj.js";import"./useQueries-BEt-pfoU.js";import"./useInfiniteQuery-Dm7YsOQW.js";import"./groupBy-nZhDlPgf.js";import"./_createAggregator-CRgMuUIF.js";import"./DialogBase-DJJeOMKc.js";import"./Close-DWJA7LvA.js";import"./HelpPopover-k-mGSl5L.js";import"./MarkdownPopover-HA7m-95B.js";import"./LightTooltip-C3dz3Fkz.js";import"./MarkdownSynapse-EAeKywnO.js";import"./SkeletonButton-Da-HHa43.js";import"./SkeletonInlineBlock-kvwMQbuJ.js";import"./SkeletonTable-83ELoSn8.js";import"./SkeletonParagraph-C_qcfR_9.js";import"./EntityLink-CpUuLKV7.js";import"./useEntity-EZ3XPIs0.js";import"./pickBy-SdRtXwSN.js";import"./isString-DxWdCZf8.js";import"./useSuspenseQuery-CHrCTvKw.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-De80g6tx.js";import"./useGetEntityHeaders-DAhcw3hW.js";import"./EntityIcon-Zd346r6L.js";import"./ErrorChip-DtXUTgce.js";import"./Chip-DsSr72e_.js";import"./UserOrTeamBadge-et93hRQS.js";import"./UserBadge-BYdkkxA3.js";import"./useUserBundle-OwQNCmCR.js";import"./MenuItem-f2MANGxO.js";import"./Card-DEA7Lujf.js";import"./TeamBadge-KKAfvp8_.js";import"./useRealmPrincipals-DCjA1VK_.js";import"./UnmanagedACTAccessRequirementItem-BFCJEJ4Y.js";import"./RequirementItem-Bx-188XW.js";import"./LockTwoTone-DTHCxO_h.js";import"./UserSearchBoxV2-DrC_mHnc.js";import"./useDebouncedEffect-DF1lZil-.js";import"./use-deep-compare-effect.esm-DLipLYZw.js";import"./uniq-DihkiDja.js";import"./without-Dj1Xsuug.js";import"./Select-aab027f3.esm-BmguvSFZ.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./ManagedACTAccessRequirementItemView-DEv_rYCd.js";import"./SelfSignAccessRequirementItem-C9JpcYq4.js";import"./DataAccessRequestAccessorsFilesForm-CirV-7Gt.js";import"./enums-BfiRLUSW.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-CWOCpBhE.js";import"./useDataAccessSubmission-DBljaRva.js";import"./RadioGroup-DmndWy01.js";import"./Radio-DNvuhsiL.js";import"./SwitchBase-Bbxsa0TU.js";import"./FormGroup-7qIFK8z3.js";import"./FormControlLabel-CSkgcZCy.js";import"./UploadDocumentField-CMDiKOI9.js";import"./FileUpload-Ct_cBXq5.js";import"./ManagedACTAccessRequirementFormWikiWrapper-0oU82WMc.js";import"./GridLegacy-4RcJvnVH.js";import"./ResearchProjectForm-BTVZFgCE.js";import"./TextFieldWithWordLimit-C3Bqkwj7.js";import"./AuthenticatedRequirement-CMGSJr3_.js";import"./CertificationRequirement-DttqRoMJ.js";import"./TwoFactorAuthEnabledRequirement-yAKH0l0j.js";import"./ValidationRequirement-BScz2Rk-.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-D0zKTLuE.js";import"./RejectDataAccessRequestModal-BskU2mdC.js";import"./CannedRejectionDialog-B1ZBLyzo.js";import"./immutable.es-C7Y1z7XT.js";import"./ConfirmationDialog-BQA9hOtu.js";import"./Checkbox-CJXQl7g0.js";import"./Grid-Bt5rSoGM.js";import"./upperFirst-Dz-xc1-u.js";import"./_stringToArray-Cdzwok_I.js";const Xe={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>R({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...d(e),...u(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=E.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${_(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${I(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:S,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...c(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const er=["Demo","DemoError"];export{o as Demo,n as DemoError,er as __namedExportsOrder,Xe as default};
