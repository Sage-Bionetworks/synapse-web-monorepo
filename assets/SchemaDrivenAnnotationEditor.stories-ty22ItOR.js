import{jJ as T}from"./iframe-LzC64RFw.js";import{S as C}from"./SchemaDrivenAnnotationEditor-DzSv20z-.js";import"./index-r8ZA1smB.js";import"./useEntity-0RFwoaUh.js";import"./pickBy-CAuWK-Te.js";import"./isString-BRFCEyLy.js";import"./_baseIteratee-BW2oG4i8.js";import"./useQueries-DBFhpEhc.js";import"./queryOptions-C9woPjwX.js";import"./useInfiniteQuery-DAwo9HMT.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-CuLoL6_r.js";import"./useSchema-CohwoCaP.js";import"./index-Cq0yRHSN.js";import"./enums-_jpmuQzj.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-BhZ0WINl.js";import"./uniq-BefGSpfh.js";import"./forEach-B8iwwgef.js";import"./Grid-DCfzqCa2.js";import"./ListItem-DH7MCgvQ.js";import"./listItemButtonClasses-DoOzbVEL.js";import"./ListItemIcon-YTQUwbpN.js";import"./MenuItem-D_lpwZtj.js";import"./ListItemText-BEmJozQm.js";import"./ArrowUpward-C7KQHhMW.js";import"./ContentCopy-DBoEMvlH.js";import"./FormControlLabel-DdwLBMPg.js";import"./Checkbox-DFkw0--6.js";import"./SwitchBase-BcH_m2kQ.js";import"./FormGroup-FPPZObRK.js";import"./RadioGroup-B-duPkBo.js";import"./Radio-B_JN6rDp.js";import"./Slider-ByICmHbI.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-ZErKbafN.js";import"./DialogBase-BYFV454X.js";import"./Close-EwtwOLBz.js";import"./HelpPopover-JXqbI5Ev.js";import"./MarkdownPopover-Dcw3ZCXp.js";import"./LightTooltip-CwaRO3d3.js";import"./MarkdownSynapse-D64LBLwy.js";import"./SkeletonButton-CdCi0Vv2.js";import"./SkeletonInlineBlock-BId9Rt5h.js";import"./SkeletonTable-B5BlJQjs.js";import"./SkeletonParagraph-ClnTvL1Q.js";import"./JsonSchemaForm-Djp8NvXL.js";import"./GridLegacy-CEv4grGy.js";import"./HelpTwoTone-BPG5nlQb.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-Bf1Ce0fI.js";import"./_createAggregator-W5rFgqBh.js";import"./_baseMap-BQ8I50xV.js";import"./DateTimePicker-DbD0RuRT.js";import"./useMobilePicker-BoXIfmjm.js";import"./index-C-_p9hnQ.js";import"./index-Chjiymov.js";import"./InputAdornment-NoN6dvKp.js";import"./index-9jkv6pAo.js";import"./Chip-Ct1mISe7.js";import"./Tabs-CRJaIw0V.js";import"./KeyboardArrowRight-DCO-WvdH.js";import"./Autocomplete-Dkbx7Qlw.js";import"./usePreviousProps-sHw39Skk.js";import"./use-deep-compare-effect.esm-pDleGhR2.js";import"./TextWidget-DQ-HcV-t.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,Jr={title:"Synapse/SchemaDrivenAnnotationEditor",component:C,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${T.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};var p,a,m;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    schemaId: 'dev.grosenbacher.test-Arrays',
    entityId: 'syn25959281'
  }
}`,...(m=(a=r.parameters)==null?void 0:a.docs)==null?void 0:m.source}}};var c,d,y;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    schemaId: 'dev.grosenbacher.test-IfThenElse'
  }
}`,...(y=(d=e.parameters)==null?void 0:d.docs)==null?void 0:y.source}}};var u,h,g;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    schemaId: 'nkauer-ad.main'
  }
}`,...(g=(h=t.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var S,l,A;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    entityId: 'syn32673093'
  }
}`,...(A=(l=o.parameters)==null?void 0:l.docs)==null?void 0:A.source}}};var f,v,I;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    entityId: 'syn25959288'
  }
}`,...(I=(v=n.parameters)==null?void 0:v.docs)==null?void 0:I.source}}};var E,q,b;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(b=(q=s.parameters)==null?void 0:q.docs)==null?void 0:b.source}}};const Kr=["Arrays","IfThenElse","ComplexSchema","DerivedAnnotations","ErrorsEntity","DirectlyProvidedSchema"];export{r as Arrays,t as ComplexSchema,o as DerivedAnnotations,s as DirectlyProvidedSchema,n as ErrorsEntity,e as IfThenElse,Kr as __namedExportsOrder,Jr as default};
