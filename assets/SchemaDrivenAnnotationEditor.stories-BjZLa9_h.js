import{jJ as T}from"./iframe-BWoxTCTX.js";import{S as C}from"./SchemaDrivenAnnotationEditor-BanE0zwD.js";import"./index-r8ZA1smB.js";import"./useEntity-CpNVHOmb.js";import"./pickBy-Kpx_SBE9.js";import"./isString-BOx_ak6Z.js";import"./_baseIteratee-Dnn4YH6E.js";import"./useQueries-B7bat4DS.js";import"./queryOptions-C9woPjwX.js";import"./useInfiniteQuery-BFw00c2J.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-C0QJFTTF.js";import"./useSchema-HHpaF22G.js";import"./index-CELFENT9.js";import"./enums-CIFMKXP_.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-BPp_zO2O.js";import"./uniq-rMnJ_xco.js";import"./forEach-B8iwwgef.js";import"./Grid-DVx9HP_b.js";import"./ListItem-0cDlcVGp.js";import"./listItemButtonClasses-D1FOLiQs.js";import"./ListItemIcon-B6n0x46E.js";import"./MenuItem-Cb5PHefC.js";import"./ListItemText-DDAbYH7c.js";import"./ArrowUpward-C1pfbi1y.js";import"./ContentCopy-C8tuI6co.js";import"./FormControlLabel-eGU9xjNz.js";import"./Checkbox-BaMHxi0X.js";import"./SwitchBase-B-PayEdB.js";import"./FormGroup-6gQlFaye.js";import"./RadioGroup-CmwSqDsg.js";import"./Radio-B8VxSV1o.js";import"./Slider-DGnOM00G.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-DvY5OfgH.js";import"./DialogBase-CKSePREQ.js";import"./Close-C-cK2lYC.js";import"./HelpPopover-CUR8Ata8.js";import"./MarkdownPopover-BOtUKsGI.js";import"./LightTooltip-BCeCgvjx.js";import"./MarkdownSynapse--YX1K4_Z.js";import"./SkeletonButton-DXw0folj.js";import"./SkeletonInlineBlock-BaZVo3o2.js";import"./SkeletonTable-CL-McIOd.js";import"./SkeletonParagraph-C8b1sIfc.js";import"./JsonSchemaForm-BsL71Wie.js";import"./GridLegacy-9xmQJQ6x.js";import"./HelpTwoTone-CqwvSGoF.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-C2k-cSF0.js";import"./_createAggregator-Cc8oj8s_.js";import"./_baseMap-BjjJ5wwm.js";import"./DateTimePicker-B370aCSJ.js";import"./useMobilePicker-BkoQYEE9.js";import"./index-C-_p9hnQ.js";import"./index-Chjiymov.js";import"./InputAdornment-C1rITwj3.js";import"./index-5LTwdmKr.js";import"./Chip-BAz2TZVD.js";import"./Tabs-Bq9iSwI6.js";import"./KeyboardArrowRight-Da1R-eS5.js";import"./Autocomplete-DP7P1D5m.js";import"./usePreviousProps-D9yopZfV.js";import"./use-deep-compare-effect.esm-CLHbK7aY.js";import"./TextWidget-CCOC1BdU.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,Jr={title:"Synapse/SchemaDrivenAnnotationEditor",component:C,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${T.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};var p,a,m;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
