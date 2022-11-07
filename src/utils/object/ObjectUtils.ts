import { GenericObject, KeyValue } from "types/common";

export const convertObjectValuesToObjectValuesAsBoolean = <T>(object: Object) => {
	const valuesAsBoolean = Object.keys(object).reduce<T>((currentValue, k) => {
    const key = k;
		const result = currentValue as GenericObject;
    result[key] = (object && !!object[k as keyof object]);
    return result;
  }, {} as T);
	return valuesAsBoolean as T;
}