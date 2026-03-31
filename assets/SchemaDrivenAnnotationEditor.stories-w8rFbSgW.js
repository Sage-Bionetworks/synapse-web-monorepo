import{jx as p}from"./iframe-Cr4rsgj7.js";import{S as a}from"./SchemaDrivenAnnotationEditor-7nTnLh3K.js";import"./index-Chi_LkuB.js";import"./useEntity-B9L-Sybc.js";import"./pickBy-Ch7QJSfL.js";import"./isString-Da5fPHJA.js";import"./_baseIteratee-Dve3eWDj.js";import"./useInfiniteQuery-B_Omzybh.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-DH4DPEtp.js";import"./useSchema-BkLU3JFL.js";import"./index-EsleX8vf.js";import"./enums-DOlWEN8c.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-CDRD4QoG.js";import"./uniq-CQTanI-X.js";import"./forEach-CWOCpBhE.js";import"./Add-D72IEQvl.js";import"./Grid-WJmRpyZS.js";import"./ListItem-BsDg2xNA.js";import"./listItemButtonClasses-CyyPIGmf.js";import"./ListItemIcon-BfzOnbL0.js";import"./MenuItem-Ct9EBmwz.js";import"./ListItemText-Cx1Oyiyz.js";import"./ArrowUpward-CRHYmZB6.js";import"./ContentCopy-WsAZu-Xr.js";import"./FormControlLabel-B7TVOkEX.js";import"./Checkbox-c-nz78k5.js";import"./SwitchBase-Cc_wLOhS.js";import"./FormGroup-X4WJ_3Ki.js";import"./RadioGroup-BxFOFkKg.js";import"./Radio-Bc4FiNE9.js";import"./Slider-7kYMR_Gg.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-D9Jug8b8.js";import"./DialogBase-1oSnX0hp.js";import"./Close-Ci5OvHK6.js";import"./HelpPopover-DdF66tTF.js";import"./MarkdownPopover-D3AmFDvC.js";import"./LightTooltip-DsylXgAu.js";import"./MarkdownSynapse-CDDbIt-9.js";import"./SkeletonButton-C33Abn2f.js";import"./SkeletonInlineBlock-w--GqSHA.js";import"./SkeletonTable-wr8tjygS.js";import"./SkeletonParagraph-DJhgoEyf.js";import"./JsonSchemaForm-C5W8FoWV.js";import"./GridLegacy-D6KuXYJd.js";import"./HelpTwoTone-qvHJ7DN6.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-UZD0Dnec.js";import"./_createAggregator-DKdzWf8w.js";import"./_baseMap-DKB-r9b8.js";import"./DateTimePicker-_waSvBpI.js";import"./useMobilePicker-CRkd62XZ.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-CvShDDup.js";import"./index-MNSnOiaj.js";import"./Chip-DjKXoZBc.js";import"./Tabs-leahSl_H.js";import"./KeyboardArrowRight-BuRhVmU6.js";import"./Autocomplete-D45_aIPi.js";import"./usePreviousProps-Bm9mWnHd.js";import"./use-deep-compare-effect.esm-BYNnqYvv.js";import"./TextWidget-BfU9ve1Y.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,vr={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
