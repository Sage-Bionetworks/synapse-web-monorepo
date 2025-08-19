import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{I as n}from"./IconSvg-D684tzCk.js";import{C as p}from"./ComplexMenu-DEc9fUXe.js";import"./createSvgIcon-C8DENwZc.js";import"./index-RQ0VRfBe.js";import"./iframe-BSwI0BuQ.js";import"./createTheme-B3a40uRt.js";import"./DefaultPropsProvider-Brvdw7MK.js";import"./spreadSx-CwcO6WA9.js";import"./useTheme-shV1vWHw.js";import"./useTheme-DOWP3Og2.js";import"./Tooltip-BkpuHW2s.js";import"./index-CtQ2an3R.js";import"./useSlot-B-ceud5V.js";import"./useForkRef-iIcboBYr.js";import"./useTimeout-DdZabwmr.js";import"./useControlled-DeJIqeNy.js";import"./getReactElementRef-DScjaHqm.js";import"./index-ByRN_LZE.js";import"./index-KthTLK7W.js";import"./Grow-DApu84Af.js";import"./Popper-DQ4U8fRj.js";import"./ownerDocument-DW-IO8s5.js";import"./isFocusVisible-B8k4qzLc.js";import"./LayersTwoTone-DMmMwtU1.js";import"./ContentCopyTwoTone-B3f6UZ8-.js";import"./HelpOutlineTwoTone-Bo605vWn.js";import"./ErrorOutlined-Bnvitcn1.js";import"./GetAppTwoTone-CrSrqxBy.js";import"./InfoOutlined-DM6FtJIm.js";import"./PhoneTwoTone-viJ5HT1Y.js";import"./DeleteTwoTone-CghiI8zw.js";import"./CheckCircleTwoTone-C4Hqs1v7.js";import"./DropdownMenu-D35BL-wE.js";import"./Button-DPlz7I9N.js";import"./createSimplePaletteValueFilter-DOADF6SA.js";import"./ButtonBase-BswOUPWa.js";import"./CircularProgress-D7ys3hik.js";import"./Typography-BHJkApfL.js";import"./index-CeTarxud.js";import"./extendSxProp-DaREFPpk.js";import"./Fade-CG1rLM0A.js";import"./Paper-BtspOLtq.js";import"./ClickAwayListener-CA-mVuPg.js";import"./MenuList-CpDEGnJz.js";import"./getScrollbarSize-CaCM53D3.js";import"./ownerWindow-HkKU3E4x.js";import"./List-6OBVlmHK.js";import"./MenuItem-Crn_2YwO.js";import"./dividerClasses-C78FD7g3.js";import"./ListItemIcon-BzqxpPkM.js";import"./ListItemText-DsI9x725.js";import"./Divider-b-_r5QSb.js";import"./IconSvgButton-BrQXcLol.js";import"./IconButton-BOPXpIMm.js";import"./index-BlJXIFrH.js";import"./getThemeProps-DSldrJ4N.js";import"./Box-Dbh1vRpk.js";const xo={title:"UI/ComplexMenu",component:p},o=s=>()=>{console.log("Item clicked",s)},t={args:{iconButtons:[{icon:"edit",tooltipText:"This is an icon button",onClick:o("edit icon")},{icon:"label",tooltipText:"View annotations",onClick:o("label icon")},{icon:"createVersion",tooltipText:"Create new version",onClick:o("createVersion icon")}],dropdownMenus:[{dropdownButtonText:"You can have...",buttonProps:{endIcon:i.jsx(n,{icon:"upload",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]},{dropdownButtonText:"...multiple dropdown menus!",buttonProps:{endIcon:i.jsx(n,{icon:"download",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]}]}};var e,r,l;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
