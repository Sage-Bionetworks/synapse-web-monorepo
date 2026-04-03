import{z as d,b as e,o as u,s,kp as i,kq as c,H as t,kr as R,i as m,ks as E,kt as _,a0 as I,dG as S,k8 as O}from"./iframe-DYswlUGP.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-dfQRXAgj.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-B6hk1tXr.js";import"./useAccessRequirements-DplbVuLW.js";import"./index-BMR4-6mU.js";import"./_baseOrderBy-eTLvEUfR.js";import"./_baseIteratee-DHYAHbZz.js";import"./_baseMap-DNdo1oCm.js";import"./_baseEach-COdfZHMJ.js";import"./useInfiniteQuery-C6sjWaRu.js";import"./groupBy-CCtV6KCk.js";import"./_createAggregator-B73Jc1RS.js";import"./DialogBase-DElhgeR1.js";import"./Close-CREisBj0.js";import"./HelpPopover-CfOwihTA.js";import"./MarkdownPopover-WusZcULb.js";import"./LightTooltip-BnjP_fyR.js";import"./MarkdownSynapse-Dkd6SgfN.js";import"./SkeletonButton-DEMQuh9j.js";import"./SkeletonInlineBlock-CUdvST4e.js";import"./SkeletonTable-D2i5wmbG.js";import"./SkeletonParagraph-DYuPzAGZ.js";import"./EntityLink-KKP10NQ5.js";import"./useEntity-DLAHgvkN.js";import"./pickBy-BkA3Lwh4.js";import"./isString-Ne5nseJa.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-gusvPwVq.js";import"./useGetEntityHeaders-C8uyC8d7.js";import"./EntityIcon-WoBiCjyX.js";import"./ErrorChip-iHtHel8d.js";import"./Chip-DAxgxn8_.js";import"./UserOrTeamBadge-B9AR19GT.js";import"./UserBadge-DUmGtykH.js";import"./useUserBundle-DOc2ZPa9.js";import"./MenuItem-_kEtlbZc.js";import"./Card-CwPDBa8H.js";import"./TeamBadge-DU43LRAC.js";import"./UnmanagedACTAccessRequirementItem-DDYLL-wv.js";import"./RequirementItem-DoDO5gqC.js";import"./LockTwoTone-AWykrpSp.js";import"./ManagedACTAccessRequirementItemView-B3Rxs00Z.js";import"./SelfSignAccessRequirementItem-DAZTD69K.js";import"./DataAccessRequestAccessorsFilesForm-Cim5_TDP.js";import"./enums-CebO80yD.js";import"./_arrayReduce-CrxnWFSq.js";import"./uniq-Dux4ndxG.js";import"./forEach-UWyboym_.js";import"./useDataAccessSubmission-DrzXvBYr.js";import"./UserSearchBox-CXXWYlxV.js";import"./useDebouncedEffect-C1sHbCvU.js";import"./Autocomplete-CAKxcECi.js";import"./usePreviousProps-8XNsrnMc.js";import"./RadioGroup-bSF2OO86.js";import"./Radio-BZJz5CZX.js";import"./SwitchBase-Dw5npIqo.js";import"./FormGroup-CAbD2mtW.js";import"./FormControlLabel-D5Zyhonu.js";import"./UploadDocumentField-BKbRTURF.js";import"./FileUpload-DwvDqSZl.js";import"./ManagedACTAccessRequirementFormWikiWrapper-AIXKW4-p.js";import"./GridLegacy-DzB9Vd43.js";import"./ResearchProjectForm--bppPvA-.js";import"./TextFieldWithWordLimit-DAwSWHxD.js";import"./AuthenticatedRequirement-DRW6Zdxe.js";import"./CertificationRequirement-BXq5VGaB.js";import"./TwoFactorAuthEnabledRequirement-D8rWPp16.js";import"./ValidationRequirement-CXwBBLdd.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-BQRU0P_M.js";import"./RejectDataAccessRequestModal-DJCvG2hE.js";import"./CannedRejectionDialog-C3OGUVZ0.js";import"./immutable.es-CT6QCxCG.js";import"./ConfirmationDialog-BeOhck-W.js";import"./Checkbox-BJOMAjKn.js";import"./Grid-DB5FlxZz.js";import"./upperFirst-_1KuNgyf.js";import"./_stringToArray-MPA9SZ4x.js";const Le={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>S({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...d(e),...u(e),s.get(`${e}${i(":id")}`,({params:r})=>{const a=c.find(p=>r.id===p.id);return t.json(a,{status:200})}),s.get(`${e}${R(":id")}`,()=>t.json(m,{status:200})),s.get(`${e}${E(":id")}`,()=>t.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),s.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>t.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:_,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...I(e),s.put(`${e}${i(":id")}`,async({request:r})=>t.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[s.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return t.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
