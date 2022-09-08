import { uid } from './uid';

describe('uid', () => {
    it('should work', () => {
        expect(uid()).toEqual('uid');
    });
});
