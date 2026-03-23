import{jx as p}from"./iframe-D4RhuUSg.js";import{S as a}from"./SchemaDrivenAnnotationEditor-DObRNiYV.js";import"./index-Chi_LkuB.js";import"./useEntity-Bm0QuzQo.js";import"./pickBy-BrWS02wJ.js";import"./isString-D6sDk7rj.js";import"./_baseIteratee-CZFIogkU.js";import"./useInfiniteQuery-BV3yABot.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-BBL8hy54.js";import"./useSchema--NGrzZ0j.js";import"./index-DIBOv8Ol.js";import"./enums-DPYqlo9S.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-B4Uvco6Q.js";import"./uniq-BHVkRMjl.js";import"./forEach-CWOCpBhE.js";import"./Add-N6AmIHRK.js";import"./Grid-BVIMhD78.js";import"./ListItem-jCoRCBkX.js";import"./listItemButtonClasses-C1mk8-jI.js";import"./ListItemIcon-DmeeO4YT.js";import"./MenuItem-DfQMZE47.js";import"./ListItemText-Wtso58wb.js";import"./ArrowUpward-D5z2-bAa.js";import"./ContentCopy-DJcpd4A0.js";import"./FormControlLabel-CEpo3VRI.js";import"./Checkbox-CMr4dX-a.js";import"./SwitchBase-D7jvOWBt.js";import"./FormGroup-DEgj8z2G.js";import"./RadioGroup-ClqrnLSt.js";import"./Radio-DFsxoGl_.js";import"./Slider-B0-p3xlx.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-D7q7Ar98.js";import"./DialogBase-xh78bCQG.js";import"./Close-BGSokGDZ.js";import"./HelpPopover-bJT0vM-b.js";import"./MarkdownPopover-1mRSSIgl.js";import"./LightTooltip-LqJznVX-.js";import"./MarkdownSynapse-BEHMyjE6.js";import"./SkeletonButton-Bvto0rCs.js";import"./SkeletonInlineBlock-BZISNmq5.js";import"./SkeletonTable-Caa1erkn.js";import"./SkeletonParagraph-BcdCn_6W.js";import"./JsonSchemaForm-BSqxrsm5.js";import"./GridLegacy-BZHMDSDX.js";import"./HelpTwoTone-CU7JlHl2.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-BR_PKAT_.js";import"./_createAggregator-D71qVY_G.js";import"./_baseMap-bHNVqvDK.js";import"./DateTimePicker-C9LmS6ex.js";import"./useMobilePicker-NxJu4hee.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-C7jpa9bB.js";import"./index-CH5hbzgU.js";import"./Chip-BZ-RMLLV.js";import"./Tabs-DP6KPQoF.js";import"./KeyboardArrowRight-DE1uqpL8.js";import"./Autocomplete-DFgnmYZg.js";import"./usePreviousProps-3TgxeTHf.js";import"./use-deep-compare-effect.esm-BbEBvHC7.js";import"./TextWidget-B6YXfVuz.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,vr={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
