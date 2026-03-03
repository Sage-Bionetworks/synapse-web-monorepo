import{ju as p}from"./iframe-BXOaFC93.js";import{S as a}from"./SchemaDrivenAnnotationEditor-DDFpG1po.js";import"./index-Chi_LkuB.js";import"./useEntity-B5tBnkAi.js";import"./pickBy-D29u2qXa.js";import"./isString-BRDb8suW.js";import"./_baseIteratee-BNwFHJhH.js";import"./useInfiniteQuery-CMyAeBvQ.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-DgsaoJ5e.js";import"./useSchema-CXFIpcz4.js";import"./index-CwKjnAPM.js";import"./enums-5wtu5mKA.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-zBNXABpw.js";import"./uniq-Jrb7SEaY.js";import"./forEach-CWOCpBhE.js";import"./Add-PQ-XCjmA.js";import"./Grid-C6QXGUzL.js";import"./ListItem-BoMMpRsR.js";import"./listItemButtonClasses-PUrzaJtW.js";import"./ListItemIcon-BFaUluw5.js";import"./MenuItem-Dtwb3tI6.js";import"./ListItemText-C1H04lee.js";import"./ArrowUpward-h366Ks-d.js";import"./ContentCopy-DybMpgBB.js";import"./FormControlLabel-C6Gvndii.js";import"./Checkbox-D3B6ddTd.js";import"./SwitchBase-wPFSCN8t.js";import"./FormGroup-BZyAAptq.js";import"./RadioGroup-C0Pwupiw.js";import"./Radio-DuBucmy-.js";import"./Slider-CQyQJfo5.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-B4Nlucy5.js";import"./DialogBase-D6Ud-Adz.js";import"./Close-D1WVTMvM.js";import"./HelpPopover-9iSqJaFc.js";import"./MarkdownPopover-BQxFNv37.js";import"./LightTooltip-CPiLa2tV.js";import"./MarkdownSynapse-BQFq1ZI6.js";import"./SkeletonButton-Bqwyl1dP.js";import"./SkeletonInlineBlock-Cl-hsdeu.js";import"./SkeletonTable-CeAdm2qt.js";import"./SkeletonParagraph-DymEZI1w.js";import"./JsonSchemaForm-MiIEGRPB.js";import"./GridLegacy-D46plKVh.js";import"./HelpTwoTone-CpVyDR2N.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-BbeTsM1W.js";import"./_createAggregator-BcbqeVDP.js";import"./_baseMap-DCppEN5q.js";import"./DateTimePicker-henxw8ip.js";import"./useMobilePicker-DoND82Z9.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-C1zp6cZY.js";import"./index-MNp32NR_.js";import"./Chip-DABoi-5O.js";import"./Tabs-FpQwthsH.js";import"./KeyboardArrowRight-BjhsPC3r.js";import"./Autocomplete-D5x9anHy.js";import"./usePreviousProps-BDW20S0g.js";import"./use-deep-compare-effect.esm-BP-X_lnI.js";import"./TextWidget-7HDTKJMP.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,vr={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
