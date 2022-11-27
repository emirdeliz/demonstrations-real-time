export enum DRIThemeFontWeight {
  Regular = '400',
  Medium = '500',
  Semibold = '600',
}

export interface DRIThemeFontWeightDefinition {
  Regular: 'Regular';
  Medium: 'Medium';
  Semibold: 'Semibold';
}

export interface DRIThemeFontWeightProps {
  'fw-1'?: boolean;
  'fw-2'?: boolean;
  'fw-3'?: boolean;
}

export const getFontWeight = ({
  'fw-1': fw1,
  'fw-2': fw2,
  'fw-3': fw3,
}: DRIThemeFontWeightProps) => {
  switch (true) {
    case fw1:
      return DRIThemeFontWeight.Regular;
    case fw2:
      return DRIThemeFontWeight.Medium;
    case fw3:
      return DRIThemeFontWeight.Semibold;
    default:
      return DRIThemeFontWeight.Regular;
  }
};
