import{jG as p}from"./iframe-r7gAu2bc.js";import{S as a}from"./SchemaDrivenAnnotationEditor-1svku66T.js";import"./index-Chi_LkuB.js";import"./useEntity-fJrHHkhL.js";import"./pickBy-BCgFv0xF.js";import"./isString-CByKS3-p.js";import"./_baseIteratee-DVLYk22D.js";import"./useQueries-9m2Bezy_.js";import"./useSuspenseQuery-DnY7oDDS.js";import"./useInfiniteQuery-B8z8XTlO.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle--mzUFdcF.js";import"./useSchema-CspW7gLQ.js";import"./index-47k_BamG.js";import"./enums-PjrRvVI0.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-BnwaDblR.js";import"./uniq-CK8qiDB8.js";import"./forEach-CWOCpBhE.js";import"./Add-DU_omI4x.js";import"./Grid-UI9nWBLn.js";import"./ListItem-BFJw64wu.js";import"./listItemButtonClasses-BgX_caKS.js";import"./ListItemIcon-DyFby1sU.js";import"./MenuItem-B0LSwwXU.js";import"./ListItemText-v_qkE6Ki.js";import"./ArrowUpward-B7rsGwe2.js";import"./ContentCopy-DASY6NDb.js";import"./FormControlLabel--q0TnODD.js";import"./Checkbox-DEDTHBsJ.js";import"./SwitchBase-BSufJQUk.js";import"./FormGroup-BgMgGzN1.js";import"./RadioGroup-C4rpomu9.js";import"./Radio-yQldQVk_.js";import"./Slider-DsBzXODw.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-vZtrKvGV.js";import"./DialogBase-BOUiF06G.js";import"./Close-xlIC43VD.js";import"./HelpPopover-DIDZEU3E.js";import"./MarkdownPopover-DLh5Bk_h.js";import"./LightTooltip-CMMeaAaF.js";import"./MarkdownSynapse-2Kx7OuZk.js";import"./SkeletonButton-BM35HBbr.js";import"./SkeletonInlineBlock-CnfDTonB.js";import"./SkeletonTable-ChI727yy.js";import"./SkeletonParagraph-ENW1FsOv.js";import"./JsonSchemaForm-VrPQIODv.js";import"./GridLegacy-3UsA9qiH.js";import"./HelpTwoTone-ChI4hTvQ.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-BXInGreZ.js";import"./_createAggregator-C4xK8C2c.js";import"./_baseMap-C01ANpbm.js";import"./DateTimePicker-CeGWgl_6.js";import"./useMobilePicker-CBDAP-kf.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-BHmcozRE.js";import"./index-abBLt8Ff.js";import"./Chip-Da8UDvbq.js";import"./Tabs-DaLTnT9Y.js";import"./KeyboardArrowRight-C0m766Je.js";import"./Autocomplete-C59pVjW_.js";import"./usePreviousProps-CPp0bxiV.js";import"./use-deep-compare-effect.esm-DeW_apDf.js";import"./TextWidget-j282Nf_W.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,Er={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const qr=["Arrays","IfThenElse","ComplexSchema","DerivedAnnotations","ErrorsEntity","DirectlyProvidedSchema"];export{r as Arrays,t as ComplexSchema,o as DerivedAnnotations,s as DirectlyProvidedSchema,n as ErrorsEntity,e as IfThenElse,qr as __namedExportsOrder,Er as default};
