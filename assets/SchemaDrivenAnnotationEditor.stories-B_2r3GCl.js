import{jw as p}from"./iframe-DYswlUGP.js";import{S as a}from"./SchemaDrivenAnnotationEditor-OsBmJh-x.js";import"./index-Chi_LkuB.js";import"./useEntity-DLAHgvkN.js";import"./pickBy-BkA3Lwh4.js";import"./isString-Ne5nseJa.js";import"./_baseIteratee-DHYAHbZz.js";import"./useInfiniteQuery-C6sjWaRu.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-gusvPwVq.js";import"./useSchema-CWbSCm8d.js";import"./index-BBrOp8Gu.js";import"./enums-CebO80yD.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-COdfZHMJ.js";import"./uniq-Dux4ndxG.js";import"./forEach-UWyboym_.js";import"./Add-CCA5jtUe.js";import"./Grid-DB5FlxZz.js";import"./ListItem-Bu9ixGDT.js";import"./listItemButtonClasses-BIRVswYQ.js";import"./ListItemIcon-BLODiExh.js";import"./MenuItem-_kEtlbZc.js";import"./ListItemText-8jRU4Inb.js";import"./ArrowUpward-DE6q5vT2.js";import"./ContentCopy-DjVh5vx1.js";import"./FormControlLabel-D5Zyhonu.js";import"./Checkbox-BJOMAjKn.js";import"./SwitchBase-Dw5npIqo.js";import"./FormGroup-CAbD2mtW.js";import"./RadioGroup-bSF2OO86.js";import"./Radio-BZJz5CZX.js";import"./Slider-70aCy38S.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-BeOhck-W.js";import"./DialogBase-DElhgeR1.js";import"./Close-CREisBj0.js";import"./HelpPopover-CfOwihTA.js";import"./MarkdownPopover-WusZcULb.js";import"./LightTooltip-BnjP_fyR.js";import"./MarkdownSynapse-Dkd6SgfN.js";import"./SkeletonButton-DEMQuh9j.js";import"./SkeletonInlineBlock-CUdvST4e.js";import"./SkeletonTable-D2i5wmbG.js";import"./SkeletonParagraph-DYuPzAGZ.js";import"./JsonSchemaForm-CrnEDJPo.js";import"./GridLegacy-DzB9Vd43.js";import"./HelpTwoTone-Bk59nQKE.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-CCtV6KCk.js";import"./_createAggregator-B73Jc1RS.js";import"./_baseMap-DNdo1oCm.js";import"./DateTimePicker-DPFn1NdB.js";import"./useMobilePicker-jj69_lQ-.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-dfZADeWc.js";import"./index-BMR4-6mU.js";import"./Chip-DAxgxn8_.js";import"./Tabs-lF0xZ33V.js";import"./KeyboardArrowRight-Cn2VQwhO.js";import"./Autocomplete-CAKxcECi.js";import"./usePreviousProps-8XNsrnMc.js";import"./use-deep-compare-effect.esm-RKcTFLCK.js";import"./TextWidget-C6ljvQtR.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,vr={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
