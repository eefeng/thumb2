describe('thumb click', function () {
    it('first thumb click', function () {
        expect(window.add(1)).toBe(2);
    });

    it('second thumb click', function () {
        expect(window.add(0)).toBe(1);
    });
});