import{jJ as p}from"./iframe-Es1qDbGP.js";import{S as a}from"./SchemaDrivenAnnotationEditor-DypRm_-d.js";import"./index-Chi_LkuB.js";import"./useEntity-hcwalfFt.js";import"./pickBy-DpHz-Dvo.js";import"./isString-DTvs6K00.js";import"./_baseIteratee-mYcJ16Ig.js";import"./useQueries-eWENE-QR.js";import"./useSuspenseQuery-CeVxUvBp.js";import"./useInfiniteQuery-COtoiiDm.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-Cpq9fcWX.js";import"./useSchema-C-w-WLmS.js";import"./index-VOvXK34s.js";import"./enums--tDojoE2.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-C3zPdy9m.js";import"./uniq-CDgyCgRb.js";import"./forEach-CWOCpBhE.js";import"./Add-DFnse5Wz.js";import"./Grid-BeEIUbCD.js";import"./ListItem-0DBm3wmV.js";import"./listItemButtonClasses-D8lNtuSI.js";import"./ListItemIcon-D-h4t5zp.js";import"./MenuItem-B-EqIPb7.js";import"./ListItemText-CdkbwItD.js";import"./ArrowUpward-GKJ3Mxsu.js";import"./ContentCopy-D2hGiBmg.js";import"./FormControlLabel-C69kwcak.js";import"./Checkbox-mvgsc4Yl.js";import"./SwitchBase-Blk8OzSk.js";import"./FormGroup-DCANRdnx.js";import"./RadioGroup-2CxWJ6aV.js";import"./Radio-D2dcdSTx.js";import"./Slider-BrdZrPNb.js";import"./visuallyHidden-Dan1xhjv.js";import"./index-C148XJoK.js";import"./ConfirmationDialog-Dm9z241S.js";import"./DialogBase-CnbWvOma.js";import"./Close-B3u-lq2b.js";import"./HelpPopover-C93LpQuO.js";import"./MarkdownPopover-BNqNuP7X.js";import"./LightTooltip-BYZb259d.js";import"./MarkdownSynapse-Bc_1YooS.js";import"./SkeletonButton-Dk6hA76Q.js";import"./SkeletonInlineBlock-ClWMeLhu.js";import"./SkeletonTable-lZm0nrpb.js";import"./SkeletonParagraph-DsApyNFa.js";import"./JsonSchemaForm-D5elyVGC.js";import"./GridLegacy-C6Qipv1L.js";import"./HelpTwoTone-B1jQWvzg.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-DqdcHCdf.js";import"./_createAggregator-8PQI9WKW.js";import"./_baseMap-loH1m8zG.js";import"./DateTimePicker-CAIUY1Bc.js";import"./useMobilePicker-Dkj3l6oW.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-B9W83M_P.js";import"./index-BV5A7KqH.js";import"./Chip-BzTFnY_r.js";import"./Tabs-BeIbdfTO.js";import"./KeyboardArrowRight-DSf6mbJg.js";import"./Autocomplete-Bu-rTuWY.js";import"./usePreviousProps-CvHxRFKV.js";import"./use-deep-compare-effect.esm-D9844x-7.js";import"./TextWidget-CjJDkwUX.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,qr={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
