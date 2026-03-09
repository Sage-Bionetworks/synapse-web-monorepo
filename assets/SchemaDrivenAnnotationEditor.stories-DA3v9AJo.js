import{jy as p}from"./iframe-BEF4MEGo.js";import{S as a}from"./SchemaDrivenAnnotationEditor-D4fc6CGY.js";import"./index-Chi_LkuB.js";import"./useEntity-DdNYsGui.js";import"./pickBy-DiCMKNkD.js";import"./isString-CNlkU8gZ.js";import"./_baseIteratee-HJwSZeSD.js";import"./useInfiniteQuery-DIn0P7iw.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-BKjAM-VU.js";import"./useSchema-1rYhU-Z4.js";import"./index-BFrYAHqx.js";import"./enums-ClR57Pzo.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-DFsFxJY1.js";import"./uniq-BKv1Vzad.js";import"./forEach-CWOCpBhE.js";import"./Add-D5h8Ortw.js";import"./Grid-BDAXk-a3.js";import"./ListItem-B6o86zKv.js";import"./listItemButtonClasses-BgbB4LY1.js";import"./ListItemIcon-CY95cPq8.js";import"./MenuItem-kdifhyeS.js";import"./ListItemText--iNLaB2L.js";import"./ArrowUpward-DHMTJ-vk.js";import"./ContentCopy-BId0Quz7.js";import"./FormControlLabel-B2UUG1VG.js";import"./Checkbox-BoENjelX.js";import"./SwitchBase-DfgA2tSv.js";import"./FormGroup-D6hiKVQm.js";import"./RadioGroup-S3himzUS.js";import"./Radio-oCfsL6ZG.js";import"./Slider-D_uf9TQ7.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-CSdXW-H0.js";import"./DialogBase-C-U41h-h.js";import"./Close-CpFdUeMZ.js";import"./HelpPopover-DCEUptUW.js";import"./MarkdownPopover-D6Nnm8NP.js";import"./LightTooltip-u_zYTDNY.js";import"./MarkdownSynapse-2vacgikM.js";import"./SkeletonButton-DtUWEjyN.js";import"./SkeletonInlineBlock-B_sSYUYb.js";import"./SkeletonTable-B7lcCt2v.js";import"./SkeletonParagraph-kmlFPk4O.js";import"./JsonSchemaForm-CoWu6s4K.js";import"./GridLegacy-DFS9jq0C.js";import"./HelpTwoTone-ap75RrE0.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-CnP_JZO2.js";import"./_createAggregator-BJVBp8ta.js";import"./_baseMap-BNCMHn69.js";import"./DateTimePicker-DJWZ-3SO.js";import"./useMobilePicker-hYQItkxq.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-DujUKlye.js";import"./index-CPBFcEpw.js";import"./Chip-Cww2ggjY.js";import"./Tabs-BomuG8IX.js";import"./KeyboardArrowRight-C8YR3WTn.js";import"./Autocomplete-BA38BjG3.js";import"./usePreviousProps-B1e385cX.js";import"./use-deep-compare-effect.esm-Jr4uTSBk.js";import"./TextWidget-COQvbh0_.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,vr={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
