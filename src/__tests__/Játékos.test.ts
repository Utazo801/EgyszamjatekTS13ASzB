import Játékos from "../Játékos";
describe("Játékos osztály unit tesztek:", () => {
    const tesztJátékos = new Játékos("Laci 2 2 3 4 5 2 3 1 1 2");
    it("Játékos osztálypéldány ellenőrzése: ", async () => {
        expect(tesztJátékos).toBeInstanceOf(Játékos);
    });
    it("Játékos nevének ellenőrzése", async () => {
        expect(tesztJátékos.név).toBe("Laci");
    });
    it("Fordulók számának ellenőrzése", async () => {
        expect(tesztJátékos.fordulókSzáma).toBe(10);
    });
    it("Legnagyobb tipp ellenőrzése", async () => {
        expect(tesztJátékos.játékosLegnagyobbTipp).toBe(5);
    });
    it("Az első forduló tippjének ellenőrzése", async () => {
        expect(tesztJátékos.elsőFordulóTippje).toBe(2);
    });
    it("Forduló tippjeinek ellenőrzése 1-n-ig", async () => {
        const tippek: number[] = [2, 2, 3, 4, 5, 2, 3, 1, 1, 2];
        for (let i = 1; i <= tippek.length; i++) {
            expect(tesztJátékos.fordulóTippje(i)).toBe(tippek[i - 1]);
        }
    });
});
