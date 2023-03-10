import floweringForm from './flowering';
import fruitingForm from './fruiting';

export default (configContext) => {
  const {
    layoutComponents,
    lib,
    recordComponents,
  } = configContext;

  const {
    React,
  } = lib;

  const {
    Row,
    Cols,
    Col,
  } = layoutComponents;

  const {
    Field,
  } = recordComponents;

  return (
    <div>
      <Cols>
        <Col>
          <Field name="flowerColor" subpath="ns2:collectionobjects_accessionattributes" />
          <Field name="fruitColor" subpath="ns2:collectionobjects_accessionattributes" />
        </Col>

        <Col>
          <Field name="securityRisk" subpath="ns2:collectionobjects_accessionattributes" />

          <Row>
            <Field name="propagationHistory" subpath="ns2:collectionobjects_accessionattributes" />
            <Field name="breedingSystem" subpath="ns2:collectionobjects_accessionattributes" />
          </Row>
        </Col>
      </Cols>

      <Row>
        <Field name="classUse" subpath="ns2:collectionobjects_accessionattributes" />
        <Field name="researchUse" subpath="ns2:collectionobjects_accessionattributes" />
        <Field name="distribution" subpath="ns2:collectionobjects_accessionattributes" />
        <Field name="ignoreRedDot" subpath="ns2:collectionobjects_accessionattributes" />
        <Field name="fragrance" subpath="ns2:collectionobjects_accessionattributes" />
      </Row>

      {floweringForm(configContext)}
      {fruitingForm(configContext)}
    </div>
  );
};
