describe('Create Category', () => {
  it('2+2 is expected to be 4', () => {
    const soma = 2 + 2;
    const resultado = 4;

    expect(soma).toBe(resultado);
  });

  it('2+2 is expected to be different from 5', () => {
    const soma = 2 + 2;
    const resultado = 5;

    expect(soma).not.toBe(resultado);
  });
});
