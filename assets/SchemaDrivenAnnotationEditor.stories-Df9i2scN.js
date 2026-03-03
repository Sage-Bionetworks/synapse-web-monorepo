import{ju as p}from"./iframe-B_O9kSix.js";import{S as a}from"./SchemaDrivenAnnotationEditor-CYKibDPF.js";import"./index-Chi_LkuB.js";import"./useEntity-CRghs1UI.js";import"./pickBy-BvX4lrYi.js";import"./isString-C6ja5JhB.js";import"./_baseIteratee-yjnrhNzg.js";import"./useInfiniteQuery-BhNmSgI4.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-C1kMZ-wS.js";import"./useSchema-DPoez4Nx.js";import"./index-B0bLIisu.js";import"./enums-DcHDNg2a.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-CfBB6sdk.js";import"./uniq-CkScBwqE.js";import"./forEach-CWOCpBhE.js";import"./Add-Dor8_Zx-.js";import"./Grid-DpqNCaG6.js";import"./ListItem--hghDhXv.js";import"./listItemButtonClasses-CS700FRz.js";import"./ListItemIcon-Bb2G_JKg.js";import"./MenuItem-BcwwJPC9.js";import"./ListItemText-BLr6EZ0i.js";import"./ArrowUpward-CFba69gW.js";import"./ContentCopy-Dz7b_gn5.js";import"./FormControlLabel-BIGrXLA0.js";import"./Checkbox-S3ZkMNUz.js";import"./SwitchBase-BTC1pAKz.js";import"./FormGroup-HvZULV_t.js";import"./RadioGroup-B8Pmw6xC.js";import"./Radio-BRhsJlQp.js";import"./Slider-BTMtzVK7.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-DzRI3wIo.js";import"./DialogBase-DwQ32IO2.js";import"./Close-BwmNujrW.js";import"./HelpPopover-CCcniF6w.js";import"./MarkdownPopover-DRJsMIka.js";import"./LightTooltip-GgpSSUJ5.js";import"./MarkdownSynapse-DfLA11xe.js";import"./SkeletonButton-BM1gzNpw.js";import"./SkeletonInlineBlock-B4Ftzl0H.js";import"./SkeletonTable-DPjCujA-.js";import"./SkeletonParagraph-CyxH5Rsx.js";import"./JsonSchemaForm-CoXQPvtY.js";import"./GridLegacy-BNGnip9i.js";import"./HelpTwoTone-B8XKJAuE.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-C15yHdf_.js";import"./_createAggregator-Jh0YJ0SL.js";import"./_baseMap-DN0Mni7r.js";import"./DateTimePicker-BTUfkhm4.js";import"./useMobilePicker-j8QllUja.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-WLvlrKwx.js";import"./index-CIA9_xQz.js";import"./Chip-DJkWIvUs.js";import"./Tabs-B0Gj6UPf.js";import"./KeyboardArrowRight-kHW_TRx7.js";import"./Autocomplete-CTXGK_nH.js";import"./usePreviousProps-D5tg2RLD.js";import"./use-deep-compare-effect.esm-BXI7_gf7.js";import"./TextWidget-BHVa_vu1.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,vr={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
