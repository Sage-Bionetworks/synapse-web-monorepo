import{g as u,k as d,n as t,a1 as c,dO as R,b as e,kq as i,kr as E,H as s,ks as _,p as m,kt as I,ku as S,k9 as O}from"./iframe-DI5oOWnE.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-CGTy0MQV.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-Cr3IkK6o.js";import"./useAccessRequirements-D4Y9E4e8.js";import"./index-CS5gCP_E.js";import"./_baseOrderBy-B1wahwza.js";import"./_baseIteratee-DqpkiyQF.js";import"./_baseMap-Dju9eJVG.js";import"./_baseEach-BgfcCDwM.js";import"./useInfiniteQuery-BxuX-z1J.js";import"./groupBy-AuSVDgMV.js";import"./_createAggregator-aVNNmHoX.js";import"./DialogBase-Jgs4FWnV.js";import"./Close-B-CGi6eH.js";import"./HelpPopover-2ce9FsNc.js";import"./MarkdownPopover-D05MpzJD.js";import"./LightTooltip-BEWvn8Re.js";import"./MarkdownSynapse-Dgvqt2C_.js";import"./SkeletonButton-CwiRfCnX.js";import"./SkeletonInlineBlock-5UtZsnHV.js";import"./SkeletonTable-h5dOlVIm.js";import"./SkeletonParagraph-JG7mPZxB.js";import"./EntityLink-DV_S4yb6.js";import"./useEntity-B_4VWDkv.js";import"./pickBy-B-IsmZoO.js";import"./isString-BVjChegR.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-CohGdH5g.js";import"./useGetEntityHeaders-CD6SosP-.js";import"./EntityIcon-BRfENHuD.js";import"./ErrorChip-IcDiFVnh.js";import"./Chip-CmH7z8y-.js";import"./UserOrTeamBadge-D-75-SlP.js";import"./UserBadge-mbKgPEmt.js";import"./useUserBundle-6iTYX9he.js";import"./MenuItem-BZc7CYee.js";import"./Card-DUullsi7.js";import"./TeamBadge-DHwJG_xH.js";import"./UnmanagedACTAccessRequirementItem-D3eNO1OF.js";import"./RequirementItem-BRIBS3x-.js";import"./LockTwoTone-CX6uECq6.js";import"./UserSearchBoxV2-CzkvlLmo.js";import"./useDebouncedEffect-YCsbrbTX.js";import"./use-deep-compare-effect.esm-BlARVJqo.js";import"./uniq-maDaqVgj.js";import"./without-xTDGl7fh.js";import"./Select-aab027f3.esm-CcO9Gb3N.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./ManagedACTAccessRequirementItemView-kiESYzAZ.js";import"./SelfSignAccessRequirementItem-exMZ14Lw.js";import"./DataAccessRequestAccessorsFilesForm-C96ocgki.js";import"./enums-BHaY5CAs.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-CWOCpBhE.js";import"./useDataAccessSubmission-BNQzF1-o.js";import"./RadioGroup-DvzIv4YN.js";import"./Radio-bQR5C53o.js";import"./SwitchBase-chH9wrOw.js";import"./FormGroup-i82iJbL-.js";import"./FormControlLabel-BG_p1zhf.js";import"./UploadDocumentField-DovqTmFx.js";import"./FileUpload-CtDkkF9-.js";import"./ManagedACTAccessRequirementFormWikiWrapper-BJMIrAMl.js";import"./GridLegacy-CRLr2fpn.js";import"./ResearchProjectForm-FppLGm_d.js";import"./TextFieldWithWordLimit-C_pUlKyV.js";import"./AuthenticatedRequirement-D64GIFcW.js";import"./CertificationRequirement-CCB7smuy.js";import"./TwoFactorAuthEnabledRequirement-DASv1ruN.js";import"./ValidationRequirement-ETsB1vhd.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-aGW5qVZJ.js";import"./RejectDataAccessRequestModal-BzPDRkf4.js";import"./CannedRejectionDialog-DvCUdFvS.js";import"./immutable.es-C7Y1z7XT.js";import"./ConfirmationDialog-Bhb-7VQY.js";import"./Checkbox-j3vYPN6O.js";import"./Grid-CZN7Ki67.js";import"./upperFirst-5cUbkehC.js";import"./_stringToArray-O09zURdA.js";const Ve={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>R({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...u(e),...d(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=E.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${_(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${I(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:S,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...c(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
