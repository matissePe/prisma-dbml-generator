import { DMMF, ReadonlyDeep } from '@prisma/generator-helper';

export function generateEnums(enums: ReadonlyDeep<DMMF.DatamodelEnum[]>): string[] {
  return enums.map(
    (e) => `Enum ${e.name} {\n` + generateEnumValues(e.values) + '\n}',
  );
}

const generateEnumValues = (values: ReadonlyDeep<DMMF.EnumValue[]>): string => {
  return values.map((value) => `  ${value.name}`).join('\n');
};
