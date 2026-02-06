import{jI as p}from"./iframe-CqOjta_N.js";import{S as a}from"./SchemaDrivenAnnotationEditor-B3irtQoR.js";import"./index-Chi_LkuB.js";import"./useEntity-BTY_Vrx_.js";import"./pickBy-DCigQKsA.js";import"./isString-CviB6SVY.js";import"./_baseIteratee-Qgts5el_.js";import"./useQueries-DQ-K6YXz.js";import"./useSuspenseQuery-BD3WNLbV.js";import"./useInfiniteQuery-BaCRejyT.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-D6jYmZmr.js";import"./useSchema-SjajoPkf.js";import"./index-BHS0jUxJ.js";import"./enums-Cypp8Auw.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-DE_p8oHn.js";import"./uniq-Dl61YuRX.js";import"./forEach-CWOCpBhE.js";import"./Add-orAxbSoe.js";import"./Grid-78ouEGxR.js";import"./ListItem-DUeR_jRb.js";import"./listItemButtonClasses-BKhNCkCn.js";import"./ListItemIcon-D_NamUK1.js";import"./MenuItem-DGqgHDXw.js";import"./ListItemText-QbimF9I8.js";import"./ArrowUpward-CesMgjq6.js";import"./ContentCopy-HCfe_lPk.js";import"./FormControlLabel-4STj1xWu.js";import"./Checkbox-DyGR3-VE.js";import"./SwitchBase-IqgR6dPG.js";import"./FormGroup-ZWmzgqQz.js";import"./RadioGroup-BlD7Ma5X.js";import"./Radio-O3q3WmOJ.js";import"./Slider-Djk4Yjhb.js";import"./visuallyHidden-Dan1xhjv.js";import"./index-C148XJoK.js";import"./ConfirmationDialog-NO_pJ3mE.js";import"./DialogBase-CYbBRd4W.js";import"./Close-B3SqSRyi.js";import"./HelpPopover-CldbtdCh.js";import"./MarkdownPopover-uBOu0K68.js";import"./LightTooltip-DC7cbKib.js";import"./MarkdownSynapse-D2zbplv6.js";import"./SkeletonButton-BR5YXC6L.js";import"./SkeletonInlineBlock-CN4aVK2u.js";import"./SkeletonTable-BGlGLKIw.js";import"./SkeletonParagraph-B4VFFfOl.js";import"./JsonSchemaForm-D0UEb0cE.js";import"./GridLegacy-YcXQgmix.js";import"./HelpTwoTone-DXHrBAqP.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy--Nn1CkMv.js";import"./_createAggregator-DWcL3GiJ.js";import"./_baseMap-DE06An5T.js";import"./DateTimePicker-D24VnHsT.js";import"./useMobilePicker-C50bKmrL.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-B3Tqkebs.js";import"./index-BRBOZzYG.js";import"./Chip-9i0QEYWa.js";import"./Tabs-Cilld5n0.js";import"./KeyboardArrowRight-BsKFafdC.js";import"./Autocomplete-giCJsc3t.js";import"./usePreviousProps-CkSK3vlK.js";import"./use-deep-compare-effect.esm-BUOODDvb.js";import"./TextWidget-BD6ffETU.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,qr={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
