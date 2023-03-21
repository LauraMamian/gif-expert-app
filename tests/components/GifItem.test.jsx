import { render, screen } from '@testing-library/react'
import { GifItem } from '../../src/components/GifItem';

describe('Pruebas en <GiftItem />', () => {
    const title = 'Un titulo';
    const url = 'https://localhost/algo.jpg';

    test('Debe hacer match con el Snapshoot ', () => {
        const { container } = render(<GifItem title={title} url={url} />);
        expect(container).toMatchSnapshot();
    })

    test('Debe mostrar la imagen con el URL y el título indicado', () => {
        render(<GifItem title={title} url={url} />);
        // expect (screen.getByRole('img').src).toBe(url);
        // expect (screen.getByRole('img').alt).toBe(title);
        const { src, alt } = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(title);
    })

    test('Debe mostrar el título en el componente', () => {
        render(<GifItem title={title} url={url} />);
        expect(screen.getByText(title)).toBeTruthy();
    })
})
