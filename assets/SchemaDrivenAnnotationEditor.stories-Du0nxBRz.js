import{jw as p}from"./iframe-Dh1-Bj9i.js";import{S as a}from"./SchemaDrivenAnnotationEditor-ChLO55XR.js";import"./index-Chi_LkuB.js";import"./useEntity-BLDKE0cv.js";import"./pickBy-QrfkUTe_.js";import"./isString-BV1mrbKX.js";import"./_baseIteratee-CuoQlIYx.js";import"./useInfiniteQuery-CKi0ZKKC.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-83B7KXq6.js";import"./useSchema-FzgTmDqS.js";import"./index-1OJzWJdk.js";import"./enums-BjZlLncQ.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-OMUz4HGL.js";import"./uniq-FWSIKTRg.js";import"./forEach-UWyboym_.js";import"./Add-CQB2Iumh.js";import"./Grid-DVy6KkU3.js";import"./ListItem-C4Z2ugj3.js";import"./listItemButtonClasses-l_taRAwC.js";import"./ListItemIcon-DIRF62-Q.js";import"./MenuItem-DcI11cWZ.js";import"./ListItemText-DxMP8JL4.js";import"./ArrowUpward-BKhBzvIa.js";import"./ContentCopy-BwHOZ8_z.js";import"./FormControlLabel-CYMNTndx.js";import"./Checkbox-dmGiqlJj.js";import"./SwitchBase-C1MmJwCG.js";import"./FormGroup-9fyIdxBc.js";import"./RadioGroup-CKZJHyE_.js";import"./Radio-BVOqVJjD.js";import"./Slider-sjNQM4k3.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-Dy9AxfBp.js";import"./DialogBase-Cs4R-zR2.js";import"./Close-D_7cgIwF.js";import"./HelpPopover-DkPOfTbO.js";import"./MarkdownPopover-D5SjgShk.js";import"./LightTooltip-DzvAkcfH.js";import"./MarkdownSynapse-IvCz3QWr.js";import"./SkeletonButton-C-IErnIc.js";import"./SkeletonInlineBlock-D9o-fuxy.js";import"./SkeletonTable-nkHHAelC.js";import"./SkeletonParagraph-Cbgp8OCT.js";import"./JsonSchemaForm-DY02LGqG.js";import"./GridLegacy-DN66YdV6.js";import"./HelpTwoTone-CHmC-sCf.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-CRQuNfSl.js";import"./_createAggregator-htRdNyE1.js";import"./_baseMap-GDF1xtgf.js";import"./DateTimePicker-xTeLvU7r.js";import"./useMobilePicker-B-KPbDxZ.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-CZyVwmJo.js";import"./index-DA_VxtNU.js";import"./Chip-D6-vR_S7.js";import"./Tabs-DaxdICVu.js";import"./KeyboardArrowRight-CA2BTsgG.js";import"./Autocomplete-DO5n1YAS.js";import"./usePreviousProps-jW-nUEeZ.js";import"./use-deep-compare-effect.esm-Bdc7Xyae.js";import"./TextWidget-CXY9BKaT.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,vr={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
