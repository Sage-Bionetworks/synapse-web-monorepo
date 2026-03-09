import{jx as p}from"./iframe-yrc_qHyu.js";import{S as a}from"./SchemaDrivenAnnotationEditor-BzalL8_m.js";import"./index-Chi_LkuB.js";import"./useEntity-Erg9uHlv.js";import"./pickBy-geHVkVLl.js";import"./isString-DT4CNQuk.js";import"./_baseIteratee-B0J-KDKo.js";import"./useInfiniteQuery-DvtqKNa0.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-DFZLKvF8.js";import"./useSchema-BwCkX9bT.js";import"./index-BPi94lnh.js";import"./enums-CD86UxHx.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-DwOMPOPt.js";import"./uniq-CJYl14sy.js";import"./forEach-CWOCpBhE.js";import"./Add-DXvyfC-R.js";import"./Grid-1Zu8eZdi.js";import"./ListItem-D4zFgr7h.js";import"./listItemButtonClasses-CR92Gpqa.js";import"./ListItemIcon-CTW4O7R8.js";import"./MenuItem-DdsI2qtG.js";import"./ListItemText-D43wk2LX.js";import"./ArrowUpward-CbMadVdh.js";import"./ContentCopy-D9WYPTT7.js";import"./FormControlLabel-PA7GUpsR.js";import"./Checkbox-B2FAWXxm.js";import"./SwitchBase-Dr9vpGDU.js";import"./FormGroup-Bn8nmVR4.js";import"./RadioGroup-Dm4FtZPg.js";import"./Radio-Dn2_dbvc.js";import"./Slider-vlfcEg0e.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-BGe5VYMN.js";import"./DialogBase-BjJleq3r.js";import"./Close-Di02zrOW.js";import"./HelpPopover-BqXpmNFE.js";import"./MarkdownPopover-CKXXZDMn.js";import"./LightTooltip-N83Bwt9b.js";import"./MarkdownSynapse-Bx8fIbL4.js";import"./SkeletonButton-qQeUX2b-.js";import"./SkeletonInlineBlock-A6wMEVyL.js";import"./SkeletonTable-Cb2oJXC7.js";import"./SkeletonParagraph-BFGPUajO.js";import"./JsonSchemaForm-BF-JEafR.js";import"./GridLegacy-BrA8-h-Z.js";import"./HelpTwoTone-C9Wg6-JS.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-WE_KG3YE.js";import"./_createAggregator-C98e7p3g.js";import"./_baseMap-CcYtFPTe.js";import"./DateTimePicker-nuBjcYcu.js";import"./useMobilePicker-BtQetFlT.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-BYjiv4dF.js";import"./index-Cza2pBOV.js";import"./Chip-Bjj18pYr.js";import"./Tabs-DXIVHA9y.js";import"./KeyboardArrowRight-CSybBccD.js";import"./Autocomplete-CrAQ1_Nh.js";import"./usePreviousProps-Cs6Nh4WE.js";import"./use-deep-compare-effect.esm-DUwYhQ3T.js";import"./TextWidget-CiyTCEMt.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,vr={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    schemaId: 'dev.grosenbacher.test-Arrays',
    entityId: 'syn25959281'
  }
}`,...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    schemaId: 'dev.grosenbacher.test-IfThenElse'
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    schemaId: 'nkauer-ad.main'
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    entityId: 'syn32673093'
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    entityId: 'syn25959288'
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    validationSchema: {
      $schema: 'http://json-schema.org/draft-07/schema#',
      $id: \`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/\${mockSchemaBinding.jsonSchemaVersionInfo.$id}\`,
      type: 'object',
      properties: {
        country: {
          enum: ['USA', 'CA'],
          description: 'Test description for country property'
        },
        showStringArray: {
          type: 'boolean'
        }
      },
      required: ['country'],
      allOf: [{
        if: {
          properties: {
            country: {
              const: 'USA'
            }
          },
          required: ['country']
        },
        then: {
          properties: {
            state: {
              type: 'string'
            }
          },
          required: ['state']
        }
      }, {
        if: {
          properties: {
            country: {
              const: 'CA'
            }
          },
          required: ['country']
        },
        then: {
          properties: {
            province: {
              type: 'string'
            }
          },
          required: ['province']
        }
      }, {
        if: {
          properties: {
            showStringArray: {
              const: true
            }
          },
          required: ['showStringArray']
        },
        then: {
          properties: {
            stringArray: {
              type: 'array',
              items: {
                type: 'string'
              }
            }
          }
        }
      }]
    }
  }
}`,...s.parameters?.docs?.source}}};const Ir=["Arrays","IfThenElse","ComplexSchema","DerivedAnnotations","ErrorsEntity","DirectlyProvidedSchema"];export{r as Arrays,t as ComplexSchema,o as DerivedAnnotations,s as DirectlyProvidedSchema,n as ErrorsEntity,e as IfThenElse,Ir as __namedExportsOrder,vr as default};
