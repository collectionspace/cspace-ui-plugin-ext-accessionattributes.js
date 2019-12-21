import defaultForm from './default';
import floweringForm from './flowering';
import fruitingForm from './fruiting';

export default (configContext) => ({
  default: defaultForm(configContext),
  flowering: floweringForm(configContext),
  fruiting: fruitingForm(configContext),
});
