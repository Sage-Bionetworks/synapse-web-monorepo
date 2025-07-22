import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{I as n}from"./IconSvg-BpWE-YKe.js";import{C as p}from"./ComplexMenu-BUrzkX_D.js";import"./createSvgIcon-BTXgHK0C.js";import"./index-C6CB2jWR.js";import"./iframe-BrY7ve3a.js";import"./createTheme-BxrJIZZA.js";import"./DefaultPropsProvider-2rL3zKZZ.js";import"./spreadSx-CwcO6WA9.js";import"./useTheme-B5LoXWfl.js";import"./useTheme-XKQ19B89.js";import"./Tooltip-bO2wIMLb.js";import"./index--2jRr67_.js";import"./useSlot-40XJx3zz.js";import"./useForkRef-Cpa6MheN.js";import"./useTimeout-hVuR9U1q.js";import"./useControlled-CprGF-Oj.js";import"./getReactElementRef-B9ecqkhl.js";import"./index-DDRx11n6.js";import"./index-C9S1haND.js";import"./Grow-5B01QhkT.js";import"./Popper-B-aCHUvm.js";import"./ownerDocument-DW-IO8s5.js";import"./isFocusVisible-B8k4qzLc.js";import"./LayersTwoTone--kIUjaw9.js";import"./ContentCopyTwoTone-RP1ySRUj.js";import"./HelpOutlineTwoTone-D9qy-jwr.js";import"./ErrorOutlined-Bbz3AEqA.js";import"./GetAppTwoTone-BgiW5Aj3.js";import"./InfoOutlined-CdOG6T3Y.js";import"./PhoneTwoTone-iZb6gY7-.js";import"./DeleteTwoTone-De5wmGIn.js";import"./CheckCircleTwoTone-BJ-saQul.js";import"./DropdownMenu-B8SIrPBd.js";import"./Button-ARfYFQRF.js";import"./createSimplePaletteValueFilter-CAMoPieZ.js";import"./ButtonBase-DvVhWcii.js";import"./CircularProgress-81Z4_lZz.js";import"./Typography-BRpkhNhA.js";import"./index-CLQctDsx.js";import"./extendSxProp-BpXXdIFm.js";import"./Fade-D6mYJQm1.js";import"./Paper-CSESaBNh.js";import"./ClickAwayListener-BmrFbcSi.js";import"./MenuList-m69BPmnA.js";import"./getScrollbarSize-CaCM53D3.js";import"./ownerWindow-HkKU3E4x.js";import"./List-BDGkHl-8.js";import"./MenuItem-DFfDU7OC.js";import"./dividerClasses-BqqEl0Gi.js";import"./ListItemIcon-DaNFOpW_.js";import"./ListItemText-cZ0HyzOG.js";import"./Divider-SFmLmber.js";import"./IconSvgButton-ChdmWYBI.js";import"./IconButton-CbdRsmZ_.js";import"./index-BQAyi59D.js";import"./getThemeProps-BtEAG56k.js";import"./Box-Cy_lKH6E.js";const xo={title:"UI/ComplexMenu",component:p},o=s=>()=>{console.log("Item clicked",s)},t={args:{iconButtons:[{icon:"edit",tooltipText:"This is an icon button",onClick:o("edit icon")},{icon:"label",tooltipText:"View annotations",onClick:o("label icon")},{icon:"createVersion",tooltipText:"Create new version",onClick:o("createVersion icon")}],dropdownMenus:[{dropdownButtonText:"You can have...",buttonProps:{endIcon:i.jsx(n,{icon:"upload",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]},{dropdownButtonText:"...multiple dropdown menus!",buttonProps:{endIcon:i.jsx(n,{icon:"download",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]}]}};var e,r,l;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
  args: {
    iconButtons: [{
      icon: 'edit',
      tooltipText: 'This is an icon button',
      onClick: onClickHandler('edit icon')
    }, {
      icon: 'label',
      tooltipText: 'View annotations',
      onClick: onClickHandler('label icon')
    }, {
      icon: 'createVersion',
      tooltipText: 'Create new version',
      onClick: onClickHandler('createVersion icon')
    }],
    dropdownMenus: [{
      dropdownButtonText: 'You can have...',
      buttonProps: {
        endIcon: <IconSvg icon="upload" wrap={false} />
      },
      items: [[{
        text: 'Do something cool',
        onClick: onClickHandler(0)
      }, {
        text: 'This one has a tooltip',
        tooltipText: 'Some more info',
        onClick: onClickHandler(1)
      }, {
        text: 'This one is disabled',
        disabled: true,
        onClick: onClickHandler(3)
      }, {
        text: 'This one has both',
        disabled: true,
        tooltipText: "You can't do this for reasons",
        onClick: onClickHandler(4)
      }], [{
        text: 'You can organize actions into groups',
        onClick: onClickHandler(5)
      }]]
    }, {
      dropdownButtonText: '...multiple dropdown menus!',
      buttonProps: {
        endIcon: <IconSvg icon="download" wrap={false} />
      },
      items: [[{
        text: 'Do something cool',
        onClick: onClickHandler(0)
      }, {
        text: 'This one has a tooltip',
        tooltipText: 'Some more info',
        onClick: onClickHandler(1)
      }, {
        text: 'This one is disabled',
        disabled: true,
        onClick: onClickHandler(3)
      }, {
        text: 'This one has both',
        disabled: true,
        tooltipText: "You can't do this for reasons",
        onClick: onClickHandler(4)
      }], [{
        text: 'You can organize actions into groups',
        onClick: onClickHandler(5)
      }]]
    }]
  }
}`,...(l=(r=t.parameters)==null?void 0:r.docs)==null?void 0:l.source}}};const Co=["Demo"];export{t as Demo,Co as __namedExportsOrder,xo as default};
