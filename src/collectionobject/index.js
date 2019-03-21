import fields from './fields';
import forms from './forms';
import messages from './messages';

export default (configContext) => {
  const formsConfig = forms(configContext);

  return {
    messages,
    fields: fields(configContext),
    form: formsConfig.default,
    forms: formsConfig,
  };
};
