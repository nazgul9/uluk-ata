const KGS_VARIANTS = ['kgs', 'som', 'сом', 'coм', 'cом']

export const renderPrice = p => {
  p = p + '';
  for (let i = 0; i < KGS_VARIANTS.length; i++) {
    if (p.toLowerCase().indexOf(KGS_VARIANTS[i]) > -1) {
      return p
    }
  }
  return p + ' сом'
}
