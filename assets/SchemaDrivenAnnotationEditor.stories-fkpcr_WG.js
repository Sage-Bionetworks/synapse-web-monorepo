import{jJ as T}from"./iframe-C7HGvOUl.js";import{S as C}from"./SchemaDrivenAnnotationEditor-CgdT3gXC.js";import"./index-r8ZA1smB.js";import"./useEntity-CNreNgOf.js";import"./pickBy-DLTVIsJf.js";import"./isString-CgS2N-Nd.js";import"./_baseIteratee-ChsMTM5R.js";import"./useQueries-CvU6H9bk.js";import"./queryOptions-C9woPjwX.js";import"./useInfiniteQuery-CgbthALg.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-OEbKImQt.js";import"./useSchema-C_hfayof.js";import"./index-BsP5HD4O.js";import"./enums-D-RTYdmm.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-AOC5xPjZ.js";import"./uniq-CSsZv0Eo.js";import"./forEach-B8iwwgef.js";import"./Grid-zhXO7uYm.js";import"./ListItem-BDpV5hq8.js";import"./listItemButtonClasses-CvzhNrsf.js";import"./ListItemIcon-Dm_tn025.js";import"./MenuItem-CIAKLYgH.js";import"./ListItemText-B9D1yoB_.js";import"./ArrowUpward-1vEDUXjh.js";import"./ContentCopy-CaXVZQPO.js";import"./FormControlLabel-DMzFAHMb.js";import"./Checkbox-bhYdc4KW.js";import"./SwitchBase-BdB58K7f.js";import"./FormGroup-BOKYp-Pv.js";import"./RadioGroup-CsrQyAjo.js";import"./Radio-Cp3C_kLD.js";import"./Slider-COrBg6X3.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-CpTyB7dm.js";import"./DialogBase-DKsAEabs.js";import"./Close-DMhKR_rY.js";import"./HelpPopover-CBVnmWOW.js";import"./MarkdownPopover-A1fr4z6g.js";import"./LightTooltip-CO-J6vOj.js";import"./MarkdownSynapse-JFfvupcN.js";import"./SkeletonButton-CkeZGoyu.js";import"./SkeletonInlineBlock-CsElFq45.js";import"./SkeletonTable-COY9zVYr.js";import"./SkeletonParagraph-CttTbUME.js";import"./JsonSchemaForm-BSqpZwgr.js";import"./GridLegacy-BScpr32M.js";import"./HelpTwoTone-DbpOggmb.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./groupBy-CRCVeKgq.js";import"./_createAggregator-D3lYe9Bo.js";import"./_baseMap-DMelYvT1.js";import"./DateTimePicker-D1SWzhnT.js";import"./useMobilePicker-CPgElhcb.js";import"./index-C-_p9hnQ.js";import"./index-Chjiymov.js";import"./InputAdornment-D6nfs20w.js";import"./index-vj5KKvTf.js";import"./Chip-DuMKcKGN.js";import"./Tabs-I13gfC0l.js";import"./KeyboardArrowRight-Dl-QjSfH.js";import"./Autocomplete-DX7CJw8M.js";import"./usePreviousProps-BjfTFHq6.js";import"./use-deep-compare-effect.esm-gDonvwry.js";import"./TextWidget-DylkGDym.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,Jr={title:"Synapse/SchemaDrivenAnnotationEditor",component:C,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${T.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};var p,a,m;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
