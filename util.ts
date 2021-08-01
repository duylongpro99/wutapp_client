export const AppUtilities = {
    colorHexCode: [
        '0',
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        'A',
        'B',
        'C',
        'D',
        'E',
        'F',
    ],

    lengtColorCode: 6,

    genColor(): string {
        let colorCode = '#';
        for (let i = 0; i < this.lengtColorCode; i++) {
            const radomIndex = this.getRandomInt(16);
            colorCode += this.colorHexCode[radomIndex];
        }
        return colorCode;
    },

    getRandomInt(max: number): number {
        return Math.floor(Math.random() * max);
    },
};
