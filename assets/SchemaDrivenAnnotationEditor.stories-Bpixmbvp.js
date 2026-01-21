import{jG as p}from"./iframe-iaFph9yc.js";import{S as a}from"./SchemaDrivenAnnotationEditor-xKl0BQ4F.js";import"./index-Chi_LkuB.js";import"./useEntity-CfIJpbYu.js";import"./pickBy-DMfd_cxo.js";import"./isString-LNdP_NKH.js";import"./_baseIteratee-Bur-meKq.js";import"./useQueries-CBX8q7F2.js";import"./useSuspenseQuery-C563HQMf.js";import"./useInfiniteQuery-B8r8qZIF.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-7UUBDhoV.js";import"./useSchema-Btcs8SLu.js";import"./index-B8aVe792.js";import"./enums-B3qi3AqN.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-BaFTTzmm.js";import"./uniq-BEl88TRR.js";import"./forEach-CWOCpBhE.js";import"./Add-IZZRu7qF.js";import"./Grid-DjkLRenk.js";import"./ListItem-CXYzVVY3.js";import"./listItemButtonClasses-lLdjrbJ0.js";import"./ListItemIcon-BB15OZdM.js";import"./MenuItem-CecQK7Ew.js";import"./ListItemText-58xuSsTx.js";import"./ArrowUpward-i2dBdP2s.js";import"./ContentCopy-QV3hwdiQ.js";import"./FormControlLabel-DQ86lw9L.js";import"./Checkbox-C2zRGAX9.js";import"./SwitchBase-B4RLmS9t.js";import"./FormGroup-aZWteynh.js";import"./RadioGroup-Cipsd4nA.js";import"./Radio-AheYlswj.js";import"./Slider-CF4wRkTc.js";import"./visuallyHidden-Dan1xhjv.js";import"./index-C148XJoK.js";import"./ConfirmationDialog-Cv2UpenB.js";import"./DialogBase-7SF-wmQP.js";import"./Close-Bjrfd6AQ.js";import"./HelpPopover-BaZV2lZ_.js";import"./MarkdownPopover-BNEfL_Q8.js";import"./LightTooltip-bP90seli.js";import"./MarkdownSynapse-B4ghWRuT.js";import"./SkeletonButton-B6vkGKKc.js";import"./SkeletonInlineBlock-t24_wtaY.js";import"./SkeletonTable-B2Y-Wv49.js";import"./SkeletonParagraph-BYLtoQSS.js";import"./JsonSchemaForm-K1HcPqcM.js";import"./GridLegacy-BGO6PrIA.js";import"./HelpTwoTone-fewnFk_z.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-2WijDbfH.js";import"./_createAggregator-CcDziadb.js";import"./_baseMap-DhThEwhz.js";import"./DateTimePicker-BhuDJ_Vx.js";import"./useMobilePicker-CvuyfGw0.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-B-gU5HIz.js";import"./index-D1SN15cL.js";import"./Chip-BBLqCKej.js";import"./Tabs-3Sw0bTmJ.js";import"./KeyboardArrowRight-DXMPhij3.js";import"./Autocomplete-BVTtxN3-.js";import"./usePreviousProps-Cyzoh8gQ.js";import"./use-deep-compare-effect.esm-e71_7G6x.js";import"./TextWidget-C7hdSu0_.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,qr={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
