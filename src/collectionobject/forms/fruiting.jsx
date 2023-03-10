export default (configContext) => {
  const {
    lib,
    recordComponents,
  } = configContext;

  const {
    React,
  } = lib;

  const {
    Field,
    InputTable,
  } = recordComponents;

  return (
    <InputTable name="fruits">
      <Field name="fruitsJan" subpath="ns2:collectionobjects_accessionattributes" />
      <Field name="fruitsFeb" subpath="ns2:collectionobjects_accessionattributes" />
      <Field name="fruitsMar" subpath="ns2:collectionobjects_accessionattributes" />
      <Field name="fruitsApr" subpath="ns2:collectionobjects_accessionattributes" />
      <Field name="fruitsMay" subpath="ns2:collectionobjects_accessionattributes" />
      <Field name="fruitsJun" subpath="ns2:collectionobjects_accessionattributes" />
      <Field name="fruitsJul" subpath="ns2:collectionobjects_accessionattributes" />
      <Field name="fruitsAug" subpath="ns2:collectionobjects_accessionattributes" />
      <Field name="fruitsSep" subpath="ns2:collectionobjects_accessionattributes" />
      <Field name="fruitsOct" subpath="ns2:collectionobjects_accessionattributes" />
      <Field name="fruitsNov" subpath="ns2:collectionobjects_accessionattributes" />
      <Field name="fruitsDec" subpath="ns2:collectionobjects_accessionattributes" />
    </InputTable>
  );
};
