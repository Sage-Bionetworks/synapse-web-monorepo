import{jw as p}from"./iframe-CtlQt718.js";import{S as a}from"./SchemaDrivenAnnotationEditor-hHV1V1wQ.js";import"./index-Chi_LkuB.js";import"./useEntity-DfGflDdN.js";import"./pickBy-C0p9iO4a.js";import"./isString-C2AiwGPF.js";import"./_baseIteratee-5SXEVFtE.js";import"./queryOptions-C9woPjwX.js";import"./useInfiniteQuery-DXgfUMVI.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-DMU1fAY0.js";import"./useSchema-Cdem3tyH.js";import"./index-C3vIdk_2.js";import"./enums-C0lV3fIZ.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-bdqG_XRQ.js";import"./uniq-C1NB3-jb.js";import"./forEach-UWyboym_.js";import"./Add-BZ8X7ZZq.js";import"./Grid-DbCly3S7.js";import"./ListItem-VfsmfuTr.js";import"./listItemButtonClasses-Bdw6eujR.js";import"./ListItemIcon-DLEAoi0m.js";import"./MenuItem-C_5zSBh4.js";import"./ListItemText-DQhYnaIC.js";import"./ArrowUpward-D2EgP9JI.js";import"./ContentCopy-CCBTpa7C.js";import"./FormControlLabel-TNPBDvq0.js";import"./Checkbox-BdJ4Kw1X.js";import"./SwitchBase-5wWbJqUY.js";import"./FormGroup-CCXp211K.js";import"./RadioGroup-Cl2JfzEG.js";import"./Radio-jmkl_VXV.js";import"./Slider-C7DGJOaJ.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-Dh4tlHv0.js";import"./DialogBase-DOt-OwDb.js";import"./Close-DmDKZefQ.js";import"./HelpPopover-Gion91DD.js";import"./MarkdownPopover-CoOreYFS.js";import"./LightTooltip-D8qugsOL.js";import"./MarkdownSynapse-BuD1xjPB.js";import"./SkeletonButton-i4oTWqaB.js";import"./SkeletonInlineBlock-BaHv_pCV.js";import"./SkeletonTable-DCMQwvPd.js";import"./SkeletonParagraph-CUgZcOgo.js";import"./JsonSchemaForm-DUu3zAWs.js";import"./GridLegacy-C2srbSl9.js";import"./HelpTwoTone-DV_Jr-mT.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-CmksZASO.js";import"./_createAggregator-BkktEQDS.js";import"./_baseMap-C_NrU3Xc.js";import"./DateTimePicker-DZ26bbHH.js";import"./useMobilePicker-DMdG2t81.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-DpXy3_8U.js";import"./index-BsLL2bsx.js";import"./Chip-DpB8aqC-.js";import"./Tabs-CO6ktckj.js";import"./KeyboardArrowRight-B6bfG-lA.js";import"./Autocomplete-Cv4xJ-eN.js";import"./usePreviousProps-Bsuk01gy.js";import"./use-deep-compare-effect.esm-DNIXs6-u.js";import"./TextWidget-DXpBiqVI.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,Ir={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const Er=["Arrays","IfThenElse","ComplexSchema","DerivedAnnotations","ErrorsEntity","DirectlyProvidedSchema"];export{r as Arrays,t as ComplexSchema,o as DerivedAnnotations,s as DirectlyProvidedSchema,n as ErrorsEntity,e as IfThenElse,Er as __namedExportsOrder,Ir as default};
