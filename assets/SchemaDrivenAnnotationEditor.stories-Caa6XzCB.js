import{jx as p}from"./iframe-CsxBzgcc.js";import{S as a}from"./SchemaDrivenAnnotationEditor-DormkGBX.js";import"./index-Chi_LkuB.js";import"./useEntity-sOpoOsiJ.js";import"./pickBy-CX4DYABF.js";import"./isString-X79f3-Tj.js";import"./_baseIteratee-CocFix3A.js";import"./queryOptions-C9woPjwX.js";import"./useInfiniteQuery-DUTjfMBl.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-DDfICuEY.js";import"./useSchema-xr3LrsKA.js";import"./index-DFqRUARQ.js";import"./enums-gnmBX9ee.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-N09lyxf9.js";import"./uniq-DzPL2vMM.js";import"./forEach-UWyboym_.js";import"./Add-CGDh1WTf.js";import"./Grid-CPbrM1CX.js";import"./ListItem-CRLH8RNZ.js";import"./listItemButtonClasses-9gXcQbF4.js";import"./ListItemIcon-B0Y4GsjB.js";import"./MenuItem-tZmUaMPT.js";import"./ListItemText-BufeJA0T.js";import"./ArrowUpward-C1DFZCQk.js";import"./ContentCopy-ZNpKbAB6.js";import"./FormControlLabel-DZ7y0U6g.js";import"./Checkbox-DTYk3i6O.js";import"./SwitchBase-yO_lVJ_F.js";import"./FormGroup-Ci9whPah.js";import"./RadioGroup-H15y-nwi.js";import"./Radio-CCkg1JFj.js";import"./Slider-BiPC4fUg.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-Uzjk9IlN.js";import"./DialogBase-DhZkTiCA.js";import"./Close-BzicxIcj.js";import"./HelpPopover-y5CnxthQ.js";import"./MarkdownPopover-DmAn0kqk.js";import"./LightTooltip-BM4vanV4.js";import"./MarkdownSynapse-BlaqDi--.js";import"./SkeletonButton-C34BpE4a.js";import"./SkeletonInlineBlock-Wq3H9QMf.js";import"./SkeletonTable-DcTnDoDK.js";import"./SkeletonParagraph-aQXmvCYx.js";import"./JsonSchemaForm-Dw5OJ8s-.js";import"./GridLegacy-DhJwBIcG.js";import"./HelpTwoTone-DI3QmeZA.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-adEbYdj5.js";import"./_createAggregator-B3_4DZUU.js";import"./_baseMap-LcAFCb8i.js";import"./DateTimePicker-DLZZW-W1.js";import"./useMobilePicker-WAtN81uE.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-BPiRJYyS.js";import"./index-CqdG97d5.js";import"./Chip-CAnuLq2P.js";import"./Tabs-oxMKIkZo.js";import"./KeyboardArrowRight-BFlCcTRg.js";import"./Autocomplete-BvVhFG-L.js";import"./usePreviousProps-CbBR4Eer.js";import"./use-deep-compare-effect.esm-BmVWpRqw.js";import"./TextWidget-BvdQGdm7.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,Ir={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
