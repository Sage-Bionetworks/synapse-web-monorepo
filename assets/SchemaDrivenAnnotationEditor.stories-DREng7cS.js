import{jx as p}from"./iframe-BBruIU4b.js";import{S as a}from"./SchemaDrivenAnnotationEditor-84VQRg4o.js";import"./index-Chi_LkuB.js";import"./useEntity-DT9grtia.js";import"./pickBy-CwQNjTD1.js";import"./isString-CusR24iS.js";import"./_baseIteratee-C5YInLUd.js";import"./useInfiniteQuery-CpnSnpxb.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-DLc9SIWL.js";import"./useSchema-BMKdjile.js";import"./index-DJU8yOEw.js";import"./enums-zn00iWW5.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-BkW8B4fq.js";import"./uniq-4NIjQU_P.js";import"./forEach-CWOCpBhE.js";import"./Add-kUlsdexx.js";import"./Grid-Dy8qASXu.js";import"./ListItem-X--2tE5P.js";import"./listItemButtonClasses-DxkoXDit.js";import"./ListItemIcon-BbSTkgUh.js";import"./MenuItem-qoVLjmZ_.js";import"./ListItemText-BFqT4GHD.js";import"./ArrowUpward-DXpGs4nT.js";import"./ContentCopy-BbBqi3wP.js";import"./FormControlLabel-DqVSLyDY.js";import"./Checkbox-BNavYnnA.js";import"./SwitchBase-DTrMZwaL.js";import"./FormGroup-C3dmo_OZ.js";import"./RadioGroup-IZ9a3Q59.js";import"./Radio-y_Hma3ag.js";import"./Slider-B8y0kUIC.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-DuDymoxB.js";import"./DialogBase-Bhfpkjm2.js";import"./Close-CJayIifx.js";import"./HelpPopover-CCBG3dLd.js";import"./MarkdownPopover-DAFqt0iV.js";import"./LightTooltip-DDmzhRDz.js";import"./MarkdownSynapse-DP7rBl4U.js";import"./SkeletonButton-D4FgXHH-.js";import"./SkeletonInlineBlock-B2nZJXUY.js";import"./SkeletonTable-Bpj6qcuq.js";import"./SkeletonParagraph-D6h0sWgH.js";import"./JsonSchemaForm-DhsiorGM.js";import"./GridLegacy-CA-HW-z8.js";import"./HelpTwoTone-CO2nSelk.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-C5yZbSP2.js";import"./_createAggregator-CV-F-rBR.js";import"./_baseMap-DOnUw6Jl.js";import"./DateTimePicker-Cuj7_AHb.js";import"./useMobilePicker-Chs3MB-x.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-QAzuqCUt.js";import"./index-C4S4nEIu.js";import"./Chip-BT9IXi55.js";import"./Tabs-BrujAkRu.js";import"./KeyboardArrowRight-C3DJa5e5.js";import"./Autocomplete-CvkZc16W.js";import"./usePreviousProps-CqxbXVcZ.js";import"./use-deep-compare-effect.esm-CH543HjI.js";import"./TextWidget-D66CKIX7.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,vr={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
