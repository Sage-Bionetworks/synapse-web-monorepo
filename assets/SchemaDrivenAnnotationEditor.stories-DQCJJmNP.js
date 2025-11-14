import{jJ as T}from"./iframe-BbBIbNbJ.js";import{S as C}from"./SchemaDrivenAnnotationEditor-CVL0T42Q.js";import"./index-r8ZA1smB.js";import"./useEntity-Bj1_Aqx1.js";import"./pickBy-BDe1UelD.js";import"./isString-d2KaZuCr.js";import"./_baseIteratee-4zm-yijX.js";import"./useQueries-BL7xbtea.js";import"./queryOptions-C9woPjwX.js";import"./useInfiniteQuery-Dq3AohCE.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-D7cfZbUS.js";import"./useSchema-DqFE9OIR.js";import"./index-C2t9H8ur.js";import"./enums-DI2O-eSh.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-KEo3Uqcu.js";import"./uniq-Ncn24Eei.js";import"./forEach-B8iwwgef.js";import"./Grid-D2o60fm5.js";import"./ListItem-CKFEf_7Y.js";import"./listItemButtonClasses-BFYBw6Jf.js";import"./ListItemIcon-C9ROq9JZ.js";import"./MenuItem-C_GiViVf.js";import"./ListItemText-ng7diPyF.js";import"./ArrowUpward-B_ey71EY.js";import"./ContentCopy-BfrzH1om.js";import"./FormControlLabel-xeZuQ2kI.js";import"./Checkbox-ChI1OoXu.js";import"./SwitchBase-Oj29ESmW.js";import"./FormGroup-D8Qkj9uR.js";import"./RadioGroup-BNYQCNsD.js";import"./Radio-BemUBMNW.js";import"./Slider-CNRj2dl-.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-B72wlxd4.js";import"./DialogBase-DRt0FohX.js";import"./Close-Di_kFtUw.js";import"./HelpPopover-CkUPARK8.js";import"./MarkdownPopover-DgQV4UBm.js";import"./LightTooltip-Ckf7mhk-.js";import"./MarkdownSynapse-a5yQxqx5.js";import"./SkeletonButton-C0rZfSx5.js";import"./SkeletonInlineBlock-DVbB2SaF.js";import"./SkeletonTable-DeosQDQ2.js";import"./SkeletonParagraph-Cre22j3C.js";import"./JsonSchemaForm-fey-n6Ev.js";import"./GridLegacy-DNpwJ1o-.js";import"./HelpTwoTone-DIRxPFGH.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-Bi5iz9Qp.js";import"./_createAggregator-CXSKIbGK.js";import"./_baseMap-D-a7amfv.js";import"./DateTimePicker-DSBDvfBj.js";import"./useMobilePicker-C85OcePn.js";import"./index-C-_p9hnQ.js";import"./index-Chjiymov.js";import"./InputAdornment-DN95oK0_.js";import"./index-UMjXJfzL.js";import"./Chip-BGbET8g7.js";import"./Tabs-DcQgyRG8.js";import"./KeyboardArrowRight-MLiyljrC.js";import"./Autocomplete-CeIHilZx.js";import"./usePreviousProps-ZyPIebbH.js";import"./use-deep-compare-effect.esm-DK8jsI9o.js";import"./TextWidget-CZ0y8LoS.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,Jr={title:"Synapse/SchemaDrivenAnnotationEditor",component:C,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${T.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};var p,a,m;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
