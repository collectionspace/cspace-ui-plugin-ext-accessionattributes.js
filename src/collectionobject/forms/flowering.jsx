export default (configContext) => {
  const {
    React,
  } = configContext.lib;

  const {
    Field,
    InputTable,
  } = configContext.recordComponents;

  return (
    <InputTable name="flowers">
      <Field name="flowersJan" subpath="ns2:collectionobjects_accessionattributes" />
      <Field name="flowersFeb" subpath="ns2:collectionobjects_accessionattributes" />
      <Field name="flowersMar" subpath="ns2:collectionobjects_accessionattributes" />
      <Field name="flowersApr" subpath="ns2:collectionobjects_accessionattributes" />
      <Field name="flowersMay" subpath="ns2:collectionobjects_accessionattributes" />
      <Field name="flowersJun" subpath="ns2:collectionobjects_accessionattributes" />
      <Field name="flowersJul" subpath="ns2:collectionobjects_accessionattributes" />
      <Field name="flowersAug" subpath="ns2:collectionobjects_accessionattributes" />
      <Field name="flowersSep" subpath="ns2:collectionobjects_accessionattributes" />
      <Field name="flowersOct" subpath="ns2:collectionobjects_accessionattributes" />
      <Field name="flowersNov" subpath="ns2:collectionobjects_accessionattributes" />
      <Field name="flowersDec" subpath="ns2:collectionobjects_accessionattributes" />
    </InputTable>
  );
};
