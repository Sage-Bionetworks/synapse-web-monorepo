import{ju as p}from"./iframe-B7KGf7-k.js";import{S as a}from"./SchemaDrivenAnnotationEditor-DXVM5sP6.js";import"./index-Chi_LkuB.js";import"./useEntity-BEZrwshI.js";import"./pickBy-DA-_w30I.js";import"./isString-Cj2KjwPP.js";import"./_baseIteratee-DRGNglyf.js";import"./useInfiniteQuery-DoSxFn_y.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-DzCWwzL7.js";import"./useSchema-BBYi7g34.js";import"./index-C8vn0MTj.js";import"./enums-6tO5SZLZ.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-1iQAkd9B.js";import"./uniq-v1kE_RCi.js";import"./forEach-CWOCpBhE.js";import"./Add-nIgtMzDC.js";import"./Grid-BRTWVYn9.js";import"./ListItem-BFUFNJ5l.js";import"./listItemButtonClasses-DEJZgMDS.js";import"./ListItemIcon-C4UjCYtW.js";import"./MenuItem-BFpLBTs1.js";import"./ListItemText-PcNmBayV.js";import"./ArrowUpward-CkNPgz-i.js";import"./ContentCopy-CAWCmsHT.js";import"./FormControlLabel-reBugk4M.js";import"./Checkbox-BtT9IXA1.js";import"./SwitchBase-N3lkwIv1.js";import"./FormGroup--m3vpaw8.js";import"./RadioGroup-uqtS-AGF.js";import"./Radio-DVH_4n43.js";import"./Slider-Di0aDS4d.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-CfHwuMwA.js";import"./DialogBase-D0__VBEg.js";import"./Close-T1I-2ajn.js";import"./HelpPopover-rsd36_y9.js";import"./MarkdownPopover-CgOyBUHV.js";import"./LightTooltip-BjN2xTIz.js";import"./MarkdownSynapse-1Rv7JxA3.js";import"./SkeletonButton-DY-_GYdD.js";import"./SkeletonInlineBlock-C6U7Upal.js";import"./SkeletonTable-DLLgVxsK.js";import"./SkeletonParagraph-D-OkfrQQ.js";import"./JsonSchemaForm-ZpnLjUUN.js";import"./GridLegacy-CZJEK4cy.js";import"./HelpTwoTone-hW9oEGbM.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-BYD595ZZ.js";import"./_createAggregator-a_73x7T4.js";import"./_baseMap-cJAH5Rrm.js";import"./DateTimePicker-BU4YtO-c.js";import"./useMobilePicker-BLQChuGw.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-MjOZVgFd.js";import"./index-bUombD9c.js";import"./Chip-BchH_Wga.js";import"./Tabs-CeGHqF7Z.js";import"./KeyboardArrowRight-CDK73nY-.js";import"./Autocomplete-SpxSQhx-.js";import"./usePreviousProps-B9gg4R91.js";import"./use-deep-compare-effect.esm-CdPym0xJ.js";import"./TextWidget-2dJtwl0k.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,vr={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
