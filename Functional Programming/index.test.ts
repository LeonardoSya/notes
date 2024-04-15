import { processReceipt } from './index';

describe('processReceipt', () => {
    it('should return an empty array if receipts array is empty', () => {
        expect(processReceipt(0, [], '1')).toEqual([]);
    });

    it('should return an empty array if the index is out of bounds', () => {
        const receipts = [{ userId: '1', amount: 10 }];
        expect(processReceipt(1, receipts, '1')).toEqual([]);
        expect(processReceipt(-1, receipts, '1')).toEqual([]);
    });

    it('should return the receipt if the userId matches', () => {
        const receipts = [
            { userId: '1', amount: 10 },
            { userId: '2', amount: 20 },
            { userId: '1', amount: 30 },
        ];
        expect(processReceipt(0, receipts, '1')).toEqual([
            { userId: '1', amount: 10 },
            { userId: '1', amount: 30 },
        ]);
    });

    it('should return an empty array if the userId does not match any receipts', () => {
        const receipts = [
            { userId: '2', amount: 20 },
            { userId: '3', amount: 30 },
        ];
        expect(processReceipt(0, receipts, '1')).toEqual([]);
    });

    it('should return only the receipts that match the userId when mixed', () => {
        const receipts = [
            { userId: '1', amount: 10 },
            { userId: '2', amount: 20 },
            { userId: '1', amount: 30 },
            { userId: '3', amount: 40 },
        ];
        expect(processReceipt(0, receipts, '1')).toEqual([
            { userId: '1', amount: 10 },
            { userId: '1', amount: 30 },
        ]);
    });
});

