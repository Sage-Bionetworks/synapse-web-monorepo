import{jx as p}from"./iframe-2O6u4SzH.js";import{S as a}from"./SchemaDrivenAnnotationEditor-BqkrJhNZ.js";import"./index-Chi_LkuB.js";import"./useEntity-v4dqmZGp.js";import"./pickBy-Dqy7Vrx1.js";import"./isString-10tXgNyR.js";import"./_baseIteratee-DQS7eQMK.js";import"./useInfiniteQuery-DbGbDORf.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-D25d2Lgm.js";import"./useSchema-frqgvLST.js";import"./index-GMwflGGu.js";import"./enums-tShHe5Bc.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-hos6MCbv.js";import"./uniq-BZsjCJJT.js";import"./forEach-CWOCpBhE.js";import"./Add-EJ81_QDl.js";import"./Grid-DA0DBLGO.js";import"./ListItem-CoEHE71A.js";import"./listItemButtonClasses-YQAYCKJ1.js";import"./ListItemIcon-BRMTHwDL.js";import"./MenuItem-C5eSP5TX.js";import"./ListItemText-mX996mrZ.js";import"./ArrowUpward-DGpSuCdB.js";import"./ContentCopy-Bn9FNLzn.js";import"./FormControlLabel-CSDFCuV7.js";import"./Checkbox-Cso4WlBt.js";import"./SwitchBase-DBYBJcDT.js";import"./FormGroup-Df6wnuO4.js";import"./RadioGroup-CdZLrcGj.js";import"./Radio-DPPUn18y.js";import"./Slider-xPvThYGO.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-BrGQU89G.js";import"./DialogBase-DL0Zz-CT.js";import"./Close-Bft55rfH.js";import"./HelpPopover-DtPUv-h0.js";import"./MarkdownPopover-DCPcpUWN.js";import"./LightTooltip-C0ip7qPz.js";import"./MarkdownSynapse-B-iJPTvS.js";import"./SkeletonButton-CiuXBI7w.js";import"./SkeletonInlineBlock-BxhXmgi0.js";import"./SkeletonTable-Cg2ViMwY.js";import"./SkeletonParagraph-0TQyd4RC.js";import"./JsonSchemaForm-CFZlzSWN.js";import"./GridLegacy-BTrsHFOn.js";import"./HelpTwoTone-BgHSHUf7.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-DAdjkvwi.js";import"./_createAggregator-Bto83fi7.js";import"./_baseMap-CKBkbJ2G.js";import"./DateTimePicker-DAYD6n4u.js";import"./useMobilePicker-CZD9NtMC.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-6o2Du6WR.js";import"./index-D8WZJQs0.js";import"./Chip-Dc7Q2EIH.js";import"./Tabs-XMzB4nZ2.js";import"./KeyboardArrowRight-DWJaxETJ.js";import"./Autocomplete-DXJe1s-_.js";import"./usePreviousProps-e_OFqgMc.js";import"./use-deep-compare-effect.esm-1HSucEhU.js";import"./TextWidget-BIZbYZRm.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,vr={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
