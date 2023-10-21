import homeReducer, { initialState, fetchData } from '../redux/home/homeSlice';

describe('homeSlice reducer', () => {
  it('should handle initial state', () => {
    expect(homeReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle isLoading', () => {
    const nextState = homeReducer(initialState, fetchData.pending());
    expect(nextState.isLoading).toEqual(true);
  });

  it('should handle fulfilled', () => {
    const payload = [{ id: 0, name: 'TOP Financial Group Limited', symbol: 'TOP' },
      { id: 1, name: 'Huadi International Group Co., Ltd.', symbol: 'HUDI' }];
    const nextState = homeReducer(initialState, fetchData.fulfilled(payload));
    expect(nextState.data).toEqual(payload);
    expect(nextState.isLoading).toEqual(false);
  });

  it('should handle isRejected', () => {
    const nextState = homeReducer(initialState, fetchData.rejected());
    expect(nextState.isLoading).toEqual(false);
  });
});
