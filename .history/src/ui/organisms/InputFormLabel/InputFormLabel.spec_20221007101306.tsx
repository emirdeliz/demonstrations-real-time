import { render, screen } from 'test-utils/testing-library-utils';
import { InputFormLabelForm } from 'stories/framework/organisms';

describe('framework/organisms/InputFormLabel', () => {
  const onInputChange = jest.fn();
  it('should render successfully', () => {
    render(
      <InputFormLabelForm
        {...InputFormLabelForm.args}
        onInputChange={onInputChange}
      />
    );

    const labelInfo = screen.getByText(/Obrigatorio/i);
    const children = screen.getByText(/Fundo de reserva/i);

    expect(labelInfo).toBeInTheDocument();
    expect(children).toBeInTheDocument();
  });
});
