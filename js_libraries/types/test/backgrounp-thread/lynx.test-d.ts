import { describe, expectTypeOf, it } from 'vitest';
import { Lynx, GetElementByIdFunc, AnimationElement } from '../../types';

describe('Lynx', () => {
  it('GetElementByIdFunc should have correct type', () => {
    const func: GetElementByIdFunc = (id: string): AnimationElement => {
      return {} as AnimationElement;
    };
    expectTypeOf(func).parameter(0).toBeString();
    expectTypeOf(func).returns.toEqualTypeOf<AnimationElement>();
  });
});
