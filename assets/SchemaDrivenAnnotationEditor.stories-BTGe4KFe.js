import{jF as p}from"./iframe-BMVoK9rQ.js";import{S as a}from"./SchemaDrivenAnnotationEditor-DpLYTBVh.js";import"./index-Chi_LkuB.js";import"./useEntity-DgSWrAHS.js";import"./pickBy-DoDuXfPY.js";import"./isString-BLZLoYHn.js";import"./_baseIteratee-BHLHtG1R.js";import"./useQueries-DH3Kh0rD.js";import"./useSuspenseQuery-DZOIBk5v.js";import"./useInfiniteQuery-3kgmiq4J.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-wOmlaOCM.js";import"./useSchema-DzVvOr8B.js";import"./index-B0LF0JGa.js";import"./enums-BsoAvqaA.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-UaJT6spa.js";import"./uniq-BWBlN81V.js";import"./forEach-CWOCpBhE.js";import"./Add-CiE4jbfO.js";import"./Grid-BYrXWW0x.js";import"./ListItem-Wbm_dWBo.js";import"./listItemButtonClasses-CNkVRPg1.js";import"./ListItemIcon-BGg61Z8n.js";import"./MenuItem-ClKAXsdA.js";import"./ListItemText-Dvy0Ypr8.js";import"./ArrowUpward-ClUxzgTw.js";import"./ContentCopy-Dy9UhWBc.js";import"./FormControlLabel-4XNbKvi4.js";import"./Checkbox-C4cOGbgW.js";import"./SwitchBase-C1MXrM5l.js";import"./FormGroup-C5UezeOa.js";import"./RadioGroup-DMDKE2Ex.js";import"./Radio-ByQIXA5w.js";import"./Slider-DqknMDlX.js";import"./visuallyHidden-Dan1xhjv.js";import"./index-C148XJoK.js";import"./ConfirmationDialog-CkeTu_WW.js";import"./DialogBase-CLwOhWu_.js";import"./Close-B41_ESac.js";import"./HelpPopover-BkrnBFdK.js";import"./MarkdownPopover-Biqfmo0M.js";import"./LightTooltip-CgiGvVpE.js";import"./MarkdownSynapse-BM2SQbDn.js";import"./SkeletonButton-UgghPQrF.js";import"./SkeletonInlineBlock-BqTkLdlE.js";import"./SkeletonTable-7r8fiUSQ.js";import"./SkeletonParagraph-DdPi-rNG.js";import"./JsonSchemaForm-CHljBwCb.js";import"./GridLegacy-CzII5bcN.js";import"./HelpTwoTone-BtXtXL1l.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-DSs0fhzs.js";import"./_createAggregator-Bi-DhU6O.js";import"./_baseMap-gQ2Le4IE.js";import"./DateTimePicker-DY0U2EAy.js";import"./useMobilePicker-Dsj0KpsT.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-CrCJUmpP.js";import"./index-Asaz_d4d.js";import"./Chip-Bv1Iw22F.js";import"./Tabs-BC6ER8Ds.js";import"./KeyboardArrowRight-Cuchu9qE.js";import"./Autocomplete-D-joRS2Q.js";import"./usePreviousProps-ChtxqB3c.js";import"./use-deep-compare-effect.esm-CYGqCUNb.js";import"./TextWidget-BVXdSju3.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,qr={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const br=["Arrays","IfThenElse","ComplexSchema","DerivedAnnotations","ErrorsEntity","DirectlyProvidedSchema"];export{r as Arrays,t as ComplexSchema,o as DerivedAnnotations,s as DirectlyProvidedSchema,n as ErrorsEntity,e as IfThenElse,br as __namedExportsOrder,qr as default};
