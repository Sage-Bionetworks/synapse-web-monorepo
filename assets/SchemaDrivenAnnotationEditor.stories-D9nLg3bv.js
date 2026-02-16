import{jJ as p}from"./iframe-D5Jb4H7-.js";import{S as a}from"./SchemaDrivenAnnotationEditor-Bx_9t0F_.js";import"./index-Chi_LkuB.js";import"./useEntity-exkOcAkG.js";import"./pickBy-DE0BKS3V.js";import"./isString-DLUNOE4s.js";import"./_baseIteratee-HfADOLmS.js";import"./useQueries-DOSq_bEV.js";import"./useSuspenseQuery-CJo7dxig.js";import"./useInfiniteQuery-mtij9nHQ.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-DXcgUWEE.js";import"./useSchema-Dej7ETAE.js";import"./index-Ubr32TlR.js";import"./enums-BW2guRn4.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-CkgraRbj.js";import"./uniq-D-LBtm9m.js";import"./forEach-CWOCpBhE.js";import"./Add-CJkMz6VH.js";import"./Grid-DSYoMefi.js";import"./ListItem-7z5wm-H2.js";import"./listItemButtonClasses-D_p-rgYX.js";import"./ListItemIcon-DWw7zOm5.js";import"./MenuItem-BcAY2td_.js";import"./ListItemText-Dwd716g_.js";import"./ArrowUpward-D4bDlZqR.js";import"./ContentCopy-CaHMsfvE.js";import"./FormControlLabel-lBjb8bgb.js";import"./Checkbox-BQnzTFlH.js";import"./SwitchBase-CdPFBs56.js";import"./FormGroup-mlOlK-1J.js";import"./RadioGroup-DA4HFht7.js";import"./Radio-qVEd2-7n.js";import"./Slider-DvmhGVh2.js";import"./visuallyHidden-Dan1xhjv.js";import"./index-C148XJoK.js";import"./ConfirmationDialog-Cf6HqVui.js";import"./DialogBase-DbS96YQV.js";import"./Close-CbOuO2km.js";import"./HelpPopover-zrq7Oti8.js";import"./MarkdownPopover-CET6pvp6.js";import"./LightTooltip-D5wkP_b3.js";import"./MarkdownSynapse-BYeobG0y.js";import"./SkeletonButton-C8q9GuK7.js";import"./SkeletonInlineBlock-B1J-x5sp.js";import"./SkeletonTable-CWnnOC4O.js";import"./SkeletonParagraph-1IqDxZQP.js";import"./JsonSchemaForm-B9bL1s7a.js";import"./GridLegacy-DYFoaTzK.js";import"./HelpTwoTone-CRfIrDOp.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-CNVMsa8V.js";import"./_createAggregator-DMtefBZ-.js";import"./_baseMap-CBAREHGg.js";import"./DateTimePicker-DZexUrzq.js";import"./useMobilePicker-DW44Dpie.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-D7UfKMXD.js";import"./index-Q_YFCtqN.js";import"./Chip-BPCELKLJ.js";import"./Tabs-DE7XjrQc.js";import"./KeyboardArrowRight-CB56mxE8.js";import"./Autocomplete-hHIuN4rs.js";import"./usePreviousProps-CDRJnlOE.js";import"./use-deep-compare-effect.esm-DXtDHnkH.js";import"./TextWidget-BGCuYaGO.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,qr={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
