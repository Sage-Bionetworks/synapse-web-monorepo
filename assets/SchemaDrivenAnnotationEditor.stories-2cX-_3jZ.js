import{jJ as T}from"./iframe-B4CHAk6x.js";import{S as C}from"./SchemaDrivenAnnotationEditor-DTokacuN.js";import"./index-r8ZA1smB.js";import"./useEntity-BM-_3fsv.js";import"./pickBy-DRW-IezE.js";import"./isString-sCn-kMnb.js";import"./_baseIteratee-CzfSGJS0.js";import"./useQueries-hh02O7c_.js";import"./queryOptions-C9woPjwX.js";import"./useInfiniteQuery-BfVD3mCM.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-DCxD78OC.js";import"./useSchema-BxgMUoL3.js";import"./index-vcQHPqfP.js";import"./enums-so66Tzk5.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-C3hsIjAp.js";import"./uniq-S-UeN2sg.js";import"./forEach-B8iwwgef.js";import"./Grid-CfVXHtUY.js";import"./ListItem-DHpCFzYH.js";import"./listItemButtonClasses-jgplJjM1.js";import"./ListItemIcon-9S7snBqP.js";import"./MenuItem-lGKzud5I.js";import"./ListItemText-DDTxwJeK.js";import"./ArrowUpward-CzEdUxki.js";import"./ContentCopy-BXRNkbCR.js";import"./FormControlLabel-C_h5UEBe.js";import"./Checkbox-BXOJwuDE.js";import"./SwitchBase-CjNNjlJn.js";import"./FormGroup-DDkYg0sC.js";import"./RadioGroup-DZ6Oq1pF.js";import"./Radio-CK8836QX.js";import"./Slider-BfOCWTlM.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-DfKypV0q.js";import"./DialogBase-iAyUtvLT.js";import"./Close-DqUoeWnG.js";import"./HelpPopover-Dkch2fNl.js";import"./MarkdownPopover-Cr665fP1.js";import"./LightTooltip-CSn5B8sG.js";import"./MarkdownSynapse-BVqNsxRc.js";import"./SkeletonButton-CPwz8mIe.js";import"./SkeletonInlineBlock-DNU7D5U5.js";import"./SkeletonTable-RSxhuQlc.js";import"./SkeletonParagraph-DDHYucUN.js";import"./JsonSchemaForm-DUQBkjxn.js";import"./GridLegacy-B7opNBmp.js";import"./HelpTwoTone-DCxAAf6N.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./groupBy-CokvvLVN.js";import"./_createAggregator-FGnVRDEN.js";import"./_baseMap-B7lnn0EX.js";import"./DateTimePicker-CP_A9bJe.js";import"./useMobilePicker-_AD4eIjr.js";import"./index-C-_p9hnQ.js";import"./index-Chjiymov.js";import"./InputAdornment-FB8TLj_W.js";import"./index-E3ZsUzEa.js";import"./Chip-D5KlvdWr.js";import"./Tabs-DO1cnLT7.js";import"./KeyboardArrowRight-DVt7-hUe.js";import"./Autocomplete-DhoUM4I7.js";import"./usePreviousProps-B6lXH9VI.js";import"./use-deep-compare-effect.esm-w31lbSJq.js";import"./TextWidget-BBTRKdiM.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,Jr={title:"Synapse/SchemaDrivenAnnotationEditor",component:C,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${T.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};var p,a,m;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
