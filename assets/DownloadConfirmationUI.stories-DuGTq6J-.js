import{D as s}from"./DownloadConfirmationUI-BjNntCyY.js";import"./iframe-C80DNIXY.js";import"./index-Chi_LkuB.js";import"./useDownloadList-CG7GH6i9.js";import"./waitForAsyncResult-DgE--Zg4.js";import"./useInfiniteQuery-4baG4-hB.js";import"./duration-DbmI10NM.js";import"./relativeTime-DVX9LeFM.js";import"./SkeletonInlineBlock-DqQYipf9.js";import"./SynapseTableConstants-2qH3fDlQ.js";const{fn:o}=__STORYBOOK_MODULE_TEST__,C={title:"Download/DownloadConfirmationUI",component:s,tags:["autodocs"],argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0,onAddToDownloadCart:o(),onCancel:o()}},e={args:{isAuthenticated:!0,fileCount:1e4,fileSize:1e9,isLoadingStats:!1,isAddingToDownloadCart:!1}},t={args:{isAuthenticated:!0,fileCount:1e4,fileSize:void 0,isLoadingStats:!1,isAddingToDownloadCart:!1}},a={args:{isAuthenticated:!0,fileCount:0,fileSize:void 0,isLoadingStats:!0,isAddingToDownloadCart:!1}},i={args:{isAuthenticated:!0,fileCount:1e4,fileSize:void 0,isLoadingStats:!1,isAddingToDownloadCart:!0}},n={args:{isAuthenticated:!1,fileCount:1e4,fileSize:void 0,isLoadingStats:!1,isAddingToDownloadCart:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    isAuthenticated: true,
    fileCount: 10_000,
    fileSize: 1_000_000_000,
    isLoadingStats: false,
    isAddingToDownloadCart: false
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    isAuthenticated: true,
    fileCount: 10_000,
    fileSize: undefined,
    isLoadingStats: false,
    isAddingToDownloadCart: false
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    isAuthenticated: true,
    fileCount: 0,
    fileSize: undefined,
    isLoadingStats: true,
    isAddingToDownloadCart: false
  }
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    isAuthenticated: true,
    fileCount: 10_000,
    fileSize: undefined,
    isLoadingStats: false,
    isAddingToDownloadCart: true
  }
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    isAuthenticated: false,
    fileCount: 10_000,
    fileSize: undefined,
    isLoadingStats: false,
    isAddingToDownloadCart: false
  }
}`,...n.parameters?.docs?.source}}};const A=["ConfirmationWithFileSize","ConfirmationWithoutFileSize","LoadingStats","AddingToCart","Unauthenticated"];export{i as AddingToCart,e as ConfirmationWithFileSize,t as ConfirmationWithoutFileSize,a as LoadingStats,n as Unauthenticated,A as __namedExportsOrder,C as default};
