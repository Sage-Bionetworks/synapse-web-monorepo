import{g as d,k as u,n as t,a3 as c,dN as R,b as e,km as i,kn as E,H as s,ko as _,p as m,kp as I,kq as S,k5 as O}from"./iframe-HR5efO_6.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-FOWVcC3d.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-BzEmdJem.js";import"./useAccessRequirements-DKEoMt3i.js";import"./index-BuKVPeEG.js";import"./_baseOrderBy-BXdQUi3q.js";import"./_baseIteratee-CTXbCQzb.js";import"./_baseMap-d573cvgi.js";import"./_baseEach-DeceRv-z.js";import"./useInfiniteQuery-BffcSkFX.js";import"./groupBy-Bu_IPWh2.js";import"./_createAggregator-CoVzYINY.js";import"./DialogBase-CheFJngv.js";import"./Close-DAks8q53.js";import"./HelpPopover-C2dZwoeG.js";import"./MarkdownPopover-DV3WT5Oj.js";import"./LightTooltip-DgluAXFh.js";import"./MarkdownSynapse-BD_kELiG.js";import"./SkeletonButton-CpPX_nit.js";import"./SkeletonInlineBlock-pMLRfvW-.js";import"./SkeletonTable-Bm63jMKW.js";import"./SkeletonParagraph-BGy70kQG.js";import"./EntityLink-Bws5EwFB.js";import"./useEntity-CRLsg8GB.js";import"./pickBy-B4lHgJ27.js";import"./isString-DCUbJhtU.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-OkomfHu0.js";import"./useGetEntityHeaders-M84CS0P6.js";import"./EntityIcon--gYgxIcH.js";import"./ErrorChip-BMe7Kood.js";import"./Chip-CBQKgw7F.js";import"./UserOrTeamBadge-aC7olRyf.js";import"./UserBadge-CJyxtbNI.js";import"./useUserBundle-B64ZgZGa.js";import"./MenuItem-BBTtHw-Z.js";import"./Card-EBnxndHl.js";import"./TeamBadge-0p_pywjr.js";import"./UnmanagedACTAccessRequirementItem-OAJRt2qI.js";import"./RequirementItem-C7v9HlqK.js";import"./LockTwoTone-D3NZXD6U.js";import"./UserSearchBoxV2-BdJ2UPZ2.js";import"./useDebouncedEffect-BIxOsN4W.js";import"./use-deep-compare-effect.esm-BfvhFq7j.js";import"./uniq-BkxzrQ3D.js";import"./without-Ce9LEVAz.js";import"./Select-aab027f3.esm-j1d62oNz.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./ManagedACTAccessRequirementItemView-_LhMQ5HP.js";import"./SelfSignAccessRequirementItem-DxrPjXdn.js";import"./DataAccessRequestAccessorsFilesForm-DYfbYXt1.js";import"./enums-DwbyUcCH.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-CWOCpBhE.js";import"./useDataAccessSubmission-BWbTE2Cl.js";import"./RadioGroup-BMNqRdN6.js";import"./Radio-DKiY7dcP.js";import"./SwitchBase-Bx2dA3EB.js";import"./FormGroup-hLVMEmoo.js";import"./FormControlLabel-B64hA87S.js";import"./UploadDocumentField-BsLtcfqx.js";import"./FileUpload-DRLRvGT7.js";import"./ManagedACTAccessRequirementFormWikiWrapper-D5wJ2INV.js";import"./GridLegacy-EIvDRdIz.js";import"./ResearchProjectForm-71H_KZft.js";import"./TextFieldWithWordLimit-YwXO8y1r.js";import"./AuthenticatedRequirement-fYGLaHFt.js";import"./CertificationRequirement-CRiSVRWV.js";import"./TwoFactorAuthEnabledRequirement-Bx3mX6xm.js";import"./ValidationRequirement-BCb1T1ot.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-CanyqbPz.js";import"./RejectDataAccessRequestModal-CRX1IpFR.js";import"./CannedRejectionDialog-BKkGq-GQ.js";import"./immutable.es-C7Y1z7XT.js";import"./ConfirmationDialog-BDKUD8yD.js";import"./Checkbox-CZhCtDAe.js";import"./Grid-Crcn3maU.js";import"./upperFirst-4d1LxBq3.js";import"./_stringToArray-tXo0YHRB.js";const Ve={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>R({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...d(e),...u(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=E.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${_(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${I(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:S,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...c(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
