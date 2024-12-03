import { DMMF, ReadonlyDeep } from '@prisma/generator-helper';

export const getModelByType = (
  models: ReadonlyDeep<DMMF.Model[]>,
  type: string,
): DMMF.Model | undefined => {
  return models.find((model) => model.name === type);
};
