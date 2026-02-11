import{jJ as p}from"./iframe-BNuX63Gg.js";import{S as a}from"./SchemaDrivenAnnotationEditor-vzXYVJ_l.js";import"./index-Chi_LkuB.js";import"./useEntity-3KpRmlIl.js";import"./pickBy-MqZLkr5W.js";import"./isString-CUEBVvBN.js";import"./_baseIteratee-BV0dwrmo.js";import"./useQueries-92nI7yPX.js";import"./useSuspenseQuery-5mc94Bck.js";import"./useInfiniteQuery-ETBFsHKX.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-DAdG-b2G.js";import"./useSchema-DLMulGfQ.js";import"./index-Dx6win7Q.js";import"./enums-BwuVJP_H.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-CkrVvfzN.js";import"./uniq-yHAgUkeJ.js";import"./forEach-CWOCpBhE.js";import"./Add-C1qeAPk3.js";import"./Grid-DJDQfnqx.js";import"./ListItem-Dn0E00jq.js";import"./listItemButtonClasses-Bekp9Iwc.js";import"./ListItemIcon-DKCvFIfb.js";import"./MenuItem-QgPCDudv.js";import"./ListItemText-BSnkaMEH.js";import"./ArrowUpward-Dojuk04q.js";import"./ContentCopy-CaO3wKZo.js";import"./FormControlLabel-CzBjWoYC.js";import"./Checkbox-CM0Tixh-.js";import"./SwitchBase-DQ3y_lJs.js";import"./FormGroup-C7VwY6p-.js";import"./RadioGroup-k7eUTwGZ.js";import"./Radio-Bj8k1w4U.js";import"./Slider-DuO94Iaw.js";import"./visuallyHidden-Dan1xhjv.js";import"./index-C148XJoK.js";import"./ConfirmationDialog-w4vciXYo.js";import"./DialogBase-CT_QCuKJ.js";import"./Close-DnYx9FSk.js";import"./HelpPopover-BxitrOSl.js";import"./MarkdownPopover-Cqj5utYy.js";import"./LightTooltip-B2c4vJ-r.js";import"./MarkdownSynapse-CllS4xt7.js";import"./SkeletonButton-Q_wdDaMT.js";import"./SkeletonInlineBlock-BaXmg-Ho.js";import"./SkeletonTable-B24h57Dq.js";import"./SkeletonParagraph-Bh-mJsSp.js";import"./JsonSchemaForm-BB78g6rx.js";import"./GridLegacy-VREhilKw.js";import"./HelpTwoTone-DKhkkYG-.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-BPs4Qcx5.js";import"./_createAggregator-ci3cIJOJ.js";import"./_baseMap-8byQYP5F.js";import"./DateTimePicker-Bpr1xBY7.js";import"./useMobilePicker-lqY7_3tD.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-k3B2jUW5.js";import"./index-CsZzG_M-.js";import"./Chip-Dbkz0kTt.js";import"./Tabs-DRDjC5BE.js";import"./KeyboardArrowRight-B9iy6Wvj.js";import"./Autocomplete-Bn4Ijwoy.js";import"./usePreviousProps-BTKmS87I.js";import"./use-deep-compare-effect.esm-DawoZLOl.js";import"./TextWidget-DolKq4fd.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,qr={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
