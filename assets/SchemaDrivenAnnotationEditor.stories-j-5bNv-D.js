import{jx as p}from"./iframe-k6B4MjXD.js";import{S as a}from"./SchemaDrivenAnnotationEditor-BYBcf_1_.js";import"./index-Chi_LkuB.js";import"./useEntity-mKrDOST6.js";import"./pickBy-o1hNIBqW.js";import"./isString-DjMb8mei.js";import"./_baseIteratee-CAoDB8fy.js";import"./useInfiniteQuery-CFREU8Pv.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-BX3B_uN4.js";import"./useSchema-00zY-aR5.js";import"./index-ZC6n-3Mq.js";import"./enums-BwPtLfJi.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-D51EWim7.js";import"./uniq-BKcpMB4F.js";import"./forEach-CWOCpBhE.js";import"./Add-D4mQJ02l.js";import"./Grid-0yqev7cN.js";import"./ListItem-DvyFHz-L.js";import"./listItemButtonClasses-C21jZuS6.js";import"./ListItemIcon-ChvdlxYW.js";import"./MenuItem-DIdsJc7D.js";import"./ListItemText-BnErO8FW.js";import"./ArrowUpward-B8ThXZdM.js";import"./ContentCopy-UqARInEG.js";import"./FormControlLabel-B-nIKQ4K.js";import"./Checkbox-dZ9U26rf.js";import"./SwitchBase-Ckg5eRY-.js";import"./FormGroup-C3twrIfO.js";import"./RadioGroup-B19D6fE-.js";import"./Radio-JD34nBeR.js";import"./Slider-Ir1Yud1T.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-QQIwXsjr.js";import"./DialogBase-Ccfo_49T.js";import"./Close-DOldyZv5.js";import"./HelpPopover-t1MsDT6m.js";import"./MarkdownPopover-D-j3as32.js";import"./LightTooltip-D4E2KaZT.js";import"./MarkdownSynapse-EyuM-I29.js";import"./SkeletonButton-DUY-d9ph.js";import"./SkeletonInlineBlock-DCdHLNp-.js";import"./SkeletonTable-DolM1Kfd.js";import"./SkeletonParagraph-B7V0f3GA.js";import"./JsonSchemaForm-_HP5FxpO.js";import"./GridLegacy-B3zvB1Nd.js";import"./HelpTwoTone-C1VdWwa6.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-77FokXdr.js";import"./_createAggregator-DO5lRv4H.js";import"./_baseMap-oMJnhGiQ.js";import"./DateTimePicker-CyBS8kH5.js";import"./useMobilePicker-D5NBn1l1.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-heMVe1bs.js";import"./index-WOehqnwl.js";import"./Chip-ClQuTivw.js";import"./Tabs-DCexV6No.js";import"./KeyboardArrowRight-BFdLfJJA.js";import"./Autocomplete-CMy6dGZ_.js";import"./usePreviousProps-TBUXOJTu.js";import"./use-deep-compare-effect.esm-pGvFVVHS.js";import"./TextWidget-sttD-t74.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,vr={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
