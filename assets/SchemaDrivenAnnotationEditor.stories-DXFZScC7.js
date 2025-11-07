import{jJ as T}from"./iframe-DuUClhsc.js";import{S as C}from"./SchemaDrivenAnnotationEditor-CARXDTXU.js";import"./index-r8ZA1smB.js";import"./useEntity-DKAM6L6-.js";import"./pickBy-CNJKHgGV.js";import"./isString-cuuc2ObN.js";import"./_baseIteratee-BmViwUWH.js";import"./useQueries-C-pf41ja.js";import"./queryOptions-C9woPjwX.js";import"./useInfiniteQuery-DgaFpXmy.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-uakqbPTl.js";import"./useSchema-oKZTcPLm.js";import"./index-CQsCkh-L.js";import"./enums-DvTHqhZR.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-YhHACzfI.js";import"./uniq-B1GWRU5W.js";import"./forEach-B8iwwgef.js";import"./Grid-B7vi2X7i.js";import"./ListItem-DZ976fkW.js";import"./listItemButtonClasses-DZdI3jEo.js";import"./ListItemIcon-BkisqQj1.js";import"./MenuItem-C7oiRjhq.js";import"./ListItemText-B-8Oz_Z7.js";import"./ArrowUpward-DhvtpGS0.js";import"./ContentCopy-B9yexkx3.js";import"./FormControlLabel-C7G2CdsS.js";import"./Checkbox-CZIACxG4.js";import"./SwitchBase-BOfXjZge.js";import"./FormGroup-BPIE_qNU.js";import"./RadioGroup-BAsekg_r.js";import"./Radio-SZJdN6kH.js";import"./Slider-CLZ_WcNw.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-B9wYVq7g.js";import"./DialogBase-B58YmIqt.js";import"./Close-aSlNjt7A.js";import"./HelpPopover-B3FfhNks.js";import"./MarkdownPopover-B9Dcg-Cp.js";import"./LightTooltip-CtjaIoZW.js";import"./MarkdownSynapse-DaOcOh9V.js";import"./SkeletonButton-BSbzluwJ.js";import"./SkeletonInlineBlock-CoFc0Z1u.js";import"./SkeletonTable-BqjyM-uC.js";import"./SkeletonParagraph-DI40A60T.js";import"./JsonSchemaForm-Dyi0h3h8.js";import"./GridLegacy-Dl6DQP-z.js";import"./HelpTwoTone-lKbdAJJd.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./groupBy-C0-sgFIh.js";import"./_createAggregator-BML2rPiz.js";import"./_baseMap-kYERsGcq.js";import"./DateTimePicker-BLdx9qrx.js";import"./useMobilePicker-BpqrEs-2.js";import"./index-C-_p9hnQ.js";import"./index-Chjiymov.js";import"./InputAdornment-Blgc2udU.js";import"./index-DotbbxLs.js";import"./Chip-Do2OA_d6.js";import"./Tabs-nFsYqwe_.js";import"./KeyboardArrowRight-mCUZqL8V.js";import"./Autocomplete-BreQxBdD.js";import"./usePreviousProps-DYtg4M0T.js";import"./use-deep-compare-effect.esm-BM8f3GDg.js";import"./TextWidget-DV9rDZK2.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,Jr={title:"Synapse/SchemaDrivenAnnotationEditor",component:C,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${T.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};var p,a,m;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
