import{jx as p}from"./iframe-DWQ8siyH.js";import{S as a}from"./SchemaDrivenAnnotationEditor-CkPf81OG.js";import"./index-Chi_LkuB.js";import"./useEntity-CemX_yFc.js";import"./pickBy-Bzj7YESH.js";import"./isString-BC34wddM.js";import"./_baseIteratee-BRGnOUnX.js";import"./useInfiniteQuery-BisHU3cB.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-BG8Jg50Y.js";import"./useSchema-0jSMPnO3.js";import"./index-B8F0hOND.js";import"./enums-D4H15Glw.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-C_WN81a2.js";import"./uniq-CholbGe1.js";import"./forEach-UWyboym_.js";import"./Add-BEGX6GRa.js";import"./Grid-CHqLmyHD.js";import"./ListItem-C1Ju9U5d.js";import"./listItemButtonClasses-BRcdgKHq.js";import"./ListItemIcon-CitjN0lg.js";import"./MenuItem-B0BEM2XP.js";import"./ListItemText-D-br3EsD.js";import"./ArrowUpward-BGDrhV61.js";import"./ContentCopy-DP4-cQrE.js";import"./FormControlLabel-BVEDJFnl.js";import"./Checkbox-DB5drz-0.js";import"./SwitchBase-CaB4uxt0.js";import"./FormGroup-8g6PCwz0.js";import"./RadioGroup-CcWgzkjC.js";import"./Radio-Bia9D3vJ.js";import"./Slider-vjChpJFp.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-CP1Ez-p2.js";import"./DialogBase-CQETkKuv.js";import"./Close-DMjBYuim.js";import"./HelpPopover-BNtY5zzD.js";import"./MarkdownPopover-Bj7uEVPu.js";import"./LightTooltip-BRCcdYv9.js";import"./MarkdownSynapse-BZXBdfm0.js";import"./SkeletonButton-Drh7CQoD.js";import"./SkeletonInlineBlock-U2SdkY6_.js";import"./SkeletonTable-pyMLa-VH.js";import"./SkeletonParagraph-BzFwIbvm.js";import"./JsonSchemaForm-b_qL-93w.js";import"./GridLegacy-ZcQ8R6mC.js";import"./HelpTwoTone-C9530GbB.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-tNsZpNlI.js";import"./_createAggregator-DXbxkcdz.js";import"./_baseMap-D4OvXgY2.js";import"./DateTimePicker-_1SAYcn1.js";import"./useMobilePicker-Dc2OG2Qy.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-BF6MAbQt.js";import"./index-Dx8jX-FA.js";import"./Chip--ZUBGmuC.js";import"./Tabs-Bxy6vhUu.js";import"./KeyboardArrowRight-CWBVXY2q.js";import"./Autocomplete-CTt9Lj7C.js";import"./usePreviousProps-0YhiVRha.js";import"./use-deep-compare-effect.esm-CQ4cJG4K.js";import"./TextWidget-WVcEBjHx.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,vr={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
