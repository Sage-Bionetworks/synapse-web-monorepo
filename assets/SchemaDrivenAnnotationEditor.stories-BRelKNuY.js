import{ju as p}from"./iframe-CR9Kppk9.js";import{S as a}from"./SchemaDrivenAnnotationEditor-DC9aX_8a.js";import"./index-Chi_LkuB.js";import"./useEntity-B9CBydGO.js";import"./pickBy-CKX9T9Zm.js";import"./isString-d8Zj9Cvt.js";import"./_baseIteratee-DMXgAEIk.js";import"./useInfiniteQuery-CfvRCTip.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-BH6Cb_YX.js";import"./useSchema-CQ4qmT48.js";import"./index-e0y1GJJ2.js";import"./enums-BXE4QEWQ.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-mi46k9dW.js";import"./uniq-Bmsqcuv3.js";import"./forEach-CWOCpBhE.js";import"./Add-B19dnewj.js";import"./Grid-Dh0yaqaz.js";import"./ListItem-BNgmpKyp.js";import"./listItemButtonClasses-DLwIaZt5.js";import"./ListItemIcon-BGZDkmdr.js";import"./MenuItem-CatSzqG9.js";import"./ListItemText-Cv5NQ3-3.js";import"./ArrowUpward-DpYBUMS0.js";import"./ContentCopy-sn-AV0Wl.js";import"./FormControlLabel-BQUL44l6.js";import"./Checkbox-wG1Izzux.js";import"./SwitchBase-CsuXxPzE.js";import"./FormGroup-NUnFvp6L.js";import"./RadioGroup-I8PLTBDT.js";import"./Radio-C3MmNDfe.js";import"./Slider-L-ojRYEL.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-BXteRzfy.js";import"./DialogBase-DXW71yq5.js";import"./Close-4K7Ixs7T.js";import"./HelpPopover-DZ345V92.js";import"./MarkdownPopover-olh3PRGS.js";import"./LightTooltip-z2lc9QXh.js";import"./MarkdownSynapse-C76XvQvw.js";import"./SkeletonButton-DgY4znPZ.js";import"./SkeletonInlineBlock-D-RkmMYK.js";import"./SkeletonTable-DJdtHoqT.js";import"./SkeletonParagraph-DAQxrYxE.js";import"./JsonSchemaForm-DOgj_H1_.js";import"./GridLegacy-DWXUChHI.js";import"./HelpTwoTone-DKmOog22.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-CVnsVeDd.js";import"./_createAggregator-BvNfnNZC.js";import"./_baseMap-BF4oj2Kl.js";import"./DateTimePicker-BwvR6g1s.js";import"./useMobilePicker-DtbsY0am.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-CFkyeD7R.js";import"./index-CTj_7GLi.js";import"./Chip-B6UQirNv.js";import"./Tabs-C0nCq_Si.js";import"./KeyboardArrowRight-DitGbZal.js";import"./Autocomplete-DPKpS9Pp.js";import"./usePreviousProps-KjIZq89L.js";import"./use-deep-compare-effect.esm-DxKcMd8s.js";import"./TextWidget-DcbO8p4t.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,vr={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
